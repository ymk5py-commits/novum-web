"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { GlassChip } from "./primitives/GlassButton";

const WorldMap = dynamic(() => import("./WorldMap"), {
  ssr: false,
  loading: () => <div className="aspect-[2/1] w-full animate-pulse rounded-3xl bg-white/[0.03]" />,
});

const cities = ["Asunción", "São Paulo", "Buenos Aires", "Ciudad de México", "Miami", "Madrid", "New York"];

export default function GlobalReach() {
  return (
    <section id="cobertura" className="relative py-32 sm:py-44 border-t border-white/[0.06] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex"><GlassChip dot tone="cobalt">Cobertura</GlassChip></div>
          <h2 className="mt-5 display-tight text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-pretty">
            Desde <span className="aurora-text">Asunción</span>, para el mundo.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory-200/75 leading-relaxed">
            Operamos en remoto para Paraguay, LATAM, Estados Unidos y Europa. Mismo equipo,
            misma calidad, sin fronteras ni husos horarios que frenen tu proyecto.
          </p>
        </motion.div>

        <div className="mt-12">
          <WorldMap />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {cities.map((c) => (
            <span
              key={c}
              className="glass-chip rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultrawide text-ivory-200/80"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
