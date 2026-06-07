"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * Fondo animado del hero — 100% azul (sin lila), fluido (solo transform/opacity).
 * Auroras en movimiento + rayos de luz diagonales + spotlight que sigue el cursor.
 * Respeta prefers-reduced-motion.
 */
const beams = [
  { top: "22%", width: "55%", left: "-8%", delay: "0s", dur: "7.5s" },
  { top: "38%", width: "42%", left: "-6%", delay: "1.8s", dur: "9s" },
  { top: "54%", width: "62%", left: "-10%", delay: "3.2s", dur: "8s" },
  { top: "70%", width: "38%", left: "-4%", delay: "5s", dur: "10s" },
];

export default function HeroBackground() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.6);
  const my = useMotionValue(0.25);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const spot = useTransform([sx, sy], ([x, y]: number[]) =>
    `radial-gradient(620px circle at ${x * 100}% ${y * 100}%, rgba(46,131,245,0.18), transparent 60%)`
  );

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="absolute inset-0 -z-[30] overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-navy-950" />

      {/* auroras azules en movimiento */}
      <motion.div
        className="absolute -top-48 left-[8%] h-[540px] w-[640px] rounded-full blur-[70px] md:blur-[95px]"
        style={{ background: "radial-gradient(closest-side, rgba(46,131,245,0.38), transparent)" }}
        animate={reduce ? undefined : { x: [0, 90, -40, 0], y: [0, 40, -24, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={reduce ? undefined : { duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[18%] right-[2%] h-[480px] w-[480px] rounded-full blur-[70px] md:blur-[95px]"
        style={{ background: "radial-gradient(closest-side, rgba(23,105,224,0.34), transparent)" }}
        animate={reduce ? undefined : { x: [0, -70, 30, 0], y: [0, 34, -44, 0], scale: [1, 1.08, 1, 1] }}
        transition={reduce ? undefined : { duration: 23, repeat: Infinity, ease: "easeInOut", delay: -6 }}
      />
      <motion.div
        className="absolute bottom-[-12%] left-[28%] hidden h-[440px] w-[560px] rounded-full blur-[100px] md:block"
        style={{ background: "radial-gradient(closest-side, rgba(15,31,61,0.85), transparent)" }}
        animate={reduce ? undefined : { x: [0, 50, -34, 0], y: [0, -24, 24, 0] }}
        transition={reduce ? undefined : { duration: 27, repeat: Infinity, ease: "easeInOut", delay: -12 }}
      />

      {/* rayos de luz diagonales */}
      <div className="absolute inset-0 origin-center [transform:rotate(-14deg)_scale(1.5)]">
        {beams.map((b, i) => (
          <span
            key={i}
            className="hero-beam"
            style={{ top: b.top, width: b.width, left: b.left, animationDelay: b.delay, animationDuration: b.dur }}
          />
        ))}
      </div>

      {/* grilla sutil */}
      <div className="absolute inset-0 grid-lines opacity-[0.12]" />
      {/* noise */}
      <div className="absolute inset-0 noise opacity-[0.15] mix-blend-overlay" />

      {/* spotlight que sigue el cursor (desktop) */}
      {!reduce && <motion.div className="absolute inset-0 hidden md:block" style={{ background: spot }} />}

      {/* scrims para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
    </div>
  );
}
