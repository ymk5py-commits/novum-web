"use client";
import { ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

/**
 * SpotlightCard — tarjeta con resplandor radial que sigue el cursor (estilo
 * MagicUI MagicCard) + animación de entrada. Polimórfica: con `href` renderiza
 * un enlace. El contenido debe ir en una capa `relative z-10`.
 */
type Props = {
  children: ReactNode;
  className?: string;
  index?: number;
  href?: string;
  glow?: string;
};

export function SpotlightCard({
  children,
  className = "",
  index = 0,
  href,
  glow = "rgba(122,156,255,0.18)",
}: Props) {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const bg = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, ${glow}, transparent 72%)`;

  const handlers = {
    onMouseMove: (e: MouseEvent) => {
      const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
      mx.set(e.clientX - r.left);
      my.set(e.clientY - r.top);
    },
    onMouseLeave: () => {
      mx.set(-400);
      my.set(-400);
    },
  };

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] as const },
    className: `group relative overflow-hidden ${className}`,
    ...handlers,
  };

  const inner = (
    <>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: bg }}
      />
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {inner}
      </motion.a>
    );
  }
  return <motion.div {...motionProps}>{inner}</motion.div>;
}
