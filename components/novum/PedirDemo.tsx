"use client";

import { useEffect, useId, useState } from "react";
import { ArrowUpRight, Check, MessageSquareText } from "lucide-react";
import { CONTACTO, INTERESES } from "@/lib/site";

type Estado = "escribiendo" | "enviando" | "listo" | "error";
type Errores = Partial<Record<"nombre" | "contacto", string>>;

const esContacto = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || value.replace(/\D/g, "").length >= 8;

export default function PedirDemo({ interes: interesInicial }: { interes?: string }) {
  const id = useId();
  const [estado, setEstado] = useState<Estado>("escribiendo");
  const [errores, setErrores] = useState<Errores>({});
  const [interes, setInteres] = useState(interesInicial ?? "");
  const [nombre, setNombre] = useState("");
  const [sucio, setSucio] = useState(false);

  useEffect(() => {
    if (!sucio || estado === "listo") return;
    const avisar = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener("beforeunload", avisar);
    return () => window.removeEventListener("beforeunload", avisar);
  }, [sucio, estado]);

  useEffect(() => {
    const leer = () => {
      const value = new URLSearchParams(window.location.search).get("interes");
      if (value && (INTERESES as readonly string[]).includes(value)) setInteres(value);
    };
    leer();
    window.addEventListener("popstate", leer);
    window.addEventListener("hashchange", leer);
    return () => {
      window.removeEventListener("popstate", leer);
      window.removeEventListener("hashchange", leer);
    };
  }, []);

  async function enviar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const datos = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const errors: Errores = {};
    if ((datos.nombre ?? "").trim().length < 2) errors.nombre = "Escribí tu nombre.";
    if (!esContacto(datos.contacto ?? "")) errors.contacto = "Dejanos un WhatsApp con código de área o un correo.";
    setErrores(errors);
    if (Object.keys(errors).length) {
      document.getElementById(`${id}-${Object.keys(errors)[0]}`)?.focus();
      return;
    }
    setEstado("enviando");
    try {
      const response = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datos) });
      setEstado(response.ok ? "listo" : "error");
    } catch {
      setEstado("error");
    }
  }

  return (
    <section id="demo" aria-labelledby={`${id}-titulo`} className="demo-section">
      <div className="section-container demo-section__grid">
        <div className="demo-section__intro">
          <span className="eyebrow">05 / Empecemos</span>
          <h2 id={`${id}-titulo`}>Contanos qué querés construir.</h2>
          <p>Una clínica más ordenada, un proceso conectado o un producto nuevo. Dejanos tus datos y coordinamos una conversación.</p>
          <div className="demo-section__note"><MessageSquareText size={19} aria-hidden /> Te respondemos para coordinar, sin compromiso.</div>
        </div>
        {estado === "listo" ? (
          <div className="demo-success" role="status">
            <Check size={35} aria-hidden />
            <h3>Listo{nombre.trim() ? `, ${nombre.trim().split(" ")[0]}` : ""}.</h3>
            <p>Recibimos tu pedido. Te escribimos al contacto que dejaste para coordinar la demo.</p>
          </div>
        ) : (
          <form noValidate onSubmit={enviar} onInput={() => setSucio(true)} className="demo-form">
            <Campo id={`${id}-nombre`} etiqueta="Tu nombre" error={errores.nombre}>
              <input id={`${id}-nombre`} name="nombre" autoComplete="name" className="campo" aria-invalid={!!errores.nombre} aria-describedby={errores.nombre ? `${id}-nombre-e` : undefined} value={nombre} onChange={(event) => setNombre(event.target.value)} required />
            </Campo>
            <Campo id={`${id}-empresa`} etiqueta="Clínica o empresa" opcional>
              <input id={`${id}-empresa`} name="empresa" autoComplete="organization" className="campo" />
            </Campo>
            <Campo id={`${id}-contacto`} etiqueta="WhatsApp o correo" error={errores.contacto}>
              <input id={`${id}-contacto`} name="contacto" autoComplete="email" spellCheck={false} placeholder="0981 123 456 o ana@clinica.com" className="campo" aria-invalid={!!errores.contacto} aria-describedby={errores.contacto ? `${id}-contacto-e` : undefined} required />
            </Campo>
            <Campo id={`${id}-interes`} etiqueta="¿Qué te interesa?">
              <select id={`${id}-interes`} name="interes" className="campo" value={interes} onChange={(event) => setInteres(event.target.value)}>
                <option value="">Elegí una opción</option>
                {INTERESES.map((value) => <option key={value} value={value}>{value}</option>)}
              </select>
            </Campo>
            <div className="demo-form__full">
              <Campo id={`${id}-mensaje`} etiqueta="Contanos un poco más" opcional>
                <textarea id={`${id}-mensaje`} name="mensaje" rows={3} autoComplete="off" className="campo" />
              </Campo>
            </div>
            <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden"><label htmlFor={`${id}-web`}>Sitio web</label><input id={`${id}-web`} name="web" tabIndex={-1} autoComplete="off" /></div>
            <div className="demo-form__submit">
              <button type="submit" className="button button--navy" disabled={estado === "enviando"} aria-busy={estado === "enviando"}>{estado === "enviando" ? "Enviando…" : "Pedir una demo"} <ArrowUpRight size={18} aria-hidden /></button>
              {estado === "error" && <p role="alert" className="text-sm text-error">No pudimos enviarlo. Probá de nuevo{CONTACTO.email ? <> o escribinos a <a className="vinculo" href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a></> : null}.</p>}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Campo({ id, etiqueta, error, opcional, children }: { id: string; etiqueta: string; error?: string; opcional?: boolean; children: React.ReactNode }) {
  return <div><label htmlFor={id}>{etiqueta}{opcional && <span className="ml-xs font-normal text-muted"> (opcional)</span>}</label>{children}{error && <span id={`${id}-e`} role="alert" className="mt-xs block text-sm text-error">{error}</span>}</div>;
}
