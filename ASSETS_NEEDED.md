# Assets needed before launch

## Received and integrated
- ✅ **Brochure** (`Vivra_Retreat_Ibiza_2026_Final_Version.pdf`) — full text extracted and
  now drives `content/retreat.ts`, `content/agenda.ts`, `content/people.ts` (real dates,
  four conversations, who-joins profiles, day-by-day agenda, pricing, facilitator bios).
- ✅ **Villa video** (`House_Video.mp4`) — processed into `public/videos/villa-hero.mp4` /
  `.webm` (an 18–40s loop, re-encoded and compressed) plus a poster frame
  (`public/images/hero-poster.jpg`). The hero background is real footage now, not a
  placeholder.
- ✅ **8 real villa photos**, extracted as high-quality stills from the same video and
  wired into `VillaGallery` and `WhatIsVivra`:
  `villa-facade.jpg`, `villa-dining.jpg`, `villa-pool.jpg`, `villa-kitchen.jpg`,
  `villa-view.jpg`, `villa-gym.jpg`, `villa-bedroom.jpg`, `villa-aerial.jpg` (all in
  `public/images/`). These are genuine frames of Can Aylma — not stock photography —
  but a proper photoshoot would still look sharper than video stills; swap in real
  photography whenever it's available.
- ✅ **2 real photographs** (higher quality than the video stills) — `villa-pool-loungers.jpg`
  (the pool/loungers) now used in `FoundingRetreat` ("Why Ibiza / Can Aylma"), and
  `vivra-gathering-table.jpg` (the branded long-table photo) now used in `WhoJoins`
  ("V.I.P. — Very Impactful People").
- ✅ **VIVRA design system** (`Vivra_design_system_download.zip`) — this replaced nearly
  everything in "Brand / design system" below. Real color tokens (navy #000E21, ivory
  #F7F4EE, copper #C57A3C, aqua #37C8D9), the real logo (`public/logo/*.svg`, inlined as
  `components/ui/Logo.tsx`), spacing/motion tokens and the exact Button/Card/Tag specs
  (square corners, no shadows) are now implemented site-wide — see `app/globals.css` and
  `tailwind.config.ts`. The one thing the export did **not** include: licensed font
  files for Optima and Neue Haas Grotesk Display (see below).

## Received and integrated (facilitators & venue)
- ✅ **Portrait photos** for all five — Francisco Pellegrini, Sharon Cittone, Diana, Saha
  and Dunja — real photos now in `public/people/*.jpg`, wired into `content/people.ts`
  (`image` field) and rendered via `<Photo>` in `PeopleGrid.tsx` / `HealingPractices.tsx`.
- ✅ **Real Puglia venue photo** — replaced the stock aerial vineyard shot at
  `public/images/alliance/puglia.jpg`.
- ✅ **Sharon Cittone's "VIVRA World Flagship Workshop" PDF** — saved at
  `public/downloads/vivra-world-flagship-workshop.pdf`, downloadable via a button on her
  `PeopleGrid` card.
- [ ] **The 5 lifestyle/brand images you pasted inline in chat** (the VIVRA wordmark
      long-table shot, two pool photos, the two kitchen/living interior collages) — these
      rendered in the conversation but aren't retrievable as files from this side. If you
      want them used as real site imagery (rather than the video stills already in use),
      please attach them the same way you attached the PDF and video — as an actual file
      upload, not pasted inline — and I'll wire them in directly.

## Brand / design system
- [ ] **Licensed font files for Optima and Neue Haas Grotesk Display** — both are
      commercial fonts; the design-system export defined the tokens and fallback
      chains (`app/globals.css`, `--font-display` / `--font-text`) but didn't include
      the actual `.woff2` files (font vendors don't let export tools redistribute
      binaries). Until you supply them, the site uses **Jost** (Optima stand-in) and
      **Manrope** (Neue Haas stand-in) — both self-hosted via `next/font`, visually
      close, but not the real thing. Once you have licensed files, drop them in
      `public/fonts/` and swap the `next/font/google` calls in `app/layout.tsx` for
      `next/font/local` pointing at those files — the CSS variables and every
      component that consumes them stay unchanged.
- [ ] **Favicon** → `public/favicon.ico` (a simple export of `public/logo/vivra-icon.svg`
      would do the job in five minutes if you want to close this one out yourself).

## Membership & Alliance
- ✅ **Membership tiers** (`Vivra_Tier_Benefits_V2.pdf`) — Explorer / Member / Legacy, full
  benefit comparison table and the VIVRA Longevity Panel breakdown are now real content in
  `content/tiers.ts`, rendered as a comparison table in `TiersGrid.tsx`. Pricing intentionally
  omitted per instruction (to be announced). Terms (3-month minimum, 30% Alliance-club
  discount, 10% annual-payment discount) are listed as footnotes under the table.
- ✅ **VIVRA World Alliance value proposition** (`Vivra_World_Alliance_Short_Overview.pdf`) —
  positioning, how-it-works framing, membership/VIP pitch and the venue network are now real
  content in `content/alliance.ts`, rendered on `/alliance` and in the homepage `AllianceTeaser`.
  Note: this source deck is marked "Strictly Confidential" / investor-facing, so partner names,
  deal attribution (which partner brought which venue) and investor-only framing (e.g. the
  10,000-member POC language) were deliberately left out of the public copy — only positioning
  and the venue list (open vs. opening soon) made it to the site, per instruction. Also: the
  deck lists "Hamptons / United Kingdom", which is almost certainly a typo (the Hamptons are in
  New York, USA) — corrected to USA on the site; flag if that's wrong.

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
