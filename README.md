# Lumis

Studio site for [lumis.xyz](https://lumis.xyz) — a digital studio that designs and builds websites, catalogues, stores, custom platforms, and AI tools for businesses.

This is a conversion-focused marketing site, not a personal portfolio. Selected work includes [Bloom & Barrow](https://bloom-and-barrow.vercel.app/).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Motion, Lucide, Radix UI

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, concepts, work, services, pricing, find-a-start |
| `/services` | Full catalogue with problem / solution cards |
| `/solutions` | Audience lanes and job → build intents |
| `/pricing` | Four layers: Basic → Intermediate → Advanced → Advanced Pro |
| `/work` | Selected work |
| `/expertise` | How work is made |
| `/about` | Studio |
| `/process` | Delivery path |
| `/contact` | Form, WhatsApp, email, phone |

Pricing starts at **₹18,999** (one-time). Each higher plan keeps everything below it.

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
npm run lint
```

Optional public contact overrides (defaults are already in the app):

```
NEXT_PUBLIC_EMAIL=lumisxyz01@gmail.com
NEXT_PUBLIC_PHONE=+918217700728
NEXT_PUBLIC_WHATSAPP=918217700728
```

Contact submissions go through `POST /api/contact`.

## Deploy on Vercel

Import [deekshith-b48/lumis-work](https://github.com/deekshith-b48/lumis-work). Vercel reads `vercel.json` (Next.js framework, npm build) and Node **20.9+** from `package.json` / `.nvmrc`.

Optional project env vars: `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_WHATSAPP`.

## Repo layout

```
src/app/           routes, layout, contact API
src/components/    home, pricing, sections, layout
src/data/          copy, plans, services, work
public/            logo and stills
```

## License

Private studio project for Lumis.
