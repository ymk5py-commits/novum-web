"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SITE } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 sm:py-44 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-10">
          {/* Sticky header */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow border-l border-cobalt-400/60 pl-3">06 · Preguntas frecuentes</div>
              <h2 className="mt-4 display-tight text-4xl sm:text-5xl text-ivory-50 text-pretty">
                Lo que todos
                <br />
                <span className="aurora-text">preguntan.</span>
              </h2>
              <p className="mt-5 text-sm text-ivory-200/75 leading-relaxed max-w-xs">
                ¿No está aquí? Escríbenos a{" "}
                <a href={`mailto:${SITE.email}`} className="text-cobalt-300 hover:underline">
                  {SITE.email}
                </a>{" "}
                y te respondemos en menos de 12 horas.
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col gap-3">
              {SITE.faqs.map((f, i) => (
                <motion.details
                  key={f.q}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group glass rounded-3xl overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6 list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="display-tight text-xl sm:text-2xl text-ivory-50 group-open:text-cobalt-200 transition-colors">
                      {f.q}
                    </h3>
                    <span className="glass-chip h-9 w-9 shrink-0 rounded-full grid place-items-center group-open:bg-cobalt-500/20 group-open:border-cobalt-300/40 transition-colors">
                      <Plus className="h-4 w-4 text-ivory-200 transition-transform duration-300 group-open:rotate-45 group-open:text-cobalt-200" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 -mt-1">
                    <p className="text-ivory-200/80 leading-[1.75] max-w-2xl text-pretty">{f.a}</p>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
