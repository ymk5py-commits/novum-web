"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discovery", body: "Entendemos negocio, dato y restricciones. Definimos métrica de éxito (no “entregables”).", duration: "1 semana" },
  { n: "02", title: "Diseño técnico", body: "Arquitectura, costos por unidad y plan de evals. Tú apruebas antes de escribir una línea.", duration: "1 — 2 semanas" },
  { n: "03", title: "Build & ship", body: "Sprints semanales, demos en vivo. Despliegue continuo desde el día 5.", duration: "4 — 10 semanas" },
  { n: "04", title: "Operación", body: "Monitoreo, mejoras y soporte. Nos quedamos hasta que el sistema corra solo.", duration: "Ongoing" },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-32 sm:py-44 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-900/40 via-navy-950 to-navy-950" />
      <div
        className="aurora -z-10 top-[10%] left-1/2 -translate-x-1/2 h-[400px] w-[700px]"
        style={{ background: "radial-gradient(closest-side, rgba(29,78,216,0.25), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow border-l border-cobalt-400/60 pl-3">03 · Proceso</div>
          </div>
          <h2 className="col-span-12 md:col-span-9 display-tight text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-pretty">
            Cuatro pasos.{" "}
            <span className="aurora-text">Sin PowerPoints.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-7 sm:p-8 flex flex-col gap-5 min-h-[280px] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="display-tight text-2xl text-cobalt-300">{s.n}</span>
                <span className="eyebrow">{s.duration}</span>
              </div>
              <div className="display-tight text-3xl text-ivory-50">{s.title}</div>
              <p className="text-sm text-ivory-200/80 leading-relaxed">{s.body}</p>
              <div className="mt-auto flex items-center gap-2">
                <span className="h-px w-12 bg-cobalt-400/70" />
                <span className="h-1 w-1 rounded-full bg-cobalt-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
