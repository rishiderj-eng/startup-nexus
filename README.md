# Startup Nexus

A premium, dark-mode startup-validation platform — a collaborative ecosystem where founders submit ideas and get them scored by experts across every industry before building or raising.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, shadcn-style primitives, and **Lucide** icons. Inspired by Linear, Stripe, Vercel, YC, and Notion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (all routes prerender statically)
npm run start    # serve the production build
```

> Node 18.18+ recommended.

## The signature element

The platform's distinguishing feature is the **collaborative validation score** — an animated gradient ring (`src/components/shared/score-ring.tsx`) backed by a six-axis breakdown: Innovation, Feasibility, Market Fit, Legal Readiness, Technology, and Funding Readiness. It's what makes this a working surface rather than a directory.

## Routes

| Route | Description |
| --- | --- |
| `/` | Landing page (hero, stats, how-it-works, categories, dashboard, pricing, testimonials, FAQ) |
| `/explore` | Startup directory with industry filtering |
| `/startups/[slug]` | Full startup profile (problem, solution, market, roadmap, reviews, score) |
| `/dashboard` | Founder validation cockpit (score, radar, trend, tasks, funding) |
| `/experts` · `/experts/apply` | Expert profiles + application |
| `/investors` | Investor profiles |
| `/community` | Forums, events, hackathons, AMAs, news feed, trending |
| `/resources` | Templates, grants, blogs, videos, courses |
| `/pricing` | Pricing tiers + FAQ |
| `/submit` · `/login` · `/signup` | Idea submission and auth |

## Project structure

```
src/
├── app/                 # routes (App Router)
├── components/
│   ├── ui/              # shadcn-style primitives (button, card, badge, accordion, progress)
│   ├── layout/          # navbar, footer, floating CTA
│   ├── sections/        # landing-page sections
│   └── shared/          # reveal, score-ring, counters, cards, headings
├── data/                # typed dummy data (startups, experts, investors, testimonials, …)
└── lib/                 # cn() utility
```

## Connecting a backend

All data lives in `src/data/*` and is fully typed. Every place that should hit an API is marked with a `// TODO(backend):` comment (e.g. `GET /api/startups`, `POST /api/auth/login`). Swap the static imports for fetches and the UI works unchanged.

## Design system

- **Palette** — background `#09090B`, card `#18181B`, primary `#2563EB`, accent `#8B5CF6`, success `#10B981`, exposed as HSL CSS variables in `globals.css` and mapped in `tailwind.config.ts`.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (scores/data), loaded via Google Fonts.
- **Motion** — Framer Motion for fade/slide reveals, counters, hover lift, and the score ring. Respects `prefers-reduced-motion`.
