"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate, useReducedMotion } from "framer-motion";

/** Contador que cuenta hasta `value` cuando entra en viewport. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const reduce = useReducedMotion();

  const fmt = (n: number) =>
    `${prefix}${n.toLocaleString("es-CO", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  useEffect(() => {
    if (ref.current) ref.current.textContent = fmt(0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      if (ref.current) ref.current.textContent = fmt(value);
      return;
    }
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // ease-out-expo
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = fmt(v);
      },
    });
    return () => controls.stop();
  }, [inView, value, reduce]); // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref} className={className}>{fmt(0)}</span>;
}
