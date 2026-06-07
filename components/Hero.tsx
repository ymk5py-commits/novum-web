"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { GlassButton, GlassChip } from "./primitives/GlassButton";
import { NovumLogo } from "./brand/NovumLogo";
import ShaderBackground from "./brand/ShaderBackground";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* ===== Background composition ===== */}
      <div className="absolute inset-0 -z-[40] bg-navy-950" />
      <ShaderBackground className="absolute inset-0 -z-[30] h-full w-full" />
      <div className="absolute inset-0 -z-[20] grid-lines opacity-[0.18]" />
      <div className="absolute inset-0 -z-[18] noise opacity-[0.22] mix-blend-overlay" />
      {/* scrim para contraste del contenido sobre la nebulosa */}
      <div className="absolute inset-0 -z-[15] bg-gradient-to-b from-navy-950/40 via-navy-950/10 to-navy-950" />
      <div className="absolute inset-x-0 bottom-0 -z-[15] h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <GlassChip dot tone="cobalt">Holding · Studio</GlassChip>
          <span className="h-px w-10 bg-white/10 hidden sm:block" />
          <span className="eyebrow">Bogotá · LATAM · Remoto global</span>
        </motion.div>

        {/* Brand logo — home */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-14 relative"
        >
          <span className="absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-cobalt-500/[0.07] blur-3xl rounded-full" />
          <NovumLogo size="xl" align="left" className="text-ivory-50" />
        </motion.div>

        {/* Headline / value prop */}
        <div className="mt-12 sm:mt-16 grid grid-cols-12 gap-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 display-tight text-4xl sm:text-5xl lg:text-[3.6rem] text-ivory-50 max-w-4xl leading-[1.02]"
          >
            Sistemas que{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cobalt-200 via-cobalt-300 to-cobalt-400 bg-clip-text text-transparent">
                piensan
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-cobalt-500/20 blur-2xl rounded-full" />
            </span>
            , <span className="font-serif italic text-ivory-200/90">venden</span> y operan por ti.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="col-span-12 md:col-span-6"
          >
            <p className="text-ivory-200/80 text-lg leading-[1.7] text-pretty max-w-lg">
              NOVUM es un <em className="not-italic font-medium text-ivory-50">holding</em> de tres
              productos propietarios y un studio que los implementa: <em className="not-italic font-medium text-cobalt-300">Botika</em> para
              agentes conversacionales, <em className="not-italic font-medium text-cobalt-300">PAUTIK</em> para pauta programática
              y <em className="not-italic font-medium text-cobalt-300">NOVUMed</em> para CRM clínico.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <GlassButton href="#productos" variant="primary" size="lg">
                Ver productos
              </GlassButton>
              <GlassButton href="#contacto" variant="ghost" size="lg" icon={false}>
                Hablar con fundadores
              </GlassButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="col-span-12 md:col-span-5 md:col-start-8 self-end"
          >
            <div className="glass rounded-3xl p-6 grid grid-cols-3 gap-5">
              <Stat n="+34" label="En producción" />
              <Stat n="11" label="Verticales" />
              <Stat n="99.9%" label="Uptime" mono />
            </div>
          </motion.div>
        </div>

        {/* Showreel card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-16 sm:mt-20 relative glass rounded-3xl overflow-hidden"
        >
          <div className="aspect-[16/7] relative">
            <video
              src="/assets/showreel.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-700/30 via-transparent to-cobalt-500/10 mix-blend-overlay" />

            {/* Floating play badge */}
            <div className="absolute top-5 sm:top-7 left-5 sm:left-7">
              <GlassChip dot tone="mint">Showreel · 26"</GlassChip>
            </div>
            <div className="absolute top-5 sm:top-7 right-5 sm:right-7">
              <GlassChip>Live</GlassChip>
            </div>

            {/* Center play affordance */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="glass-strong h-16 w-16 rounded-full grid place-items-center shadow-glow">
                <Play className="h-6 w-6 text-ivory-50 fill-ivory-50/80 translate-x-0.5" />
              </div>
            </div>

            {/* Bottom caption */}
            <div className="absolute left-5 sm:left-8 bottom-5 sm:bottom-8 right-5 sm:right-8 flex items-end justify-between">
              <div>
                <div className="eyebrow">Diseñado en Bogotá</div>
                <div className="display-tight text-2xl sm:text-3xl text-ivory-50 mt-1">
                  Desplegado donde lo necesites.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, label, mono = false }: { n: string; label: string; mono?: boolean }) {
  return (
    <div>
      <div
        className={`text-ivory-50 leading-none ${
          mono ? "font-mono text-2xl sm:text-3xl" : "display-tight text-3xl sm:text-4xl"
        }`}
      >
        {n}
      </div>
      <div className="eyebrow mt-2">{label}</div>
    </div>
  );
}
