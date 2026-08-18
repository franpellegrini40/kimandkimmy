import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import VenueCards from '@/components/sections/VenueCards'
import VivraEcosystem from '@/components/sections/VivraEcosystem'
import VivraPassport from '@/components/sections/VivraPassport'
import {
  ALLIANCE_TAGLINE,
  ALLIANCE_POSITIONING,
  ALLIANCE_HOW_IT_WORKS,
  ALLIANCE_MEMBERSHIP,
  ALLIANCE_VENUES_INTRO,
} from '@/content/alliance'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'VIVRA World Alliance',
  description: 'A B2B partnership program for membership clubs, hospitality brands and aligned communities.',
}

export default async function AlliancePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" className="pt-40">
        <RevealOnScroll>
          <span className="eyebrow">{ALLIANCE_POSITIONING.eyebrow}</span>
          <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">{ALLIANCE_POSITIONING.heading}</h1>
          <p className="mt-3 max-w-xl text-sm" style={{ color: 'var(--text-quiet)' }}>{ALLIANCE_TAGLINE}</p>
          <p className="mt-6 max-w-xl" style={{ color: 'var(--text-secondary)' }}>{ALLIANCE_POSITIONING.body}</p>
          <Button href="/apply/alliance" className="mt-10">
            Apply to Join the Alliance
          </Button>
        </RevealOnScroll>
      </Section>

      <Section tone="dark">
        <RevealOnScroll>
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 max-w-xl text-2xl md:text-3xl">Everything your club already is — plus a shared network.</h2>
        </RevealOnScroll>
        <div className="mt-10 grid gap-px md:grid-cols-2" style={{ background: 'var(--rule)' }}>
          {ALLIANCE_HOW_IT_WORKS.map((item, i) => (
            <RevealOnScroll key={item.label} delay={i * 0.05} style={{ background: 'var(--surface-page)' }} className="p-8">
              <div className="text-lg" style={{ color: 'var(--text-primary)' }}>{item.label}</div>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{item.detail}</p>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <VivraEcosystem />

      <Section tone="light">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <RevealOnScroll>
            <span className="eyebrow">Membership</span>
            <h2 className="mt-4 text-2xl md:text-3xl">{ALLIANCE_MEMBERSHIP.heading}</h2>
            <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>{ALLIANCE_MEMBERSHIP.body}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="flex justify-center">
            <VivraPassport />
          </RevealOnScroll>
        </div>
      </Section>

      <Section tone="sand">
        <RevealOnScroll>
          <span className="eyebrow">{ALLIANCE_VENUES_INTRO.eyebrow}</span>
          <h2 className="mt-4 max-w-xl text-2xl md:text-3xl">{ALLIANCE_VENUES_INTRO.heading}</h2>
          <p className="mt-4 max-w-xl" style={{ color: 'var(--text-secondary)' }}>{ALLIANCE_VENUES_INTRO.body}</p>
        </RevealOnScroll>
        <VenueCards />
        <RevealOnScroll className="mt-10 flex flex-wrap gap-4">
          <Button href="/venues" variant="ghost">See all VIVRA venues</Button>
          <Button href="/apply/venue" variant="secondary">Apply as a Venue</Button>
        </RevealOnScroll>
      </Section>

      <CTABand site={site} />
    </PageShell>
  )
}
