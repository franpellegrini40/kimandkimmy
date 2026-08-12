import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import PeopleGrid from '@/components/sections/PeopleGrid'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'People',
  description: 'The founders, hosts and practitioners behind VIVRA.',
}

export default async function PeoplePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" className="pt-40">
        <span className="eyebrow">The People</span>
        <h1 className="mt-4 max-w-xl text-3xl md:text-4xl">Curated, not corporate.</h1>
        <div className="mt-12">
          <PeopleGrid />
        </div>
      </Section>
      <CTABand site={site} />
    </PageShell>
  )
}
