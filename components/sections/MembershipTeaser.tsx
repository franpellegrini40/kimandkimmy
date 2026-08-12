import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'

export default function MembershipTeaser() {
  return (
    <Section tone="light" id="membership">
      <RevealOnScroll className="max-w-2xl">
        <span className="eyebrow">VIVRA Membership — Coming Live Soon</span>
        <h2 className="mt-4 text-3xl md:text-4xl">Ibiza is the beginning.</h2>
        <p className="mt-4 text-stone-700">
          VIVRA continues as a global membership and curated community — for those who want
          to stay close to the people, practices and opportunities the Founding Retreat
          brings together.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/membership">Request Early Access</Button>
          <Button href="/membership" variant="secondary">
            Explore Membership
          </Button>
        </div>
      </RevealOnScroll>
    </Section>
  )
}
