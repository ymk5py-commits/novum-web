"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/** Barra de progreso de lectura, fija en el borde superior. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-cobalt-500 via-cobalt-300 to-cobalt-200"
      aria-hidden
    />
  );
}
