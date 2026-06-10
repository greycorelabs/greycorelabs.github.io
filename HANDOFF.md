<!-- Last session: 2026-06-11 02:51 -->
<!-- Last session: 2026-06-11 02:49 -->
# HANDOFF - greycorelabs.com

## 1. Current Objective
Convert greycorelabs.com from zero-customer brochure into research-backed lead-gen site. Full overhaul shipped 2026-06-11.

## 2. Recently Modified Files
- `index.html`: hero copy (compliance-trigger lead, first-person CTA), pricing repositioned ($100/man-day -> from $3,500/assessment; $1,950 rejected as below the documented $3k "scanner reseller" threshold), fabricated testimonials replaced with verifiable Track Record section (FTC fake-review rule, Oct 2024), disclosure wall now has real brand logos (Simple Icons CDN + 3 hand-inlined SVGs: Microsoft/Adobe/AT&T + FA for LinkedIn/Yahoo, ESET text-only), founder card: "Founder" title + founder.jpg + moamenbasel.com link, live GitHub star counts via API with static fallbacks (keyFinder 675 / VulnHawk 64 / AgentGuard 6 / total 862+), blog "COMING SOON" -> real links (htb-writeups, VulnHawk, keyFinder), 5 new FAQ items (sample report, attestation, why-cheap, start time), compliance slider reworded (CREST -> MITRE ATT&CK, SOC 2 Type II -> SOC 2, honest caption), schema ProfessionalService -> Organization + makesOffer + sameAs, og:image meta.
- New files: `og.png` (1200x630), `founder.jpg` (GitHub avatar placeholder - REPLACE with real LinkedIn photo, same filename), `robots.txt`, `sitemap.xml`, `llms.txt`, `security.txt`, `.well-known/security.txt`.

## 3. Next Steps / Blockers
- Replace `founder.jpg` with real LinkedIn photo (LinkedIn authwall blocked automated fetch).
- Create redacted sample pentest report PDF (top buyer-checklist item; site now promises it on request).
- Google Search Console: verify domain via DNS TXT, submit sitemap.
- List on Clutch (free) + G2 Penetration Testing Services; pitch inclusion in Astra/DeepStrike "top pentest companies" listicles (AI engines cite these).
- Research report: ~/Library/Mobile Documents/com~apple~CloudDocs/obesidan/moamen/projects/research/greycorelabs-leadgen.md
