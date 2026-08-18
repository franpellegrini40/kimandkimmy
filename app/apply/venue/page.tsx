import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import VenueApplicationForm from '@/components/forms/VenueApplicationForm'

export const metadata: Metadata = {
  title: 'Apply as a Venue',
  description: 'List your venue with the VIVRA World Alliance network.',
}

export default async function ApplyVenuePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <span className="eyebrow">VIVRA Venues</span>
        <h1 className="mt-4 text-3xl md:text-4xl">Apply as a venue.</h1>
        <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
          Own or operate a venue that fits the VIVRA standard? Tell us about it and our team
          will be in touch.
        </p>
        <div className="mt-10">
          <VenueApplicationForm />
        </div>
      </Section>
    </PageShell>
  )
}
