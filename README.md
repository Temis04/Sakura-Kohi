# Sakura Kohi 桜珈琲

A minimal, Tokyo-inspired coffee shop site built for the Keystone Digital Strategy
front-end take-home assessment.

**Concept:** a quiet single-origin coffee counter in Shimokitazawa, Tokyo. The
name and visual identity are named after *kintsugi* — the Japanese art of
repairing broken pottery with gold — which shows up throughout the site as a
recurring gold "seam" motif (section dividers, the logo mark, the customisation
panel edge) rather than as decoration bolted on top.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling, with a small custom design token set (colors,
  fonts, keyframes) in `tailwind.config.ts`
- **React Context** for client-side state — no backend, no external state library
- Fonts: Shippori Mincho (display), Zen Kaku Gothic New (body/UI), JetBrains Mono
  (prices/data), loaded via `next/font/google`

No backend, database, or payment integration — all menu data is static
(`lib/menu-data.ts`) and the cart / checkout flow is entirely client-side, as
specified in the brief.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home / landing |
| `/menu` | Menu grid with category filters, opens the customisation panel |
| `/about` | Brand story |
| `/locations` | Three physical locations, hours, addresses |
| `/contact` | Contact form (client-side only, no server call) |
| `/cart` | Full order review, tax calculation, mock "place order" flow |

## Key interactions

- **Menu customisation panel** (`components/CustomizeDrawer.tsx`): clicking a
  customisable drink opens a right-hand side panel with size, milk, and extras
  selectors. Price updates live as options are toggled, with a running total
  and quantity stepper before adding to cart.
- **Cart drawer** (`components/CartDrawer.tsx`): a lighter-weight panel opened
  from the nav bar for quick review, separate from the full `/cart` page.
- **Ambient petal field** (`components/PetalField.tsx`): a restrained drift of
  sakura petals across the hero, disabled entirely under
  `prefers-reduced-motion`.
- **Seam divider** (`components/SeamDivider.tsx`): the gold "kintsugi crack"
  that draws itself in via `IntersectionObserver` when scrolled into view,
  used as the section-divider signature throughout the site.

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## AI tool usage

This project was built with Claude (Anthropic) as part of the workflow:

- **Design direction & tokens** — Claude proposed the overall concept (a
  kintsugi/sakura-themed Tokyo café), the color palette, font pairing, and the
  "gold seam" as a single recurring signature element, rather than defaulting
  to a generic dark-mode template.
- **Scaffolding** — Claude generated the Next.js App Router structure, Tailwind
  config, and all component/page files (nav, footer, cart context,
  customisation panel, product cards, logo mark) in one pass.
- **Copywriting** — all menu items, descriptions, location details, and the
  "About" story copy were drafted by Claude to fit the brand voice, then
  reviewed for tone and trimmed for concision.
- **Debugging** — Claude ran `npm install` and `npm run build` locally inside
  its own sandboxed environment to catch TypeScript and build errors before
  handoff.
- **Logo** — the kintsugi seal mark (`components/Logo.tsx`) was designed by
  Claude as inline SVG: a circular seal with a five-petal sakura crack traced
  in gold, echoing the kintsugi concept directly in the mark itself.

Everything was reviewed and adjusted by hand afterwards — no code was accepted
without reading it first.
