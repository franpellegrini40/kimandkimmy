import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import VenueCards from '@/components/sections/VenueCards'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'VIVRA Venues',
  description: 'Our first registered venues — exclusive, conscious and luxury destinations across the VIVRA World Alliance network.',
}

export default async function VenuesPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" className="pt-40">
        <RevealOnScroll>
          <span className="eyebrow">VIVRA Venues</span>
          <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">Our first registered venues.</h1>
          <p className="mt-6 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Very exclusive, conscious and luxury venues — each one upgraded to the same
            regenerative standard, opening steadily across five continents.
          </p>
        </RevealOnScroll>
        <VenueCards />
        <RevealOnScroll delay={0.1} className="mt-10 flex flex-wrap gap-4">
          <Button href="/apply/alliance">Enquire About a Venue</Button>
          <Button href="/apply/venue" variant="secondary">Apply as a Venue</Button>
        </RevealOnScroll>
      </Section>

      <CTABand site={site} />
    </PageShell>
  )
}
