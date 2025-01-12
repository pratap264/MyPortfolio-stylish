import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Store trail points
    const points = [];
    const maxPoints = 10;
    const parallelLines = 4; // Number of parallel lines
    const parallelDistance = 1; // Distance between each parallel line

    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      // Draw each point as a series of parallel lines
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];

        // Create parallel lines by offsetting the points
        const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
        
        // Loop to draw multiple parallel lines
        for (let j = -Math.floor(parallelLines / 2); j < Math.ceil(parallelLines / 2); j++) {
          const offsetX = Math.cos(angle + Math.PI / 2) * j * parallelDistance;
          const offsetY = Math.sin(angle + Math.PI / 2) * j * parallelDistance;

          // Draw the parallel lines
          ctx.beginPath();
          ctx.moveTo(p1.x + offsetX, p1.y + offsetY);
          ctx.lineTo(p2.x + offsetX, p2.y + offsetY);
          ctx.strokeStyle = `#fd1056`; // Pink color
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
    };

    const handleMouseMove = (e) => {
      points.push({ x: e.clientX, y: e.clientY });

      // Limit the number of points
      if (points.length > maxPoints) {
        points.shift();
      }

      drawTrail();
    };

    // Add mousemove event listener
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "none"; // Reset cursor when component unmounts
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default CursorTrail;
