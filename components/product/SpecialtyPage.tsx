"use client";
import { motion } from "framer-motion";
import { Check, Plus, ArrowUpRight } from "lucide-react";
import type { Specialty } from "@/lib/specialties";
import { GlassChip, GlassButton } from "../primitives/GlassButton";
import { NeoButton } from "../magic/NeoButton";
import { SpotlightCard } from "../magic/SpotlightCard";
import { BorderBeam } from "../magic/BorderBeam";
import ProductHeader from "./ProductHeader";
import Contact from "../Contact";
import Footer from "../Footer";

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const CORE = [
  { t: "Agenda inteligente", d: "Online, por profesional y box, con reagendamiento automático." },
  { t: "Recordatorios WhatsApp", d: "Confirmación automática por el canal #1 de Paraguay (anti no-show)." },
  { t: "Facturación electrónica", d: "Emisión, medios de pago, caja y cobranzas." },
  { t: "Telemedicina", d: "Videoconsulta integrada y portal del paciente." },
  { t: "Botika (agente IA)", d: "Atiende, agenda y confirma por WhatsApp e Instagram, 24/7." },
  { t: "Reportes y KPIs", d: "Más de 50 reportes para decidir con datos." },
];

export default function SpecialtyPage({ s, others }: { s: Specialty; others: Specialty[] }) {
  return (
    <>
      <ProductHeader />
      <main className="relative bg-navy-950">
        {/* HERO */}
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
          <div
            className="absolute inset-x-0 top-0 -z-10 h-[60vh]"
            style={{ background: "radial-gradient(900px 520px at 70% 0%, rgba(23,105,224,0.16), transparent 60%)" }}
          />
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <nav className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-ultrawide text-ivory-300/60">
                <a href="/" className="hover:text-ivory-100">NOVUM</a><span>/</span>
                <a href="/novumed" className="hover:text-ivory-100">NOVUMed</a><span>/</span>
                <span className="text-cobalt-300">{s.name}</span>
              </nav>
              <GlassChip dot tone="cobalt">NOVUMed · Especialidad</GlassChip>
              <h1 className="mt-5 display-tight text-5xl sm:text-6xl lg:text-7xl text-ivory-50">{s.seoLabel}</h1>
              <p className="mt-4 text-xl text-ivory-100/90">{s.tagline}</p>
              <p className="mt-5 max-w-xl text-ivory-200/80 leading-relaxed">{s.intro}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <NeoButton href="#contacto" size="lg">Agendar demo</NeoButton>
                <GlassButton href="/novumed" variant="ghost" size="lg" icon={false}>Ver NOVUMed</GlassButton>
              </div>
            </div>

            {/* Ficha visual */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-cobalt-500/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl glass-strong p-6 sm:p-8 shadow-glass-lg">
                  <BorderBeam />
                  <div className="relative z-10">
                    <div className="eyebrow">Ficha de {s.name.toLowerCase()}</div>
                    <div className="mt-4 grid gap-2.5">
                      {s.ficha.map((f) => (
                        <div key={f} className="flex items-center gap-3 rounded-2xl glass-chip px-4 py-3 text-sm text-ivory-100/90">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cobalt-500/20 text-cobalt-200">
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PAINS */}
        <section className="relative border-t border-white/[0.06] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.h2 {...reveal} className="display-tight text-3xl sm:text-4xl lg:text-5xl text-ivory-50 text-pretty max-w-3xl">
              Pensado para el día a día de los <span className="aurora-text">{s.pro}</span>.
            </motion.h2>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {s.pains.map((p, i) => (
                <motion.div key={p.t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }} className="rounded-3xl glass p-6">
                  <div className="display-tight text-xl text-ivory-50">{p.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-200/70">{p.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE incluido */}
        <section className="relative border-t border-white/[0.06] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.h2 {...reveal} className="display-tight text-3xl sm:text-4xl lg:text-5xl text-ivory-50 text-pretty max-w-3xl">
              Y todo NOVUMed, <span className="aurora-text">incluido</span>.
            </motion.h2>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CORE.map((m, i) => (
                <SpotlightCard key={m.t} index={i} className="rounded-3xl glass p-6 min-h-[140px]">
                  <div className="relative z-10">
                    <div className="display-tight text-lg text-ivory-50">{m.t}</div>
                    <p className="mt-2 text-sm leading-relaxed text-ivory-200/70">{m.d}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-t border-white/[0.06] py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <motion.h2 {...reveal} className="text-center display-tight text-3xl sm:text-4xl text-ivory-50">Preguntas frecuentes</motion.h2>
            <div className="mt-10 flex flex-col gap-3">
              {s.faqs.map((f) => (
                <details key={f.q} className="group overflow-hidden rounded-3xl glass">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                    <h3 className="display-tight text-lg text-ivory-50 group-open:text-cobalt-200">{f.q}</h3>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full glass-chip">
                      <Plus className="h-4 w-4 text-ivory-200 transition-transform duration-300 group-open:rotate-45 group-open:text-cobalt-200" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 -mt-1"><p className="leading-relaxed text-ivory-200/80 text-pretty">{f.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* OTRAS ESPECIALIDADES (internal linking SEO) */}
        <section className="relative border-t border-white/[0.06] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="eyebrow">Otras especialidades</div>
            <div className="mt-5 flex flex-wrap gap-2">
              {others.map((o) => (
                <a
                  key={o.slug}
                  href={`/novumed/${o.slug}`}
                  className="group inline-flex items-center gap-1.5 rounded-full glass-chip px-4 py-2 text-sm text-ivory-200/80 transition-colors hover:text-cobalt-100"
                >
                  {o.seoLabel}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
