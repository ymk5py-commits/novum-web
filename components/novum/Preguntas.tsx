"use client";
/* Preguntas en acordeón. La respuesta se abre con grid-template-rows 0fr → 1fr (nunca height,
 * design.md § Microinteractions); el «+» gira a «×» con Motion y el texto aparece después. */
import { useId, useState } from "react";
import { m } from "motion/react";
import { DUR, EASE_OUT } from "@/lib/movimiento";

export default function Preguntas({ preguntas }: { preguntas: readonly { q: string; a: string }[] }) {
  const [abiertas, setAbiertas] = useState<Set<number>>(() => new Set([0]));
  const base = useId();
  const alternar = (i: number) =>
    setAbiertas((prev) => {
      const s = new Set(prev);
      if (s.has(i)) s.delete(i);
      else s.add(i);
      return s;
    });

  return (
    <div className="border-b border-rule">
      {preguntas.map((p, i) => {
        const abierta = abiertas.has(i);
        const idR = `${base}-r${i}`;
        const idB = `${base}-b${i}`;
        return (
          <div key={p.q} className="border-t border-rule">
            <h3 className="font-sans text-md font-normal leading-normal tracking-normal">
              <button
                type="button"
                id={idB}
                aria-expanded={abierta}
                aria-controls={idR}
                onClick={() => alternar(i)}
                className="group flex min-h-[44px] w-full items-baseline justify-between gap-md py-md text-left"
              >
                <span className="font-display text-xl leading-snug decoration-accent decoration-2 underline-offset-[6px] group-hover:underline sm:text-2xl">
                  {p.q}
                </span>
                <m.span
                  aria-hidden
                  className="font-display text-2xl leading-none text-muted"
                  animate={{ rotate: abierta ? 45 : 0 }}
                  transition={{ duration: DUR.short, ease: EASE_OUT }}
                >
                  +
                </m.span>
              </button>
            </h3>
            <div
              id={idR}
              role="region"
              aria-labelledby={idB}
              className="grid transition-[grid-template-rows] duration-[420ms] ease-in-out"
              style={{ gridTemplateRows: abierta ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden" aria-hidden={!abierta}>
                <m.p
                  className="max-w-medida pb-lg text-ink-2"
                  initial={false}
                  animate={{ opacity: abierta ? 1 : 0, y: abierta ? 0 : -4 }}
                  transition={{ duration: DUR.long, ease: EASE_OUT, delay: abierta ? 0.08 : 0 }}
                >
                  {p.a}
                </m.p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
