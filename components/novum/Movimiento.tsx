"use client";
/* Proveedor de Motion para todo el sitio.
 * - LazyMotion + `m.*`: solo se carga el motor de animación que usamos (domMax: incluye layout).
 * - reducedMotion="user": con `prefers-reduced-motion`, Motion desactiva transform y layout y deja los fundidos. */
import { LazyMotion, MotionConfig, domMax } from "motion/react";
import { EASE_OUT, DUR } from "@/lib/movimiento";

export default function Movimiento({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: DUR.long, ease: EASE_OUT }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
