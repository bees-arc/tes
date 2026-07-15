"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    
    // CAMERA SETUP
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 28, 75);

    // RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // GRID DIMENSIONS FOR FLUID WAVE
    const amountX = 65;
    const amountY = 65;
    const numParticles = amountX * amountY;
    const spacing = 2.2;

    // GEOMETRY
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    // Initialize flat grid positions
    let i = 0;
    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        // x coord
        positions[i] = ix * spacing - (amountX * spacing) / 2;
        // y coord (height)
        positions[i + 1] = 0;
        // z coord
        positions[i + 2] = iy * spacing - (amountY * spacing) / 2;
        
        scales[ix * amountY + iy] = 1;
        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // MATERIAL (Clean slate-blue dots with smooth borders)
    const material = new THREE.PointsMaterial({
      color: 0x0071e3, // Apple Blue
      size: 1.0,
      transparent: true,
      opacity: 0.18,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // MOUSE INTERACTION VARIABLES
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ANIMATION LOOP
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const time = clock.getElapsedTime() * 0.5; // slow speed
      const positionAttr = particles.geometry.attributes.position;
      const positionsArray = positionAttr.array as Float32Array;

      let idx = 0;
      for (let ix = 0; ix < amountX; ix++) {
        for (let iy = 0; iy < amountY; iy++) {
          // Select X and Z values from grid positions
          const x = ix * spacing - (amountX * spacing) / 2;
          const z = iy * spacing - (amountY * spacing) / 2;

          // Organic wave function: mix multiple sine frequencies based on coordinates and time
          // Adding mouseX and mouseY triggers localized ripples
          const distance = Math.sqrt(x * x + z * z) * 0.04;
          const ripple = Math.sin(distance - time * 2.0) * 1.5;
          
          const y = 
            Math.sin(ix * 0.12 + time) * 3.0 + 
            Math.cos(iy * 0.12 + time * 1.2) * 2.5 +
            ripple * (1.0 + Math.abs(targetX) * 0.02);

          // Update Y position in buffer (idx + 1)
          positionsArray[idx + 1] = y - 5; // offset downwards
          idx += 3;
        }
      }
      
      positionAttr.needsUpdate = true;

      // Camera parallax
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      camera.position.x = targetX * 0.8;
      camera.position.y = 28 + (targetY * 0.5);
      camera.lookAt(0, -6, 0);

      // Slow overall rotation
      particles.rotation.y = time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // WINDOW RESIZE HANDLER
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    />
  );
}
