# DESIGN.md — Architectural & Visual System

## 1. Design Read & Positioning

> **Design Read:** Personal engineering portfolio and technical leadership dossier for engineering directors, CTOs, and technical recruiters evaluating senior/lead talent, with a restrained editorial-technical aesthetic leaning toward high-contrast typographic authority, flat tonal surfaces, and concrete architectural proof over decorative UI chrome.

* **Product Context:** A technical leadership dossier and engineering portfolio for **Alexis Rivadeneira** (Lead Software Engineer, 7+ years of experience across enterprise micro-frontends, fintech, transit, and mobile systems).
* **Target Persona:** Engineering Directors, VPs of Engineering, CTOs, Founders, and Senior Technical Recruiters who evaluate candidates by architectural ownership, production systems shipped, and peer credibility—not novelty widgets or self-rated skill badges.
* **Core Aesthetic Thesis:** Authority comes from scale contrast, spatial precision, and verifiable engineering substance. Every screen acts as a structured editorial poster: monumental display type (`Cabinet Grotesk`), legible technical prose (`Satoshi`), flat tonal surface steps instead of glowing glass cards, and zero unverified claims.

---

## 2. Negative Constraints (Banned Patterns)

The following AI-slop and template anti-patterns are strictly forbidden across all components and stylesheets (enforced via `design-taste-frontend` `lint.mjs` and `inspect.mjs`):

* **No Blurry Gradient Blobs or Ambient Glows:**
  * Forbidden: `blur-[120px]`, `blur-3xl`, glowing avatar rings (`-inset-1 bg-linear-to-r ... blur`), and glowing timeline dots (`shadow-[0_0_0_4px_...]`).
* **No Gradient Fills or Clipped Gradient Text:**
  * Forbidden: `bg-linear-to-*`, `bg-gradient-to-*`, and `bg-clip-text text-transparent` on headlines, buttons, or avatars. Surfaces and buttons use flat, solid tokens only.
* **No Default Dark Glassmorphism or 1px Outlined Card Grids:**
  * Forbidden: Translucent card containers (`bg-neutral-900/30`), `backdrop-blur-*` panels, and repetitive 1px bordered bento grids (`border border-neutral-800 rounded-2xl`).
  * Separation is achieved through generous spatial rhythm (`140px–200px` desktop section gaps) and flat tonal steps (`--bg` → `--surface` → `--surface-raised`).
* **No Saturated Blue, Indigo, or Purple Accents:**
  * Forbidden: `purple-*`, `indigo-*`, `violet-*`, or neon emerald-to-purple gradients (`from-emerald-500 to-purple-600`).
* **No Drop Shadows at Rest:**
  * Forbidden: `shadow-lg`, `shadow-xl`, `shadow-2xl` on static cards, avatars, or buttons.
* **No Ornament Typography (Monospace Pills, Eyebrows, Index Numbers):**
  * Forbidden: `font-mono` outside literal `<code>`/`<pre>` blocks, tiny uppercase letter-spaced kickers (`text-xs uppercase tracking-widest`), and zero-padded index markers (`01 / 30`). Use `font-variant-numeric: tabular-nums` in the body font (`Satoshi`) for aligned dates and counts.
* **No Emoji as UI Chrome:**
  * Forbidden: Emoji icons in buttons or labels (`👔`, `☕`, `🫏`, `🏴‍☠️`, `📜`, `💻`, `✨`).
* **No Generic Corporate Filler or Unverified Skill Walls:**
  * Forbidden: Anonymous job-title-only hero headlines, buzzword tag clouds (*"SOLID Principles"*, *"Agile / SCRUM"*), and novelty AI persona toys (`AISummary`).

---

## 3. The Argument Flow

Every surviving section exists to make one sequential claim backed by immediate, visible proof. Sections without a real claim (`TechStack` and `AISummary`) are removed.

| Order | Section | Claim | Proof on Screen |
| :--- | :--- | :--- | :--- |
| **1** | **Hero** (`Hero.jsx`) | Alexis Rivadeneira is a Lead Software Engineer with 7+ years of experience modernizing legacy systems and leading cross-functional delivery teams. | Full-width `<h1>` naming Alexis Rivadeneira & role, concrete scope statement naming client systems (Devsu, SM Energy, Kushki, Brightline), portrait, and primary actions (`Book a Call`, `Download Resume`). |
| **2** | **Experience** (`Experience.jsx`) | He delivers measurable architectural transitions across energy, fintech, transit, and retail at enterprise scale. | Exposed architectural case logs (SM Energy React micro-frontends + Django/FastAPI, Kushki sprint velocity & CI/CD, Brightline Next.js booking rebuild, La Favorita Flutter VIPER pipeline, EasyFix Android launch) with inline stack tags and a live domain filter. |
| **3** | **Projects** (`Projects.jsx`) | He builds and maintains open-source software and production tools in public. | Scannable tabular repository ledger fetched from GitHub (`alexisriva`) with live descriptions, primary languages, star counts, direct links, and an interactive side preview panel. |
| **4** | **Endorsements** (`Testimonials.jsx`) | Engineers and founders who shipped with him vouch for his architectural rigor and ownership. | Full-bleed warm stone chapter band displaying all four peer endorsements in a balanced 2x2 grid (Kurt Vardeman @ SM Energy, Francisco Cáceres @ EasyFix/Jobsquare, Viviana Laurido Aguirre @ TechSoft Systems S.A., Miguel Sanchez @ Devsu). |
| **5** | **Contact & Close** (`Contact.jsx`, `Footer.jsx`) | He is available for technical leadership roles, architectural consulting, and direct conversation. | Direct 30-minute Google Calendar booking CTA, downloadable PDF resume (`/RESUME-RIVADENEIRA.pdf`), GitHub/LinkedIn links, and a monumental wordmark close. |

---

## 4. Design Tokens & Typography

### Font Pairing (`index.html`)
* **Display Face:** **Cabinet Grotesk** (Weights `700`, `800`) — High-tension architectural grotesk for `h1`–`h3` and monumental wordmarks.
* **Body & UI Face:** **Satoshi** (Weights `400`, `500`, `700`) — Crisp geometric neo-grotesk for technical prose, controls, and tabular numerals.

```html
<link rel="preconnect" href="https://api.fontshare.com" />
<link rel="preconnect" href="https://cdn.fontshare.com" crossorigin />
<link
  href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800&f[]=satoshi@400,500,700&display=swap"
  rel="stylesheet"
/>
```

### CSS Custom Properties (`src/index.css`)

```css
:root {
  /* Typography */
  --font-display: 'Cabinet Grotesk', system-ui, -apple-system, sans-serif;
  --font-sans: 'Satoshi', system-ui, -apple-system, sans-serif;

  /* 5-Step Fluid Type Scale */
  --step-display: clamp(3.25rem, 1.5rem + 7.5vw, 7.5rem);   /* Hero h1 & Footer Monument */
  --step-head: clamp(2rem, 1.35rem + 2.8vw, 3.75rem);       /* Section h2 */
  --step-lead: clamp(1.25rem, 1.1rem + 0.65vw, 1.625rem);   /* Lead statements & featured quotes */
  --step-body: clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem);   /* 17–19px running prose */
  --step-small: clamp(0.875rem, 0.84rem + 0.12vw, 0.9375rem); /* 14–15px metadata (floor: >= 13px) */

  /* Surface Background Tiers (Flat tonal steps, zero blur/glass) */
  --bg: #0c0d0c;              /* Primary deep carbon-obsidian ground */
  --surface: #141614;         /* +1 tonal step for case blocks and active ledger rows */
  --surface-raised: #1c1f1c;  /* +2 tonal step for interactive hover/focus states */
  --field-invert: #e8e4dc;    /* Inverted warm stone chapter field (Endorsements) */
  --field-invert-surface: #ded9cf; /* +1 tonal step inside inverted stone field */
  --field-invert-ink: #111211;/* Primary ink on inverted stone field */
  --field-invert-muted: #524f49; /* Secondary ink on inverted stone field */

  /* Ink & Contrast Hierarchy */
  --ink: #f2efe9;             /* Primary warm bone ink (17.2:1 on --bg, WCAG AAA) */
  --ink-secondary: #b5b0a6;   /* Supporting body prose (9.4:1 on --bg, WCAG AAA) */
  --ink-muted: #858078;       /* Dates, languages, secondary labels (5.2:1 on --bg, WCAG AA) */

  /* Single Constrained Accent (Mineral Sage / Oxidized Verdigris) */
  --accent: #7fa682;          /* Interactive highlights, active filter state, focus ring */
  --accent-solid: #d9e5d6;    /* Solid primary button fill */
  --accent-ink: #0c0d0c;      /* High-contrast dark ink on solid primary buttons */

  /* Layout & Frame */
  --page-max: 1360px;
  --page-gutter: clamp(1.25rem, 4vw, 3.5rem);
  --section-gap: clamp(6rem, 11vw, 11.5rem);
}
```

### Typographic Discipline
1. **Two-Line Headline Ceiling:** Every `h1`, `h2`, and `h3` must fit in **2 lines or fewer** across desktop (`1440px`), tablet (`768px`), and mobile (`390px`).
2. **Display Settings:** `font-family: var(--font-display)`, `font-weight: 800`, `letter-spacing: -0.035em`, `line-height: 0.92`, `text-wrap: balance`.
3. **Body Settings:** `font-family: var(--font-sans)`, `line-height: 1.55`, `max-width: 65ch`, `text-wrap: pretty`.
4. **Numeric Alignment:** Apply `font-variant-numeric: tabular-nums` to all date ranges, star counts, and metrics.

---

## 5. Component Rules

### Frame & Grid Asymmetry
* **Outer Frame:** One unified container (`max-width: var(--page-max)`, horizontal padding `var(--page-gutter)`) with equal left and right outer margins at every viewport width.
* **12-Column Architectural Grid:** Every section uses a distinct horizontal composition so no two adjacent sections share a layout pattern:
  * **Hero:** Top utility bar (`AR` monogram mark left, plain text nav links right) → Full-width `<h1>` across columns 1–12 → Asymmetric baseline split (Columns 1–7 lead statement; Columns 9–12 portrait + primary/secondary actions).
  * **Experience (4/8 Sticky Split + Live Filter):** Columns 1–4 hold the sticky section header, career span, and interactive **Architectural Domain Filter** (`All`, `Frontend & Micro-UIs`, `Backend & APIs`, `Mobile & CI/CD`); Columns 5–12 hold exposed, full-detail client case logs (`SM Energy`, `Kushki`, `Brightline`, `La Favorita`, `EasyFix`, `PANORA`).
  * **Projects (7/5 Quiet Ledger + Sticky Preview):** Columns 1–7 render a tabular list of original GitHub repositories; Columns 8–12 hold a sticky visual/architectural preview frame that updates on row hover or keyboard focus.
  * **Endorsements (Full-Bleed Inverted Field, 2x2 Balanced Spread):** Full-viewport-width `--field-invert` (`#e8e4dc`) band. Responsive 2-column grid (`md:grid-cols-2`) displaying all four peer endorsements simultaneously on tonal stone blocks (`--field-invert-surface`) with balanced visual weight (Kurt Vardeman @ SM Energy, Francisco Cáceres @ EasyFix/Jobsquare, Viviana Laurido Aguirre @ TechSoft Systems S.A., Miguel Sanchez @ Devsu).
  * **Contact & Footer (7/5 Closing Split + Monument Wordmark):** Columns 1–7 carry the closing availability statement; Columns 8–12 hold the action stack (`Book a 30-Min Call`, `Download Resume`) and direct social links, closing with a full-width cropped display wordmark.

### Surfaces & Interactive States (Replacing Cards)
* **No Outlined Boxes:** Group content using flat tonal fills (`background: var(--surface)`) with crisp square or minimal (`4px`) corners decided once across the page.
* **Accessible Controls:** All interactive filters and repository rows must use semantic `<button>` or `<a>` elements (never `<div onClick>`) with visible `:focus-visible` outlines (`2px solid var(--accent)`, `offset: 2px`) and explicit `transition-property: transform, opacity, background-color, color` (never `transition-all`).

### Call-to-Action (CTA) Hierarchy
* **Primary CTA:** Solid flat fill (`background: var(--accent-solid)`, `color: var(--accent-ink)`, `font-weight: 700`), named concretely for its action (`Book a 30-Min Call`). Maximum one primary solid button per screen.
* **Secondary Action:** Plain high-contrast text link or tonal surface button (`background: var(--surface-raised)`, `color: var(--ink)`) with a subtle directional arrow or underline offset.

### Responsive Behavior & Motion
* **Viewport Units:** Use `100svh` / `min-h-svh` instead of `100vh` (`h-screen`) to prevent mobile browser toolbar jump.
* **Phone Composition (`390px`):** Columns stack cleanly with `20px` outer gutters; the Experience domain filter wraps into a thumb-friendly horizontal pill bar; the Projects ledger displays top repository previews inline without requiring hover; all headlines remain ≤ 2 lines.
* **Motion Layer:** Staggered section part entrances (`translateY(20px)` + `opacity`, `60–90ms` stagger), subtle scroll-linked scale on the hero/footer wordmark, and full `@media (prefers-reduced-motion: reduce)` support that preserves layout and visibility without travel.
