"use client";
import { SpotlightCard } from "@/components/magic/SpotlightCard";
import {
  Brain,
  Workflow,
  LineChart,
  Boxes,
  Smartphone,
  Layers,
  Plug,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "IA aplicada a negocio",
    body: "Asistentes verticales, copilotos internos, motores de recomendación y RAG sobre datos propios.",
    span: "md:col-span-2",
    accent: true,
  },
  { icon: Workflow, title: "Automatización end-to-end", body: "n8n, Make, Zapier o código propio — donde mueva la aguja.", span: "md:col-span-1" },
  { icon: Plug, title: "Integraciones a medida", body: "ERPs, CRMs, pasarelas, mensajería, agenda — APIs y conectores propios.", span: "md:col-span-1" },
  {
    icon: LineChart,
    title: "Pauta · Performance",
    body: "Operación y consultoría en Meta · Google · TikTok. Atribución unificada y reporting.",
    span: "md:col-span-2",
    accent: true,
  },
  { icon: Boxes, title: "Producto SaaS", body: "De cero a MVP en 8 semanas. Diseño, arquitectura y crecimiento.", span: "md:col-span-1" },
  { icon: Smartphone, title: "Web & Mobile", body: "Sitios performantes, e-commerce headless y apps nativas / cross-platform.", span: "md:col-span-1" },
  { icon: Layers, title: "Data · Analítica", body: "GA4, dataLayer, Looker y warehouses pequeños pero correctos.", span: "md:col-span-1" },
  { icon: ShieldCheck, title: "DevOps · Operación", body: "Despliegues continuos, observabilidad y SLAs reales — sin sorpresas.", span: "md:col-span-2" },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 sm:py-44 overflow-hidden">
      <div className="absolute -inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow border-l border-cobalt-400/60 pl-3">02 · Servicios</div>
          </div>
          <h2 className="col-span-12 md:col-span-9 display-tight text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-pretty">
            Todo lo que{" "}
            <span className="font-serif italic text-ivory-200/85">no</span> quieres
            <br />
            tener{" "}
            <span className="bg-gradient-to-r from-cobalt-200 to-cobalt-400 bg-clip-text text-transparent">
              in-house.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <SpotlightCard
              key={c.title}
              index={i}
              className={`flex flex-col rounded-3xl p-7 sm:p-8 min-h-[220px] transition-all duration-500
                ${c.accent ? "glass-cobalt" : "glass"}
                ${c.span ?? ""}
                hover:-translate-y-1 hover:shadow-glass-lg`}
            >
              <div className="relative z-10 flex grow flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="glass-chip h-10 w-10 rounded-2xl grid place-items-center">
                    <c.icon className="h-4 w-4 text-cobalt-300" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] text-ivory-300/60">0{i + 1}</span>
                </div>
                <div>
                  <div className="display-tight text-2xl sm:text-[28px] text-ivory-50 leading-tight">{c.title}</div>
                  <p className="mt-2.5 text-sm text-ivory-200/75 max-w-sm leading-relaxed">{c.body}</p>
                </div>
                <div className="h-px w-10 bg-cobalt-400/60 group-hover:w-20 transition-all duration-500" />
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
