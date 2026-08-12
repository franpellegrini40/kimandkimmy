# VIVRA — vivra.world / joinvivra.com

One Next.js codebase serving two domains: **vivra.world** (institutional brand +
membership + Alliance) and **joinvivra.com** (Ibiza Founding Retreat, conversion-first).
Which homepage renders is decided per-request by the `Host` header
(`lib/site.ts` → `getCurrentSite()`), so both domains are attached to the same
deployment (see `DEPLOYMENT.md`) — no duplicate project, no duplicate content to keep
in sync.

Shared subpages (`/ibiza`, `/membership`, `/alliance`, `/people`, `/agenda`) render
identically regardless of which domain the visitor is on, with navigation/CTA
hierarchy adapting per `site`.

## Status

This is a working, deployable build — architecture, the real VIVRA brand system,
routing, all homepage/subpage sections, real brochure content and villa
photography/video, three multi-step application forms with a real backend adapter,
SEO, and analytics scaffolding are all in place. What's still missing is itemized in
`ASSETS_NEEDED.md` — mainly facilitator portraits and the licensed Optima/Neue Haas
Grotesk font files. Every gap is marked `PENDING` (copy) or as an `AssetPlaceholder`
(imagery) directly in the code, so nothing is silently guessed.

## Brand system

Colors, spacing, motion and component specs (square corners, no shadows, hairline
borders) come directly from VIVRA's own design-system export and live as CSS custom
properties in `app/globals.css` — `--navy`, `--ivory`, `--copper`, `--aqua-*`, plus
theme-level tokens (`--surface-page`, `--text-primary`, `--accent`, …) that flip
automatically between the light "ivory" theme and the dark "prestige" theme
(`data-theme="prestige"` on any section/header in its dark state — see
`components/ui/Section.tsx`). Copper only ever appears on navy, matching the brand
rule ("copper lives exclusively on navy, never on white or ivory"); aqua is the
light-theme accent. Because components read colors from these CSS variables rather
than hardcoded Tailwind classes, nesting is what drives theming — wrap anything in a
`data-theme="prestige"` element and its buttons/eyebrows/rules re-theme for free.

The real logo (`public/logo/vivra-lockup.svg`) is inlined as `components/ui/Logo.tsx`
so it inherits `color` from its wrapper — same file renders navy, ivory or copper
depending on where it's placed.

## Stack

- **Next.js 15 (App Router) + TypeScript** — file-based routing, server components by
  default, easy to deploy to Vercel with zero config.
- **Tailwind CSS** — utility classes for layout/spacing; brand colors consumed via CSS
  variables (see "Brand system" above) rather than Tailwind's color palette, so the
  same component re-themes correctly regardless of section.
- **Framer Motion** — subtle scroll reveals only, respects `prefers-reduced-motion`
  (`components/ui/RevealOnScroll.tsx`).
- **Zod** — form validation, shared between client and API routes.
- No CMS yet. See "Content model" below for why, and when to add one.

## Content model (how you'll edit things later)

All editable content lives in `/content/*.ts` as plain TypeScript objects — no CMS
login needed, but also no visual editor. To change copy, dates, agenda, tiers, or add a
person:

- `content/site.ts` — nav, CTA labels, footer links
- `content/retreat.ts` — retreat facts, villa perks, experience pillars, day-in-the-life
- `content/agenda.ts` — the multi-day agenda
- `content/people.ts` — founders/hosts/practitioners/speakers
- `content/tiers.ts` — membership tiers, Alliance benefits

**Recommendation on a CMS:** don't add one yet. The content above changes rarely
(dates, bios, a few paragraphs) and a non-technical edit via GitHub's web UI (click the
file, click the pencil icon, edit, commit) is simpler than standing up and maintaining
Sanity/Contentful. If VIVRA later needs frequent, non-technical, high-volume edits
(e.g. a content team publishing daily), migrate `content/*.ts` to Sanity — the data
shapes are already clean TypeScript types, so that migration is mechanical, not a
rewrite.

## Forms & CRM

Three forms — Join VIVRA (`/apply/join`), Ibiza Founding Retreat (`/apply/ibiza`),
VIVRA World Alliance (`/apply/alliance`) — each multi-step, low-friction, with a
honeypot field and basic per-IP rate limiting.

Storage adapter (`lib/leads.ts`) tries, in order:
1. **Supabase** (if `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` are set) — recommended:
   free tier, a real Postgres table you can view/export/filter in the Supabase UI,
   grows into a full CRM later. Create a `leads` table with columns
   `type text, payload jsonb, status text default 'New', created_at timestamptz`.
2. **Formspree** (if a `FORMSPREE_*_ENDPOINT` env var is set) — zero-infra fallback,
   dashboard + email notification built in, GDPR-friendly, exportable to CSV.
3. **Local JSON file** (`data/leads.dev.json`) — dev-only fallback; most serverless
   hosts (Vercel included) don't persist filesystem writes across
   invocations/deployments, so this is not a production data store. View it at
   `/admin/leads?key=YOUR_ADMIN_ACCESS_KEY` locally.

An optional webhook (`LEAD_NOTIFY_WEBHOOK_URL`) pings Slack/Zapier/Make on every new
application. Confirmation emails aren't wired up yet — add a `RESEND_API_KEY` and a
short `sendConfirmationEmail()` call in `lib/leads.ts` once you have a Resend account
(the env var is already documented in `.env.example`).

UTM parameters are captured client-side on first landing (`lib/utm.ts`) and persisted
through the whole session, so they arrive with the form submission regardless of how
many pages the visitor viewed first.

## Analytics

GA4 loads (`app/layout.tsx`) only once `NEXT_PUBLIC_GA4_ID` is set, and only fires with
`analytics_storage: granted` after the visitor accepts cookies
(`components/layout/ConsentBanner.tsx` — Google Consent Mode v2 default-denied pattern).
`lib/analytics.ts` exposes `trackEvent()` for the named events already wired into the
forms and agenda accordion (`form_started`, `form_step_completed`, `form_completed`,
`form_abandoned`, `agenda_day_opened`, `video_play`). Meta Pixel / LinkedIn Insight Tag
env vars are documented but not injected yet — add their script tags next to the GA4
block in `app/layout.tsx` once IDs exist and consent architecture is confirmed to cover
them too.

## SEO

Per-route `metadata` exports, auto-generated `sitemap.xml` / `robots.txt`
(`app/sitemap.ts`, `app/robots.ts` — `/admin` and `/api` disallowed), Organization
JSON-LD (`components/seo/OrganizationJsonLd.tsx`), and a generated branded OG image
fallback (`app/opengraph-image.tsx`) so social shares never look broken even before
real photography lands.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in what you have; everything else degrades gracefully
npm run dev
```

Visit `http://localhost:3000` — it renders the vivra.world homepage by default. To
preview the joinvivra.com variant locally, either deploy a preview and visit it via
that domain, or temporarily edit `NEXT_PUBLIC_JOIN_DOMAIN` matching logic in
`lib/site.ts` for a local override.

## Security

Next.js is pinned to 15.5.23, which patches a real disclosed advisory
(GHSA-955p-x3mx-jcvp, unauthenticated Server Function endpoint disclosure) that
affects 14.x with no 14.x patch — hence building on 15 rather than 14. `npm audit`
still flags `postcss`/`sharp` versions bundled *inside* Next's own internal
image/CSS toolchain (not something this app calls directly); the only fix npm
proposes is jumping to Next 16, which is very new — re-evaluate that once 16 has more
runway. Forms have a honeypot field and basic per-IP rate limiting
(`lib/rateLimit.ts`); upgrade to Upstash Redis rate limiting before high-traffic launch
since the current implementation resets per server instance.

## Deployment

See `DEPLOYMENT.md` for the exact, step-by-step Vercel + DNS process, including how to
avoid breaking existing email (MX/SPF/DKIM) on either domain.

## What's intentionally not built yet

- A visual CMS (see "Content model" above for why).
- Actual DNS/Vercel/Supabase/GA4 account creation — needs credentials this session
  doesn't have (`ASSETS_NEEDED.md` lists exactly what's needed).
- Confirmation emails and a full lead-status workflow (New → Contacted → Invited →
  Accepted) — the `status` column exists in the Supabase schema above; building a UI to
  change it is a fast follow once Supabase is live.
- Real photography/video and brochure copy — all placeholders are visibly marked in
  the running site itself, not just in this doc.
