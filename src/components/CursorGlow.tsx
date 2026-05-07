import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsCoarse(true);
      return;
    }
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (isCoarse) return null;

  return (
    <div
      className="pointer-events-none fixed z-[1] h-[500px] w-[500px] rounded-full opacity-40 blur-3xl transition-transform duration-150 ease-out"
      style={{
        background: "radial-gradient(circle, hsl(51 100% 50% / 0.15), transparent 60%)",
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
      }}
    />
  );
};

export default CursorGlow;
