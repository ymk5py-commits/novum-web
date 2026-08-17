"use client";
import { ArrowUpRight } from "lucide-react";

/**
 * Piezas del sistema visual tomado de la propuesta de several.
 *
 * Existen para que las 14 secciones de la home dejen de resolver cada una su
 * propia cabecera. Antes cada sección abría con un `eyebrow` con borde
 * izquierdo (`02 · Capacidades`) y de ahí en más improvisaba: distintos
 * tamaños, distintos numerales, distintos botones.
 *
 * Todas aceptan `tone`, porque la referencia ALTERNA fondo oscuro y claro y
 * cada pieza tiene que saber sobre cuál está parada. Regla de color que no se
 * negocia: el menta brillante (`cobalt-400`) solo va sobre oscuro; sobre claro
 * se usa `cobalt-700`, que es el único que llega a 4.5:1.
 */

type Tone = "dark" | "light";

/** Cabecera de sección: etiqueta · claim · marca, con la línea fina abajo. */
export function SectionBar({ label, tone = "dark" }: { label: string; tone?: Tone }) {
  const claro = tone === "light";
  return (
    <div className={`mb-12 border-b pb-3 ${claro ? "border-paper-line" : "border-white/10"}`}>
      <div className="flex items-baseline justify-between gap-4">
        <span
          className={`font-display text-sm font-medium uppercase tracking-[0.2em] ${
            claro ? "text-paper-muted" : "text-ivory-300/70"
          }`}
        >
          {label}
        </span>
        <span
          className={`hidden font-display text-sm font-light tracking-wide md:block ${
            claro ? "text-paper-muted" : "text-ivory-300/45"
          }`}
        >
          Holding · Studio · Asunción
        </span>
        <span
          className={`font-display text-sm font-light tracking-[0.14em] ${
            claro ? "text-paper-muted" : "text-ivory-300/45"
          }`}
        >
          NOVUM<span className={claro ? "text-cobalt-700" : "text-cobalt-400"}>.</span>
        </span>
      </div>
    </div>
  );
}

/** Numeral gigante ultra-fino con la regla menta debajo. La firma de la referencia. */
export function Numeral({ n, tone = "dark", className = "" }: { n: string; tone?: Tone; className?: string }) {
  const claro = tone === "light";
  return (
    <div className={className}>
      <div
        className={`font-display text-[4.5rem] font-extralight leading-none tracking-tight sm:text-[5.5rem] ${
          claro ? "text-paper-ink" : "text-ivory-50"
        }`}
      >
        {n}
      </div>
      <div className="mt-3 h-[3px] w-14 rounded-sm bg-cobalt-400" />
    </div>
  );
}

/** Píldora con círculo menta a la derecha. El CTA de la referencia. */
export function PillCTA({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
}) {
  const claro = tone === "light";
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[15px] font-medium transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-400 ${
        claro ? "bg-navy-950 text-white" : "bg-white text-navy-950"
      }`}
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-cobalt-400 text-navy-950">
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
      </span>
    </a>
  );
}

/** Titular de sección: display ultra-fino y grande, como en la referencia. */
export function SectionTitle({
  children,
  tone = "dark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const claro = tone === "light";
  return (
    <h2
      className={`font-display text-[2.75rem] font-extralight leading-[1.05] tracking-tight sm:text-[3.5rem] ${
        claro ? "text-paper-ink" : "text-ivory-50"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
