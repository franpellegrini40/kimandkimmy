import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import AgendaTimeline from '@/components/sections/AgendaTimeline'
import { EXPERIENCE_PILLARS } from '@/content/retreat'
import { PEOPLE } from '@/content/people'

export default function ExperiencePillars() {
  const sharon = PEOPLE.find((p) => p.slug === 'sharon-cittone')!

  return (
    <Section tone="light" id="experience">
      <RevealOnScroll>
        <span className="eyebrow">Why We Gather</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Four conversations that shape the future.</h2>
      </RevealOnScroll>

      <div
        className="mt-10 grid gap-px overflow-hidden border sm:grid-cols-2"
        style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}
      >
        {EXPERIENCE_PILLARS.map((pillar, i) => (
          <RevealOnScroll key={pillar.key} delay={i * 0.04}>
            <div className="h-full p-6" style={{ background: 'var(--surface-raised)' }}>
              <h3 className="text-base">{pillar.label}</h3>
              <p className="mt-2 text-xs" style={{ color: 'var(--text-quiet)' }}>{pillar.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 md:items-center">
        <RevealOnScroll>
          <Photo
            src="/images/sharon-workshop.webp"
            alt="Sharon Cittone leading a VIVRA masterclass"
            aspect="aspect-[4/5]"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="space-y-5">
          <span className="eyebrow">Led by Sharon Cittone</span>
          <h3 className="text-lg" style={{ color: 'var(--text-primary)' }}>{sharon.role}</h3>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{sharon.bio}</p>
          <p className="text-sm italic" style={{ color: 'var(--text-quiet)' }}>&ldquo;{sharon.quote}&rdquo;</p>
          <Button href="/downloads/vivra-world-flagship-workshop.pdf" variant="primary" className="mt-2">
            Download the VIVRA Flagship Workshop (PDF)
          </Button>
        </RevealOnScroll>
      </div>

      <div className="mt-20">
        <RevealOnScroll>
          <span className="eyebrow">Retreat Agenda</span>
          <h3 className="mt-4 max-w-xl text-2xl md:text-3xl">The five-day program.</h3>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="mt-8">
          <AgendaTimeline />
        </RevealOnScroll>
      </div>
    </Section>
  )
}
