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
    camera.position.set(0, 0, 50);

    // RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // GLOBE GROUP
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Shift globe right responsively on start
    const isMobile = window.innerWidth < 768;
    globeGroup.position.x = isMobile ? 0 : 18.5;
    globeGroup.position.y = 0; // Vertically centered
    if (isMobile) {
      globeGroup.scale.set(0.65, 0.65, 0.65);
    }

    // Procedural Circle Glowing Particle Texture
    const createCircleTexture = () => {
      const matCanvas = document.createElement("canvas");
      matCanvas.width = 16;
      matCanvas.height = 16;
      const matCtx = matCanvas.getContext("2d");
      if (matCtx) {
        const gradient = matCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(56, 189, 248, 0.8)"); // Sky Blue
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        matCtx.fillStyle = gradient;
        matCtx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(matCanvas);
    };

    const particleTexture = createCircleTexture();

    // Points Geometry & Material
    const pointsGeometry = new THREE.BufferGeometry();
    
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.65,
      map: particleTexture,
      transparent: true,
      opacity: 0.0, // Start invisible, fade in smoothly
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const tiltedGlobe = new THREE.Group();
    tiltedGlobe.rotation.z = 23.5 * Math.PI / 180; // Earth's axial tilt
    globeGroup.add(tiltedGlobe);

    const particles = new THREE.Points(pointsGeometry, pointsMaterial);
    tiltedGlobe.add(particles);

    // Load World Map Image & Sample Pixels
    const img = new Image();
    img.src = "/earth-water.png";
    img.onload = () => {
      const sampleCanvas = document.createElement("canvas");
      const sampleCtx = sampleCanvas.getContext("2d");
      if (!sampleCtx) return;

      // Sample resolution (higher resolution = more detailed continents)
      const sampleWidth = 240;
      const sampleHeight = 120;
      sampleCanvas.width = sampleWidth;
      sampleCanvas.height = sampleHeight;

      sampleCtx.drawImage(img, 0, 0, sampleWidth, sampleHeight);
      const imgData = sampleCtx.getImageData(0, 0, sampleWidth, sampleHeight);
      const pixels = imgData.data;

      const pointsList: THREE.Vector3[] = [];
      const radius = 13.5;

      for (let y = 0; y < sampleHeight; y++) {
        // Latitude from pi/2 (North Pole, y=0) to -pi/2 (South Pole, y=sampleHeight)
        const lat = (1 - y / sampleHeight) * Math.PI - Math.PI / 2;
        const cosLat = Math.cos(lat);

        for (let x = 0; x < sampleWidth; x++) {
          const pixelIdx = (y * sampleWidth + x) * 4;
          const r = pixels[pixelIdx]; // Red channel (low value = land/continents in water mask)

          if (r < 100) {
            // Polar clumping correction: drop points closer to poles with higher probability
            if (Math.random() > cosLat) continue;

            // Longitude from -pi (x=0) to pi (x=sampleWidth)
            const lon = (x / sampleWidth) * 2 * Math.PI - Math.PI;

            // Convert to Cartesian 3D coordinates
            const pos = new THREE.Vector3(
              -radius * Math.cos(lat) * Math.sin(lon),
              radius * Math.sin(lat),
              radius * Math.cos(lat) * Math.cos(lon)
            );
            pointsList.push(pos);
          }
        }
      }

      // Populate BufferGeometry with calculated coordinates
      const positions = new Float32Array(pointsList.length * 3);
      for (let i = 0; i < pointsList.length; i++) {
        positions[i * 3] = pointsList[i].x;
        positions[i * 3 + 1] = pointsList[i].y;
        positions[i * 3 + 2] = pointsList[i].z;
      }

      pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      pointsGeometry.computeBoundingSphere();
    };

    // MOUSE INTERACTION VARIABLES
    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let targetZ = 50; // Initial camera Z position
    let currentZ = 50;

    let spinAngle = 0;
    let spinVelocity = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      mouseX = (event.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseY = (event.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      
      // Calculate distance from the globe's normalized position (X=0.60 on desktop, X=0 on mobile)
      const globeXNorm = window.innerWidth < 768 ? 0 : 0.60;
      const dx = mouseX - globeXNorm;
      const dy = mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Map distance: directly over globe (dist = 0) -> Z = 36 (zoomed in); far away (dist = 1.5) -> Z = 60 (zoomed out)
      targetZ = 36 + Math.min(dist, 1.5) * 16;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ANIMATION LOOP
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Dynamic spin speed based on cursor motion speed
      const cursorDeltaX = mouseX - prevMouseX;
      const cursorDeltaY = mouseY - prevMouseY;
      const cursorSpeed = Math.sqrt(cursorDeltaX * cursorDeltaX + cursorDeltaY * cursorDeltaY);

      // Accumulate velocity and apply friction decay
      spinVelocity += cursorSpeed * 0.12;
      spinVelocity *= 0.95; // decay factor

      // Rotate over time + drag speed acceleration
      spinAngle += 0.002 + spinVelocity;

      // Update prev cursor positions
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      // Smooth mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      currentZ += (targetZ - currentZ) * 0.05;

      camera.position.z = currentZ;

      // Smooth fade-in of the globe
      if (pointsMaterial.opacity < 0.6) {
        pointsMaterial.opacity += 0.015;
      }

      // Rotate particles strictly around their own tilted imaginary axis
      particles.rotation.y = spinAngle;
      
      // Tilting parallax on the outer group (stand)
      globeGroup.rotation.x = -targetY * 0.8;
      globeGroup.rotation.y = targetX * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // WINDOW RESIZE HANDLER
    const handleResize = () => {
      if (!canvasRef.current) return;
      const width = window.innerWidth;
      camera.aspect = width / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(width, window.innerHeight);

      // Responsive shifting on resize
      if (width < 768) {
        globeGroup.position.x = 0;
        globeGroup.position.y = 0; // Vertically centered
        globeGroup.scale.set(0.65, 0.65, 0.65);
      } else {
        globeGroup.position.x = 18.5;
        globeGroup.position.y = 0;
        globeGroup.scale.set(1.0, 1.0, 1.0);
      }
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      
      // Dispose Geometries and Materials
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      particleTexture.dispose();
      
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
