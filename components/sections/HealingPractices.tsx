import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AssetPlaceholder from '@/components/ui/AssetPlaceholder'
import { PEOPLE } from '@/content/people'

export default function HealingPractices() {
  const practitioners = PEOPLE.filter((p) => p.category === 'practitioner')

  return (
    <Section tone="sand">
      <RevealOnScroll>
        <span className="eyebrow">Healing & Wellbeing Practices</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Guided by practitioners we trust.</h2>
      </RevealOnScroll>

      {practitioners.length === 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <AssetPlaceholder note="Practitioner portrait, 4:5" tone="vivra" />
              <p className="mt-3 text-xs uppercase tracking-wide text-stone-400">
                CONTENT NEEDED — name, practice, bio
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {practitioners.map((p, i) => (
            <RevealOnScroll key={p.slug} delay={i * 0.06}>
              <AssetPlaceholder note={`Portrait — ${p.name}, 4:5`} tone="vivra" />
              <h3 className="mt-3 text-base text-stone-900">{p.name}</h3>
              <p className="text-sm text-stone-500">{p.role}</p>
              <p className="mt-3 text-sm italic text-stone-700">“{p.quote}”</p>
            </RevealOnScroll>
          ))}
        </div>
      )}
    </Section>
  )
}
