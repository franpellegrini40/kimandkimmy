# Assets needed before launch

The site is fully built and functions today with elegant placeholder blocks in place
of missing photography/video (see `components/ui/AssetPlaceholder.tsx`). Nothing is
blocked — but none of the following exist in this repository yet, because no design
system zip, brochure PDF, video file, or photo file was actually attached to this
build session (only 5 images rendered inline in chat, which aren't retrievable as files).
Drop the real files at the exact paths below and the placeholders disappear automatically
once you wire them into the relevant component (marked `TODO` in each file once assets land).

## 1. Brand / design system
- [ ] **VIVRA brandbook / design system zip** — logo files (SVG preferred, plus PNG @2x),
      approved color hex values, type specimens. Currently the palette and type
      (Fraunces + Manrope) are *inferred* from the wordmark and villa photography you
      shared inline — treat as a starting point, not final.
- [ ] **Logo files** → `public/logo/` (e.g. `vivra-wordmark.svg`, `vivra-mark.svg`,
      `vivra-wordmark-white.svg` for use over dark hero video).
- [ ] **Favicon** → `public/favicon.ico`

## 2. Ibiza Founding Retreat brochure
- [ ] **Brochure PDF (or the source copy doc)** — this is the primary content source
      per your brief, and none of its actual text reached this repo. Every section
      marked `PENDING` in `content/retreat.ts`, `content/agenda.ts`, `content/tiers.ts`
      needs this to be replaced with approved language:
  - Retreat dates
  - "Why Ibiza / Who Attends / Why Founding" copy
  - Full multi-day agenda
  - Membership tier names + benefits
  - VIVRA World Alliance value proposition / benefits
  - "What is VIVRA" positioning paragraph

## 3. Villa photography & video
- [ ] **Hero video** (the strongest cinematic villa/Ibiza clip) → export as:
      `public/videos/villa-hero.mp4` (H.264) and `public/videos/villa-hero.webm` (VP9),
      max ~8–12MB each, 1920×1080, muted-safe (no dependent audio).
      Poster frame → `public/images/hero-poster.jpg` (same crop, 1920×1080).
- [ ] **Villa photos** (~10–15), see exact specs already coded into
      `components/sections/VillaGallery.tsx` (`GALLERY_SPECS`) and
      `components/sections/WhatIsVivra.tsx` / `FoundingRetreat.tsx` — aspect ratios are
      already defined so photos can drop in with correct cropping.
- [ ] **OG/share image** → `public/og/vivra-og.jpg` (1200×630). Until supplied, the site
      auto-generates a branded text-only fallback (`app/opengraph-image.tsx`).

## 4. People
- [ ] Founder / host / practitioner / speaker **photos + bios**, one per person, added to
      `content/people.ts` (`PEOPLE` array) with the photo path referenced. Structure is
      ready in `components/sections/HealingPractices.tsx` and `PeopleGrid.tsx`.

## 5. Accounts / credentials (see also DEPLOYMENT.md)
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
