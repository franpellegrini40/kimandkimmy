import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { EXPERIENCE_PILLARS } from '@/content/retreat'

export default function ExperiencePillars() {
  return (
    <Section tone="light" id="experience">
      <RevealOnScroll>
        <span className="eyebrow">Why We Gather</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Four conversations that shape the future.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-stone-900/10 bg-stone-900/10 sm:grid-cols-2">
        {EXPERIENCE_PILLARS.map((pillar, i) => (
          <RevealOnScroll key={pillar.key} delay={i * 0.04}>
            <div className="h-full bg-sand-50 p-6">
              <h3 className="text-base text-stone-900">{pillar.label}</h3>
              <p className="mt-2 text-xs text-stone-500">{pillar.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
