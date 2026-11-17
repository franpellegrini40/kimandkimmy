import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import JoinForm from '@/components/forms/JoinForm'

export const metadata: Metadata = {
  title: 'Log in',
  description: 'Member log in for VIVRA, and how to request an invitation if you are new.',
}

// The member platform today is the participants' hub from the Ibiza
// gathering, so it only makes sense for people who were there. Everyone
// else is routed to the invitation form, which triggers Francisco's
// welcome email (lib/welcomeEmail.ts).
const MEMBER_PLATFORM_URL = process.env.NEXT_PUBLIC_MEMBER_PLATFORM_URL || 'https://vivra.ai-os.az.techbricks.io/'

export default async function LoginPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" className="pt-40">
        <span className="eyebrow">Member area</span>
        <h1 className="mt-4 text-3xl md:text-5xl">Log in.</h1>

        <div className="mt-12 grid gap-px border lg:grid-cols-5" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
          <div
            data-theme="prestige"
            className="grain p-8 md:p-10 lg:col-span-2"
            style={{ background: 'var(--surface-page)', color: 'var(--text-primary)' }}
          >
            <span className="eyebrow" style={{ color: 'var(--aqua)' }}>Founding members</span>
            <h2 className="mt-4 text-2xl md:text-3xl">You were with us in Ibiza.</h2>
            <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
              The VIVRA member platform holds the record of our first gathering: the sessions, the map we built and the 90-day commitments. Sign in with the access you received after the retreat.
            </p>
            <a
              href={MEMBER_PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 border px-7 py-3.5 text-[11px] font-medium uppercase transition hover:opacity-80"
              style={{ letterSpacing: 'var(--tracking-caps)', background: 'var(--aqua)', borderColor: 'var(--aqua)', color: 'var(--navy)' }}
            >
              Open the member platform
            </a>
          </div>

          <div className="p-8 md:p-10 lg:col-span-3" style={{ background: 'var(--surface-raised)' }}>
            <span className="eyebrow">New to VIVRA</span>
            <h2 className="mt-4 text-2xl md:text-3xl">Request an invitation.</h2>
            <p className="mt-4 max-w-xl text-sm" style={{ color: 'var(--text-secondary)' }}>
              Tell us who you are. Francisco will write to you to schedule a short call about your profile, our next gatherings and VIVRA membership.
            </p>
            <div className="mt-8">
              <JoinForm />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button href="/" variant="ghost">Back to VIVRA</Button>
        </div>
      </Section>
    </PageShell>
  )
}
