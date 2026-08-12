import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import TiersGrid from '@/components/sections/TiersGrid'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Membership — Coming Live Soon',
  description: 'VIVRA Membership: a global community continuing beyond the Ibiza Founding Retreat.',
}

export default async function MembershipPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" className="pt-40">
        <span className="eyebrow">VIVRA Membership — Coming Live Soon</span>
        <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">Ibiza is the beginning.</h1>
        <p className="mt-4 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
          VIVRA continues through a global membership and curated community. Selected tiers
          below — full benefits confirmed at launch.
        </p>
        <div className="mt-12">
          <TiersGrid />
        </div>
      </Section>
      <CTABand site={site} />
    </PageShell>
  )
}
