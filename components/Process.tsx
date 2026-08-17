"use client";
import { motion, useReducedMotion } from "framer-motion";
import { SectionBar, SectionTitle } from "@/components/several/Section";

/**
 * Proceso — la sección pasa de fondo OSCURO a fondo CLARO.
 *
 * El porqué del cambio: el sitio venía siendo navy de punta a punta y el
 * contenido no respiraba. La referencia de several. ALTERNA portadas oscuras
 * con páginas de contenido sobre papel. Esta sección es contenido puro (cuatro
 * pasos, mucho texto), así que va sobre papel.
 *
 * Y va sobre `paper-soft`, no `paper`: Servicios (la sección de arriba) ya es
 * clara, y dos claros idénticos pegados se leen como una sola mancha gris de
 * 200vh. El medio tono de diferencia alcanza para que el ojo registre el corte.
 *
 * Los pasos son LO importante acá, así que cada uno se lleva una tarjeta blanca
 * grande en dos columnas en vez de las cuatro columnas apretadas de antes, que
 * obligaban a un cuerpo de 14px para entrar.
 */

/* COPY ORIGINAL, sin tocar.
 *
 * En una primera pasada este archivo terminó con titulares nuevos por paso
 * ("Nada se escribe sin tu OK", "Demos, no reportes"). Estaban bien escritos,
 * pero eran INVENTADOS: la estructura de tarjeta pedía una pestaña Y un titular,
 * y el dato original solo trae una etiqueta por paso, así que se rellenó el
 * hueco. El texto comercial del studio lo escribe el dueño, no el rediseño.
 *
 * Solución sin invención: la pestaña navy lleva el nombre real de la fase
 * (Discovery, Diseño técnico…) y el cuerpo original pasa a ser el texto grande.
 * Una sola etiqueta, cero palabras nuevas. */
type Paso = {
  n: string;
  /** Nombre de la fase, tal cual estaba: va en la pestaña navy. */
  title: string;
  body: string;
  duration?: string;
};

const steps: Paso[] = [
  {
    n: "01",
    title: "Discovery",
    body: "Entendemos negocio, dato y restricciones. Definimos métrica de éxito (no “entregables”).",
    duration: "1 semana",
  },
  {
    n: "02",
    title: "Diseño técnico",
    body: "Arquitectura, costos por unidad y plan de evals. Tú apruebas antes de escribir una línea.",
    duration: "1 — 2 semanas",
  },
  {
    n: "03",
    title: "Build & ship",
    body: "Sprints semanales, demos en vivo. Despliegue continuo desde el día 5.",
    duration: "4 — 10 semanas",
  },
  {
    n: "04",
    title: "Operación",
    body: "Monitoreo, mejoras y soporte. Nos quedamos hasta que el sistema corra solo.",
    duration: "Ongoing",
  },
];

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="proceso" aria-label="Proceso" className="relative bg-paper-soft py-32 sm:py-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionBar label="Proceso" tone="light" />

        {/* El acento va en color SÓLIDO (`cobalt-700`, el único menta que llega
            a 4.5:1 sobre claro). Antes era `.aurora-text` con degradé recortado:
            además de ser el cliché que Carlos pidió no usar, con `color:
            transparent` un fallo de paint deja el texto INVISIBLE, no degradado. */}
        <SectionTitle tone="light" className="max-w-[22ch] text-pretty">
          Cuatro pasos. <span className="text-cobalt-700">Sin PowerPoints.</span>
        </SectionTitle>

        {/* `ol` y no `div`: es una secuencia numerada de verdad; así el lector de
            pantalla anuncia "lista de 4 elementos" y el orden significa algo. */}
        <ol className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              /* Solo desplazamiento, NUNCA opacidad: el sitio ya se comió una
                 portada en blanco por un `initial={{opacity:0}}` sobre texto que
                 no llegó a resolverse. Si esto falla, la tarjeta queda 22px
                 corrida — nunca invisible. */
              initial={reduce ? false : { y: 22 }}
              whileInView={{
                y: 0,
                transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
              }}
              viewport={{ once: true, margin: "-60px" }}
              /* El hover lleva su propia transición porque el `delay` escalonado
                 del reveal, si se hereda, hace que la tarjeta reaccione tarde. */
              whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
              className="flex flex-col rounded-[1.5rem] bg-paper-card p-7"
            >
              {/* Pestaña navy: el único lugar de la tarjeta donde el menta
                  brillante y el texto blanco son legibles. `self-start` porque
                  en un flex column los hijos se estiran y la pestaña quedaría
                  del ancho de la tarjeta. */}
              {/* Solo el número: el nombre de la fase es el titular grande de
                  abajo, y repetirlo acá sería decir dos veces lo mismo. */}
              <div className="flex self-start items-center gap-3 rounded-xl bg-navy-950 py-2.5 pl-2.5 pr-5">
                <span className="rounded-md bg-cobalt-400 px-2 py-0.5 font-display text-sm font-medium tabular-nums text-navy-950">
                  {s.n}
                </span>
                <span className="text-[13px] uppercase tracking-[0.18em] text-white/80">
                  Fase
                </span>
              </div>

              <h3 className="mt-7 font-display text-[2rem] font-extralight leading-[1.08] tracking-tight text-paper-ink sm:text-[2.35rem]">
                {s.title}
              </h3>

              <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-paper-muted">
                {s.body}
              </p>

              {s.duration && (
                /* `mt-auto` empuja la duración al pie: las tarjetas de una misma
                   fila se estiran a la más alta y así los plazos quedan alineados
                   entre sí en vez de flotar a distinta altura. */
                <div className="mt-auto flex items-center gap-3 pt-8">
                  <span className="h-[3px] w-8 rounded-sm bg-cobalt-400" aria-hidden="true" />
                  <span className="text-[13px] tracking-wide text-paper-muted">{s.duration}</span>
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
