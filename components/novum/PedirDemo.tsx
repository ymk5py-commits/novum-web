"use client";
/* Formulario «Pedir una demo» (la acción principal del sitio). Llega por correo a Novum vía
 * /api/demo. Estados: escribiendo → enviando → listo (éxito silencioso: el formulario se
 * reemplaza por una confirmación) o error (mensaje en línea y canales reales si los hay).
 * El producto se puede preelegir con ?interes=Botika (lo usan las filas de la cartera). */
import { useEffect, useId, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { CONTACTO, INTERESES } from "@/lib/site";
import { DUR, EASE_IN, EASE_OUT } from "@/lib/movimiento";
import { Titular, Aparecer } from "./Revelar";

type Estado = "escribiendo" | "enviando" | "listo" | "error";
type Errores = Partial<Record<"nombre" | "contacto", string>>;

const esContacto = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim()) || s.replace(/\D/g, "").length >= 8;

export default function PedirDemo({ interes: interesInicial }: { interes?: string }) {
  const id = useId();
  const [estado, setEstado] = useState<Estado>("escribiendo");
  const [errores, setErrores] = useState<Errores>({});
  const [interes, setInteres] = useState<string>(interesInicial ?? "");
  const [nombre, setNombre] = useState("");

  // Lee ?interes= de la URL (la cartera manda ahí a Botika y PAUTIK, que no tienen página).
  useEffect(() => {
    const leer = () => {
      const v = new URLSearchParams(window.location.search).get("interes");
      if (v && (INTERESES as readonly string[]).includes(v)) setInteres(v);
    };
    leer();
    window.addEventListener("popstate", leer);
    window.addEventListener("hashchange", leer);
    return () => {
      window.removeEventListener("popstate", leer);
      window.removeEventListener("hashchange", leer);
    };
  }, []);

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: Errores = {};
    if ((datos.nombre ?? "").trim().length < 2) errs.nombre = "Escribí tu nombre.";
    if (!esContacto(datos.contacto ?? "")) errs.contacto = "Dejanos un WhatsApp (con código de área) o un correo.";
    setErrores(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`${id}-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setEstado("enviando");
    try {
      const r = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datos) });
      setEstado(r.ok ? "listo" : "error");
    } catch {
      setEstado("error");
    }
  }

  const enviando = estado === "enviando";

  return (
    <section id="demo" aria-labelledby={`${id}-titulo`} className="scroll-mt-20 border-t border-ink py-3xl">
      <div className="grid gap-xl md:grid-cols-12 md:gap-lg">
        <div className="md:col-span-5">
          <Titular id={`${id}-titulo`} texto="Pedí una demo." className="text-display-s" />
          <Aparecer className="mt-md max-w-[40ch] text-ink-2" retraso={0.15}>
            <p>Contanos quién sos y qué te interesa. Te escribimos para coordinar una demostración.</p>
          </Aparecer>
        </div>

        <m.div layout className="md:col-span-6 md:col-start-7" transition={{ layout: { duration: DUR.long, ease: EASE_OUT } }}>
          <AnimatePresence mode="wait" initial={false}>
            {estado === "listo" ? (
              <m.div
                key="listo"
                role="status"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: DUR.long, ease: EASE_OUT }}
                className="border-t border-rule pt-lg"
              >
                <p className="font-display text-3xl leading-tight">Listo{nombre.trim() ? `, ${nombre.trim().split(" ")[0]}` : ""}.</p>
                <p className="mt-sm max-w-[44ch] text-ink-2">Recibimos tu pedido. Te escribimos al contacto que dejaste para coordinar la demo.</p>
              </m.div>
            ) : (
              <m.form
                key="form"
                noValidate
                onSubmit={enviar}
                exit={{ opacity: 0, y: -6, transition: { duration: DUR.short * 0.75, ease: EASE_IN } }}
                className="grid gap-lg sm:grid-cols-2"
              >
                <Campo id={`${id}-nombre`} etiqueta="Nombre" error={errores.nombre}>
                  <input id={`${id}-nombre`} name="nombre" autoComplete="name" className="campo" aria-invalid={!!errores.nombre} aria-describedby={errores.nombre ? `${id}-nombre-e` : undefined} value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </Campo>
                <Campo id={`${id}-empresa`} etiqueta="Clínica o empresa" opcional>
                  <input id={`${id}-empresa`} name="empresa" autoComplete="organization" className="campo" />
                </Campo>
                <Campo id={`${id}-contacto`} etiqueta="WhatsApp o correo" error={errores.contacto}>
                  <input id={`${id}-contacto`} name="contacto" autoComplete="email" inputMode="email" className="campo" aria-invalid={!!errores.contacto} aria-describedby={errores.contacto ? `${id}-contacto-e` : undefined} required />
                </Campo>
                <Campo id={`${id}-interes`} etiqueta="Te interesa">
                  <select id={`${id}-interes`} name="interes" className="campo pr-lg" value={interes} onChange={(e) => setInteres(e.target.value)}>
                    <option value="">Elegí una opción</option>
                    {INTERESES.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </Campo>
                <div className="sm:col-span-2">
                  <Campo id={`${id}-mensaje`} etiqueta="Algo más que quieras contarnos" opcional>
                    <textarea id={`${id}-mensaje`} name="mensaje" rows={3} className="campo resize-y" />
                  </Campo>
                </div>
                {/* Trampa para robots: una persona no ve ni completa este campo. */}
                <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor={`${id}-web`}>Sitio web</label>
                  <input id={`${id}-web`} name="web" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="flex flex-wrap items-center gap-md sm:col-span-2">
                  <button type="submit" className="boton min-w-[11rem] justify-center" disabled={enviando} aria-busy={enviando}>
                    <AnimatePresence mode="wait" initial={false}>
                      <m.span
                        key={enviando ? "enviando" : "pedir"}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: DUR.short }}
                      >
                        {enviando ? "Enviando…" : "Pedir una demo"}
                      </m.span>
                    </AnimatePresence>
                  </button>
                  <AnimatePresence>
                    {estado === "error" && (
                      <m.p role="alert" className="text-sm text-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        No pudimos enviarlo. Probá de nuevo en un rato
                        {CONTACTO.email ? (
                          <>
                            {" "}o escribinos a <a className="vinculo" href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>
                          </>
                        ) : null}
                        {CONTACTO.whatsapp ? (
                          <>
                            {" "}o por <a className="vinculo" href={`https://wa.me/${CONTACTO.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                          </>
                        ) : null}
                        .
                      </m.p>
                    )}
                  </AnimatePresence>
                </div>
              </m.form>
            )}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}

function Campo({ id, etiqueta, error, opcional, children }: { id: string; etiqueta: string; error?: string; opcional?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2xs">
      <label htmlFor={id} className="text-sm text-muted">
        {etiqueta}
        {opcional && <span className="mono ml-xs">(opcional)</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <m.span id={`${id}-e`} className="text-sm text-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {error}
          </m.span>
        )}
      </AnimatePresence>
    </div>
  );
}
