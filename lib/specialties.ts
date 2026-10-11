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
      { q: "¿Puedo registrar la evolución por sesión?", a: "Esa es la idea: cada atención va a quedar registrada con su evolución, para ver el progreso del paciente a lo largo del tratamiento." },
      { q: "¿Sirve para un centro con varios kinesiólogos?", a: "Está pensado así: agenda por profesional y por box, con lo de cada uno separado." },
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
      { q: "¿La información del paciente es privada?", a: "Es un requisito de diseño: la ficha va a tener accesos por usuario, y en salud mental, más reservados todavía." },
      { q: "¿Puedo atender por videollamada?", a: "Está en el plan: videoconsulta a la que el paciente entra desde un link, sin instalar nada." },
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
      { q: "¿Puedo emitir recetas?", a: "Está en el plan: recetas con plantillas y firma electrónica, registradas en la ficha del paciente." },
      { q: "¿Sirve para tratamientos largos?", a: "La ficha se está diseñando para seguimientos largos, con historial de medicación y evoluciones." },
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
      { q: "¿Puedo ver el progreso del paciente?", a: "Está en el plan: gráficos de antropometría y composición corporal a lo largo del tiempo." },
      { q: "¿Puedo enviar el plan al paciente?", a: "La idea es que armes el plan, lo compartas y le recuerdes al paciente por WhatsApp." },
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
      { q: "¿Tiene campos de refracción y agudeza visual?", a: "Están en el diseño de la ficha oftalmológica, junto con la receta óptica." },
      { q: "¿Maneja exámenes e imágenes?", a: "Está en el plan: adjuntar exámenes e imágenes a la ficha del paciente." },
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
      { q: "¿Calcula percentiles de crecimiento?", a: "Está en el plan: la ficha pediátrica va a graficar el crecimiento por percentiles." },
      { q: "¿Recuerda vacunas y controles?", a: "Está en el plan: recordatorios a los padres por WhatsApp." },
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
      { q: "¿Puedo hacer seguimiento fotográfico?", a: "Está en el plan: fotos en la ficha para comparar la evolución en el tiempo." },
      { q: "¿Registra procedimientos?", a: "Está en el plan: cada procedimiento documentado en la historia del paciente." },
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
      { q: "¿Tiene ficha estética facial?", a: "Está en el plan: esquema facial, presupuestos y consentimientos." },
      { q: "¿Maneja insumos y caja?", a: "Está en el plan: insumos, caja y cobranzas en el mismo lugar." },
    ],
    keywords: ["software centros estéticos", "software estética", "ficha estética facial", "presupuestos estética software"],
  },
];

export const SPECIALTY_MAP: Record<string, Specialty> = Object.fromEntries(
  SPECIALTIES.map((s) => [s.slug, s])
);

/* Módulos "núcleo" mostrados en cada página de especialidad */
/* Lo que comparten todas las especialidades. NOVUMed está EN DESARROLLO: es el plan, no algo que ya existe. */
export const MEDICAL_CORE = [
  { t: "Agenda", d: "Por profesional y por box, con reserva online." },
  { t: "Recordatorios por WhatsApp", d: "Confirmación de la cita para bajar las inasistencias." },
  { t: "Cobros", d: "Medios de pago, caja y cuentas por cobrar." },
  { t: "Videoconsulta", d: "El paciente entra desde un link, sin instalar nada." },
  { t: "Ficha por especialidad", d: "Campos pensados para cada práctica." },
  { t: "Reportes", d: "Lo que se atendió, lo que se cobró y lo que falta." },
];

/* Lo que Novudent hace HOY en cualquier especialidad (verificado contra novudent-app). */
export const DENTAL_CORE = [
  { t: "Odontograma por superficies", d: "32 piezas con su forma real; dentición permanente, primaria o mixta." },
  { t: "Plan de tratamiento y cuotas", d: "Prestaciones por pieza, convenios, descuentos y financiamiento en cuotas." },
  { t: "Confirmación de citas", d: "Recordatorio por WhatsApp y confirmación por link." },
  { t: "Radiografías con IA", d: "Análisis asistido de radiografías dentro de la ficha (plan Clínica o Multi)." },
  { t: "Consentimientos firmados", d: "Documentos clínicos y consentimientos con firma electrónica." },
  { t: "Caja y liquidaciones", d: "Arqueo, gastos, morosidad y el pago a cada profesional." },
];

/* ===== Especialidades dentales (Novudent) ===== */
export const DENTAL_SPECIALTIES: Specialty[] = [
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    pro: "ortodoncistas",
    seoLabel: "Software para ortodoncistas",
    tagline: "Controles mensuales, cuotas y evolución en la ficha.",
    intro:
      "Novudent para ortodoncia: módulo de ortodoncia con controles mensuales, cobro en cuotas, evoluciones y radiografías en la ficha, y recordatorio de cita por WhatsApp para que el paciente no falte.",
    ficha: ["Módulo de ortodoncia con controles mensuales", "Cobro en cuotas con seguimiento de morosidad", "Evoluciones y radiografías en la ficha", "Recordatorio de cita por WhatsApp", "Presupuesto con convenios y descuentos"],
    pains: [
      { t: "Controles que se saltan", d: "Pacientes de tratamiento largo que faltan a sus controles." },
      { t: "Cuotas sin seguir", d: "Cobros mensuales que se pierden sin control de morosidad." },
      { t: "Evolución dispersa", d: "Avances anotados sueltos, sin historial claro." },
    ],
    faqs: [
      { q: "¿Maneja cuotas mensuales?", a: "Sí: el plan se financia en cuotas y la caja muestra quién debe y desde cuándo, con el recordatorio de deuda a un clic." },
      { q: "¿Registra la evolución del tratamiento?", a: "Sí: cada control queda con su evolución y sus radiografías en la ficha del paciente." },
    ],
    keywords: ["software ortodoncia", "software para ortodoncistas", "control ortodoncia software", "cuotas ortodoncia"],
  },
  {
    slug: "implantologia",
    name: "Implantología",
    pro: "implantólogos",
    seoLabel: "Software para implantología",
    tagline: "Implantes por pieza, cuotas y radiografías con IA.",
    intro:
      "Novudent para implantología: implantes marcados por pieza en el odontograma, radiografías con análisis asistido por IA, consentimientos con firma electrónica y presupuestos financiados en cuotas.",
    ficha: ["Implantes marcados por pieza en el odontograma", "Presupuesto por pieza y financiamiento en cuotas", "Radiografías con análisis asistido por IA", "Consentimiento con firma electrónica", "Seguimiento de lo que falta cobrar de cada implante"],
    pains: [
      { t: "Sin trazabilidad", d: "Difícil seguir qué implante va en cada pieza y su estado." },
      { t: "Presupuestos altos sin cierre", d: "Tratamientos caros que no se cierran por falta de financiamiento." },
      { t: "RX sin registro", d: "Radiografías sueltas sin asociar a la ficha." },
    ],
    faqs: [
      { q: "¿Registra implantes por pieza?", a: "Sí: el implante queda marcado en su pieza del odontograma, con su prestación en el plan de tratamiento." },
      { q: "¿Ofrece financiamiento?", a: "Sí: el presupuesto se financia en cuotas y la rutina del administrador muestra lo que falta cobrar de cada implante." },
    ],
    keywords: ["software implantología", "software para implantólogos", "registro de implantes software"],
  },
  {
    slug: "estetica-dental",
    name: "Estética dental",
    pro: "odontólogos estéticos",
    seoLabel: "Software para estética dental",
    tagline: "Simulador de sonrisa con IA, presupuestos y cuotas.",
    intro:
      "Novudent para estética dental: simulador de sonrisa con IA para presentar el tratamiento, presupuestos con convenios y cuotas, y consentimientos con firma electrónica.",
    ficha: ["Simulador de sonrisa con IA", "Presupuestos con convenios y cuotas", "Plan de tratamiento por pieza", "Consentimientos con firma electrónica", "Encuestas de satisfacción"],
    pains: [
      { t: "Difícil cerrar tratamientos", d: "El paciente no visualiza el resultado y duda." },
      { t: "Presupuestos lentos", d: "Cotizar a mano y perder al paciente." },
      { t: "Tratamientos sin seguimiento", d: "Planes que quedan a medias porque nadie los vuelve a mirar." },
    ],
    faqs: [
      { q: "¿Tiene simulador de sonrisa?", a: "Sí: genera con IA una proyección de cómo quedaría la sonrisa, para presentar el tratamiento." },
      { q: "¿Maneja financiamiento?", a: "Sí: el presupuesto se puede financiar en cuotas." },
    ],
    keywords: ["software estética dental", "simulador de sonrisa", "diseño de sonrisa software"],
  },
  {
    slug: "odontopediatria",
    name: "Odontopediatría",
    pro: "odontopediatras",
    seoLabel: "Software para odontopediatría",
    tagline: "Odontograma con dentición primaria y mixta, y recordatorios de cita.",
    intro:
      "Novudent para odontopediatría: odontograma con dentición primaria y mixta, historia clínica, plan de tratamiento por pieza y recordatorio de cita por WhatsApp.",
    ficha: ["Odontograma con dentición primaria y mixta", "Historia clínica y anamnesis digital", "Recordatorio de cita por WhatsApp", "Consentimientos con firma electrónica", "Plan de tratamiento por pieza"],
    pains: [
      { t: "Controles olvidados", d: "Familias que no vuelven al control preventivo." },
      { t: "Sin historial claro", d: "Difícil seguir la evolución del niño." },
      { t: "Comunicación con padres", d: "Avisos manuales que consumen tiempo." },
    ],
    faqs: [
      { q: "¿Recuerda los controles a los padres?", a: "Novudent manda el recordatorio de la cita por WhatsApp al número cargado en la ficha, que puede ser el del padre o la madre." },
      { q: "¿Tiene odontograma infantil?", a: "Sí: el odontograma tiene dentición primaria y mixta además de la permanente." },
    ],
    keywords: ["software odontopediatría", "software para odontopediatras", "odontograma infantil"],
  },
  {
    slug: "endodoncia",
    name: "Endodoncia",
    pro: "endodoncistas",
    seoLabel: "Software para endodoncia",
    tagline: "Endodoncia por pieza, radiografías con IA y evolución del tratamiento.",
    intro:
      "Novudent para endodoncia: la endodoncia marcada por pieza en el odontograma, radiografías con análisis asistido por IA, evoluciones en la ficha y presupuesto por pieza.",
    ficha: ["Endodoncia marcada por pieza en el odontograma", "Radiografías con análisis asistido por IA", "Evoluciones en la ficha", "Presupuesto por pieza", "Consentimientos con firma electrónica"],
    pains: [
      { t: "Historia dispersa", d: "Radiografías y evoluciones en lugares distintos, difíciles de juntar en la consulta." },
      { t: "RX sin asociar", d: "Radiografías sueltas, fuera de la ficha." },
      { t: "Presupuestos a mano", d: "Cotizaciones lentas por pieza." },
    ],
    faqs: [
      { q: "¿Registra el detalle por conducto?", a: "Todavía no: la endodoncia queda marcada por pieza en el odontograma y el detalle va en la evolución de la ficha." },
      { q: "¿Analiza radiografías?", a: "Sí: las radiografías van en la ficha y se pueden analizar con IA (plan Clínica o Multi)." },
    ],
    keywords: ["software endodoncia", "software para endodoncistas", "registro por conducto"],
  },
];

export const DENTAL_MAP: Record<string, Specialty> = Object.fromEntries(
  DENTAL_SPECIALTIES.map((s) => [s.slug, s])
);
