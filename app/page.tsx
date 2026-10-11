/* Hallmark · genre: editorial · macrostructure: Index-First · design-system: design.md · designed-as-app
 * nav: N6 · footer: Ft1 · enrichment: capturas reales de Novudent (díptico destacado) */
import Link from "next/link";
import { CARTERA, NOVUDENT_DEMO, PREGUNTAS } from "@/lib/site";
import { NOVUDENT } from "@/lib/productos";
import Cartera from "@/components/novum/Cartera";
import Diptico from "@/components/novum/Diptico";
import Preguntas from "@/components/novum/Preguntas";
import PedirDemo from "@/components/novum/PedirDemo";
import { Aparecer, Titular } from "@/components/novum/Revelar";
import { ComoTrabajamos, Estudio } from "@/components/novum/Secciones";

export default function Inicio() {
  const destacado = NOVUDENT.bloques[0];
  return (
    <div className="envoltura">
      <section className="grid gap-xl pb-2xl pt-2xl md:grid-cols-12 md:items-end md:gap-lg md:pt-3xl">
        <Titular texto="Software propio para clínicas y empresas." como="h1" alCargar retraso={0.55} className="text-display md:col-span-8" />
        <Aparecer alCargar retraso={1.05} className="md:col-span-4">
          <p className="max-w-[38ch] text-ink-2">
            Un holding paraguayo con cuatro productos y un estudio que los instala, los conecta y se queda a operarlos.
          </p>
          <div className="mt-lg flex flex-wrap items-center gap-x-lg gap-y-sm">
            <a href="#demo" className="boton">
              Pedir una demo
            </a>
            <a href={NOVUDENT_DEMO} className="vinculo text-sm">
              Probar Novudent <span aria-hidden>→</span>
            </a>
          </div>
        </Aparecer>
      </section>

      <section id="cartera" aria-label="Cartera de productos" className="scroll-mt-20 pb-3xl">
        <Cartera productos={CARTERA} />
      </section>

      <section aria-labelledby="destacado-titulo" className="border-t border-ink pt-2xl">
        <div className="flex flex-wrap items-baseline justify-between gap-md">
          <Titular id="destacado-titulo" texto="Novudent, en producción." className="text-display-s" />
          <Link href="/novudent" className="vinculo text-sm">
            Ver Novudent <span aria-hidden>→</span>
          </Link>
        </div>
        <Diptico bloque={destacado} indice={1} />
      </section>

      <Estudio />
      <ComoTrabajamos />

      <section id="preguntas" aria-labelledby="preguntas-titulo" className="scroll-mt-20 border-t border-rule py-3xl">
        <div className="grid gap-xl md:grid-cols-12 md:gap-lg">
          <Titular id="preguntas-titulo" texto="Preguntas." className="text-display-s md:col-span-4" />
          <div className="md:col-span-7 md:col-start-6">
            <Preguntas preguntas={PREGUNTAS} />
          </div>
        </div>
      </section>

      <PedirDemo />
    </div>
  );
}
