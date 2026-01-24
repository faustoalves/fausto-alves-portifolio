import React from "react";

// Custom hook for mouse position as percentage of screen
export const useMousePercent = () => {
  const [mousePercent, setMousePercent] = React.useState({ x: 0.5, y: 0.5 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth);
      const y = (e.clientY / window.innerHeight);
      if (window.innerWidth < 768) {
        setMousePercent({ x: 0.5, y: 0.5 });
      } else {
        setMousePercent({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePercent;
}