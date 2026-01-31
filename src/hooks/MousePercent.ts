import React from "react";

/** Fator de suavização: 0 = máximo atraso, 1 = sem atraso. Valores típicos: 0.05–0.2 */
const DEFAULT_SMOOTHING = 0.12;

function lerp(current: number, target: number, factor: number): number {
  return current + (target - current) * factor;
}

// Custom hook for mouse position as percentage of screen, with optional smooth delay
export const useMousePercent = (smoothing: number = DEFAULT_SMOOTHING) => {
  const [mousePercent, setMousePercent] = React.useState({ x: 0.5, y: 0.5 });
  const target = React.useRef({ x: 0.5, y: 0.5 });
  const rafId = React.useRef<number | null>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (window.innerWidth < 768) {
        target.current = { x: 0.5, y: 0.5 };
      } else {
        target.current = { x, y };
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  React.useEffect(() => {
    const update = () => {
      setMousePercent((prev) => ({
        x: lerp(prev.x, target.current.x, smoothing),
        y: lerp(prev.y, target.current.y, smoothing),
      }));
      rafId.current = requestAnimationFrame(update);
    };
    rafId.current = requestAnimationFrame(update);
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [smoothing]);

  return mousePercent;
};
