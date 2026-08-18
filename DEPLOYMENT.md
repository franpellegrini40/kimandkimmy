# Deployment — worldvivra.com + joinvivra.com

This environment has no Vercel, registrar, or DNS credentials, so the steps below are
what you (or whoever holds those accounts) need to run. Everything else — the app
itself — is already built to support this exact setup with zero code changes.

## 1. Create the Vercel project
1. Go to vercel.com → **Add New → Project** → import this GitHub repo
   (`franpellegrini40/kimandkimmy`, branch `claude/vivra-world-website-build-26sqyp`
   or whichever branch you merge it into for production, e.g. `main`).
2. Framework preset: Next.js (auto-detected). Leave build command / output as default.
3. Add the environment variables from `.env.example` under **Settings → Environment
   Variables** (fill in real values — Supabase, GA4, WhatsApp link, etc). Add
   `NEXT_PUBLIC_SITE_DOMAIN=worldvivra.com` for the sitemap/robots to point at the right host.
4. Deploy.

## 2. Attach both domains to the SAME project
Both domains must point at this one Vercel project — the app tells them apart by the
`Host` header at request time (see `lib/site.ts`), so there is no second project to
maintain.

In the Vercel project → **Settings → Domains**:
1. Add `worldvivra.com` (and `www.worldvivra.com` — it will redirect to the apex automatically
   via `middleware.ts`).
2. Add `joinvivra.com` (and `www.joinvivra.com`).

Vercel will show you the exact DNS records to add for each domain (an `A`/`ALIAS`
record for the apex, a `CNAME` for `www`). Copy those exact values into step 3 — don't
improvise them.

## 3. DNS — do this at your registrar (e.g. GoDaddy, Namecheap, Google Domains)
**Before touching DNS**, open your current DNS records for both domains and copy down
every `MX`, `TXT` (especially anything starting `v=spf1` or `v=DKIM1`), and `CNAME`
record related to email (Google Workspace, Microsoft 365, etc). Do **not** delete or
modify those — only add the new records Vercel gave you in step 2. Adding an unrelated
`A`/`CNAME` record for the web root does not affect email, but a wholesale
"replace all DNS records" import from a registrar UI can silently wipe MX/SPF/DKIM —
avoid that operation specifically.

1. Open your DNS management screen for `worldvivra.com`.
2. Add the exact `A` (or `ALIAS`/`ANAME`) record Vercel showed you for the apex domain.
3. Add the exact `CNAME` record Vercel showed you for `www`.
4. Repeat steps 1–3 for `joinvivra.com`.
5. Wait for propagation (usually minutes, sometimes up to a few hours) — Vercel's
   Domains tab will show a green checkmark and issue an SSL certificate automatically
   once DNS resolves correctly.

## 4. Verify
- [ ] `https://worldvivra.com` loads the VIVRA World homepage, padlock/HTTPS valid.
- [ ] `https://joinvivra.com` loads the Founding Retreat homepage, padlock/HTTPS valid.
- [ ] `https://www.worldvivra.com` redirects to `https://worldvivra.com`.
- [ ] Existing email for both domains still works (send/receive a test email) —
      confirms MX/SPF/DKIM were untouched.
- [ ] `/apply/join`, `/apply/ibiza`, `/apply/alliance` submit successfully (check
      Supabase table or your Formspree dashboard for the new row).

## What this session cannot do for you
- Cannot log into a registrar, Vercel, Supabase, Formspree, GA4, or Meta/LinkedIn
  business account — those all require credentials only you hold.
- Cannot invent DNS record values — Vercel generates the correct ones per-domain; use
  those exactly, not the examples above.
