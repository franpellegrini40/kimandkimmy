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
  ALLIANCE_MEMBERSHIP,
  ALLIANCE_HOW_IT_WORKS,
  HOW_IT_WORKS_INTRO,
} from '@/content/alliance'

export const metadata: Metadata = {
  title: 'Membership',
  description: 'One membership, the VIVRA Passport, opening access across a growing alliance of independent clubs, venues and experiences.',
}

export default async function MembershipPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      {/* How It Works — the four-step alliance process, now the page opener */}
      <Section tone="sand" className="pt-40">
        <RevealOnScroll>
          <span className="eyebrow">How It Works</span>
          <h1 className="mt-4 max-w-xl text-3xl md:text-4xl">{HOW_IT_WORKS_INTRO}</h1>
        </RevealOnScroll>

        <div
          className="mt-10 grid gap-px border sm:grid-cols-2"
          style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}
        >
          {ALLIANCE_HOW_IT_WORKS.map((s, i) => (
            <RevealOnScroll key={s.step} delay={i * 0.05}>
              <div
                className="relative h-full p-6 transition-transform duration-200 hover:z-10 hover:scale-105"
                style={{ background: 'var(--surface-raised)' }}
              >
                <span className="text-xs" style={{ color: 'var(--accent-deep)' }}>{s.step.padStart(2, '0')}</span>
                <h3 className="mt-2 text-base">{s.label}</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{s.detail}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2} className="mt-10">
          <p className="text-sm" style={{ color: 'var(--text-quiet)' }}>Are you a community leader?</p>
          <Button href="/apply/alliance" variant="accent" className="mt-3">
            Apply to join VIVRA Alliance
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
