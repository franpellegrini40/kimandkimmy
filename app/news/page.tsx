import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import FoundingRetreat from '@/components/sections/FoundingRetreat'
import WhoJoins from '@/components/sections/WhoJoins'
import VillaGallery from '@/components/sections/VillaGallery'
import ExperiencePillars from '@/components/sections/ExperiencePillars'
import AgendaTimeline from '@/components/sections/AgendaTimeline'
import DayInLife from '@/components/sections/DayInLife'
import PricingSection from '@/components/sections/PricingSection'
import CTABand from '@/components/sections/CTABand'
import { RETREAT_FACTS } from '@/content/retreat'

export const metadata: Metadata = {
  title: 'News',
  description: 'Upcoming VIVRA events — starting with the Founding Member Gathering in Ibiza, October 4–9, 2026.',
}

export default async function NewsPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" className="pt-40 pb-0">
        <RevealOnScroll>
          <span className="eyebrow">News</span>
          <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">Upcoming Events</h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08} className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t pt-8" style={{ borderColor: 'var(--rule)' }}>
          <span className="text-2xl">Founding Member Gathering</span>
          <span style={{ color: 'var(--text-secondary)' }}>
            {RETREAT_FACTS.location} · {RETREAT_FACTS.dates}
          </span>
        </RevealOnScroll>
      </Section>

      <FoundingRetreat />
      <WhoJoins />
      <VillaGallery />
      <ExperiencePillars />
      <Section tone="sand" id="agenda">
        <span className="eyebrow">Retreat Agenda</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">The program.</h2>
        <div className="mt-10">
          <AgendaTimeline />
        </div>
      </Section>
      <DayInLife />
      <PricingSection />

      <CTABand site={site} />
    </PageShell>
  )
}
