"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    sector: "Retail · LATAM",
    title: "Agente de ventas en WhatsApp para cadena de tiendas",
    metric: "+212%",
    metricLabel: "leads cualificados",
    duration: "10 semanas",
    stack: ["Botika", "Meta Cloud API", "HubSpot", "GA4"],
  },
  {
    sector: "Salud · Clínica privada",
    title: "Reemplazo del software clínico legado",
    metric: "−68%",
    metricLabel: "no-shows",
    duration: "14 semanas",
    stack: ["NOVUMed", "Twilio", "Stripe", "FHIR"],
  },
  {
    sector: "E-commerce · D2C",
    title: "Optimización de pauta y atribución cross-channel",
    metric: "6.4×",
    metricLabel: "ROAS (vs 4.1×)",
    duration: "Continuo",
    stack: ["PAUTIK", "Meta Ads", "Google Ads", "BigQuery"],
  },
  {
    sector: "Educación · SaaS",
    title: "Copiloto académico embebido en plataforma LMS",
    metric: "+38%",
    metricLabel: "retención mensual",
    duration: "8 semanas",
    stack: ["RAG", "Claude", "pgvector", "Vercel"],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-32 sm:py-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow border-l border-cobalt-400/60 pl-3">04 · Selección reciente</div>
          </div>
          <h2 className="col-span-12 md:col-span-9 display-tight text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-pretty">
            Proyectos donde el
            <br />
            <span className="font-serif italic text-cobalt-300">resultado</span> es público.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass rounded-3xl p-8 sm:p-9 hover:glass-cobalt transition-all duration-500 flex flex-col gap-6 min-h-[300px] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">{p.sector}</span>
                <span className="glass-chip h-9 w-9 rounded-full grid place-items-center group-hover:bg-cobalt-500/20 group-hover:border-cobalt-300/40 transition-colors">
                  <ArrowUpRight className="h-3.5 w-3.5 text-ivory-200 group-hover:text-cobalt-200 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
              <h3 className="display-tight text-3xl sm:text-[32px] text-ivory-50 leading-[1.05] text-pretty">
                {p.title}
              </h3>
              <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.07]">
                <div>
                  <div className="eyebrow">Outcome</div>
                  <div className="display-tight text-3xl text-cobalt-300 mt-1">{p.metric}</div>
                  <div className="text-[11px] text-ivory-300/70 mt-0.5">{p.metricLabel}</div>
                </div>
                <div>
                  <div className="eyebrow">Duración</div>
                  <div className="display-tight text-3xl text-ivory-50 mt-1">{p.duration}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="glass-chip rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-ultrawide text-ivory-200/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
