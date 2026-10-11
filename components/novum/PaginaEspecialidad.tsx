/* Hallmark · genre: editorial · macrostructure: Long Document · design-system: design.md · designed-as-app
 * Una página por especialidad: prosa a 62ch, solo tipografía. NOVUMed (en desarrollo) lo dice arriba. */
import Link from "next/link";
import type { Specialty } from "@/lib/specialties";
import PedirDemo from "./PedirDemo";
import { Aparecer, Titular } from "./Revelar";

export default function PaginaEspecialidad({
  s,
  otras,
  marca,
  nucleo,
}: {
  s: Specialty;
  otras: Specialty[];
  marca: { nombre: string; base: string; enDesarrollo: boolean };
  nucleo: readonly { t: string; d: string }[];
}) {
  return (
    <div className="envoltura">
      <nav aria-label="Ruta" className="mono flex flex-wrap items-center gap-xs pt-xl text-muted">
        <Link href="/" className="hover:text-ink">NOVUM</Link>
        <span aria-hidden>/</span>
        <Link href={`/${marca.base}`} className="hover:text-ink">{marca.nombre}</Link>
        <span aria-hidden>/</span>
        <span className="text-ink">{s.name}</span>
      </nav>

      <article className="mx-auto max-w-medida pb-2xl pt-2xl">
        <Titular texto={s.seoLabel} como="h1" alCargar retraso={0.4} className="text-display-s" />

        {marca.enDesarrollo && (
          <Aparecer alCargar retraso={0.7} className="mt-lg border-l-2 border-accent pl-md text-sm text-ink-2">
            <p>
              <strong className="font-medium text-ink">{marca.nombre} está en desarrollo.</strong> Esto es lo que va a tener para {s.pro}.
              Si querés probarlo antes que nadie, <a href="#demo" className="vinculo">pedí una demo</a>.
            </p>
          </Aparecer>
        )}

        <Aparecer alCargar retraso={0.8} className="mt-xl space-y-lg text-lg leading-relaxed">
          <p className="font-display text-2xl leading-snug">{s.tagline}</p>
          <p className="text-ink-2">{s.intro}</p>
        </Aparecer>

        <h2 className="mt-2xl text-3xl">{marca.enDesarrollo ? "La ficha que estamos armando" : `Lo que usás de ${marca.nombre}`}</h2>
        <ul className="mt-md border-b border-rule">
          {s.ficha.map((f) => (
            <li key={f} className="border-t border-rule py-sm">{f}</li>
          ))}
        </ul>

        <h2 className="mt-2xl text-3xl">Lo que resuelve</h2>
        <div className="mt-md space-y-md text-ink-2">
          {s.pains.map((p) => (
            <p key={p.t}>
              <strong className="font-medium text-ink">{p.t}.</strong> {p.d}
            </p>
          ))}
        </div>

        <h2 className="mt-2xl text-3xl">{marca.enDesarrollo ? `Lo que va a compartir con todas las especialidades` : `Lo que ${marca.nombre} trae para todas`}</h2>
        <dl className="mt-md grid gap-x-lg sm:grid-cols-2">
          {nucleo.map((n) => (
            <div key={n.t} className="border-t border-rule py-sm">
              <dt className="font-medium">{n.t}</dt>
              <dd className="text-sm text-ink-2">{n.d}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-2xl text-3xl">Preguntas</h2>
        <div className="mt-md space-y-lg">
          {s.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-xl tracking-normal">{f.q}</h3>
              <p className="mt-2xs text-ink-2">{f.a}</p>
            </div>
          ))}
        </div>

        <p className="mt-2xl text-ink-2">
          También para:{" "}
          {otras.map((o, i) => (
            <span key={o.slug}>
              <Link href={`/${marca.base}/${o.slug}`} className="vinculo">{o.name.toLowerCase()}</Link>
              {i < otras.length - 2 ? ", " : i === otras.length - 2 ? " y " : "."}
            </span>
          ))}
        </p>
      </article>

      <PedirDemo interes={marca.nombre} />
    </div>
  );
}
