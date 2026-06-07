"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SPECIALTIES, DENTAL_SPECIALTIES } from "@/lib/specialties";
import { NeoButton } from "./magic/NeoButton";
import { NovumLogo } from "./brand/NovumLogo";

const quick = [
  { href: "/#productos", label: "Productos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#precios", label: "Precios" },
  { href: "/#contacto", label: "Contacto" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        className="grid h-9 w-9 place-items-center rounded-full glass-chip text-ivory-100"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            data-lenis-prevent
            className="fixed inset-0 z-[80] overflow-y-auto bg-navy-950/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-5 py-5">
              <div className="flex items-center justify-between">
                <NovumLogo size="sm" subline={false} className="text-ivory-50" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="grid h-9 w-9 place-items-center rounded-full glass-chip text-ivory-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="mt-8 flex flex-col gap-1"
                onClick={() => setOpen(false)}
              >
                {quick.map((l) => (
                  <a key={l.href} href={l.href} className="display-tight rounded-2xl px-3 py-2.5 text-3xl text-ivory-50 hover:text-cobalt-200">
                    {l.label}
                  </a>
                ))}

                <div className="mt-6">
                  <a href="/novumed" className="flex items-center gap-1.5 px-3 font-mono text-[11px] uppercase tracking-ultrawide text-cobalt-300">
                    NOVUMed <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <div className="mt-2 flex flex-wrap gap-2 px-3">
                    {SPECIALTIES.map((s) => (
                      <a key={s.slug} href={`/novumed/${s.slug}`} className="rounded-full glass-chip px-3 py-1.5 text-xs text-ivory-200/85">
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <a href="/novudent" className="flex items-center gap-1.5 px-3 font-mono text-[11px] uppercase tracking-ultrawide text-cobalt-300">
                    NOVUdent <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <div className="mt-2 flex flex-wrap gap-2 px-3">
                    {DENTAL_SPECIALTIES.map((s) => (
                      <a key={s.slug} href={`/novudent/${s.slug}`} className="rounded-full glass-chip px-3 py-1.5 text-xs text-ivory-200/85">
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 px-3">
                  <NeoButton href="/#contacto" size="lg">Agendar demo</NeoButton>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
