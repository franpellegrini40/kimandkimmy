import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AssetPlaceholder from '@/components/ui/AssetPlaceholder'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { PEOPLE } from '@/content/people'

export default function HealingPractices() {
  const practitioners = PEOPLE.filter((p) => p.category === 'practitioner')

  return (
    <Section tone="sand">
      <RevealOnScroll>
        <span className="eyebrow">Healing & Wellbeing Practices</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Guided by facilitators we trust.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {practitioners.map((p, i) => (
          <RevealOnScroll key={p.slug} delay={i * 0.06}>
            {p.image ? (
              <Photo src={p.image} alt={p.name} aspect="aspect-[4/5]" />
            ) : (
              <AssetPlaceholder note={`Portrait — ${p.name}, 4:5`} />
            )}
            <h3 className="mt-3 text-base">{p.name}</h3>
            <p className="text-sm" style={{ color: 'var(--text-quiet)' }}>{p.role}</p>
            <p className="mt-3 text-sm italic" style={{ color: 'var(--text-secondary)' }}>“{p.quote}”</p>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2} className="mt-10">
        <Button href="/people" variant="ghost">Meet everyone leading VIVRA gatherings and retreats</Button>
      </RevealOnScroll>
    </Section>
  )
}
