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

/* Módulos "núcleo" mostrados en cada página de especialidad */
export const MEDICAL_CORE = [
  { t: "Agenda inteligente", d: "Online, por profesional y box, con reagendamiento automático." },
  { t: "Recordatorios WhatsApp", d: "Confirmación automática por el canal #1 de Paraguay (anti no-show)." },
  { t: "Facturación electrónica", d: "Emisión, medios de pago, caja y cobranzas." },
  { t: "Telemedicina", d: "Videoconsulta integrada y portal del paciente." },
  { t: "Botika (agente IA)", d: "Atiende, agenda y confirma por WhatsApp e Instagram, 24/7." },
  { t: "Reportes y KPIs", d: "Más de 50 reportes para decidir con datos." },
];

export const DENTAL_CORE = [
  { t: "Odontograma + presupuesto", d: "Marcás sobre la pieza y el presupuesto se arma solo." },
  { t: "Financiamiento y cuotas", d: "Cobro en cuotas, créditos y control de morosidad." },
  { t: "Recordatorios WhatsApp", d: "Confirmación automática y reagendamiento (anti no-show)." },
  { t: "Análisis de RX con IA", d: "Diagnóstico asistido sobre radiografías." },
  { t: "Botika (agente IA)", d: "Atiende y agenda por WhatsApp e Instagram, 24/7." },
  { t: "Caja y comisiones", d: "Control de caja, gastos y comisiones por odontólogo." },
];

/* ===== Especialidades dentales (NOVUdent) ===== */
export const DENTAL_SPECIALTIES: Specialty[] = [
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    pro: "ortodoncistas",
    seoLabel: "Software para ortodoncistas",
    tagline: "Control del tratamiento, cuotas mensuales y evolución por control.",
    intro:
      "NOVUdent para ortodoncia: control integral del tratamiento, cobro en cuotas, evolución por control y fotos/radiografías en la ficha. Recordatorios por WhatsApp para que el paciente no falte a sus controles.",
    ficha: ["Control integral del tratamiento", "Cobro en cuotas mensuales", "Evolución por control", "Fotos y radiografías", "Recordatorios de control"],
    pains: [
      { t: "Controles que se saltan", d: "Pacientes de tratamiento largo que faltan a sus controles." },
      { t: "Cuotas sin seguir", d: "Cobros mensuales que se pierden sin control de morosidad." },
      { t: "Evolución dispersa", d: "Avances anotados sueltos, sin historial claro." },
    ],
    faqs: [
      { q: "¿Maneja cuotas mensuales?", a: "Sí, cobro en cuotas con seguimiento de morosidad y avisos automáticos." },
      { q: "¿Registra la evolución del tratamiento?", a: "Sí, cada control queda con su evolución, fotos y radiografías." },
    ],
    keywords: ["software ortodoncia", "software para ortodoncistas", "control ortodoncia software", "cuotas ortodoncia"],
  },
  {
    slug: "implantologia",
    name: "Implantología",
    pro: "implantólogos",
    seoLabel: "Software para implantología",
    tagline: "Planificación, registro por pieza y análisis de RX con IA.",
    intro:
      "NOVUdent para implantología: planificación de implantes, registro por pieza, radiografías con análisis asistido por IA, consentimientos y presupuestos con financiamiento.",
    ficha: ["Planificación de implantes", "Registro por pieza", "Radiografías + análisis con IA", "Consentimientos informados", "Presupuesto y financiamiento"],
    pains: [
      { t: "Sin trazabilidad", d: "Difícil seguir qué implante va en cada pieza y su estado." },
      { t: "Presupuestos altos sin cierre", d: "Tratamientos caros que no se cierran por falta de financiamiento." },
      { t: "RX sin registro", d: "Radiografías sueltas sin asociar a la ficha." },
    ],
    faqs: [
      { q: "¿Registra implantes por pieza?", a: "Sí, con planificación y seguimiento por cada pieza." },
      { q: "¿Ofrece financiamiento?", a: "Sí, presupuestos con cobro en cuotas y créditos en línea." },
    ],
    keywords: ["software implantología", "software para implantólogos", "registro de implantes software"],
  },
  {
    slug: "estetica-dental",
    name: "Estética dental",
    pro: "odontólogos estéticos",
    seoLabel: "Software para estética dental",
    tagline: "Simulador de sonrisa con IA, presupuestos y antes/después.",
    intro:
      "NOVUdent para estética dental: simulador de sonrisa con IA para presentar el tratamiento, presupuestos con financiamiento, fotos antes/después y plan de tratamiento estético.",
    ficha: ["Simulador de sonrisa con IA", "Presupuestos y financiamiento", "Fotos antes / después", "Plan de tratamiento estético", "Consentimientos informados"],
    pains: [
      { t: "Difícil cerrar tratamientos", d: "El paciente no visualiza el resultado y duda." },
      { t: "Presupuestos lentos", d: "Cotizar a mano y perder al paciente." },
      { t: "Sin registro visual", d: "Resultados sin antes/después documentado." },
    ],
    faqs: [
      { q: "¿Tiene simulador de sonrisa?", a: "Sí, genera una proyección con IA del antes/después para presentar el tratamiento." },
      { q: "¿Maneja financiamiento?", a: "Sí, presupuestos financiables en cuotas para cerrar más tratamientos." },
    ],
    keywords: ["software estética dental", "simulador de sonrisa", "diseño de sonrisa software"],
  },
  {
    slug: "odontopediatria",
    name: "Odontopediatría",
    pro: "odontopediatras",
    seoLabel: "Software para odontopediatría",
    tagline: "Odontograma infantil, prevención y recordatorios a los padres.",
    intro:
      "NOVUdent para odontopediatría: odontograma infantil, control y prevención (fluorización, sellantes), historia clínica y recordatorios automáticos a los padres por WhatsApp.",
    ficha: ["Odontograma infantil", "Control y prevención", "Fluorización y sellantes", "Historia clínica", "Recordatorios a los padres"],
    pains: [
      { t: "Controles olvidados", d: "Familias que no vuelven al control preventivo." },
      { t: "Sin historial claro", d: "Difícil seguir la evolución del niño." },
      { t: "Comunicación con padres", d: "Avisos manuales que consumen tiempo." },
    ],
    faqs: [
      { q: "¿Recuerda los controles a los padres?", a: "Sí, recordatorios automáticos por WhatsApp a los responsables." },
      { q: "¿Tiene odontograma infantil?", a: "Sí, adaptado a dentición temporal y mixta." },
    ],
    keywords: ["software odontopediatría", "software para odontopediatras", "odontograma infantil"],
  },
  {
    slug: "endodoncia",
    name: "Endodoncia",
    pro: "endodoncistas",
    seoLabel: "Software para endodoncia",
    tagline: "Registro por conducto, radiografías y evolución del tratamiento.",
    intro:
      "NOVUdent para endodoncia: registro por conducto, radiografías con análisis asistido por IA, evolución del tratamiento y presupuesto por pieza.",
    ficha: ["Registro por conducto", "Radiografías + análisis con IA", "Evolución del tratamiento", "Presupuesto por pieza", "Consentimientos informados"],
    pains: [
      { t: "Detalle por conducto", d: "Difícil registrar el detalle de cada conducto." },
      { t: "RX sin asociar", d: "Radiografías sueltas, fuera de la ficha." },
      { t: "Presupuestos a mano", d: "Cotizaciones lentas por pieza." },
    ],
    faqs: [
      { q: "¿Registra el detalle por conducto?", a: "Sí, con registro por pieza y por conducto, más radiografías asociadas." },
      { q: "¿Analiza radiografías?", a: "Sí, con análisis asistido por IA dentro de la ficha." },
    ],
    keywords: ["software endodoncia", "software para endodoncistas", "registro por conducto"],
  },
];

export const DENTAL_MAP: Record<string, Specialty> = Object.fromEntries(
  DENTAL_SPECIALTIES.map((s) => [s.slug, s])
);
