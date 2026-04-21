import { useEffect, useRef } from "react";

interface ParticleFieldProps {
  density?: number;
  className?: string;
  interactive?: boolean;
  colorMode?: "rainbow" | "violet" | "cyan";
}

/**
 * Lightweight 2D canvas particle background.
 * Uses requestAnimationFrame and the design system color tokens.
 */
const ParticleField = ({
  density = 60,
  className = "",
  interactive = true,
  colorMode = "rainbow",
}: ParticleFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const palette =
      colorMode === "violet"
        ? ["270, 90%, 65%", "280, 100%, 75%", "260, 80%, 60%"]
        : colorMode === "cyan"
        ? ["190, 95%, 60%", "210, 90%, 65%", "230, 90%, 65%"]
        : ["270, 90%, 65%", "320, 85%, 60%", "190, 95%, 60%", "230, 90%, 65%"];

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let particles: P[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.6,
        c: palette[Math.floor(Math.random() * palette.length)],
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const leaveMouse = () => (mouseRef.current = { x: -1000, y: -1000 });
    if (interactive) {
      window.addEventListener("mousemove", handleMouse);
      window.addEventListener("mouseleave", leaveMouse);
    }

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Lines between near particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.strokeStyle = `hsla(${p.c}, ${0.18 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // Particles
      for (const p of particles) {
        // mouse repulsion
        if (interactive) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14000) {
            const f = (1 - d2 / 14000) * 0.6;
            p.vx += (dx / Math.sqrt(d2 + 0.001)) * f * 0.05;
            p.vy += (dy / Math.sqrt(d2 + 0.001)) * f * 0.05;
          }
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.fillStyle = `hsla(${p.c}, 0.85)`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.c}, 0.6)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouse);
        window.removeEventListener("mouseleave", leaveMouse);
      }
    };
  }, [density, interactive, colorMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
};

export default ParticleField;
