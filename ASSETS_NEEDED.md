# Assets needed before launch

## Received and integrated
- ✅ **Brochure** (`Vivra_Retreat_Ibiza_2026_Final_Version.pdf`) — full text extracted and
  now drives `content/retreat.ts`, `content/agenda.ts`, `content/people.ts` (real dates,
  four conversations, who-joins profiles, day-by-day agenda, pricing, facilitator bios).
- ✅ **Villa video** (`House_Video.mp4`) — processed into `public/videos/villa-hero.mp4` /
  `.webm` (an 18–40s loop, re-encoded and compressed) plus a poster frame
  (`public/images/hero-poster.jpg`). The hero background is real footage now, not a
  placeholder.
- ✅ **7 real villa photos**, extracted as high-quality stills from the same video and
  wired into `VillaGallery`, `WhatIsVivra` and `FoundingRetreat`:
  `villa-facade.jpg`, `villa-dining.jpg`, `villa-pool.jpg`, `villa-kitchen.jpg`,
  `villa-view.jpg`, `villa-bedroom.jpg`, `villa-aerial.jpg` (all in `public/images/`).
  These are genuine frames of Can Aylma — not stock photography — but a proper
  photoshoot would still look sharper than video stills; swap in real photography
  whenever it's available.

## Still needed
- [ ] **Portrait photos** for the five named facilitators now in `content/people.ts` —
      Francisco Pellegrini, Sharon Cittone, Diana, Saha, Dunja. Currently shown as a
      labeled placeholder mark (`components/ui/AssetPlaceholder.tsx`) since no headshots
      have been supplied. Save as `public/people/<slug>.jpg` (slugs already match the
      `PEOPLE` array) once available, and swap the `AssetPlaceholder` in
      `HealingPractices.tsx` / `PeopleGrid.tsx` for a real `<Photo>`.
- [ ] **The 5 lifestyle/brand images you pasted inline in chat** (the VIVRA wordmark
      long-table shot, two pool photos, the two kitchen/living interior collages) — these
      rendered in the conversation but aren't retrievable as files from this side. If you
      want them used as real site imagery (rather than the video stills already in use),
      please attach them the same way you attached the PDF and video — as an actual file
      upload, not pasted inline — and I'll wire them in directly.

## Brand / design system
- [ ] **VIVRA brandbook / design system zip** — logo files (SVG preferred, plus PNG @2x),
      approved color hex values, type specimens. The palette and type (Fraunces +
      Manrope) are still *inferred* from the wordmark and villa photography — a real
      brandbook would let this match exactly rather than approximately.
- [ ] **Logo files** → `public/logo/` (e.g. `vivra-wordmark.svg`, `vivra-mark.svg`,
      `vivra-wordmark-white.svg` for use over the dark hero video).
- [ ] **Favicon** → `public/favicon.ico`

## Membership & Alliance
The brochure covers the Ibiza retreat in full detail but doesn't define VIVRA Membership
tiers or the VIVRA World Alliance B2B value proposition beyond one closing line — so
`content/tiers.ts` is still marked `PENDING`. Send approved tier names/benefits and
Alliance partnership terms when they exist.

## Accounts / credentials (see also DEPLOYMENT.md)
- [ ] Supabase project (or Formspree endpoints) for the three forms
- [ ] GA4 property ID
- [ ] Meta Pixel ID / LinkedIn Insight Tag ID (optional, hooks already exist)
- [ ] WhatsApp community invite link (`NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL`) — the
      floating "Join our community" button only renders once this is set.
- [ ] Domain registrar/DNS access for vivra.world and joinvivra.com
- [ ] Vercel account (or confirm alternative host)
- [ ] Confirmed Instagram/LinkedIn URLs (`content/site.ts` currently has best-guess
      placeholders — verify before launch)

Legal copy in `/privacy` and `/terms` is placeholder structure only — flagged inline on
each page — and needs counsel review before launch.
