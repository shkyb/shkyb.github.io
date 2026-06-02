<p align="center">
  <img src="https://raw.githubusercontent.com/shkyb/shkyb.github.io/main/public/favicon.svg" width="64" height="64" style="background:white;padding:12px;border-radius:12px;" alt="SA" />
</p>

# shakib.design

Personal portfolio of Shakib Alipour — Interaction Designer specialising in HMI and Human-Robot Interaction.

**[shakib.design](https://shakib.design)**

---

<p align="center">
  <strong>Stack</strong><br/><br/>
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" />
</p>

<p align="center">
  <strong>Tooling</strong><br/><br/>
  <img src="https://img.shields.io/badge/Claude_Code-D97757?style=for-the-badge&logo=anthropic&logoColor=white" />
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
</p>

<p align="center">
  <strong>Environment</strong><br/><br/>
  <img src="https://img.shields.io/badge/ThinkPad-EE0000?style=for-the-badge&logo=lenovo&logoColor=white" />
  <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" />
  <img src="https://img.shields.io/badge/Fuel-Coffee-6F4E37?style=for-the-badge&logo=buymeacoffee&logoColor=white" />
  <img src="https://img.shields.io/badge/Focus-Classic_FM_📻-722F37?style=for-the-badge" />
</p>

---

## Architecture

The site is built around three layers with a clear separation of concerns.

**1. Site shell**
`App.jsx` owns routing, layout, and transitions. `AnimatePresence` with `mode="wait"` handles page transitions — scroll-to-top fires in `onExitComplete` so it never interrupts the exit animation. The Navbar reacts to per-project CSS tokens automatically without any prop drilling.

**2. Portfolio content layer**
`src/data/projects.js` is the single source of truth for all project data — id, title, description, accent color, team, status. Every component that renders a project (homepage cards, NextProject handoff, OG tags, short URL redirects) reads from this one file. No duplication, no sync issues.

**3. Case study publishing system**
A generic `CaseStudyPage` shell + `registry.js` route lookup table + self-contained per-case folders. Publishing a new case study means dropping a folder, registering a slug, and adding project data — the shell, sidenav, transitions, NextProject navigation, and OG injection all work automatically.

**Design token system**
Each case study defines its own brand palette as CSS custom properties (`--project-primary`, `--project-background`, `--project-kicker`, etc.) in its `caseMeta.cssVars` object. These are applied to `:root` on mount and removed on unmount. Every component in the block library — 15+ reusable blocks covering framing, evidence, visuals, and narrative — reads from these tokens via fallback chains. The Navbar, sidenav, carousel, badges, and prose all react to the active project's palette without a single prop override.

**Block library**
`src/components/case/blocks/` contains 15+ reusable content primitives: `CaseHero`, `CaseOverview`, `SectionHeading`, `ProblemStatement`, `Metrics`, `InsightList`, `ComparisonTable`, `Figure`, `FigureCarousel`, `ImageGrid`, `BeforeAfter`, `Callout`, `PullQuote`, `Timeline`, `ProcessStep`, `NextProject`. Each block reads project tokens, applies the shared spacing system (`spacing.js`), and respects `prefers-reduced-motion`. A living internal reference page at `/projects/blocks-described` documents every block with usage guidance.

**Infrastructure**
A Cloudflare Worker sits in front of `shakib.design/*`. Since the site is a React SPA, social crawlers receive the static shell without per-page OG tags. The worker fetches the root HTML for every page request and rewrites `og:title`, `og:description`, `og:image`, and `og:url` via HTMLRewriter before returning to the crawler — no bot UA matching, works universally. Short URLs (`/ntn`, `/dhrt`, `/ita`) are handled in the same worker via 301 redirects. Cache rules, HSTS, security headers, and Brotli compression are configured at the Cloudflare layer.

---

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run deploy   # builds and pushes to gh-pages branch
```

---

## Easter eggs

`{ eggs: 5, found: 0 }` — good luck.

---

*Designed by hand, built with Claude. Every decision mine.*
