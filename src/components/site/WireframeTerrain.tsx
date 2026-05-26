import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * WireframeTerrain
 *
 * Renders a procedural wireframe grid that appears to scroll toward the viewer,
 * creating the illusion of an infinite digital terrain. The camera tilts very
 * slightly in response to mouse movement on desktop.
 *
 * On mobile (<768px) this component returns null and lets the CSS fallback
 * gradient (defined in CTA.tsx) be visible instead.
 */
export function WireframeTerrain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Mobile guard – skip heavy WebGL on small screens ──────────────────
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile || !containerRef.current) return;

    // ── Scene setup ────────────────────────────────────────────────────────
    const container = containerRef.current;
    const W = container.clientWidth;
    const H = container.clientHeight;

    const scene = new THREE.Scene();

    // Deep space fog – makes the grid fade to black in the distance
    scene.fog = new THREE.FogExp2(0x000000, 0.055);

    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 200);
    camera.position.set(0, 3.5, 0);   // above the terrain, looking forward-down
    camera.rotation.x = -Math.PI / 5; // ~36° tilt downward

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // keep perf budget tight
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0); // transparent background
    container.appendChild(renderer.domElement);

    // ── Grid geometry ──────────────────────────────────────────────────────
    // We use a single PlaneGeometry with many segments, displayed as a wireframe.
    // The plane is 160 units wide × 80 units deep, with 80 × 40 divisions.
    const GRID_W = 160;
    const GRID_D = 80;
    const SEG_W = 80;
    const SEG_D = 40;

    const planeGeo = new THREE.PlaneGeometry(GRID_W, GRID_D, SEG_W, SEG_D);
    planeGeo.rotateX(-Math.PI / 2); // lay flat (XZ plane)

    // Neon cyan wireframe material
    const lineMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x00d4ff), // neon cyan / brand hue
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });

    const terrain = new THREE.Mesh(planeGeo, lineMat);
    scene.add(terrain);

    // Subtle horizon accent lines (brighter, horizontal)
    const accentGeo = new THREE.PlaneGeometry(GRID_W, GRID_D, SEG_W, 4);
    accentGeo.rotateX(-Math.PI / 2);
    const accentMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x00f5ff),
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const accentGrid = new THREE.Mesh(accentGeo, accentMat);
    accentGrid.position.y = 0.02; // slightly above main grid
    scene.add(accentGrid);

    // ── Mouse parallax ─────────────────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Resize handler ─────────────────────────────────────────────────────
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── Animation loop ─────────────────────────────────────────────────────
    const SCROLL_SPEED = 3.5;   // units per second – how fast the grid scrolls
    const TILE_DEPTH   = GRID_D; // reset position every TILE_DEPTH units
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = clock.getDelta();

      // Scroll terrain toward viewer by moving it in +Z
      terrain.position.z += SCROLL_SPEED * dt;
      accentGrid.position.z = terrain.position.z + 0.02;

      // Seamless tiling: once the grid has moved one full tile, snap it back
      if (terrain.position.z >= TILE_DEPTH) {
        terrain.position.z -= TILE_DEPTH;
      }

      // Smooth camera mouse reaction (lerp)
      targetX += (mouseX * 0.8 - targetX) * 0.035;
      targetY += (mouseY * 0.3 - targetY) * 0.035;
      camera.rotation.y = targetX * 0.04;     // gentle yaw
      camera.rotation.x = -Math.PI / 5 + targetY * 0.02; // gentle pitch

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      planeGeo.dispose();
      lineMat.dispose();
      accentGeo.dispose();
      accentMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        // Fade the terrain out at the edges so it blends with the card
        maskImage:
          "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%), " +
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%), " +
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
        zIndex: 0,
      }}
    />
  );
}
