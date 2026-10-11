"use client";
/* Un bloque de Split Studio: texto en una mitad, prueba en la otra; `invertido` alterna el lado.
 * La captura se revela con una cortina de papel que se retira (solo transform) mientras la
 * imagen se asienta de 1.06 a 1. Sin captura, la prueba es una lista con filetes. */
import Image from "next/image";
import { m } from "motion/react";
import type { Bloque } from "@/lib/productos";
import { EASE_CORTINA, EASE_OUT, VISTA } from "@/lib/movimiento";
import { Aparecer, Titular } from "./Revelar";

export default function Diptico({ bloque, invertido = false, indice }: { bloque: Bloque; invertido?: boolean; indice: number }) {
  return (
    <article className="grid items-center gap-xl py-2xl md:grid-cols-12 md:gap-lg">
      <div className={`md:col-span-5 ${invertido ? "md:order-2 md:col-start-8" : ""}`}>
        <Titular texto={bloque.t} como="h3" className="text-3xl" />
        <Aparecer className="mt-md max-w-[46ch] text-ink-2" retraso={0.15}>
          <p>{bloque.d}</p>
        </Aparecer>
      </div>

      <div className={`md:col-span-7 ${invertido ? "md:order-1 md:col-start-1" : "md:col-start-6"}`}>
        {bloque.imagen ? (
          <figure>
            <div className="relative overflow-hidden border border-rule bg-paper-2">
              <m.div
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={VISTA}
                transition={{ duration: 1.4, ease: EASE_OUT }}
              >
                <Image
                  src={bloque.imagen.src}
                  alt={bloque.imagen.alt}
                  width={2160}
                  height={1350}
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="block h-auto w-full"
                  priority={indice === 0}
                />
              </m.div>
              <m.div
                aria-hidden
                className="absolute inset-0 bg-paper"
                style={{ originX: invertido ? 0 : 1 }}
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                viewport={VISTA}
                transition={{ duration: 1.1, ease: EASE_CORTINA }}
              />
            </div>
            <figcaption className="mono mt-xs text-muted">{bloque.imagen.pie}</figcaption>
          </figure>
        ) : (
          <m.ul
            className="border-b border-rule"
            initial="oculto"
            whileInView="visible"
            viewport={VISTA}
            variants={{ oculto: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {bloque.detalle?.map((d) => (
              <m.li
                key={d}
                className="relative py-sm"
                variants={{ oculto: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-rule" />
                {d}
              </m.li>
            ))}
          </m.ul>
        )}
      </div>
    </article>
  );
}
