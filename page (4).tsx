import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import AgendaTimeline from '@/components/sections/AgendaTimeline'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Retreat Agenda',
  description: 'The day-by-day program for the VIVRA Founding Retreat in Ibiza.',
}

export default async function AgendaPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="sand" className="pt-40">
        <span className="eyebrow">Retreat Agenda</span>
        <h1 className="mt-4 max-w-xl text-3xl md:text-4xl">The program.</h1>
        <div className="mt-10">
          <AgendaTimeline />
        </div>
      </Section>
      <CTABand site={site} />
    </PageShell>
  )
}
