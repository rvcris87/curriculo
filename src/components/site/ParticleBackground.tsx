import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect mobile to optimize performance
    const isMobile = window.innerWidth < 768;
    
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 4.0;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create particles geometry
    const particleCount = isMobile ? 400 : 1500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3); // Store to animate relative to original position

    // Dynamic canvas texture for glowing circular particles
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.15)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createCircleTexture();

    // Distribute particles in a sphere shell
    const sphereRadius = 2.0;
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      // Thickness variation
      const r = sphereRadius + (Math.random() - 0.5) * 0.35;
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Color scheme: neon cian, discrete deep purple, and rich deep blue
      const p = Math.random();
      const color = new THREE.Color();
      if (p < 0.4) {
        // Neon Ciano / Brand Cyan
        color.setRGB(0.05, 0.80, 0.90);
      } else if (p < 0.75) {
        // Roxo discreto
        color.setRGB(0.50, 0.10, 0.80);
      } else {
        // Azul profundo
        color.setRGB(0.05, 0.20, 0.85);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom points material
    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.07 : 0.12,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Subtle connection lines (wireframe sphere) for desktop mode
    let wireframe: THREE.LineSegments | null = null;
    if (!isMobile) {
      const wireframeGeometry = new THREE.SphereGeometry(sphereRadius - 0.05, 12, 12);
      const edges = new THREE.EdgesGeometry(wireframeGeometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x0ea5e9, // Brand blue / cyan
        transparent: true,
        opacity: 0.05,
        blending: THREE.AdditiveBlending,
      });
      wireframe = new THREE.LineSegments(edges, lineMaterial);
      scene.add(wireframe);
    }

    // Interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Idle rotations
      particleSystem.rotation.y = elapsedTime * 0.015;
      particleSystem.rotation.x = elapsedTime * 0.008;

      if (wireframe) {
        wireframe.rotation.y = -elapsedTime * 0.01;
        wireframe.rotation.x = -elapsedTime * 0.005;
      }

      // Mouse interactivity with inertia (lerp)
      if (!isMobile) {
        targetX += (mouseX - targetX) * 0.04;
        targetY += (mouseY - targetY) * 0.04;

        // Apply tilt based on mouse position
        particleSystem.rotation.y += targetX * 0.2;
        particleSystem.rotation.x -= targetY * 0.2;

        if (wireframe) {
          wireframe.rotation.y -= targetX * 0.15;
          wireframe.rotation.x += targetY * 0.15;
        }
      }

      // Subtle breathing wave animation
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute;
      const count = positionsAttr.count;

      for (let i = 0; i < count; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];
        
        // Compute wave scaling based on time and individual particle offset
        const scale = 1.0 + Math.sin(elapsedTime * 0.6 + i * 0.1) * 0.04;
        
        positionsAttr.setXYZ(i, ox * scale, oy * scale, oz * scale);
      }
      positionsAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);

      // Dispose geometry, materials and textures to prevent memory leaks
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      
      if (wireframe) {
        wireframe.geometry.dispose();
        (wireframe.material as THREE.Material).dispose();
      }
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 1,
        maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 50%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 50%, transparent 100%)",
      }}
    />
  );
}
