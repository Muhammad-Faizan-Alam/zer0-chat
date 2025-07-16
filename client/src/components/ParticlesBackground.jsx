import React, { useRef, useEffect } from "react";

const PARTICLE_COUNT = 60;
const PARTICLE_RADIUS = 2.5;
const LINE_DISTANCE = 120;
const SPEED = 0.5;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Initialize particles
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      vx: randomBetween(-SPEED, SPEED),
      vy: randomBetween(-SPEED, SPEED),
    }));

    // Mouse as a particle
    mouse.current = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Move and draw particles
      for (let p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_RADIUS, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 102, 0, 0.8)";
        ctx.fill();
      }

      // Draw mouse as a particle
      if (mouse.current.x !== null && mouse.current.y !== null) {
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, PARTICLE_RADIUS + 1, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 102, 0, 1)";
        ctx.fill();
      }

      // Draw lines between close particles
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const d = distance(a, b);
          if (d < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255, 102, 0, ${1 - d / LINE_DISTANCE})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        // Lines to mouse
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const a = particles.current[i];
          const b = mouse.current;
          const d = distance(a, b);
          if (d < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255, 102, 0, ${1 - d / LINE_DISTANCE})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: "#ffe",
      }}
    />
  );
};

export default ParticlesBackground;