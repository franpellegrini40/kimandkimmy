import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { ALLIANCE_HOW_IT_WORKS, HOW_IT_WORKS_INTRO, HOW_IT_WORKS_NOTE } from '@/content/alliance'

export default function HowItWorksTeaser() {
  return (
    <Section tone="sand" id="membership">
      <RevealOnScroll>
        <span className="eyebrow">How It Works</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">{HOW_IT_WORKS_INTRO}</h2>
        <p className="mt-3 max-w-xl text-sm" style={{ color: 'var(--text-quiet)' }}>{HOW_IT_WORKS_NOTE}</p>
      </RevealOnScroll>

      <div
        className="mt-10 grid gap-px border sm:grid-cols-2"
        style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}
      >
        {ALLIANCE_HOW_IT_WORKS.map((s, i) => (
          <RevealOnScroll key={s.step} delay={i * 0.05}>
            <div
              className="relative h-full p-6 transition-transform duration-200 hover:z-10 hover:scale-105"
              style={{ background: 'var(--surface-raised)' }}
            >
              <span className="text-xs" style={{ color: 'var(--accent-deep)' }}>{s.step.padStart(2, '0')}</span>
              <h3 className="mt-2 text-base">{s.label}</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{s.detail}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2} className="mt-10">
        <Button href="/membership" variant="accent">
          See How It Works
        </Button>
      </RevealOnScroll>
    </Section>
  )
}
