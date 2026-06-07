"use client";
import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

/** Inclinación 3D sutil siguiendo el puntero (desktop). Respeta reduced-motion. */
export function TiltCard({
  children,
  className = "",
  max = 6,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, { stiffness: 150, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 150, damping: 18, mass: 0.4 });
  const rotX = useTransform(sy, [0, 1], [max, -max]);
  const rotY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]: string[]) =>
      `radial-gradient(420px circle at ${gx} ${gy}, rgba(96,165,250,0.14), transparent 60%)`
  );

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left) / r.width);
        y.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
      className={`relative [transform-style:preserve-3d] ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}
