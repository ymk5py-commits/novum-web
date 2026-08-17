import { ArrowUpRight } from "lucide-react";
import { Numeral, SectionBar, SectionTitle } from "@/components/several/Section";

/**
 * Capacidades — la PRIMERA sección clara del sitio.
 *
 * La referencia de several. alterna portadas oscuras con páginas de contenido
 * sobre gris cálido y tarjetas blancas encima. Acá el sitio venía navy de punta
 * a punta y el listado de 8 servicios no respiraba: era texto claro sobre texto
 * claro, sin superficie que lo contuviera. Este bloque es el respiro.
 *
 * No lleva `"use client"` a propósito: al sacar el framer-motion de las filas
 * no queda estado ni handlers, así que la sección entera se renderiza en el
 * server y no manda un byte de JS. El hover lo resuelve CSS.
 */

const items = [
  { title: "IA aplicada a negocio", body: "Asistentes verticales, copilotos internos, motores de recomendación y RAG sobre datos propios." },
  { title: "Automatización end-to-end", body: "n8n, Make, Zapier o código propio — donde mueva la aguja." },
  { title: "Integraciones a medida", body: "ERPs, CRMs, pasarelas, mensajería y agenda con conectores propios." },
  { title: "Pauta & Performance", body: "Operación y consultoría en Meta · Google · TikTok. Atribución unificada." },
  { title: "Producto SaaS", body: "De cero a MVP en 8 semanas. Diseño, arquitectura y crecimiento." },
  { title: "Web & Mobile", body: "Sitios performantes, e-commerce headless y apps nativas / cross-platform." },
  { title: "Data & Analítica", body: "GA4, dataLayer, Looker y warehouses pequeños pero correctos." },
  { title: "DevOps & Operación", body: "Despliegues continuos, observabilidad y SLAs reales — sin sorpresas." },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionBar label="Capacidades" tone="light" />

        <div className="grid grid-cols-12 gap-x-10 gap-y-12">
          {/* Intro sticky: acompaña al listado mientras se scrollea. */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionTitle tone="light" className="text-pretty">
                Todo lo que <span className="text-cobalt-700">no</span>
                <br className="hidden sm:block" /> quieres tener{" "}
                <span className="text-cobalt-700">in-house.</span>
              </SectionTitle>

              <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper-muted">
                Un solo equipo para diseño, IA, automatización, pauta y operación. Lo
                construimos, lo conectamos y lo dejamos corriendo solo.
              </p>

              <div className="mt-12">
                <Numeral n="08" tone="light" />
                <p className="mt-4 font-display text-xs uppercase tracking-ultrawide text-paper-muted">
                  líneas de servicio
                </p>
              </div>
            </div>
          </div>

          {/* Ledger dentro de la tarjeta blanca: es lo que separa la lista del
              papel y le da borde propio. `overflow-hidden` para que el hover de
              la primera y la última fila respete las esquinas redondeadas. */}
          <div className="col-span-12 lg:col-span-8">
            <ol className="overflow-hidden rounded-[1.5rem] bg-paper-card shadow-[0_1px_2px_rgba(10,18,64,0.04),0_24px_48px_-32px_rgba(10,18,64,0.22)]">
              {items.map((it, i) => (
                <Row key={it.title} n={i + 1} title={it.title} body={it.body} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="group relative grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-t border-paper-line/70 px-5 py-6 transition-colors duration-300 first:border-t-0 hover:bg-paper sm:px-8 sm:py-7">
      {/* Único lugar donde entra el menta brillante: un trazo, no texto.
          Sobre blanco el cobalt-400 como color de letra no llegaría ni cerca
          de AA, pero como regla vertical firma la marca sin costo de lectura. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-3 left-0 w-[3px] origin-center scale-y-0 rounded-full bg-cobalt-400 transition-transform duration-300 group-hover:scale-y-100"
      />

      {/* El número es redundante para lectores de pantalla: el <ol> ya comunica
          el orden. Queda solo como dato visual. */}
      <div aria-hidden className="col-span-2 sm:col-span-1">
        {/* En hover va a tinta, no a menta: a 12px el cobalt-700 sobre el
            hover (#E9E9E9) queda en 4.38:1 y no llega a AA. El menta oscuro sí
            se banca la flecha, que como ícono pide 3:1. */}
        <span className="font-mono text-xs text-paper-muted transition-colors group-hover:text-paper-ink">
          {String(n).padStart(2, "0")}
        </span>
      </div>

      <div className="col-span-10 sm:col-span-6">
        <h3 className="font-display text-2xl font-light leading-[1.1] tracking-tight text-paper-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.75rem]">
          {title}
        </h3>
      </div>

      {/* En mobile arranca en la columna 3 para alinear con el título en vez
          de colgar debajo del número. */}
      <div className="col-span-10 col-start-3 text-sm leading-relaxed text-paper-muted sm:col-span-4 sm:col-start-auto">
        {body}
      </div>

      <div className="col-span-1 hidden items-center justify-end self-center sm:flex">
        <ArrowUpRight
          aria-hidden
          className="h-5 w-5 text-paper-line transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cobalt-700"
          strokeWidth={1.75}
        />
      </div>
    </li>
  );
}
