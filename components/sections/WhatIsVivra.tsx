import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { RETREAT_FACTS } from '@/content/retreat'

export default function WhatIsVivra() {
  return (
    <Section tone="light">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <RevealOnScroll>
          <span className="eyebrow">What is VIVRA</span>
          <h2 className="mt-4 text-3xl md:text-4xl">{RETREAT_FACTS.positioning}</h2>
          <p className="mt-6 max-w-xl" style={{ color: 'var(--text-secondary)' }}>{RETREAT_FACTS.invitation}</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <Photo src="/images/villa-dining.jpg" alt="Long-table dining at Can Aylma, Ibiza" />
        </RevealOnScroll>
      </div>
    </Section>
  )
}
