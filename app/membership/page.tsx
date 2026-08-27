import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import TiersGrid from '@/components/sections/TiersGrid'
import VivraPassport from '@/components/sections/VivraPassport'
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
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">VIVRA Membership — Coming Live Soon</span>
            <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">Ibiza is the beginning.</h1>
            <p className="mt-4 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              VIVRA continues through a global membership and curated community. One
              membership — the VIVRA Passport — carries your access, credits and impact
              everywhere in the network. Selected tiers below — full benefits confirmed at
              launch.
            </p>
          </div>
          <div className="flex justify-center">
            <VivraPassport />
          </div>
        </div>
        <div className="mt-12">
          <TiersGrid />
        </div>
      </Section>
      <CTABand site={site} />
    </PageShell>
  )
}
