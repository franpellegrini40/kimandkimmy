import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AssetPlaceholder from '@/components/ui/AssetPlaceholder'

export default function WhatIsVivra() {
  return (
    <Section tone="light">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <RevealOnScroll>
          <span className="eyebrow">What is VIVRA</span>
          <h2 className="mt-4 text-3xl md:text-4xl">
            A curated community exploring new dimensions of wellbeing, longevity and human
            potential.
          </h2>
          <p className="mt-6 max-w-xl text-stone-700">
            VIVRA brings together people, practices and places dedicated to regenerative
            impact, meaningful relationships and new opportunities — personal and business
            alike. It begins with a gathering. It continues as a community.
          </p>
          <p className="mt-3 max-w-xl text-xs uppercase tracking-wide text-stone-400">
            CONTENT NEEDED — replace with final approved brochure positioning statement.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <AssetPlaceholder note="Founding community moment — long-table gathering, 4:5" tone="olive" />
        </RevealOnScroll>
      </div>
    </Section>
  )
}
