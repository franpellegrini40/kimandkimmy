import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { EXPERIENCE_PILLARS } from '@/content/retreat'

export default function ExperiencePillars() {
  return (
    <Section tone="light" id="experience">
      <RevealOnScroll>
        <span className="eyebrow">Why We Gather</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Four conversations that shape the future.</h2>
      </RevealOnScroll>

      <div
        className="mt-10 grid gap-px overflow-hidden border sm:grid-cols-2"
        style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}
      >
        {EXPERIENCE_PILLARS.map((pillar, i) => (
          <RevealOnScroll key={pillar.key} delay={i * 0.04}>
            <div className="h-full p-6" style={{ background: 'var(--surface-raised)' }}>
              <h3 className="text-base">{pillar.label}</h3>
              <p className="mt-2 text-xs" style={{ color: 'var(--text-quiet)' }}>{pillar.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.16} className="mt-10">
        <Button href="/downloads/vivra-world-flagship-workshop.pdf" variant="secondary">
          Download the VIVRA Flagship Workshop (PDF)
        </Button>
      </RevealOnScroll>
    </Section>
  )
}
