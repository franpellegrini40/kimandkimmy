import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { WHO_JOINS } from '@/content/retreat'

export default function WhoJoins() {
  return (
    <Section tone="light">
      <RevealOnScroll>
        <span className="eyebrow">Who Joins</span>
        <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">{WHO_JOINS.heading}</h2>
        <p className="mt-3 max-w-xl text-sm text-stone-500">{WHO_JOINS.intro}</p>
      </RevealOnScroll>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {WHO_JOINS.profiles.map((profile, i) => (
          <RevealOnScroll key={profile.label} delay={i * 0.05}>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vivra-600" />
              <p className="text-stone-800">
                <span className="font-medium">{profile.label}</span>{' '}
                <span className="text-stone-600">— {profile.body}</span>
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2} className="mt-10 max-w-2xl border-t border-stone-900/10 pt-6">
        <p className="text-stone-700">{WHO_JOINS.closing}</p>
      </RevealOnScroll>
    </Section>
  )
}
