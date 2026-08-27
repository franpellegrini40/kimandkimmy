import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { PHILOSOPHY_INTRO, PHILOSOPHY_PILLARS } from '@/content/philosophy'

export default function Philosophy() {
  return (
    <Section tone="light" id="philosophy">
      <RevealOnScroll>
        <span className="eyebrow">{PHILOSOPHY_INTRO.eyebrow}</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">{PHILOSOPHY_INTRO.heading}</h2>
      </RevealOnScroll>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {PHILOSOPHY_PILLARS.map((pillar, i) => (
          <RevealOnScroll key={pillar.key} delay={i * 0.06}>
            <Photo src={pillar.image} alt={pillar.imageAlt} aspect="aspect-[4/5]" />
            <span
              className="eyebrow mt-5 inline-block"
              style={pillar.key === 'leave-it-better' ? { color: 'var(--forest-deep)' } : undefined}
            >
              {pillar.eyebrow}
            </span>
            <h3 className="mt-2 text-2xl">{pillar.label}</h3>
            <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {pillar.body}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
