"use client";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionBar, SectionTitle, Numeral, PillCTA } from "@/components/several/Section";

/**
 * Portfolio.
 *
 * Es la sección que decide si nos creen o no, así que es la única que pasa a
 * fondo CLARO con el trabajo en tarjetas blancas: sobre el navy las piezas
 * competían con el fondo (glass sobre glass) y ninguna terminaba de leerse.
 * Sobre papel el caso se lee solo.
 *
 * Estructura de fila en vez de grilla 2×2: con 4 casos, la fila ancha le da a
 * cada uno el numeral gigante de la referencia, el nombre grande y la ficha de
 * datos a la derecha sin apretar nada. Se lee como un índice editorial.
 */

type Project = {
  sector: string;
  title: string;
  metric: string;
  metricLabel: string;
  duration: string;
  stack: string[];
  /**
   * A dónde va el caso. Hoy NO hay páginas de caso publicadas, así que los
   * cuatro apuntan al formulario — exactamente lo que ya hacía la versión
   * anterior. Es opcional a propósito: el día que un caso se quede sin destino,
   * no se dibuja la flecha. Una flecha que no lleva a ningún lado es una
   * promesa falsa, y en la sección de portfolio eso se paga caro.
   */
  href?: string;
};

const projects: Project[] = [
  {
    sector: "Retail · LATAM",
    title: "Agente de ventas en WhatsApp para cadena de tiendas",
    metric: "+212%",
    metricLabel: "leads cualificados",
    duration: "10 semanas",
    stack: ["Botika", "Meta Cloud API", "HubSpot", "GA4"],
    href: "#contacto",
  },
  {
    sector: "Salud · Clínica privada",
    title: "Reemplazo del software clínico legado",
    metric: "−68%",
    metricLabel: "no-shows",
    duration: "14 semanas",
    stack: ["NOVUMed", "Twilio", "Stripe", "FHIR"],
    href: "#contacto",
  },
  {
    sector: "E-commerce · D2C",
    title: "Optimización de pauta y atribución cross-channel",
    metric: "6.4×",
    metricLabel: "ROAS (vs 4.1×)",
    duration: "Continuo",
    stack: ["PAUTIK", "Meta Ads", "Google Ads", "BigQuery"],
    href: "#contacto",
  },
  {
    sector: "Educación · SaaS",
    title: "Copiloto académico embebido en plataforma LMS",
    metric: "+38%",
    metricLabel: "retención mensual",
    duration: "8 semanas",
    stack: ["RAG", "Claude", "pgvector", "Vercel"],
    href: "#contacto",
  },
];

/** Etiqueta chica en mono. No se usa `.eyebrow` porque tiene el color del tema
 *  oscuro hardcodeado (ivory al 55%) y sobre papel queda ilegible. */
const LABEL = "font-mono text-[12px] uppercase tracking-[0.2em] text-paper-muted";

export default function Projects() {
  /* La entrada anima SOLO la posición, nunca la opacidad: el sitio ya tuvo el
     bug de la portada en blanco por `initial:{opacity:0}` sobre texto. Si el JS
     no llega a hidratar, el caso igual se lee — apenas 24px más abajo. */
  const reduce = useReducedMotion();

  return (
    <section id="proyectos" className="relative bg-paper py-32 sm:py-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionBar label="Proyectos" tone="light" />

        <SectionTitle tone="light" className="max-w-3xl text-pretty">
          Proyectos donde el
          <br />
          {/* Color sólido del acento. Sobre papel va el menta oscuro: el menta
              brillante da 1.6:1 contra blanco, o sea, ilegible. */}
          <span className="text-cobalt-700">resultado</span> es público.
        </SectionTitle>

        <div className="mt-14 flex flex-col gap-5 sm:mt-16">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={reduce ? false : { y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
              /* Sin borde: la tarjeta se separa del papel por la sombra, no por
                 una línea. Es lo que hace que el blanco flote en vez de recortarse. */
              className="group rounded-[1.5rem] bg-paper-card p-7 shadow-[0_18px_50px_-24px_rgba(10,18,64,0.28)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-28px_rgba(10,18,64,0.38)] sm:p-9 lg:p-10"
            >
              <div className="grid grid-cols-12 gap-y-8 lg:gap-x-10">
                <Numeral
                  n={String(i + 1).padStart(2, "0")}
                  tone="light"
                  className="col-span-12 lg:col-span-2"
                />

                <div className="col-span-12 lg:col-span-6">
                  <span className={LABEL}>{p.sector}</span>
                  <h3 className="mt-3 font-display text-[1.75rem] font-light leading-[1.1] tracking-tight text-paper-ink text-pretty sm:text-[2.125rem]">
                    {p.title}
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-paper-line px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.16em] text-paper-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ficha de datos sobre `paper-soft`: separa la evidencia del
                    relato sin meter otra línea divisoria en la tarjeta. */}
                <div className="col-span-12 lg:col-span-4">
                  <dl className="rounded-2xl bg-paper-soft p-5 sm:p-6">
                    <dt className={LABEL}>Outcome</dt>
                    <dd className="mt-1.5">
                      <span className="block font-display text-[2.5rem] font-extralight leading-none tracking-tight text-cobalt-700">
                        {p.metric}
                      </span>
                      <span className="mt-2 block text-sm text-paper-muted">{p.metricLabel}</span>
                    </dd>

                    <dt className={`${LABEL} mt-5 block border-t border-paper-line pt-5`}>
                      Duración
                    </dt>
                    <dd className="mt-1.5 font-display text-xl font-light tracking-tight text-paper-ink">
                      {p.duration}
                    </dd>
                  </dl>

                  {p.href && (
                    /* Copy explícito en vez de una flecha suelta: la flecha sola
                       prometía una página de caso que no existe. `min-h-[44px]`
                       para el mínimo táctil. */
                    <a
                      href={p.href}
                      className="group/link mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-cobalt-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-700"
                    >
                      Consultar por este caso
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 border-t border-paper-line pt-10">
          {/* "Ver más trabajo" mentiría: no hay más casos publicados ni página
              donde verlos. El destino real es el formulario, así que el CTA lo
              dice. */}
          <PillCTA href="#contacto" tone="light">
            Hablemos de tu proyecto
          </PillCTA>
        </div>
      </div>
    </section>
  );
}
