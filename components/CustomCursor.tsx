"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor premium aditivo: un punto azul que sigue al cursor + un anillo que
 * llega con spring y se agranda sobre enlaces/botones. No oculta el cursor
 * nativo (seguro). Solo en dispositivos con puntero fino (desktop).
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest('a, button, [role="button"], summary, input, label'));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      {/* punto central */}
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-cobalt-300"
        style={{ left: x, top: y, translateX: "-50%", translateY: "-50%" }}
      />
      {/* anillo con lag */}
      <motion.div
        className="absolute rounded-full border border-cobalt-300/60"
        style={{ left: ringX, top: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          opacity: hovering ? 1 : 0.6,
          backgroundColor: hovering ? "rgba(46,131,245,0.12)" : "rgba(46,131,245,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </div>
  );
}
