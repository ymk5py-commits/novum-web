"use client";
import { RefObject, useEffect, useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * AnimatedBeam — dibuja una curva entre dos elementos y hace correr un
 * gradiente cobalto a lo largo. Estilo MagicUI. El `containerRef` debe ser
 * `position: relative`.
 */
export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
}: {
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
}) {
  const id = useId();
  const reduce = useReducedMotion();
  const [d, setD] = useState("");
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      const c = containerRef.current;
      const a = fromRef.current;
      const b = toRef.current;
      if (!c || !a || !b) return;
      const cr = c.getBoundingClientRect();
      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      setDims({ w: cr.width, h: cr.height });
      const sx = ar.left - cr.left + ar.width / 2;
      const sy = ar.top - cr.top + ar.height / 2;
      const ex = br.left - cr.left + br.width / 2;
      const ey = br.top - cr.top + br.height / 2;
      const mx = (sx + ex) / 2;
      const my = (sy + ey) / 2 - curvature;
      setD(`M ${sx},${sy} Q ${mx},${my} ${ex},${ey}`);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [containerRef, fromRef, toRef, curvature]);

  const animateProps = reverse
    ? { x1: ["90%", "-10%"], x2: ["100%", "0%"] }
    : { x1: ["10%", "110%"], x2: ["0%", "100%"] };

  return (
    <svg
      fill="none"
      width={dims.w}
      height={dims.h}
      viewBox={`0 0 ${dims.w} ${dims.h}`}
      className="pointer-events-none absolute left-0 top-0"
      aria-hidden
    >
      <path d={d} stroke="rgba(255,255,255,0.10)" strokeWidth={1.3} strokeLinecap="round" />
      <path d={d} stroke={`url(#${id})`} strokeWidth={1.8} strokeLinecap="round" />
      <defs>
        {reduce ? (
          <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#4D7CFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7A9CFF" stopOpacity="0.5" />
          </linearGradient>
        ) : (
          <motion.linearGradient
            id={id}
            gradientUnits="userSpaceOnUse"
            initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
            animate={animateProps}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
          >
            <stop stopColor="#4D7CFF" stopOpacity="0" />
            <stop stopColor="#4D7CFF" />
            <stop offset="32.5%" stopColor="#7A9CFF" />
            <stop offset="100%" stopColor="#A8C0FF" stopOpacity="0" />
          </motion.linearGradient>
        )}
      </defs>
    </svg>
  );
}
