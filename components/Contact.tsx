"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { GlassChip } from "./primitives/GlassButton";
import { NeoButton } from "./magic/NeoButton";
import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contacto" className="relative py-32 sm:py-44 overflow-hidden">
      <div className="absolute inset-0 -z-10 noise opacity-[0.4]" />
      <div
        className="aurora -z-10 bottom-[-200px] left-1/2 -translate-x-1/2 h-[600px] w-[1000px]"
        style={{ background: "radial-gradient(closest-side, rgba(77,124,255,0.45), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex"><GlassChip dot tone="cobalt">05 · Empecemos</GlassChip></div>

          <h2 className="mt-6 display-tight text-5xl sm:text-7xl lg:text-[9rem] text-ivory-50 leading-[0.92]">
            ¿Tienes un sistema
            <br />
            en mente?{" "}
            <span className="font-serif italic bg-gradient-to-r from-cobalt-200 via-cobalt-300 to-cobalt-400 bg-clip-text text-transparent">
              Lo construimos.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-ivory-200/80 text-lg leading-relaxed text-pretty">
            Agenda 30 minutos con un fundador. Sin SDR, sin demo genérico — entras a una
            conversación técnica desde el primer minuto.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <NeoButton
              href={`mailto:${SITE.email}`}
              size="lg"
              icon={false}
              leftIcon={<Mail className="h-4 w-4 text-cobalt-100" />}
            >
              {SITE.email}
            </NeoButton>
            <a
              href={SITE.whatsapp}
              className="sheen group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm text-ivory-100 hover:bg-white/[0.08] transition-all"
            >
              <MessageCircle className="h-4 w-4 text-signal-mint" />
              WhatsApp directo
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="sheen group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm text-ivory-100 hover:bg-white/[0.08] transition-all"
            >
              <Phone className="h-4 w-4 text-signal-amber" />
              {SITE.phone}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <Pill k="HQ" v="Asunción" />
            <Pill k="Remoto" v="LATAM · USA · EU" />
            <Pill k="Respuesta" v="< 12 horas" />
            <Pill k="NDA" v="Disponible" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pill({ k, v }: { k: string; v: string }) {
  return (
    <div className="glass rounded-2xl px-5 py-4 text-left">
      <div className="eyebrow">{k}</div>
      <div className="text-ivory-50 mt-1 display-tight text-lg">{v}</div>
    </div>
  );
}
