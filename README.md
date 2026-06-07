# NOVUM — Studio of intelligent systems

Sitio oficial del studio. Next.js 14 (App Router) · Tailwind CSS · Framer Motion · TypeScript.

## Stack

- **Framework:** Next.js 14.2 (App Router, RSC)
- **Estilos:** Tailwind CSS 3.4 con tokens propietarios
- **Animación:** Framer Motion 11
- **Iconos:** Lucide React
- **Tipografía:** Instrument Serif (display) + Inter (sans) + JetBrains Mono
- **Deploy:** Vercel (estático con SSR a demanda)

## Estructura

```
novum-web/
├─ app/
│  ├─ layout.tsx         · root layout, metadata, fuentes
│  ├─ page.tsx           · home (ensambla las secciones)
│  └─ globals.css        · tokens, noise, grid, scrollbar
├─ components/
│  ├─ Nav.tsx            · header sticky con blur
│  ├─ Hero.tsx           · editorial + showreel
│  ├─ Marquee.tsx        · ticker de stack
│  ├─ Products.tsx       · Botika · PAUTIK · NOVUMed
│  ├─ Services.tsx       · bento grid
│  ├─ Process.tsx        · 4 pasos
│  ├─ Projects.tsx       · portfolio (con outcomes)
│  ├─ Contact.tsx        · CTA final
│  └─ Footer.tsx
├─ public/assets/        · logos + showreel
├─ tailwind.config.ts    · paleta ink/bone/electric/signal
└─ vercel.json
```

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build producción
npm start        # serve build
```

## Deploy a Vercel

### Opción A — CLI (recomendado)

```bash
npm i -g vercel
cd novum-web
vercel        # primera vez: crea el proyecto, vincula a tu cuenta
vercel --prod # publicación a dominio definitivo
```

Durante `vercel` te preguntará:
- Set up and deploy? **Y**
- Which scope? *(tu equipo)*
- Link to existing project? **N** (primera vez)
- Project name? **novum-web** (o el que quieras)
- Directory? **./** (estás dentro de novum-web)
- Override settings? **N** (lee vercel.json)

### Opción B — Desde el dashboard

1. Sube este folder a un repo en GitHub/GitLab/Bitbucket.
2. En [vercel.com/new](https://vercel.com/new) importas el repo.
3. Framework: **Next.js** (autodetectado).
4. Root directory: `novum-web` (si subiste el folder padre).
5. Deploy.

## Dominio

Una vez desplegado:
- Vercel te asigna `novum-web.vercel.app`.
- En *Project → Settings → Domains* añade `novum.studio` (o el TLD que vayas a usar) y sigue las instrucciones de DNS (A record o CNAME).

## Personalización rápida

| Cambio | Archivo |
|---|---|
| Colores / paleta | `tailwind.config.ts` (extend.colors) |
| Headline hero | `components/Hero.tsx` |
| Productos | `components/Products.tsx` (Botika / Pautik / NovuMed) |
| Servicios | `components/Services.tsx` (array `cards`) |
| Proyectos | `components/Projects.tsx` (array `projects`) |
| Contacto | `components/Contact.tsx` (mail, WA, tel) |
| Logo / showreel | `public/assets/` |

## Notas de diseño

- Paleta: deep ink (`#05060A` → `#262B3D`) + bone neutro + electric blue accent.
- Tipografía editorial (`Instrument Serif`) en headlines con énfasis italic en una palabra clave por bloque.
- Bento grid con tarjetas asimétricas (algunas span 2 cols) — no grid 3-en-3 plano.
- Animaciones de entrada con `whileInView`, easing cubic-bezier suave, respeta `prefers-reduced-motion`.
- Layout grid 12 cols con eyebrows monospace numerados (01 · 02 · 03 …).

## Performance

```
Route /
First Load JS: 133 kB
HTML inicial: ~70 kB
```

Pre-renderizado estático completo. El video del hero es el único asset pesado — considera convertirlo a HLS o reducir bitrate si necesitas Core Web Vitals AAA.

---

© NOVUM Studio · Hecho con código. No con plantillas.
