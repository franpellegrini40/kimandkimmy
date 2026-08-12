import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { ALLIANCE_BENEFITS } from '@/content/tiers'
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
        <span className="eyebrow">VIVRA World Alliance</span>
        <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">For aligned organizations, not individuals.</h1>
        <p className="mt-4 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
          Membership clubs, private clubs, wellness brands, hospitality groups, longevity
          businesses, retreat operators and impact organizations may apply to join the
          VIVRA World Alliance.
        </p>
        <ul className="mt-10 max-w-md space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
          {ALLIANCE_BENEFITS.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
              {b}
            </li>
          ))}
        </ul>
        <Button href="/apply/alliance" className="mt-10">
          Apply to Join the Alliance
        </Button>
      </Section>
      <CTABand site={site} />
    </PageShell>
  )
}
