"use client";
/* Primitivas de aparición (solo transform + opacity, una vez, design.md § Motion).
 * - Titular: cada palabra sube desde una máscara, escalonada (como una portada de revista).
 * - Aparecer: fundido + 12 px hacia arriba al entrar en pantalla.
 * - Filete: una línea fina que se dibuja de izquierda a derecha. */
import { m } from "motion/react";
import { createElement } from "react";
import { EASE_OUT, VISTA } from "@/lib/movimiento";

type Nivel = "h1" | "h2" | "h3";

export function Titular({
  texto,
  como = "h2",
  className = "",
  alCargar = false,
  retraso = 0,
  id,
}: {
  texto: string;
  como?: Nivel;
  className?: string;
  /** true = anima al cargar la página (titular principal); false = al entrar en pantalla. */
  alCargar?: boolean;
  retraso?: number;
  id?: string;
}) {
  const palabras = texto.split(" ");
  // Al cargar: CSS (visible aunque el JavaScript no haya llegado). Al entrar en pantalla: Motion.
  if (alCargar) {
    return createElement(
      como,
      { className, id, "aria-label": texto },
      <span aria-hidden className="block">
        {palabras.map((p, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <span className="anim-subir inline-block" style={{ "--d": `${retraso + i * 0.045}s` } as React.CSSProperties}>
              {p}
              {i < palabras.length - 1 ? "\u00a0" : ""}
            </span>
          </span>
        ))}
      </span>,
    );
  }
  return createElement(
    como,
    { className, id, "aria-label": texto },
    <m.span
      aria-hidden
      className="block"
      initial="oculto"
      whileInView="visible"
      viewport={VISTA}
      variants={{ oculto: {}, visible: { transition: { staggerChildren: 0.045, delayChildren: retraso } } }}
    >
      {palabras.map((p, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <m.span
            className="inline-block"
            variants={{ oculto: { y: "110%" }, visible: { y: "0%" } }}
            transition={{ duration: 0.85, ease: EASE_OUT }}
          >
            {p}
            {i < palabras.length - 1 ? " " : ""}
          </m.span>
        </span>
      ))}
    </m.span>,
  );
}

export function Aparecer({
  children,
  retraso = 0,
  className = "",
  alCargar = false,
  como = "div",
}: {
  children: React.ReactNode;
  retraso?: number;
  className?: string;
  alCargar?: boolean;
  como?: "div" | "p" | "li" | "section" | "figure";
}) {
  if (alCargar) {
    return createElement(como, { className: `anim-aparecer ${className}`, style: { "--d": `${retraso}s` } as React.CSSProperties }, children);
  }
  const M = m[como];
  return (
    <M className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={VISTA} transition={{ duration: 0.6, ease: EASE_OUT, delay: retraso }}>
      {children}
    </M>
  );
}

export function Filete({ className = "", retraso = 0, fuerte = false }: { className?: string; retraso?: number; fuerte?: boolean }) {
  return (
    <m.div
      aria-hidden
      className={`h-px ${fuerte ? "bg-ink" : "bg-rule"} ${className}`}
      style={{ originX: 0 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VISTA}
      transition={{ duration: 1, ease: EASE_OUT, delay: retraso }}
    />
  );
}
