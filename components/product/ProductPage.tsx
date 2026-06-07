"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus, ArrowUpRight, Sparkles } from "lucide-react";
import type { ProductConfig } from "@/lib/products";
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow border-l border-cobalt-400/60 pl-3">{children}</div>;
}

export default function ProductPage({ config, visual }: { config: ProductConfig; visual: React.ReactNode }) {
  const [tab, setTab] = useState(0);
  const sp = config.specialties?.[tab];

  return (
    <>
      <ProductHeader />
      <main className="relative bg-navy-950">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
          <div className="absolute inset-0 -z-10 bg-navy-950" />
          <div
            className="absolute inset-x-0 top-0 -z-10 h-[60vh]"
            style={{ background: "radial-gradient(900px 520px at 70% 0%, rgba(23,105,224,0.16), transparent 60%)" }}
          />
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <GlassChip dot tone="cobalt">{config.eyebrow}</GlassChip>
              <h1 className="mt-5 display-tight text-5xl sm:text-6xl lg:text-7xl text-ivory-50">
                <span className="block text-cobalt-300">{config.name}</span>
                <span className="aurora-text">{config.tagline}</span>
              </h1>
              <p className="mt-6 max-w-xl text-ivory-200/80 leading-relaxed">{config.intro}</p>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {config.heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ivory-100/90">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cobalt-500/20 text-cobalt-200">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <NeoButton href="#contacto" size="lg">Agendar demo</NeoButton>
                <GlassButton href="#precios" variant="ghost" size="lg" icon={false}>Ver planes</GlassButton>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              {visual}
            </motion.div>
          </div>
        </section>

        {/* ===== PROBLEMA ===== */}
        <section className="relative border-t border-white/[0.06] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div {...reveal} className="grid grid-cols-12 items-end gap-6">
              <div className="col-span-12 md:col-span-3"><Eyebrow>El problema</Eyebrow></div>
              <h2 className="col-span-12 display-tight text-3xl sm:text-4xl lg:text-5xl text-ivory-50 text-pretty md:col-span-9">
                Tu clínica no se cae por falta de pacientes. Se cae por <span className="aurora-text">desorden</span>.
              </h2>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {config.problems.map((p, i) => (
                <motion.div key={p.t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }} className="rounded-3xl glass p-6">
                  <div className="display-tight text-xl text-ivory-50">{p.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-200/70">{p.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MÓDULOS ===== */}
        <section className="relative border-t border-white/[0.06] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div {...reveal} className="grid grid-cols-12 items-end gap-6">
              <div className="col-span-12 md:col-span-3"><Eyebrow>Módulos</Eyebrow></div>
              <h2 className="col-span-12 display-tight text-3xl sm:text-4xl lg:text-5xl text-ivory-50 text-pretty md:col-span-9">
                Todo lo que tu día necesita, <span className="aurora-text">en un solo lugar</span>.
              </h2>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {config.modules.map((m, i) => (
                <SpotlightCard key={m.t} index={i} className="rounded-3xl glass p-6 min-h-[150px]">
                  <div className="relative z-10">
                    <div className="display-tight text-lg text-ivory-50">{m.t}</div>
                    <p className="mt-2 text-sm leading-relaxed text-ivory-200/70">{m.d}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ESPECIALIDADES (NOVUMed) ===== */}
        {config.specialties && (
          <section className="relative border-t border-white/[0.06] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <motion.div {...reveal} className="grid grid-cols-12 items-end gap-6">
                <div className="col-span-12 md:col-span-3"><Eyebrow>Por especialidad</Eyebrow></div>
                <h2 className="col-span-12 display-tight text-3xl sm:text-4xl lg:text-5xl text-ivory-50 text-pretty md:col-span-9">
                  Cada especialidad, con su <span className="aurora-text">propia ficha</span>.
                </h2>
              </motion.div>
              <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap gap-2 lg:flex-col">
                    {config.specialties.map((s, i) => (
                      <button
                        key={s.name}
                        onClick={() => setTab(i)}
                        className={`rounded-full px-4 py-2 text-left text-sm transition-colors lg:rounded-2xl lg:px-5 lg:py-3 ${
                          i === tab ? "glass-cobalt text-ivory-50" : "glass-chip text-ivory-200/75 hover:text-ivory-50"
                        }`}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="relative h-full overflow-hidden rounded-3xl glass-strong p-7 sm:p-9">
                    <BorderBeam />
                    <div className="relative z-10">
                      <div className="display-tight text-2xl text-ivory-50 sm:text-3xl">{sp?.name}</div>
                      <p className="mt-1 text-sm text-ivory-300/70">Campos y flujo configurados para esta especialidad:</p>
                      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {sp?.fields.map((f) => (
                          <li key={f} className="flex items-start gap-3 rounded-2xl glass-chip px-4 py-3 text-sm text-ivory-100/90">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cobalt-500/20 text-cobalt-200">
                              <Check className="h-3 w-3" strokeWidth={2.5} />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      {sp?.slug && (
                        <a
                          href={`/novumed/${sp.slug}`}
                          className="mt-6 inline-flex items-center gap-1.5 text-sm text-cobalt-200 transition-colors hover:text-cobalt-100"
                        >
                          Ver software para {sp.name.toLowerCase()}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===== DENTAL (NOVUdent) ===== */}
        {config.dental && (
          <section className="relative border-t border-white/[0.06] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <motion.div {...reveal} className="grid grid-cols-12 items-end gap-6">
                <div className="col-span-12 md:col-span-3"><Eyebrow>Hecho para odontología</Eyebrow></div>
                <h2 className="col-span-12 display-tight text-3xl sm:text-4xl lg:text-5xl text-ivory-50 text-pretty md:col-span-9">
                  Lo que un software médico genérico <span className="aurora-text">no tiene</span>.
                </h2>
              </motion.div>
              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {config.dental.map((m, i) => (
                  <SpotlightCard key={m.t} index={i} className="rounded-3xl glass p-7">
                    <div className="relative z-10">
                      <div className="display-tight text-xl text-ivory-50">{m.t}</div>
                      <p className="mt-2 text-sm leading-relaxed text-ivory-200/70">{m.d}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== IA ===== */}
        <section className="relative border-t border-white/[0.06] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div {...reveal} className="grid grid-cols-12 items-end gap-6">
              <div className="col-span-12 md:col-span-3"><Eyebrow>Capa de IA</Eyebrow></div>
              <h2 className="col-span-12 display-tight text-3xl sm:text-4xl lg:text-5xl text-ivory-50 text-pretty md:col-span-9">
                Con <span className="aurora-text">Botika</span> adentro: atiende, agenda y cobra por ti.
              </h2>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {config.ai.map((m, i) => (
                <motion.div key={m.t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }} className="rounded-3xl glass-cobalt p-6">
                  <Sparkles className="h-5 w-5 text-cobalt-200" strokeWidth={1.5} />
                  <div className="mt-4 display-tight text-lg text-ivory-50">{m.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-100/80">{m.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INTEGRACIONES ===== */}
        <section className="relative border-t border-white/[0.06] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <div className="eyebrow">Se conecta con</div>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {config.integrations.map((t) => (
                <span key={t} className="rounded-full glass-chip px-4 py-2 font-mono text-[11px] uppercase tracking-ultrawide text-ivory-200/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRECIOS ===== */}
        <section id="precios" className="relative border-t border-white/[0.06] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div {...reveal} className="text-center">
              <div className="inline-flex"><GlassChip dot tone="cobalt">Planes</GlassChip></div>
              <h2 className="mt-5 display-tight text-3xl sm:text-4xl lg:text-5xl text-ivory-50">
                Precios claros. <span className="aurora-text">Sin sorpresas.</span>
              </h2>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
              {config.plans.map((p, i) => (
                <motion.div
                  key={p.name}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.06 }}
                  className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${p.featured ? "liquid-glass md:-translate-y-3" : "glass"}`}
                >
                  {p.featured && <BorderBeam duration={7} />}
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2"><GlassChip dot tone="cobalt">Más elegido</GlassChip></span>
                  )}
                  <div className="relative z-10 flex grow flex-col">
                    <div className="display-tight text-2xl text-ivory-50">{p.name}</div>
                    <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-ivory-200/70">{p.blurb}</p>
                    <div className="mt-5 display-tight text-3xl text-ivory-50">{p.price}</div>
                    <ul className="mt-6 grid gap-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-ivory-100/90">
                          <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.featured ? "bg-cobalt-500/25 text-cobalt-100" : "bg-white/[0.06] text-cobalt-300"}`}>
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-2">
                      {p.featured ? (
                        <NeoButton href="#contacto" size="md" className="w-full justify-center">Empezar</NeoButton>
                      ) : (
                        <GlassButton href="#contacto" variant="outline" size="md" icon={false}>Hablar con ventas</GlassButton>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-ultrawide text-ivory-300/50">
              Precios referenciales en USD · Sin contratos largos · Migración incluida
            </p>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="relative border-t border-white/[0.06] py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <motion.div {...reveal} className="text-center">
              <div className="inline-flex"><GlassChip dot tone="cobalt">FAQ</GlassChip></div>
              <h2 className="mt-5 display-tight text-3xl sm:text-4xl text-ivory-50">Preguntas frecuentes</h2>
            </motion.div>
            <div className="mt-10 flex flex-col gap-3">
              {config.faqs.map((f) => (
                <details key={f.q} className="group overflow-hidden rounded-3xl glass">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                    <h3 className="display-tight text-lg text-ivory-50 group-open:text-cobalt-200">{f.q}</h3>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full glass-chip">
                      <Plus className="h-4 w-4 text-ivory-200 transition-transform duration-300 group-open:rotate-45 group-open:text-cobalt-200" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="leading-relaxed text-ivory-200/80 text-pretty">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CROSS-LINK ===== */}
        <section className="relative border-t border-white/[0.06] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <a
              href={`/${config.cross.slug}`}
              className="group flex flex-col items-start justify-between gap-4 rounded-3xl glass p-7 transition-all hover:glass-cobalt sm:flex-row sm:items-center"
            >
              <div>
                <div className="eyebrow">Otra rama de NOVUM</div>
                <div className="mt-1.5 display-tight text-2xl text-ivory-50">{config.cross.name}</div>
                <p className="mt-1 max-w-xl text-sm text-ivory-200/70">{config.cross.desc}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm text-cobalt-200">
                Conocer {config.cross.name}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
