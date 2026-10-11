"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Send, X } from "lucide-react";
import { CONTACTO, INTERESES, NOVUDENT_DEMO, NOVUDENT_PRECIOS } from "@/lib/site";

type Rol = "asistente" | "visitante";
type Enlace = { texto: string; href: string };
type Mensaje = { id: number; rol: Rol; texto: string; enlaces?: Enlace[] };
type Etapa = "libre" | "interes" | "nombre" | "contacto" | "detalle" | "confirmar" | "enviando";
type Pedido = { interes: string; nombre: string; contacto: string; mensaje: string };

const bienvenida: Mensaje = {
  id: 0,
  rol: "asistente",
  texto: "¡Hola! Puedo contarte sobre los productos de NOVUM o tomar tu pedido para que el equipo te responda. ¿Qué necesitás?",
};

const normalizar = (texto: string) => texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const contactoValido = (texto: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto) || texto.replace(/\D/g, "").length >= 8;

function detectarInteres(texto: string) {
  const t = normalizar(texto);
  if (/novudent|odont|dentista|dental/.test(t)) return "Novudent";
  if (/novumed|consultorio|psicolog|kinesiolog|nutricion|pediatr/.test(t)) return "NOVUMed";
  if (/botika|whatsapp|instagram|agente/.test(t)) return "Botika";
  if (/pautik|publicidad|pauta|google ads/.test(t)) return "PAUTIK";
  if (/medida|integracion|automatizacion|proyecto/.test(t)) return "Un proyecto a medida";
  return "";
}

function correoPreparado(pedido: Pedido) {
  const asunto = `Pedido desde la web · ${pedido.interes}`;
  const cuerpo = [
    `Nombre: ${pedido.nombre}`,
    `Contacto: ${pedido.contacto}`,
    `Interés: ${pedido.interes}`,
    `Pedido: ${pedido.mensaje || "Solicita que lo contacten."}`,
  ].join("\n");
  return `mailto:${CONTACTO.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}

export default function AsistenteWeb() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([bienvenida]);
  const [etapa, setEtapa] = useState<Etapa>("libre");
  const [entrada, setEntrada] = useState("");
  const [pedido, setPedido] = useState<Pedido>({ interes: "", nombre: "", contacto: "", mensaje: "" });
  const [ultimoInteres, setUltimoInteres] = useState("");
  const secuencia = useRef(1);
  const botonRef = useRef<HTMLButtonElement>(null);
  const entradaRef = useRef<HTMLInputElement>(null);
  const listaRef = useRef<HTMLDivElement>(null);

  function agregar(rol: Rol, texto: string, enlaces?: Enlace[]) {
    const id = secuencia.current++;
    setMensajes((actuales) => [...actuales, { id, rol, texto, enlaces }]);
  }

  function cerrar() {
    setAbierto(false);
    botonRef.current?.focus();
  }

  useEffect(() => {
    if (abierto) entradaRef.current?.focus();
  }, [abierto]);

  useEffect(() => {
    if (listaRef.current) listaRef.current.scrollTop = listaRef.current.scrollHeight;
  }, [mensajes]);

  useEffect(() => {
    if (!abierto) return;
    const alPulsar = (event: KeyboardEvent) => {
      if (event.key === "Escape") cerrar();
    };
    document.addEventListener("keydown", alPulsar);
    return () => document.removeEventListener("keydown", alPulsar);
  }, [abierto]);

  function iniciarPedido(interes = "") {
    setPedido({ interes, nombre: "", contacto: "", mensaje: "" });
    if (interes) {
      setEtapa("nombre");
      agregar("asistente", `Tomo tu pedido sobre ${interes}. ¿Cómo te llamás?`);
    } else {
      setEtapa("interes");
      agregar("asistente", "¿Cuál de estas soluciones te interesa?");
    }
  }

  function responderConsulta(texto: string) {
    const t = normalizar(texto);
    if (/precio|cuanto|costo|tarifa|planes/.test(t)) {
      agregar("asistente", "Los planes de Novudent están publicados. Los proyectos a medida se cotizan según el alcance, después de una conversación.", [
        { texto: "Ver planes de Novudent", href: NOVUDENT_PRECIOS },
      ]);
      return;
    }
    if (/correo|email|mail|escribir|contacto/.test(t)) {
      agregar("asistente", `Podés escribirnos a ${CONTACTO.email}. Si preferís, también puedo tomar tu pedido por acá.`, [
        { texto: `Escribir a ${CONTACTO.email}`, href: `mailto:${CONTACTO.email}` },
      ]);
      return;
    }
    if (/demo|pedido|presupuesto|cotiza|hablar con|asesor/.test(t)) {
      iniciarPedido(detectarInteres(t) || ultimoInteres);
      return;
    }
    const interes = detectarInteres(t);
    if (interes) setUltimoInteres(interes);
    switch (interes) {
      case "Novudent":
        agregar("asistente", "Novudent ya está en producción. Reúne agenda, pacientes, ficha clínica, odontograma, presupuestos y caja. Su demo pública usa datos de ejemplo.", [
          { texto: "Conocer Novudent", href: "/novudent" },
          { texto: "Probar la demo", href: NOVUDENT_DEMO },
        ]);
        break;
      case "NOVUMed":
        agregar("asistente", "NOVUMed está en desarrollo para consultorios de distintas especialidades. Podés ver el proyecto y dejarnos tus datos para conocer el avance.", [
          { texto: "Conocer NOVUMed", href: "/novumed" },
        ]);
        break;
      case "Botika":
        agregar("asistente", "Botika está en desarrollo. Es el producto de NOVUM para atender consultas y agendar por WhatsApp e Instagram. Puedo tomar tu interés para que el equipo te contacte.");
        break;
      case "PAUTIK":
        agregar("asistente", "PAUTIK está en desarrollo. Busca reunir la pauta de Meta y Google con reportes por cliente. Puedo tomar tu interés para que el equipo te contacte.");
        break;
      case "Un proyecto a medida":
        agregar("asistente", "NOVUM también diseña sistemas a medida: automatizaciones, integraciones, agentes y productos web. Contame qué necesitás y el equipo te responderá con un siguiente paso.");
        break;
      default:
        if (/donde|ubicacion|paraguay|asuncion/.test(t)) {
          agregar("asistente", "Estamos en Asunción, Paraguay, y trabajamos también en remoto.");
        } else {
          agregar("asistente", "No tengo ese detalle confirmado. Si me dejás tu pedido y un contacto, el equipo de NOVUM te responde directamente.");
        }
    }
  }

  function procesar(textoCrudo: string) {
    const texto = textoCrudo.trim();
    if (!texto || etapa === "enviando") return;
    setEntrada("");
    agregar("visitante", texto);

    switch (etapa) {
      case "libre":
        responderConsulta(texto);
        return;
      case "interes": {
        const interes = INTERESES.find((opcion) => normalizar(opcion) === normalizar(texto)) || detectarInteres(texto);
        if (!interes) {
          agregar("asistente", "Elegí una de las opciones para dirigir tu pedido al equipo correcto.");
          return;
        }
        setPedido((actual) => ({ ...actual, interes }));
        setUltimoInteres(interes);
        setEtapa("nombre");
        agregar("asistente", `Perfecto, ${interes}. ¿Cómo te llamás?`);
        return;
      }
      case "nombre":
        if (texto.length < 2) {
          agregar("asistente", "Necesito tu nombre para que el equipo pueda responderte.");
          return;
        }
        setPedido((actual) => ({ ...actual, nombre: texto.slice(0, 120) }));
        setEtapa("contacto");
        agregar("asistente", `Gracias, ${texto.split(" ")[0]}. ¿A qué correo o WhatsApp podemos responderte?`);
        return;
      case "contacto":
        if (!contactoValido(texto)) {
          agregar("asistente", "Pasame un correo válido o un WhatsApp con código de área para poder responderte.");
          return;
        }
        setPedido((actual) => ({ ...actual, contacto: texto.slice(0, 160) }));
        setEtapa("detalle");
        agregar("asistente", "Contame brevemente qué necesitás. Si todavía no tenés el detalle, podés omitir este paso.");
        return;
      case "detalle": {
        const mensaje = normalizar(texto) === "omitir" ? "" : texto.slice(0, 2000);
        setPedido((actual) => ({ ...actual, mensaje }));
        setEtapa("confirmar");
        agregar("asistente", `Voy a enviar este pedido al equipo:\n${pedido.interes} · ${pedido.nombre}\nContacto: ${pedido.contacto}${mensaje ? `\n${mensaje}` : ""}\n\n¿Lo envío?`);
        return;
      }
      case "confirmar":
        if (texto === "Enviar pedido") {
          void enviarPedido();
        } else if (texto === "Cancelar") {
          setEtapa("libre");
          setPedido({ interes: "", nombre: "", contacto: "", mensaje: "" });
          agregar("asistente", "De acuerdo. Si necesitás otra cosa, escribime.");
        } else {
          agregar("asistente", "Elegí «Enviar pedido» o «Cancelar».");
        }
        return;
    }
  }

  async function enviarPedido() {
    setEtapa("enviando");
    try {
      const respuesta = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...pedido, origen: "Asistente web" }),
      });
      if (!respuesta.ok) throw new Error("envío fallido");
      agregar("asistente", "Listo, recibimos tu pedido. El equipo de NOVUM te responderá al contacto que dejaste.");
      setPedido({ interes: "", nombre: "", contacto: "", mensaje: "" });
    } catch {
      agregar("asistente", "No pude enviarlo desde la web. Podés abrir tu correo con el pedido ya escrito y mandarlo directamente a NOVUM.", [
        { texto: `Enviar a ${CONTACTO.email}`, href: correoPreparado(pedido) },
      ]);
    } finally {
      setEtapa("libre");
    }
  }

  const opciones = etapa === "libre"
    ? ["Novudent", "NOVUMed", "Proyecto a medida", "Pedir una demo"]
    : etapa === "interes"
      ? [...INTERESES]
      : etapa === "detalle"
        ? ["Omitir"]
        : etapa === "confirmar"
          ? ["Enviar pedido", "Cancelar"]
          : [];

  return (
    <div className="assistant-widget">
      <button ref={botonRef} type="button" className="assistant-trigger" aria-label={abierto ? "Cerrar asistente NOVUM" : "Abrir asistente NOVUM"} aria-expanded={abierto} aria-controls="assistant-panel" onClick={() => abierto ? cerrar() : setAbierto(true)}>
        {abierto ? <X size={23} aria-hidden /> : <MessageCircle size={23} aria-hidden />}
        {!abierto && <span>¿Te ayudamos?</span>}
      </button>
      {abierto && <section id="assistant-panel" className="assistant-panel" role="dialog" aria-label="Asistente NOVUM">
        <header className="assistant-panel__header">
          <div className="assistant-panel__mark" aria-hidden>N</div>
          <div><strong>Asistente NOVUM</strong><span>Consultas y pedidos</span></div>
          <button type="button" aria-label="Cerrar asistente" onClick={cerrar}><X size={20} aria-hidden /></button>
        </header>
        <div ref={listaRef} className="assistant-panel__messages" aria-label="Conversación">
          {mensajes.map((mensaje, indice) => <div key={mensaje.id} className={`assistant-message assistant-message--${mensaje.rol}`} role={mensaje.rol === "asistente" && indice === mensajes.length - 1 ? "status" : undefined}>
            <p>{mensaje.texto}</p>
            {mensaje.enlaces && <div className="assistant-message__links">{mensaje.enlaces.map((enlace) => <a key={enlace.href} href={enlace.href} target={enlace.href.startsWith("http") ? "_blank" : undefined} rel={enlace.href.startsWith("http") ? "noopener noreferrer" : undefined}>{enlace.texto} <ArrowUpRight size={14} aria-hidden /></a>)}</div>}
          </div>)}
        </div>
        <div className="assistant-panel__composer">
          {opciones.length > 0 && <div className="assistant-panel__options">{opciones.map((opcion) => <button key={opcion} type="button" disabled={etapa === "enviando"} onClick={() => procesar(opcion)}>{opcion}</button>)}</div>}
          {etapa !== "confirmar" && <form onSubmit={(event) => { event.preventDefault(); procesar(entrada); }}>
            <label className="sr-only" htmlFor="assistant-input">Escribí tu mensaje</label>
            <input ref={entradaRef} id="assistant-input" value={entrada} onChange={(event) => setEntrada(event.target.value)} maxLength={etapa === "detalle" ? 2000 : 180} disabled={etapa === "enviando"} placeholder={etapa === "enviando" ? "Enviando pedido…" : etapa === "nombre" ? "Tu nombre" : etapa === "contacto" ? "Correo o WhatsApp" : etapa === "detalle" ? "Contanos qué necesitás" : "Escribí tu consulta"} />
            <button type="submit" aria-label="Enviar mensaje" disabled={!entrada.trim() || etapa === "enviando"}><Send size={18} aria-hidden /></button>
          </form>}
          <a className="assistant-panel__mail" href={`mailto:${CONTACTO.email}`}><Mail size={13} aria-hidden /> {CONTACTO.email}</a>
        </div>
      </section>}
    </div>
  );
}
