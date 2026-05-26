import type React from "react";

export function useSpatialHover() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable spatial tilt on mobile/tablets
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set mouse coordinates for spotlight radial gradient
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    
    // Calculate tilt angles based on card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Limit maximum tilt angle for a subtle, high-end look (max ~6 degrees)
    const angleX = (centerY - y) / 20; 
    const angleY = (x - centerX) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
