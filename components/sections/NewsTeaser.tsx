import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { RETREAT_FACTS } from '@/content/retreat'

export default function NewsTeaser() {
  return (
    <Section tone="sand" id="news">
      <RevealOnScroll className="max-w-2xl">
        <span className="eyebrow">News</span>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-3xl md:text-4xl">Founding Member Gathering</h2>
        </div>
        <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
          {RETREAT_FACTS.location} · {RETREAT_FACTS.dates}
        </p>
        <p className="mt-3 text-sm" style={{ color: 'var(--text-quiet)' }}>
          It begins with ten people, one estate, and five days in Ibiza.
        </p>
        <Button href="/news" variant="accent" className="mt-8">
          See Upcoming Events
        </Button>
      </RevealOnScroll>
    </Section>
  )
}
