import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import PeopleCarousel from '@/components/sections/PeopleCarousel'
import { PEOPLE } from '@/content/people'

export default function HealingPractices() {
  const practitioners = PEOPLE.filter((p) => p.category === 'practitioner')

  return (
    <Section tone="sand">
      <RevealOnScroll>
        <span className="eyebrow">Transformative Wellbeing Experiences</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Guided by facilitators we trust.</h2>
      </RevealOnScroll>

      <div className="mt-10">
        <PeopleCarousel people={practitioners} />
      </div>

      <RevealOnScroll delay={0.2} className="mt-10">
        <Button href="/people" variant="ghost">Meet everyone leading VIVRA gatherings and retreats</Button>
      </RevealOnScroll>
    </Section>
  )
}
