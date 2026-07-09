# Sakura Kohi 桜珈琲

A minimal, Japanese-inspired coffee shop site built for the Keystone Digital
Strategy front-end take-home assessment.

**Concept:** a quiet single-origin coffee counter with locations across the
UK (Shoreditch, Manchester, Birmingham). The name and visual identity are
built around *kintsugi*, the Japanese art of repairing broken pottery with
gold. That idea shows up throughout the site as a recurring gold "seam"
motif: section dividers, the wordmark, and the edge of the customisation
panel. The colour palette (soft blush pink, deep charcoal-plum text, antique
gold accent) was chosen to sit alongside that concept, not a generic
dark-mode default.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling, with a small custom design token set (colors,
  fonts, keyframes) in `tailwind.config.ts`
- **React Context** for client-side state. No backend, no external state
  library.
- Fonts: Shippori Mincho (display), Zen Kaku Gothic New (body/UI), JetBrains
  Mono (prices/data), loaded via `next/font/google`

No backend, database, or payment integration. All menu data is static
(`lib/menu-data.ts`), and the cart/checkout flow is entirely client-side, as
specified in the brief.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home / landing |
| `/menu` | Menu grid with category filters, opens the customisation panel |
| `/about` | Brand story |
| `/locations` | Three UK locations, hours, addresses |
| `/contact` | Contact form (client-side only, no server call) |
| `/cart` | Full order review, tax calculation, mock "place order" flow |

## Key interactions

- **Menu customisation panel** (`components/CustomizeDrawer.tsx`): clicking a
  customisable drink opens a right-hand side panel with size, milk, and
  extras selectors. Price updates live as options are toggled, with a
  running total and quantity stepper before adding to cart.
- **Cart drawer** (`components/CartDrawer.tsx`): a lighter panel opened from
  the nav bar for quick review, separate from the full `/cart` page.
- **Ambient petal field** (`components/PetalField.tsx`): a restrained drift
  of sakura petals across the hero, disabled entirely under
  `prefers-reduced-motion`.
- **Seam divider** (`components/SeamDivider.tsx`): the gold kintsugi crack
  that draws itself in via `IntersectionObserver` when scrolled into view.
  Used as the section-divider signature throughout the site.

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

## My contribution vs. AI usage

Here's how this was actually built, since the brief asks for that directly.

**What I did:**
- Set the initial brand direction and supplied reference images for the
  wordmark logo style, the colour palette, and the founding concept
- Made every real creative decision: the final slogan ("A quiet cup, poured
  well."), which colour direction to use, which UK cities to feature, and
  the call to drop the Tokyo origin story in favour of a fully UK-based one
- Reviewed the site screen by screen at each stage and caught real issues,
  including a layout bug where the homepage's featured-drinks grid only had
  2 of 3 cards filled, and a text-contrast issue that needed fixing for
  accessibility
- Handled the entire Git and GitHub setup myself, including debugging a
  nested-folder issue in the repo structure
- Read and understood every section of the site well enough to explain the
  reasoning behind it (for example, the kintsugi naming logic) rather than
  just shipping whatever was generated

**What Claude did:**
- Scaffolded the Next.js App Router structure, Tailwind config, and all
  component and page files in an initial pass
- Implemented the customisation panel, cart logic, and the wordmark and seam
  divider components based on my direction
- Drafted menu copy, location details, and About page copy, which I then
  reviewed and had revised where the tone or content needed changing
- Ran `npm install` and `npm run build` locally in its own sandbox to catch
  TypeScript and build errors before handoff

Everything in the final repo was reviewed and adjusted by hand. No code was
accepted without reading it first, and every design decision above was mine,
not a default the AI picked on its own.