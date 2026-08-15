import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { ALLIANCE_POSITIONING, ALLIANCE_BENEFITS } from '@/content/alliance'

export default function AllianceTeaser() {
  return (
    <Section tone="sand" id="alliance">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <RevealOnScroll>
          <span className="eyebrow">VIVRA World Alliance</span>
          <h2 className="mt-4 text-3xl md:text-4xl">{ALLIANCE_POSITIONING.heading}</h2>
          <p className="mt-4 max-w-md" style={{ color: 'var(--text-secondary)' }}>
            If you represent a membership club, wellness brand, hospitality group or
            impact-driven community, you may apply to become part of the VIVRA World
            Alliance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/apply/alliance">Join VIVRA World Alliance</Button>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {ALLIANCE_BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </Section>
  )
}
