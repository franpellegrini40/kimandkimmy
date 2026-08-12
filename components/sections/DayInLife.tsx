import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { DAY_IN_LIFE } from '@/content/retreat'

export default function DayInLife() {
  return (
    <Section tone="dark">
      <RevealOnScroll>
        <span className="eyebrow">What a Day at VIVRA Feels Like</span>
      </RevealOnScroll>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {DAY_IN_LIFE.map((moment, i) => (
          <RevealOnScroll key={moment.time} delay={i * 0.05}>
            <p className="eyebrow">{moment.time}</p>
            <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>{moment.moment}</p>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
