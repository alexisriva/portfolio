# PLAN.md — Multi-Model Refactoring Plan

## Overview & Orchestration Protocol

This plan follows `/multi-model-workflow` to refactor the portfolio in alignment with [DESIGN.md](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/DESIGN.md), `/design-taste-frontend`, and `/web-design-guidelines`.

* **Phase 1 — Decompose (Pro Tier):** Break the codebase refactor into **5 atomic sub-tasks** with strictly isolated file scopes so `flash-builder` subagents never collide on the same file.
* **Phase 2 — Delegate (`flash-builder`, `Model: "flash"`):** Dispatch self-contained task prompts to `flash-builder` subagents. Tasks 2, 3, 4, and 5 have disjoint component scopes and can be executed in parallel once Task 1 (Tokens & Shell) lands.
* **Phase 3 — Verify & Synthesize (Pro Tier):** Run `npm run lint`, `npm run build`, `/design-taste-frontend` `lint.mjs`, and real-browser `inspect.mjs` at `1440px`, `768px`, and `390px` to verify **0 FAILs** before final sign-off.

---

## Global Contract & Negative Constraints (Enforced on Every Task)

Every `flash-builder` subagent must adhere to these non-negotiable rules from [DESIGN.md](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/DESIGN.md):

1. **Zero Banned CSS / Tailwind Classes (`lint.mjs` Gate):**
   * **NO gradients:** Never use `bg-linear-*`, `bg-gradient-*`, `from-*`, `via-*`, `to-*`, or `bg-clip-text`.
   * **NO shadows at rest:** Never use `shadow-*` (`shadow-sm`, `shadow-lg`, `shadow-xl`, `shadow-2xl`).
   * **NO blurs or glassmorphism:** Never use `blur-*` or `backdrop-blur-*`.
   * **NO 1px hairline borders or outlined cards:** Never use `border`, `border-t`, `border-b`, `border-l`, `border-r`, or `ring-*` on layout blocks, cards, or dividers. Separate surfaces strictly with space and flat tonal steps (`var(--bg)`, `var(--surface)`, `var(--surface-raised)`).
   * **NO monospace classes:** Never use `font-mono`. Use `tabular-nums` (`font-variant-numeric: tabular-nums`) in `Satoshi` (`var(--font-sans)`) for dates, counts, and metrics.
   * **NO tiny tracked uppercase labels (eyebrows/micro-labels):** Never combine `uppercase` with `text-xs` or `tracking-wider`/`tracking-widest`. Use sentence case at `>= 14px` (`var(--step-small)`).
   * **NO purple/indigo/violet:** Never use `purple-*`, `indigo-*`, or `violet-*`.
   * **NO `transition-all` or `h-screen`:** Always name explicit properties (`transition-colors`, `transition-transform`, `transition-opacity`) and use `min-h-svh` / `100svh`.
   * **NO emoji or zero-padded index numbers:** No emoji characters in JSX (`✨`, `👔`, etc.) and no `padStart(2, '0')` (`01 / 02`).
2. **Headline Arithmetic:**
   * Every `h1`, `h2`, and `h3` must fit in **2 lines or fewer** at `1440px`, `768px`, and `390px`. Keep section headings to 2–4 words (`Selected Experience`, `Open-Source Ledger`, `Peer Endorsements`, `Start a Conversation`).
3. **Web Design Guidelines (Accessibility & Semantics):**
   * Interactive controls must use semantic `<button type="button">` or `<a>` tags—never `<div onClick>`.
   * Every interactive element must have visible `:focus-visible` styling (`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fa682]`).
   * All `<img>` tags must carry explicit `width`, `height`, `alt`, and `loading="lazy"` (except above-the-fold hero imagery).

---

## Atomic Sub-Tasks for `flash-builder` (`Model: "flash"`)

### Task 1: Foundation, Tokens, Fonts & Application Shell
* **Subagent:** `flash-builder` (`Model: "flash"`)
* **Target File Scope:**
  * Modify: [index.html](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/index.html)
  * Modify: [src/index.css](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/index.css)
  * Modify: [src/App.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/App.jsx)
  * Modify: [package.json](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/package.json) (remove unused `@google/generative-ai` dependency)
  * Delete: [src/components/TechStack.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/TechStack.jsx)
  * Delete: [src/components/AISummary.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/AISummary.jsx)
  * Delete: [src/hooks/useAISummary.js](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/hooks/useAISummary.js)
* **Implementation Contract:**
  1. **[index.html](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/index.html):** Replace the Google Fonts `Inter` links with Fontshare preconnect and stylesheet links loading `cabinet-grotesk@700,800` and `satoshi@400,500,700`. Update `<title>` to `Alexis Rivadeneira — Lead Software Engineer`.
  2. **[src/index.css](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/index.css):**
     * Define all CSS custom properties from [DESIGN.md](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/DESIGN.md#L64-L103) (`--font-display`, `--font-sans`, `--step-display`, `--step-head`, `--step-lead`, `--step-body`, `--step-small`, `--bg`, `--surface`, `--surface-raised`, `--field-invert`, `--field-invert-surface`, `--field-invert-ink`, `--field-invert-muted`, `--ink`, `--ink-secondary`, `--ink-muted`, `--accent`, `--accent-solid`, `--accent-ink`, `--page-max`, `--page-gutter`, `--section-gap`).
     * Set `body` to `background-color: var(--bg); color: var(--ink); font-family: var(--font-sans); min-height: 100svh;` (remove `100vh` and `Inter`).
     * Add clean utility classes for typography (`.font-display`, `.text-display`, `.text-head`, `.text-lead`, `.text-body`, `.text-small`, `.tabular-nums`), layout frame (`.page-frame` with `max-width: var(--page-max); margin-inline: auto; padding-inline: var(--page-gutter);`), and scroll/entrance motion classes (`.reveal-item`, `@media (prefers-reduced-motion: reduce)` fallback).
  3. **[src/App.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/App.jsx):**
     * Remove `TechStack` and `AISummary` imports and delete `src/components/TechStack.jsx`, `src/components/AISummary.jsx`, and `src/hooks/useAISummary.js`.
     * Remove the fixed blurry gradient blobs (`bg-emerald-900/20 rounded-full blur-[120px]`, etc.) and `h-screen` / `max-w-4xl` wrapper.
     * Render the 5 surviving sections (`Hero`, `Experience`, `Projects`, `Testimonials`, `Contact`, `Footer`) inside a structured architectural shell that allows full-bleed chapter bands (`Testimonials`, `Footer`) while maintaining consistent `--page-gutter` and `--section-gap` rhythm.
* **Verification Commands:**
  * `node /Users/alexisrivadeneira/.gemini/config/skills/design-taste-frontend/scripts/lint.mjs index.html src/index.css src/App.jsx`
  * `npm run build`

---

### Task 2: Hero Monument & Navigation (`Hero.jsx`)
* **Subagent:** `flash-builder` (`Model: "flash"`)
* **Target File Scope:**
  * Modify: [src/components/Hero.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Hero.jsx)
* **Implementation Contract:**
  1. **Top Navigation Bar:**
     * Semantic `<header>` inside `.page-frame` with wordmark `Alexis Rivadeneira` at left (`font-medium text-[var(--ink)]`) and 4 plain text anchor links at right (`#experience` → `Experience`, `#projects` → `Projects`, `#endorsements` → `Endorsements`, `#contact` → `Contact`) plus a direct action link. No floating pill bar, no blur, no 1px border.
  2. **Monumental Headline (`<h1>`):**
     * Spanning columns 1–12 in `var(--font-display)` at `var(--step-display)`, weight `800`, tight tracking (`-0.035em`), line-height `0.92`, solid `--ink` color (`#f2efe9`—remove `bg-clip-text` and gradients).
     * Copy: `Alexis Rivadeneira` (or `Lead Software` / `Architect` in ≤ 2 lines at all widths, paired with the explicit name and title so a 5-second scan immediately identifies who and what).
  3. **Asymmetric Baseline Split (12-Column Grid):**
     * **Columns 1–7:** Concrete supporting lead statement in `var(--step-lead)` (`color: var(--ink-secondary)`, key terms in `var(--ink)`): *"Seven years designing distributed web platforms, fintech delivery pipelines, and native mobile systems for SM Energy, Kushki, Brightline, and La Favorita."* Below it, two crisp actions: Primary solid button (`Book a 30-Min Call` → Google Calendar URL, `bg-[var(--accent-solid)] text-[var(--accent-ink)] font-bold px-6 py-3.5 rounded-[4px]`) and secondary tonal action (`Download Resume (PDF)` → `/RESUME-RIVADENEIRA.pdf`).
     * **Columns 9–12:** Portrait/avatar (`/logo.png` with explicit `width="160" height="160"`, square/minimal radius `rounded-[4px]`, zero blur glow, zero `shadow-2xl`, flat tonal frame `bg-[var(--surface)] p-4`) alongside a factual metadata ledger (Location / Timezone, `7+ Years Tenure`, `Enterprise & Startup Leadership`) set in `Satoshi` with `tabular-nums`.
* **Verification Commands:**
  * `node /Users/alexisrivadeneira/.gemini/config/skills/design-taste-frontend/scripts/lint.mjs src/components/Hero.jsx`
  * `npm run lint`

---

### Task 3: Experience Case Ledger & Live Domain Filter (`Experience.jsx` & `experiences.json`)
* **Subagent:** `flash-builder` (`Model: "flash"`)
* **Target File Scope:**
  * Modify: [src/components/Experience.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Experience.jsx)
  * Modify: [src/assets/experiences.json](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/assets/experiences.json)
* **Implementation Contract:**
  1. **Enrich [src/assets/experiences.json](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/assets/experiences.json):**
     * Add structured metadata to each project entry inside `Devsu`, `Jobsquare SA`, and `Conto360`:
       * `domain`: one of `"Architecture & Web"`, `"Backend & APIs"`, or `"Mobile & CI/CD"`
       * `stack`: array of concrete technologies used in that specific engagement (e.g., `["React", "Micro-Frontends", "Django", "FastAPI", "Python"]` for SM Energy; `["Technical Leadership", "CI/CD", "Agile Delivery"]` for Kushki; `["Next.js", "TypeScript", "Tailwind CSS", "Core Web Vitals"]` for Brightline; `["Flutter", "VIPER Architecture", "Bitrise CI/CD"]` for La Favorita; `["Android SDK", "Kotlin", "Java", "Push Workflows"]` for EasyFix; `["Django", "Python", "REST APIs", "PostgreSQL"]` for PANORA).
       * `image` & `imageAlt`: curated grayscale architectural photography from the dealt `design-taste-frontend` "Architecture" set (`https://picsum.photos/id/942/800/500?grayscale`, `id/618`, `id/620`, `id/887`) to satisfy the inspector's real-imagery floor with honest atmospheric architectural plates.
  2. **Refactor [src/components/Experience.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Experience.jsx) into an Asymmetric 4/8 Split:**
     * **Remove allslop:** Remove `border-l border-neutral-800`, remove the glowing emerald dot (`shadow-[0_0_0_4px_rgba(16,185,129,0.2)]`), remove `font-mono` date badges, and **remove the hidden accordion (`isExpanded` state on `<div onClick>`)** so all client case logs are visible and readable immediately.
     * **Left Rail (Columns 1–4, sticky on desktop):**
       * Section heading `<h2>` (`Selected Experience`, ≤ 2 lines).
       * Concise framing sentence and the **Live Architectural Domain Filter** ("One Live Thing" from `/design-taste-frontend` step 4): semantic `<button type="button">` controls for `All Systems`, `Architecture & Web`, `Backend & APIs`, and `Mobile & CI/CD`, displaying a live count (`tabular-nums`) of matching client architectures and smoothly filtering the case logs on the right.
     * **Right Rail (Columns 5–12):**
       * Role blocks (`Devsu · Senior Software Engineer, Tech Lead`, `Jobsquare SA · Lead Android Developer`, `Conto360 · Software Developer`) with `tabular-nums` tenure dates.
       * Exposed client engagement blocks on flat tonal surfaces (`bg-[var(--surface)] p-6 sm:p-8 rounded-[4px]`, zero borders, zero shadows) showing client name, role, architectural outcome, contextual stack tags (`bg-[var(--surface-raised)] text-[var(--ink-secondary)] px-3 py-1 text-[14px]`), and architectural plate thumbnails on featured systems.
* **Verification Commands:**
  * `node /Users/alexisrivadeneira/.gemini/config/skills/design-taste-frontend/scripts/lint.mjs src/components/Experience.jsx`
  * `npm run lint`

---

### Task 4: Projects Quiet Ledger & Sticky Side Preview (`Projects.jsx`)
* **Subagent:** `flash-builder` (`Model: "flash"`)
* **Target File Scope:**
  * Modify: [src/components/Projects.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Projects.jsx)
* **Implementation Contract:**
  1. **Remove 3D Carousel & Slop Tells:**
     * Remove the 3D stacked card deck (`perspective-distant`, `shadow-2xl`, `ring-1`), `backdrop-blur-md` overlays, `bg-linear-to-*` gradients, `blur-3xl` glow blobs, `animate-pulse` skeleton boxes, `font-mono`, `padStart(2, '0')` index numbers (`01 / 30`), `uppercase tracking-widest text-xs` labels, and `bg-indigo-400` / `bg-purple-400` language colors.
  2. **Implement 7/5 Quiet Ledger + Sticky Side Preview (Dealt Blueprint `work — Quiet ledger, side preview`):**
     * Curate the fetched GitHub repositories (`https://api.github.com/users/alexisriva/repos?sort=updated&direction=desc&per_page=30`) to display original (non-fork) repositories, prioritizing repositories with descriptions or stars (up to 8–10 top repositories, with a clean toggle to view all).
     * **Columns 1–7 (The Ledger):**
       * Section heading `<h2>` (`Open-Source Ledger`, ≤ 2 lines) and supporting sentence.
       * Interactive semantic rows: each row displays the repository name in `var(--ink)` (`18px font-medium`), primary language in `var(--ink-muted)` (`15px`), star count with `tabular-nums`, and direct `GitHub` / `Live` links.
       * Active/hovered row shifts surface tone to `var(--surface-raised)` (no 1px border lines; rows alternate or separate by vertical spacing `gap-2`).
     * **Columns 8–12 (Sticky Preview Panel):**
       * Displays the currently active/hovered repository's preview on a flat `var(--surface)` panel (`p-6 rounded-[4px]`).
       * Uses the repository screenshot (`https://raw.githubusercontent.com/alexisriva/${project.name}/main/public/screenshot.png`) if available; if the repo has no `screenshot.png`, displays a clean grayscale architectural photograph from the dealt set alongside a structured typographic specification sheet (Repository title, full description, language, star count, and primary CTA buttons to inspect source or launch demo).
     * **Phone Layout (`390px`):** Stacks cleanly with full-width repository cards on `var(--surface)` showing inline preview images on the top 3 repositories so mobile visitors never depend on hover.
* **Verification Commands:**
  * `node /Users/alexisrivadeneira/.gemini/config/skills/design-taste-frontend/scripts/lint.mjs src/components/Projects.jsx`
  * `npm run lint`

---

### Task 5: Inverted Stone Endorsements Spread & Architectural Close (`Testimonials.jsx`, `Contact.jsx`, `Footer.jsx`)
* **Subagent:** `flash-builder` (`Model: "flash"`)
* **Target File Scope:**
  * Modify: [src/components/Testimonials.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Testimonials.jsx)
  * Modify: [src/components/Contact.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Contact.jsx)
  * Modify: [src/components/Footer.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Footer.jsx)
* **Implementation Contract:**
  1. **[src/components/Testimonials.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Testimonials.jsx) — Full-Bleed Inverted Stone Chapter Band:**
     * Remove the 5-second auto-advancing carousel (`setInterval`), prev/next icon buttons, pagination dots, `shadow-xl`, `border-neutral-800`, and `bg-linear-to-br from-emerald-500 to-purple-600` avatar circles.
     * Render as a full-bleed chapter band (`background: var(--field-invert); color: var(--field-invert-ink);` `#e8e4dc` warm stone ground with `#111211` charcoal ink).
     * Inside `.page-frame`, set the `<h2>` (`Peer Endorsements`, ≤ 2 lines) and lay out all three testimonials from [src/assets/testimonials.json](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/assets/testimonials.json) simultaneously in an **asymmetric 6/6 editorial spread**:
       * **Columns 1–6:** Kurt Vardeman (Software Engineer @ SM Energy) set as the lead endorsement in `var(--step-lead)` with curly quotation marks (`“…”`) and solid attribution block.
       * **Columns 7–12:** Stacked tonal stone blocks (`background: var(--field-invert-surface)`, `p-8 rounded-[4px]`) for Francisco Cáceres (Co-Founder Easyfix, Co-Founder Jobsquare) and Miguel Sanchez (Fullstack Developer @ Devsu).
  2. **[src/components/Contact.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Contact.jsx) — Asymmetric 7/5 Closing Split:**
     * Remove the centered bordered box (`border-neutral-800 rounded-2xl bg-neutral-900/30`) and generic filler copy.
     * **Columns 1–7:** Heading `<h2>` (`Start a Conversation`, ≤ 2 lines) and direct statement: *"Available for staff/lead engineering roles, architectural advisory, and technical leadership across distributed web and mobile teams."*
     * **Columns 8–12:** Flat tonal action block (`bg-[var(--surface)] p-8 rounded-[4px]`) containing the primary solid CTA (`Book a 30-Min Call` → `https://calendar.app.google/6NbKHXwEwsbHZp8y7`) and secondary action (`Download PDF Resume` → `/RESUME-RIVADENEIRA.pdf`), with clear expectations (*"Direct 30-minute video call via Google Meet"*).
  3. **[src/components/Footer.jsx](file:///Users/alexisrivadeneira/Desktop/DEV/Solo/portfolio/src/components/Footer.jsx) — Monumental Wordmark Close:**
     * Remove `border-t border-neutral-900`, `bg-linear-to-r` gradient button, `shadow-lg`, and `text-xs tracking-widest uppercase` tells.
     * Open the footer with the monumental display wordmark (`ALEXIS RIVADENEIRA`) spanning the full `.page-frame` width in `var(--font-display)`, weight `800`, tight leading (`0.88`), followed by a clean two-column bottom row: direct links (`GitHub`, `LinkedIn`, `Book a Call`, `Download Resume`) at `16px` sentence case on the left, and copyright (`Alexis Rivadeneira © 2026`) + `Back to top ↑` anchor link at `14px` (`var(--step-small)`) on the right.
* **Verification Commands:**
  * `node /Users/alexisrivadeneira/.gemini/config/skills/design-taste-frontend/scripts/lint.mjs src/components/Testimonials.jsx src/components/Contact.jsx src/components/Footer.jsx`
  * `npm run lint`

---

## Phase 3: Pro-Tier Verification & Visual Gate

After all 5 `flash-builder` subagents complete their tasks, the main agent will run:

1. **Static Anti-Slop & ESLint Gate:**
   ```bash
   node /Users/alexisrivadeneira/.gemini/config/skills/design-taste-frontend/scripts/lint.mjs src index.html
   npm run lint
   npm run build
   ```
2. **Real-Browser Visual Inspection Gate (`1440px`, `768px`, `390px`):**
   * Start the production/dev server and run:
     ```bash
     node /Users/alexisrivadeneira/.gemini/config/skills/design-taste-frontend/scripts/inspect.mjs <local-url>
     ```
   * Inspect all generated screenshots at desktop (`1440px`), tablet (`768px`), and phone (`390px`), verifying **0 FAIL** across headline line counts, contrast, frame margins, imagery floor, and motion layer.
