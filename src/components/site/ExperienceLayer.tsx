import { useEffect, useRef } from "react";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function ExperienceLayer() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Enables CSS-only reveal states after hydration so content never disappears without JS.
    document.documentElement.classList.add("motion-ready");
    return () => document.documentElement.classList.remove("motion-ready");
  }, []);

  useEffect(() => {
    // Fades the hero scroll cue once the visitor has moved into the page.
    const onScroll = () => {
      document.documentElement.classList.toggle(
        "hero-scrolled",
        window.scrollY > 80,
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (
      prefersReducedMotion() ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    // Lightweight custom cursor with hover expansion on interactive elements.
    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;
    if (!cursor || !cursorRing) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const setHoverState = (active: boolean) => {
      document.documentElement.classList.toggle("cursor-active", active);
    };

    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateCursor = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      rafId = requestAnimationFrame(animateCursor);
    };

    const hoverTargets = document.querySelectorAll("a, button, .card-animated");
    const onHoverEnter = () => setHoverState(true);
    const onHoverLeave = () => setHoverState(false);

    hoverTargets.forEach((target) => {
      target.addEventListener("pointerenter", onHoverEnter);
      target.addEventListener("pointerleave", onHoverLeave);
    });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rafId = requestAnimationFrame(animateCursor);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener("pointerenter", onHoverEnter);
        target.removeEventListener("pointerleave", onHoverLeave);
      });
      document.documentElement.classList.remove("cursor-active");
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Uniform dynamic 3D tilt and glare for every card using the shared class.
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".card-animated"),
    );

    cards.forEach((card) => {
      if (!card.querySelector(":scope > .card-glare")) {
        const glare = document.createElement("span");
        glare.className = "card-glare";
        card.appendChild(glare);
      }
    });

    const onMove = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateX = ((py - 0.5) / 0.5) * -6;
      const rotateY = ((px - 0.5) / 0.5) * 6;

      card.style.setProperty("--glare-x", `${px * 100}%`);
      card.style.setProperty("--glare-y", `${py * 100}%`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    };

    const onLeave = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.transform = "";
      card.style.setProperty("--glare-x", "50%");
      card.style.setProperty("--glare-y", "0%");
    };

    cards.forEach((card) => {
      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
        card.style.transform = "";
      });
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Scroll-triggered reveals with stagger based on sibling order.
    const animated = document.querySelectorAll<HTMLElement>(
      ".section-reveal, .reveal-3d, .skill-pop, .card-animated",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.classList.add("is-visible");

          const siblings = Array.from(
            element.parentElement?.children ?? [],
          ).filter((item) =>
            (item as HTMLElement).matches(
              ".reveal-3d, .skill-pop, .card-animated",
            ),
          );
          const index = Math.max(0, siblings.indexOf(element));
          element.style.transitionDelay = `${Math.min(index * 100, 600)}ms`;
          observer.unobserve(element);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    animated.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isAlreadyVisible =
        rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

      if (isAlreadyVisible) {
        element.classList.add("is-visible");
        return;
      }

      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Hero-only depth parallax for the ambient and floating visual layers.
    const hero = document.querySelector<HTMLElement>("#inicio");
    const depthLayers = hero?.querySelectorAll<HTMLElement>("[data-depth]");
    if (!hero || !depthLayers?.length) return;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = (event.clientX - rect.left) / rect.width - 0.5;
      targetY = (event.clientY - rect.top) / rect.height - 0.5;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      depthLayers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 1);
        layer.style.setProperty("--parallax-x", `${currentX * depth * 28}px`);
        layer.style.setProperty("--parallax-y", `${currentY * depth * 28}px`);
      });
      rafId = requestAnimationFrame(animate);
    };

    hero.addEventListener("pointermove", onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      hero.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Magnetic CTA movement and click ripple.
    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(
        "a.bg-primary, a.bg-brand-2, button.bg-primary",
      ),
    );
    buttons.forEach((button) => button.classList.add("magnetic-btn"));

    const onPointerMove = (event: PointerEvent) => {
      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const distance = Math.hypot(deltaX, deltaY);

        if (distance < 60) {
          button.style.setProperty("--magnetic-x", `${deltaX * 0.16}px`);
          button.style.setProperty("--magnetic-y", `${deltaY * 0.16}px`);
        } else {
          button.style.setProperty("--magnetic-x", "0px");
          button.style.setProperty("--magnetic-y", "0px");
        }
      });
    };

    const onClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      const pointer = event as PointerEvent;
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "button-ripple";
      ripple.style.left = `${pointer.clientX - rect.left}px`;
      ripple.style.top = `${pointer.clientY - rect.top}px`;
      button.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 650);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    buttons.forEach((button) => button.addEventListener("click", onClick));

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      buttons.forEach((button) => {
        button.removeEventListener("click", onClick);
        button.style.removeProperty("--magnetic-x");
        button.style.removeProperty("--magnetic-y");
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor-dot" aria-hidden="true" />
      <div
        ref={cursorRingRef}
        className="custom-cursor-ring"
        aria-hidden="true"
      />
    </>
  );
}
