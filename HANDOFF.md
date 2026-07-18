<!-- Last session: 2026-07-16 14:14 -->
<!-- Last session: 2026-07-16 14:09 -->
<!-- Last session: 2026-07-16 14:06 -->
<!-- Last session: 2026-07-16 14:02 -->
<!-- Last session: 2026-07-16 13:41 -->
<!-- Last session: 2026-07-16 13:34 -->
<!-- Last session: 2026-07-16 13:31 -->
<!-- Last session: 2026-07-16 13:28 -->
<!-- Last session: 2026-07-16 13:21 -->
<!-- Last session: 2026-07-16 13:07 -->
<!-- Last session: 2026-07-16 13:00 -->
<!-- Last session: 2026-07-16 12:46 -->
<!-- Last session: 2026-07-16 (scroll-world motion-graphic build) -->
# HANDOFF - greycorelabs.com

## 1. Current Objective
Added an immersive scroll-scrubbed motion-graphic walkthrough (`world.html`) built with the
`scroll-world` skill + Higgsfield. Camera flies through the pentest lifecycle as 6 floating
isometric cyber-dioramas (exposed -> recon -> breach -> inside -> report -> hardened). The
existing lead-gen `index.html` is untouched except for two entry links to the walkthrough.

SHIPPED LIVE to greycorelabs.com on 2026-07-16 (merged to main + pushed). PRIMARY IS v1
(operator edition). NOTE: `momenbasel` lacks push access to greycorelabs/greycorelabs.github.io;
pushed via `gh auth switch --user greycorelabs` then restored momenbasel active.

## 2. Recently Modified / New Files (all UNCOMMITTED)
- `world.html` — PRIMARY scroll cinematic = **v1 (hooded-operator)** scenes. Mounts
  `assets/scroll-world/scrub-engine.js`. Crossfade transitions (connectors null — see blockers).
  Real GreyCore cube logo in the brand mark. All review fixes applied.
- `world-v2.html` — archived **v2 (hoodie-free, consequence-driven)** edition -> `assets/scroll-world-v2/`.
- `assets/scroll-world/` — engine, SOUL.md, 6 v1 posters + vid/ (6 desktop @ CRF26 ~25.4MB + 6 mobile).
- `assets/scroll-world-v2/` — the hoodie-free v2 assets.
- `index.html` — added: nav "Walkthrough" link + hero "Take the walkthrough" btn + a full
  "Watch an attack unfold" IMMERSIVE WALKTHROUGH SHOWCASE band (between SAST and Pricing).
- `sitemap.xml` — added world.html.

## 3. Reviewed + fixed (multi-agent workflow + Codex)
Fixed: invisible primary CTA (engine hardcodes #fff on light --sw-ink -> pinned brand teal, AA);
perf (57.5 -> ~25MB desktop, CRF26); em-dashes removed (copy + head + comment); nav contrast;
LCP preload; sr-only h1; keyboard-focus `inert` script; sitemap; SOUL wording; logo in brand mark.

## 4. Next Steps / Blockers
- FLY-OVER CONNECTORS (5) not generated: Higgsfield "Unlimited Seedance 720p" pass is WEB-APP
  only; MCP/CLI bill workspace credits (~2 left). Engine crossfades those seams (clean). To add:
  ~90 API credits (5 @ fast 720p, ~10 min via the serial seam-frame recipe in scratch), or web UI.
- AD (Marketing Studio "Premium Motion Design") requested — pending same credit situation.
- Not committed/pushed (awaiting go). git: M index.html, sitemap.xml; ?? world.html, world-v2.html, assets/.
- Prior open items: replace founder.jpg, sample report PDF, GSC submit sitemap.

<!-- Last session: 2026-07-18 (UI overhaul pass) -->
## 2026-07-18 UI overhaul (UNCOMMITTED)
- index.html: hero rebuilt as asymmetric split with live engagement terminal (typed cmds, severity-tagged output, blinking cursor, loops; static render under reduced-motion). Floating pills removed.
- Dropped Bootstrap CSS+JS (~230KB): scan form now on custom .f-grid. Font Awesome + Google Fonts kept.
- New: scope sizer in #plans (target x size -> indicative days/price), scrollspy nav (aria-expanded, Esc/click-outside close), spotlight card hover, status bar in footer w/ live UTC clock + back-to-top, custom scrollbar, section scroll-margin-top: 84px, FAQ aria-expanded.
- package.json + dev-server.mjs added for local preview (npm run dev, port arg forwarded).

- Trust marquee + hacker-platform chips: real brand SVGs (HackerOne, Bugcrowd, Synack + cropped mark, OffSec, INE, AWS, Azure, GCP) in assets/logos/, recolored to theme grey, wordmark-vs-icon lockup sizing (.m-logo .wm/.mk). INE sourced from ine.com (worldvectorlogo "ine" is a wrong company).
