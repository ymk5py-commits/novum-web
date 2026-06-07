"use client";
import { motion } from "framer-motion";

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
    <section id="servicios" className="relative py-32 sm:py-44 border-t border-white/[0.06]">
      <div className="absolute -inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-y-10 gap-x-10">
          {/* intro sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow border-l border-cobalt-400/60 pl-3">02 · Capacidades</div>
              <h2 className="mt-5 display-tight text-4xl sm:text-5xl text-ivory-50 text-pretty">
                Todo lo que <span className="font-serif italic text-ivory-200/85">no</span>
                <br className="hidden sm:block" /> quieres tener{" "}
                <span className="aurora-text">in-house.</span>
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-200/70">
                Un solo equipo para diseño, IA, automatización, pauta y operación. Lo
                construimos, lo conectamos y lo dejamos corriendo solo.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="font-mono text-5xl text-ivory-50 display-tight">08</span>
                <span className="text-xs uppercase tracking-ultrawide text-ivory-300/60 leading-tight">
                  líneas de<br />servicio
                </span>
              </div>
            </div>
          </div>

          {/* ledger */}
          <div className="col-span-12 lg:col-span-8">
            <div className="border-t border-white/[0.10]">
              {items.map((it, i) => (
                <Row key={it.title} n={i + 1} title={it.title} body={it.body} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (n - 1) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-b border-white/[0.10] py-7 sm:py-8"
    >
      {/* hover sweep */}
      <span className="pointer-events-none absolute inset-x-[-12px] inset-y-0 -z-0 rounded-2xl bg-gradient-to-r from-cobalt-500/[0.07] via-cobalt-500/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {/* index */}
      <div className="relative col-span-2 sm:col-span-1">
        <span className="font-mono text-xs text-cobalt-300/80 transition-colors group-hover:text-cobalt-200">
          {String(n).padStart(2, "0")}
        </span>
      </div>
      {/* title */}
      <div className="relative col-span-10 sm:col-span-6">
        <h3 className="display-tight text-2xl sm:text-[2rem] leading-[1.05] text-ivory-50 transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
      </div>
      {/* desc */}
      <div className="relative col-span-12 sm:col-span-4 pl-[calc(16.66%+1rem)] sm:pl-0 text-sm leading-relaxed text-ivory-300/70">
        {body}
      </div>
      {/* arrow */}
      <div className="relative col-span-1 hidden items-center justify-end self-center sm:flex">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-ivory-300/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cobalt-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </div>
    </motion.div>
  );
}
