"use client";
import { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

/** Inclinación 3D sutil siguiendo el puntero (desktop). Respeta reduced-motion.
 *
 *  ⚠️ POR QUÉ ESTE COMPONENTE NO PUEDE DEVOLVER DOS ÁRBOLES DISTINTOS
 *
 *  Antes hacía `if (reduce) return <div>{children}</div>` y si no, devolvía el
 *  motion.div CON un div extra de brillo. Eso rompía la hidratación entera de
 *  la home:
 *
 *    · El servidor no tiene `matchMedia`, así que `reduce` es false y sirve el
 *      HTML con el div del brillo.
 *    · El cliente, si el visitante tiene "reducir movimiento" activado, lo
 *      calcula true y arma el árbol corto, SIN ese div.
 *    · React ve "Did not expect server HTML to contain a <div> in <div>",
 *      aborta la hidratación y NUNCA corre las animaciones de entrada.
 *
 *  Consecuencia real, no teórica: el `motion.h1` del hero se sirve con
 *  `opacity: 0` esperando que React lo levante. Si React nunca hidrata, el
 *  titular de la portada queda invisible — fondo y nada más. Se veía así en
 *  cualquier equipo con reducir-movimiento, que es justo la gente que menos
 *  puede pelear con una página rota.
 *
 *  La regla que queda: la ESTRUCTURA del DOM tiene que ser idéntica en servidor
 *  y en el primer render del cliente. Lo que dependa de `matchMedia` se aplica
 *  después de montar, y solo sobre estilos. */
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
  const prefiereMenosMovimiento = useReducedMotion();
  /* `reduce` arranca SIEMPRE en false, igual que en el servidor, y recién toma
     el valor real después de montar. Así el primer render del cliente coincide
     con el HTML servido y la hidratación no se cae. */
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);
  const reduce = montado && prefiereMenosMovimiento;

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
      `radial-gradient(420px circle at ${gx} ${gy}, rgba(95,161,251,0.14), transparent 60%)`
  );

  /* Mismo árbol SIEMPRE. Con reduced-motion no se quita ningún nodo: se apaga
     el efecto (sin rotación, sin brillo y sin escuchar el puntero). */
  return (
    <motion.div
      ref={ref}
      onMouseMove={reduce ? undefined : (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left) / r.width);
        y.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={reduce ? undefined : () => {
        x.set(0.5);
        y.set(0.5);
      }}
      style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
      className={`relative [transform-style:preserve-3d] ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={reduce ? { background: "none" } : { background: glareBg }}
        />
      )}
    </motion.div>
  );
}
