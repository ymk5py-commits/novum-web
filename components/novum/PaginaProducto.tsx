/* Hallmark · genre: editorial · macrostructure: Split Studio · design-system: design.md · designed-as-app */
import Link from "next/link";
import type { PaginaProducto as Datos } from "@/lib/productos";
import type { Specialty } from "@/lib/specialties";
import { NOVUDENT_DEMO, NOVUDENT_PRECIOS } from "@/lib/site";
import Diptico from "./Diptico";
import Preguntas from "./Preguntas";
import PedirDemo from "./PedirDemo";
import { Aparecer, Titular } from "./Revelar";

export default function PaginaProducto({ datos, especialidades }: { datos: Datos; especialidades: Specialty[] }) {
  const enProduccion = datos.estado === "En producción";
  return (
    <div className="envoltura">
      <nav aria-label="Ruta" className="mono flex flex-wrap items-center gap-xs pt-xl text-muted">
        <Link href="/" className="hover:text-ink">NOVUM</Link>
        <span aria-hidden>/</span>
        <span className="text-ink">{datos.nombre}</span>
        <span aria-hidden className="ml-sm">·</span>
        <span className={`flex items-center gap-xs ${enProduccion ? "text-accent-ink" : ""}`}>
          <span aria-hidden className={`inline-block h-[7px] w-[7px] rounded-full ${enProduccion ? "bg-accent" : "border border-muted"}`} />
          {datos.estado}
        </span>
      </nav>

      <section className="grid gap-xl pb-2xl pt-xl md:grid-cols-12 md:items-end md:gap-lg">
        <Titular texto={datos.titular} como="h1" alCargar retraso={0.45} className="text-display md:col-span-8" />
        <Aparecer alCargar retraso={0.9} className="md:col-span-4">
          <p className="max-w-[40ch] text-ink-2">{datos.bajada}</p>
          <div className="mt-lg flex flex-wrap items-center gap-x-lg gap-y-sm">
            <a href="#demo" className="boton">Pedir una demo</a>
            {enProduccion && (
              <a href={NOVUDENT_DEMO} className="vinculo text-sm">
                Probar la demo <span aria-hidden>→</span>
              </a>
            )}
          </div>
          {enProduccion && (
            <a href={NOVUDENT_PRECIOS} className="vinculo mt-sm text-sm">
              Ver planes y precios <span aria-hidden>→</span>
            </a>
          )}
        </Aparecer>
      </section>

      <section aria-labelledby="bloques-titulo" className="border-t border-ink pt-2xl">
        <Titular id="bloques-titulo" texto={`${datos.bloquesTitulo}.`} className="text-display-s" />
        {datos.bloques.map((b, i) => (
          <Diptico key={b.t} bloque={b} indice={i} invertido={i % 2 === 1} />
        ))}
      </section>

      {datos.ademas && (
        <section aria-labelledby="ademas-titulo" className="border-t border-rule py-2xl">
          <div className="grid gap-xl md:grid-cols-12 md:gap-lg">
            <Titular id="ademas-titulo" texto="Y además." className="text-3xl md:col-span-4" />
            <ul className="grid gap-x-lg sm:grid-cols-2 md:col-span-7 md:col-start-6">
              {datos.ademas.map((a) => (
                <li key={a} className="border-t border-rule py-sm text-ink-2">{a}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {especialidades.length > 0 && (
        <section aria-labelledby="especialidades-titulo" className="border-t border-rule py-2xl">
          <div className="grid gap-xl md:grid-cols-12 md:gap-lg">
            <Titular id="especialidades-titulo" texto="Por especialidad." className="text-3xl md:col-span-4" />
            <ul className="border-b border-rule md:col-span-7 md:col-start-6">
              {especialidades.map((e) => (
                <li key={e.slug} className="border-t border-rule">
                  <Link href={`/${datos.slug}/${e.slug}`} className="group flex min-h-[44px] items-baseline justify-between gap-md py-sm">
                    <span className="font-display text-xl decoration-accent decoration-2 underline-offset-[6px] group-hover:underline">{e.seoLabel}</span>
                    <span aria-hidden className="transition-transform duration-[220ms] ease-out group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="preguntas-producto" className="border-t border-rule py-2xl">
        <div className="grid gap-xl md:grid-cols-12 md:gap-lg">
          <Titular id="preguntas-producto" texto="Preguntas." className="text-3xl md:col-span-4" />
          <div className="md:col-span-7 md:col-start-6">
            <Preguntas preguntas={datos.preguntas} />
            <p className="mt-lg text-sm text-muted">
              {datos.cruce.texto}{" "}
              <Link href={datos.cruce.href} className="vinculo text-ink">
                Ver {datos.cruce.nombre} <span aria-hidden>→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <PedirDemo interes={datos.nombre} />
    </div>
  );
}
