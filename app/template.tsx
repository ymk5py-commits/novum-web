"use client";
/* Transición entre páginas: el contenido entra con un fundido corto (la cabecera y el pie viven
 * en el layout y no se vuelven a animar). En la PRIMERA carga no se anima: el HTML del servidor
 * se ve tal cual, sin esperar al JavaScript. */
import { m } from "motion/react";
import { useEffect } from "react";
import { DUR, EASE_OUT } from "@/lib/movimiento";

let primeraCarga = true;

export default function Template({ children }: { children: React.ReactNode }) {
  const animar = !primeraCarga;
  useEffect(() => {
    primeraCarga = false;
  }, []);
  return (
    <m.div initial={animar ? { opacity: 0, y: 6 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: DUR.long, ease: EASE_OUT }}>
      {children}
    </m.div>
  );
}
