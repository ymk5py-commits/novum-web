export type Specialty = {
  slug: string;
  name: string; // "Psicología"
  pro: string; // "psicólogos"
  seoLabel: string; // "Software para psicólogos"
  tagline: string;
  intro: string;
  ficha: string[]; // campos específicos de la ficha
  pains: { t: string; d: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const SPECIALTIES: Specialty[] = [
  {
    slug: "kinesiologia",
    name: "Kinesiología",
    pro: "kinesiólogos",
    seoLabel: "Software para kinesiólogos",
    tagline: "Evaluá, planificá sesiones y seguí el progreso en un solo lugar.",
    intro:
      "NOVUMed para kinesiología y fisioterapia: ficha con evaluación funcional, plan de sesiones y evolución por cada atención, más agenda con recordatorios por WhatsApp para que el paciente complete su tratamiento.",
    ficha: ["Evaluación funcional inicial", "Plan de sesiones por objetivos", "Evolución por sesión", "Registro de ejercicios y progreso", "Imágenes y mediciones"],
    pains: [
      { t: "Pacientes que abandonan", d: "Tratamientos de varias sesiones que quedan a la mitad por falta de recordatorios." },
      { t: "Evolución en papel", d: "Cada sesión anotada suelta, sin ver el progreso real del paciente." },
      { t: "Agenda desordenada", d: "Horas superpuestas y huecos que nadie recupera." },
    ],
    faqs: [
      { q: "¿Puedo registrar la evolución por sesión?", a: "Sí. Cada atención queda registrada con su evolución, y ves el progreso del paciente a lo largo del tratamiento." },
      { q: "¿Sirve para un centro con varios kinesiólogos?", a: "Sí, agenda por profesional y box, con honorarios y reportes por cada uno." },
    ],
    keywords: ["software kinesiología", "software para kinesiólogos", "ficha kinesiológica digital", "agenda kinesiología"],
  },
  {
    slug: "psicologia",
    name: "Psicología",
    pro: "psicólogos",
    seoLabel: "Software para psicólogos",
    tagline: "Sesiones, evoluciones y telemedicina con la confidencialidad que tu práctica necesita.",
    intro:
      "NOVUMed para psicología: ficha de sesiones, historia y antecedentes, consentimientos y videoconsulta integrada. Agenda con recordatorios automáticos para reducir inasistencias, sin perder la privacidad del paciente.",
    ficha: ["Evoluciones por sesión", "Historia y antecedentes", "Consentimientos informados", "Telemedicina integrada", "Notas privadas por voz (IA)"],
    pains: [
      { t: "Inasistencias", d: "Pacientes que no avisan y horas que quedan vacías sin recordatorios." },
      { t: "Notas dispersas", d: "Sesiones anotadas en cuadernos distintos, difíciles de retomar." },
      { t: "Cobros y comprobantes", d: "Facturación manual sesión a sesión que consume tu tiempo." },
    ],
    faqs: [
      { q: "¿La información del paciente es privada?", a: "Sí. NOVUMed protege la ficha con accesos por usuario y confidencialidad reforzada para salud mental." },
      { q: "¿Puedo atender por videollamada?", a: "Sí, telemedicina integrada: el paciente entra a la sesión desde un link, sin instalar nada." },
    ],
    keywords: ["software psicólogos", "software para psicólogos", "ficha psicológica digital", "agenda psicología", "telemedicina psicología"],
  },
  {
    slug: "psiquiatria",
    name: "Psiquiatría",
    pro: "psiquiatras",
    seoLabel: "Software para psiquiatras",
    tagline: "Evoluciones, recetas de psicofármacos y seguimiento de medicación.",
    intro:
      "NOVUMed para psiquiatría: todo lo de psicología más recetas con firma electrónica, seguimiento de medicación y telemedicina. Una ficha clara para acompañar tratamientos prolongados.",
    ficha: ["Evoluciones por sesión", "Recetas de psicofármacos + firma electrónica", "Seguimiento de medicación", "Historia clínica", "Telemedicina integrada"],
    pains: [
      { t: "Recetas a mano", d: "Prescripciones manuales sin registro ni control de continuidad." },
      { t: "Seguimiento de medicación", d: "Difícil ver qué se indicó y cuándo a lo largo del tratamiento." },
      { t: "Agenda y cobros", d: "Inasistencias y facturación que se manejan por separado." },
    ],
    faqs: [
      { q: "¿Puedo emitir recetas?", a: "Sí, con plantillas y firma electrónica, y queda el registro en la ficha del paciente." },
      { q: "¿Sirve para tratamientos largos?", a: "Sí, la ficha está pensada para seguimiento prolongado con historial de medicación y evoluciones." },
    ],
    keywords: ["software psiquiatras", "software para psiquiatras", "receta electrónica psiquiatría", "ficha psiquiátrica"],
  },
  {
    slug: "nutricion",
    name: "Nutrición",
    pro: "nutricionistas",
    seoLabel: "Software para nutricionistas",
    tagline: "Antropometría, planes alimentarios y progreso visible para tu paciente.",
    intro:
      "NOVUMed para nutrición: ficha con antropometría y composición corporal, planes alimentarios, objetivos y gráficos de progreso. Recordatorios por WhatsApp para sostener la adherencia.",
    ficha: ["Antropometría y composición corporal", "Planes alimentarios", "Objetivos y metas", "Gráficos de progreso", "Fotos de seguimiento"],
    pains: [
      { t: "Adherencia baja", d: "Pacientes que no vuelven y planes que se abandonan." },
      { t: "Mediciones sueltas", d: "Pesajes y medidas sin un gráfico que muestre el avance." },
      { t: "Planes en Word", d: "Armar y enviar planes a mano, una y otra vez." },
    ],
    faqs: [
      { q: "¿Puedo ver el progreso del paciente?", a: "Sí, con gráficos de antropometría y composición corporal a lo largo del tiempo." },
      { q: "¿Puedo enviar el plan al paciente?", a: "Sí, generás el plan y lo compartís; además podés recordarle por WhatsApp." },
    ],
    keywords: ["software nutricionistas", "software para nutricionistas", "ficha nutricional digital", "antropometría software", "planes alimentarios software"],
  },
  {
    slug: "oftalmologia",
    name: "Oftalmología",
    pro: "oftalmólogos",
    seoLabel: "Software para oftalmólogos",
    tagline: "Agudeza visual, refracción y recetas ópticas en una ficha especializada.",
    intro:
      "NOVUMed para oftalmología: ficha con agudeza visual, refracción, presión intraocular y receta óptica. Agenda, facturación y recordatorios en la misma plataforma.",
    ficha: ["Agudeza visual", "Refracción", "Receta óptica", "Presión intraocular", "Imágenes y exámenes"],
    pains: [
      { t: "Ficha genérica", d: "Sistemas que no tienen los campos propios de oftalmología." },
      { t: "Recetas ópticas a mano", d: "Prescripciones manuales sin historial del paciente." },
      { t: "Agenda y caja sueltas", d: "Atención y cobranza manejadas por separado." },
    ],
    faqs: [
      { q: "¿Tiene campos de refracción y agudeza visual?", a: "Sí, la ficha está configurada para oftalmología con sus campos y receta óptica." },
      { q: "¿Maneja exámenes e imágenes?", a: "Sí, podés adjuntar exámenes e imágenes a la ficha del paciente." },
    ],
    keywords: ["software oftalmólogos", "software para oftalmólogos", "ficha oftalmológica", "receta óptica software"],
  },
  {
    slug: "pediatria",
    name: "Pediatría",
    pro: "pediatras",
    seoLabel: "Software para pediatras",
    tagline: "Curvas de crecimiento, vacunas y control de niño sano.",
    intro:
      "NOVUMed para pediatría: ficha con curvas de crecimiento por percentiles, calendario de vacunas y control de niño sano, con recordatorios a los padres por WhatsApp.",
    ficha: ["Curvas de crecimiento (percentiles)", "Calendario de vacunas", "Control de niño sano", "Historia y antecedentes", "Recordatorios a los padres"],
    pains: [
      { t: "Controles que se saltan", d: "Familias que olvidan el control o la vacuna sin recordatorios." },
      { t: "Percentiles a mano", d: "Calcular crecimiento sin gráficos automáticos." },
      { t: "Vacunas sin registro", d: "Calendario de vacunación disperso y difícil de seguir." },
    ],
    faqs: [
      { q: "¿Calcula percentiles de crecimiento?", a: "Sí, la ficha pediátrica grafica el crecimiento por percentiles automáticamente." },
      { q: "¿Recuerda vacunas y controles?", a: "Sí, con recordatorios automáticos a los padres por WhatsApp." },
    ],
    keywords: ["software pediatras", "software para pediatras", "curvas de crecimiento software", "control niño sano software"],
  },
  {
    slug: "dermatologia",
    name: "Dermatología",
    pro: "dermatólogos",
    seoLabel: "Software para dermatólogos",
    tagline: "Mapa de lesiones, seguimiento fotográfico y procedimientos.",
    intro:
      "NOVUMed para dermatología: ficha con mapa de lesiones, seguimiento fotográfico (antes/después) y registro de procedimientos. Agenda, recetas y facturación integradas.",
    ficha: ["Mapa de lesiones", "Seguimiento fotográfico", "Antes / después", "Registro de procedimientos", "Recetas + firma electrónica"],
    pains: [
      { t: "Fotos sueltas", d: "Imágenes en el celular sin asociar a la ficha ni al seguimiento." },
      { t: "Procedimientos sin registro", d: "Tratamientos que no quedan documentados." },
      { t: "Agenda y cobros", d: "Atención y caja manejadas por separado." },
    ],
    faqs: [
      { q: "¿Puedo hacer seguimiento fotográfico?", a: "Sí, cargás fotos a la ficha y comparás antes/después en el tiempo." },
      { q: "¿Registra procedimientos?", a: "Sí, cada procedimiento queda documentado en la historia del paciente." },
    ],
    keywords: ["software dermatólogos", "software para dermatólogos", "seguimiento fotográfico dermatología", "ficha dermatológica"],
  },
  {
    slug: "centros-esteticos",
    name: "Centros estéticos",
    pro: "centros estéticos",
    seoLabel: "Software para centros estéticos",
    tagline: "Ficha estética facial, presupuestos y fotos antes/después.",
    intro:
      "NOVUMed para estética: ficha estética facial con esquema, presupuestos, consentimientos y fotos antes/después. Agenda, recordatorios por WhatsApp y caja en un solo lugar.",
    ficha: ["Ficha estética facial con esquema", "Presupuestos", "Consentimientos informados", "Fotos antes / después", "Control de insumos"],
    pains: [
      { t: "Presupuestos lentos", d: "Cotizar a mano y perder al cliente en el camino." },
      { t: "Sin seguimiento visual", d: "Resultados sin registro de antes/después." },
      { t: "Caja e insumos", d: "Cobros e inventario que no se controlan." },
    ],
    faqs: [
      { q: "¿Tiene ficha estética facial?", a: "Sí, con esquema facial, presupuestos y consentimientos." },
      { q: "¿Maneja insumos y caja?", a: "Sí, control de insumos, caja y cobranzas integrados." },
    ],
    keywords: ["software centros estéticos", "software estética", "ficha estética facial", "presupuestos estética software"],
  },
];

export const SPECIALTY_MAP: Record<string, Specialty> = Object.fromEntries(
  SPECIALTIES.map((s) => [s.slug, s])
);
