"use client";
/* Secciones del inicio que no son la cartera: el estudio y cómo trabajamos. */
import { m } from "motion/react";
import { ESTUDIO, PASOS } from "@/lib/site";
import { EASE_OUT, VISTA } from "@/lib/movimiento";
import { Aparecer, Titular } from "./Revelar";

/** El estudio: titular a la izquierda (5 col.), lista densa con filetes a la derecha (7 col.). */
export function Estudio() {
  return (
    <section id="estudio" aria-labelledby="estudio-titulo" className="scroll-mt-20 py-3xl">
      <div className="grid gap-xl md:grid-cols-12 md:gap-lg">
        <div className="md:col-span-4">
          <Titular id="estudio-titulo" texto="El estudio." className="text-display-s" />
          <Aparecer className="mt-md max-w-[36ch] text-ink-2" retraso={0.15}>
            <p>Además de los productos, hacemos software a medida para empresas: lo diseñamos, lo conectamos con lo que ya usan y nos quedamos a operarlo.</p>
          </Aparecer>
        </div>
        <m.dl
          className="grid border-b border-rule sm:grid-cols-2 sm:gap-x-lg md:col-span-7 md:col-start-6"
          initial="oculto"
          whileInView="visible"
          viewport={VISTA}
          variants={{ oculto: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {ESTUDIO.map((s) => (
            <m.div
              key={s.t}
              className="relative py-lg"
              variants={{ oculto: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-rule" />
              <dt className="font-display text-xl">{s.t}</dt>
              <dd className="mt-2xs text-sm leading-relaxed text-ink-2">{s.d}</dd>
            </m.div>
          ))}
        </m.dl>
      </div>
    </section>
  );
}

/** Cómo trabajamos: cuatro pasos ordinales; una línea los recorre al entrar y cada paso aparece detrás. */
export function ComoTrabajamos() {
  return (
    <section aria-labelledby="pasos-titulo" className="border-t border-rule py-3xl">
      <Titular id="pasos-titulo" texto="Cómo trabajamos." className="text-display-s" />
      <m.ol
        className="relative mt-2xl grid gap-xl sm:grid-cols-2 lg:grid-cols-4 lg:gap-lg"
        initial="oculto"
        whileInView="visible"
        viewport={VISTA}
        variants={{ oculto: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}
      >
        <m.span
          aria-hidden
          className="absolute inset-x-0 top-0 hidden h-px bg-ink lg:block"
          style={{ originX: 0 }}
          variants={{ oculto: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 1.4, ease: EASE_OUT }}
        />
        {PASOS.map((p, i) => (
          <m.li
            key={p.t}
            className="border-t border-ink pt-md lg:border-t-0 lg:pt-lg"
            variants={{ oculto: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <span className="mono text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-sm text-2xl">{p.t}</h3>
            <p className="mt-xs max-w-[34ch] text-sm leading-relaxed text-ink-2">{p.d}</p>
          </m.li>
        ))}
      </m.ol>
    </section>
  );
}
