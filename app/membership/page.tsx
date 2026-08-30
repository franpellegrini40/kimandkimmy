import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import MemberDashboard from '@/components/sections/MemberDashboard'
import TiersGrid from '@/components/sections/TiersGrid'
import CTABand from '@/components/sections/CTABand'
import {
  ALLIANCE_TAGLINE,
  ALLIANCE_POSITIONING,
  ALLIANCE_INDEPENDENCE,
  ALLIANCE_MEMBERSHIP,
} from '@/content/alliance'

export const metadata: Metadata = {
  title: 'Membership',
  description: 'One membership, the VIVRA Passport, opening access across a growing alliance of independent clubs, venues and experiences.',
}

export default async function MembershipPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      {/* Opening — the alliance positioning */}
      <Section tone="light" className="pt-40">
        <RevealOnScroll>
          <span className="eyebrow">{ALLIANCE_POSITIONING.eyebrow}</span>
          <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">{ALLIANCE_POSITIONING.heading}</h1>
          <p className="mt-3 max-w-xl text-sm" style={{ color: 'var(--text-quiet)' }}>{ALLIANCE_TAGLINE}</p>
          <p className="mt-6 max-w-xl" style={{ color: 'var(--text-secondary)' }}>{ALLIANCE_POSITIONING.body}</p>
        </RevealOnScroll>
      </Section>

      {/* Independent by nature. Stronger together. — the alliance model, for clubs */}
      <Section tone="dark">
        <RevealOnScroll className="max-w-2xl">
          <span className="eyebrow">For Clubs &amp; Brands</span>
          <h2 className="mt-4 text-3xl md:text-4xl">{ALLIANCE_INDEPENDENCE.heading}</h2>
          <div className="mt-6 space-y-4" style={{ color: 'var(--text-secondary)' }}>
            {ALLIANCE_INDEPENDENCE.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-10 text-sm" style={{ color: 'var(--text-quiet)' }}>Are you a membership club?</p>
          <Button href="/apply/alliance" variant="secondary" className="mt-3">
            Apply to Join the Alliance
          </Button>
        </RevealOnScroll>
      </Section>

      {/* The VIVRA Passport + benefits */}
      <Section tone="light">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <RevealOnScroll>
            <span className="eyebrow">The VIVRA Passport</span>
            <h2 className="mt-4 text-2xl md:text-3xl">{ALLIANCE_MEMBERSHIP.heading}</h2>
            <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>{ALLIANCE_MEMBERSHIP.body}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="flex justify-center">
            <MemberDashboard />
          </RevealOnScroll>
        </div>
        <div className="mt-16">
          <TiersGrid />
        </div>
      </Section>

      <CTABand site={site} />
    </PageShell>
  )
}
