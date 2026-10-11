"use client";
/* Pie Ft1: banda navy con el wordmark grande (el logo tal cual: blanco sobre navy).
 * El wordmark se arma al entrar en pantalla, igual que en la cabecera. */
import Link from "next/link";
import { m } from "motion/react";
import Wordmark from "./Wordmark";
import { CONTACTO, NOVUDENT_URL, SITE } from "@/lib/site";
import { EASE_OUT, VISTA } from "@/lib/movimiento";

export default function Pie() {
  const anio = new Date().getFullYear();
  return (
    <footer className="bg-ink text-on-ink">
      <div className="envoltura py-3xl">
        <m.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VISTA}
          transition={{ duration: 1, ease: EASE_OUT }}
        >
          <Wordmark tamano="pie" />
        </m.div>
        <p className="mx-auto mt-xl max-w-[44ch] text-center font-display text-xl leading-snug text-on-ink-2">{SITE.tagline}</p>

        <div className="mt-2xl grid gap-lg border-t border-ink-2 pt-lg text-sm sm:grid-cols-3">
          <ul className="space-y-xs">
            <li><Link className="hover:underline hover:decoration-accent hover:underline-offset-4" href="/novudent">Novudent</Link></li>
            <li><Link className="hover:underline hover:decoration-accent hover:underline-offset-4" href="/novumed">NOVUMed</Link></li>
            <li><a className="hover:underline hover:decoration-accent hover:underline-offset-4" href={NOVUDENT_URL}>Sitio de Novudent</a></li>
          </ul>
          <ul className="space-y-xs">
            <li><a className="hover:underline hover:decoration-accent hover:underline-offset-4" href="#demo">Pedir una demo</a></li>
            {CONTACTO.email && (
              <li><a className="hover:underline hover:decoration-accent hover:underline-offset-4" href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a></li>
            )}
            {CONTACTO.whatsapp && (
              <li><a className="hover:underline hover:decoration-accent hover:underline-offset-4" href={`https://wa.me/${CONTACTO.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            )}
          </ul>
          <p className="mono text-on-ink-2 sm:text-right">
            © {anio} {SITE.name}
            <br />
            {SITE.city}, {SITE.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
