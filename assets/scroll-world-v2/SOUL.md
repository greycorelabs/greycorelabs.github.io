# World-Soul — greycorelabs.com scroll cinematic

The "soul" of this scroll-world: the fixed identity every generated frame shares so the
six scenes read as one continuous place. Not a trained face (Higgsfield Soul ID needs
5-20 real photos and suits characters, not environment dioramas) — instead a locked
art-direction preamble plus a recurring persona. Reuse the preamble **byte-for-byte** in
every scene/clip prompt. Changing it breaks cohesion.

## Brand
- Name: **GreyCore Labs** — offensive security / penetration testing.
- Tone: precise, adversarial but controlled, elite. No hype.
- Palette (from the live site `:root`): deep blue-black `#0d1216`, gunmetal `#1a2228`,
  teal-green neon `#00d4aa` (primary accent), bright mint `#3df0cf`, alert red `#e5484d`,
  off-white `#f2f4f5`.
- Fonts: Bricolage Grotesque (display), Archivo (body), JetBrains Mono (labels).

## Direction (v2 — no figures, consequence-driven)
The world carries the story through **consequence, not a character**. No people, no hooded
operator — that trope is the default visual language of commodity security marketing and
undercuts GreyCore's elite, human-driven positioning. Each scene shows the *state* of the
attack instead: an open unguarded gate + an exposed red server rack; an unmanned floating
attack-graph; a vault bleeding a red data-exfiltration beam; a breach-path leading to the
glowing crown-jewel data; a findings dashboard with a handshake (the single human touch =
the engagement/trust); a sealed teal shield dome, all-green.

v1 (the earlier hooded-operator edition) is preserved at `assets/scroll-world-v1/` +
`world-v1.html` for comparison.

## Style preamble (verbatim in every prompt)
```
Isometric low-poly 3D diorama floating as a small rounded island on a plain solid #0d1216
deep blue-black background with a soft contact shadow beneath it. Dark offensive-security
art direction: matte gunmetal surfaces, teal-green neon edge lighting, thin holographic
data lines, moody rim light, subtle volumetric glow, tilt-shift miniature look, cinematic
and premium. Cohesive palette of deep blue-black #0d1216, gunmetal #1a2228, teal-green
neon #00d4aa, bright mint #3df0cf, alert red #e5484d, off-white #f2f4f5. Highly detailed,
centered composition, generous headroom, absolutely no text, no letters, no numbers, no
logos.
```

## Journey (6 beats = the pentest lifecycle)
1. **exposed** — The Exposed Perimeter (external attack surface). accent red.
2. **recon** — Recon & Mapping (ops room, attack graph). accent teal.
3. **breach** — The Breach (exploit lab, cracked vault). accent red.
4. **inside** — Inside the Network (data-center lateral movement). accent mint.
5. **report** — The Report (situation room, findings dashboard). accent teal.
6. **hardened** — Hardened (fortified perimeter + CTA). accent mint.

## Technical
- Architecture **B** (dive-in + aerial connector) — idiomatic for floating-island
  miniatures; the pull-out-and-fly-over reads as "zoom to the map, fly to the next island."
- Video model `seedance_2_0` (1080p, dives 8s, connectors 5s). Stills `gpt_image_2` 3:2/2k.
- Connectors are frame-locked: start = dive_i last frame, end = dive_{i+1} first frame,
  extracted from the RENDERED videos (never the stills).
- Encodes: desktop 1080p crf20 `-g8`; mobile-beta 720p crf23 `-g4` (`-m.mp4`).
- Page bg == scene bg (`#0d1216`) so posters/clips match with no visible edge; no knockout needed.
