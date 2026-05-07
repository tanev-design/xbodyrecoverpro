# X-Body Recover Pro

Landing page for [X-Body Recover Pro](https://maps.app.goo.gl/MJk1azd7xgKBBHJL8) — boutique EMS training studio at ул. Модър 24, Пловдив.

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3
- Lucide icons

## Run

```bash
npm install
npm run dev      # localhost:5173
npm run build    # production build → dist/
npm run preview  # serve built bundle
```

## Pricing display

EUR/BGN dual-currency display is hard-coded in [src/components/Pricing.tsx](src/components/Pricing.tsx) and [src/components/Hero.tsx](src/components/Hero.tsx). Bulgaria adopted the Euro on 2026-01-01; dual display is legally required until **2026-08-08**. After that date, search the codebase for `EUR/BGN dual-display until 2026-08-08` and remove the BGN columns/spans.

## Deploy

```bash
vercel --prod --yes
```

---

Built by [tanev.design](https://www.tanev.design) — Plovdiv.
