"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { SPECIALTIES, DENTAL_SPECIALTIES } from "@/lib/specialties";

function Item({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <a href={href} className="group block rounded-2xl px-3 py-2 transition-colors hover:bg-white/[0.05]">
      <div className="text-sm text-ivory-50 group-hover:text-cobalt-200">{title}</div>
      <div className="text-[11px] text-ivory-300/60">{desc}</div>
    </a>
  );
}

export function ProductsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <a
        href="/#productos"
        className="flex items-center gap-1 rounded-full px-3 py-1.5 text-ivory-200/85 transition-colors hover:bg-white/[0.05] hover:text-ivory-50"
      >
        Productos
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full w-[680px] max-w-[90vw] -translate-x-1/2 pt-3"
          >
            <div className="grid grid-cols-3 gap-4 rounded-3xl glass-strong p-5 shadow-glass-lg">
              {/* Plataformas */}
              <div>
                <div className="eyebrow mb-2 px-3">Plataformas</div>
                <Item href="/#productos" title="Botika" desc="Agentes conversacionales (IA)" />
                <Item href="/#productos" title="PAUTIK" desc="Pauta programática" />
                <div className="mx-3 my-2 h-px bg-white/[0.06]" />
                <Item href="/#precios" title="Precios" desc="Planes y cotización" />
              </div>

              {/* NOVUMed */}
              <div>
                <a href="/novumed" className="mb-2 flex items-center gap-1 px-3 font-mono text-[10px] uppercase tracking-ultrawide text-cobalt-300 hover:text-cobalt-100">
                  NOVUMed <ArrowUpRight className="h-3 w-3" />
                </a>
                <div className="grid">
                  {SPECIALTIES.map((s) => (
                    <a key={s.slug} href={`/novumed/${s.slug}`} className="rounded-xl px-3 py-1 text-[13px] text-ivory-200/80 transition-colors hover:bg-white/[0.05] hover:text-cobalt-100">
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* NOVUdent */}
              <div>
                <a href="/novudent" className="mb-2 flex items-center gap-1 px-3 font-mono text-[10px] uppercase tracking-ultrawide text-cobalt-300 hover:text-cobalt-100">
                  NOVUdent <ArrowUpRight className="h-3 w-3" />
                </a>
                <div className="grid">
                  {DENTAL_SPECIALTIES.map((s) => (
                    <a key={s.slug} href={`/novudent/${s.slug}`} className="rounded-xl px-3 py-1 text-[13px] text-ivory-200/80 transition-colors hover:bg-white/[0.05] hover:text-cobalt-100">
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
