import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { CLOSING, PLATFORM_MVP } from '@/content/retreat'

export default function MembershipTeaser() {
  return (
    <Section tone="light" id="membership">
      <RevealOnScroll className="max-w-2xl">
        <span className="eyebrow">VIVRA Membership — Coming Live Soon</span>
        <h2 className="mt-4 text-3xl md:text-4xl">{CLOSING.heading}</h2>
        <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>{CLOSING.body}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-14 max-w-2xl border-t pt-10" style={{ borderColor: 'var(--rule)' }}>
        <span className="eyebrow">{PLATFORM_MVP.eyebrow}</span>
        <h3 className="mt-4 text-2xl md:text-3xl">{PLATFORM_MVP.heading}</h3>
        <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>{PLATFORM_MVP.body}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/apply/join">{PLATFORM_MVP.cta}</Button>
          <Button href="/membership" variant="secondary">
            Explore Membership
          </Button>
        </div>
      </RevealOnScroll>
    </Section>
  )
}
