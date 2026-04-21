import { useEffect, useRef, useState } from "react";

/**
 * Custom gradient cursor that scales over interactive elements.
 * Hidden on touch devices.
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touch = window.matchMedia("(hover: none)").matches;
    setIsTouch(touch);
    if (touch) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);

    const overInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = !!target.closest('a, button, [role="button"], input, textarea, .magnetic, [data-cursor="hover"]');
      setIsHovering(interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overInteractive);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overInteractive);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-foreground mix-blend-difference"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 rounded-full border border-primary/60 transition-[width,height,opacity] duration-200 ${
          isHovering ? "scale-150 border-accent/80" : ""
        }`}
        style={{
          background: isHovering
            ? "radial-gradient(circle, hsl(var(--grad-cyan) / 0.25), transparent 70%)"
            : "transparent",
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
