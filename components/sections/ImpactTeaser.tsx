import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { IMPACT_POSITIONING } from '@/content/impact'

export default function ImpactTeaser() {
  return (
    <Section tone="light" id="impact">
      <RevealOnScroll className="max-w-2xl">
        <span className="eyebrow">{IMPACT_POSITIONING.eyebrow}</span>
        <h2 className="mt-4 text-3xl md:text-4xl">{IMPACT_POSITIONING.heading}</h2>
        <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>{IMPACT_POSITIONING.body}</p>
        <Button href="/impact" variant="accent" className="mt-8">
          See Your Impact
        </Button>
      </RevealOnScroll>
    </Section>
  )
}
