"use client";

const tokens = [
  { l: "Agentes multimodales", k: "01" },
  { l: "Meta · WhatsApp Cloud", k: "02" },
  { l: "Google Calendar", k: "03" },
  { l: "HubSpot · Salesforce", k: "04" },
  { l: "Pauta programática", k: "05" },
  { l: "Historia clínica digital", k: "06" },
  { l: "n8n · Zapier · Make", k: "07" },
  { l: "GA4 · Looker", k: "08" },
  { l: "Stripe · MercadoPago", k: "09" },
  { l: "Twilio · 360dialog", k: "10" },
  { l: "pgvector · Pinecone", k: "11" },
  { l: "OpenAI · Anthropic · Gemini", k: "12" },
];

export default function Marquee() {
  return (
    <section aria-label="stack" className="relative border-y border-white/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
      <div className="relative marquee-mask overflow-hidden py-6">
        <div className="flex w-max gap-12 animate-marquee whitespace-nowrap">
          {[...tokens, ...tokens].map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-ultrawide text-ivory-200/70"
            >
              <span className="text-cobalt-400/80">{t.k}</span>
              <span className="h-px w-6 bg-white/15" />
              <span>{t.l}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
