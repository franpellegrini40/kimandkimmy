import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { ALLIANCE_HOW_IT_WORKS } from '@/content/alliance'
import { EXPERIENCE_PILLARS } from '@/content/retreat'
import { EXPERT, FACILITATORS, HOW_INTRO } from '@/content/home'

export function HomeHowItWorks() {
  return (
    <Section tone="light" id="how">
      <RevealOnScroll className="max-w-3xl">
        <span className="eyebrow">{HOW_INTRO.eyebrow}</span>
        <h2 className="mt-4 text-3xl md:text-5xl">{HOW_INTRO.heading}</h2>
        <p className="mt-5 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>{HOW_INTRO.body}</p>
      </RevealOnScroll>

      <ol className="mt-12 grid gap-px border sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
        {ALLIANCE_HOW_IT_WORKS.map((s, i) => (
          <li key={s.step} className="relative h-full hover:z-10">
            <RevealOnScroll delay={i * 0.05} className="h-full">
              {/* Zooms slightly on hover, lifting above its neighbours. */}
              <div
                className="h-full p-6 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,14,33,0.12)] md:p-7"
                style={{ background: 'var(--surface-raised)' }}
              >
                <span className="font-display text-3xl" style={{ color: 'var(--aqua-700)' }}>{s.step.padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg">{s.label}</h3>
                <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{s.detail}</p>
              </div>
            </RevealOnScroll>
          </li>
        ))}
      </ol>

      <RevealOnScroll delay={0.2} className="mt-8">
        <Button href="/membership" variant="ghost">See how it works</Button>
      </RevealOnScroll>
    </Section>
  )
}

export function HomeConversations() {
  return (
    <Section tone="sand" id="conversations">
      <RevealOnScroll>
        <span className="eyebrow">Why we gather</span>
        <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">Four conversations that shape the future.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
        {EXPERIENCE_PILLARS.map((pillar, i) => (
          <RevealOnScroll key={pillar.key} delay={i * 0.04}>
            <div className="flex gap-5 border-t pt-6" style={{ borderColor: 'var(--rule)' }}>
              <span className="text-xs tabular-nums" style={{ color: 'var(--accent-deep)', letterSpacing: '0.1em' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl">{pillar.label}</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{pillar.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Flagship workshop */}
      <div className="mt-16 grid gap-px border md:grid-cols-5" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
        <RevealOnScroll className="md:col-span-3">
          <Photo
            src={EXPERT.workshopImage}
            alt="Sharon Cittone’s flagship workshop at VIVRA"
            aspect="aspect-[16/10] md:aspect-auto md:h-full md:min-h-[360px]"
            sizes="(min-width: 768px) 60vw, 100vw"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="md:col-span-2">
          <div className="flex h-full flex-col justify-center p-8 md:p-10" style={{ background: 'var(--surface-raised)' }}>
            <span className="eyebrow">Flagship workshop</span>
            <div className="mt-5 flex items-center gap-4">
              <Photo src={EXPERT.portrait} alt={EXPERT.name} aspect="aspect-square" className="w-16 shrink-0 rounded-full" sizes="64px" />
              <div>
                <h3 className="text-xl">{EXPERT.name}</h3>
                <p className="mt-1 text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>
                  {EXPERT.role}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm" style={{ color: 'var(--text-secondary)' }}>{EXPERT.body}</p>
            <div className="mt-7">
              <Button href={EXPERT.pdf} variant="secondary" size="sm">Download the flagship workshop (PDF)</Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  )
}

export function HomeFacilitators() {
  return (
    <Section tone="light" id="people">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <RevealOnScroll>
          <span className="eyebrow">The people</span>
          <h2 className="mt-4 text-3xl md:text-4xl">Meet our facilitators.</h2>
          <p className="mt-3 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            The practitioners who hold space at every VIVRA gathering.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <Button href="/apply/alliance" variant="secondary" size="sm">Apply to join VIVRA Alliance</Button>
        </RevealOnScroll>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
        {FACILITATORS.map((f, i) => (
          <li key={f.name}>
            <RevealOnScroll delay={i * 0.04} className="group">
              <Photo
                src={f.image}
                alt={f.name}
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <h3 className="mt-4 text-base leading-snug">{f.name}</h3>
              <p className="mt-1.5 text-xs" style={{ color: 'var(--text-quiet)' }}>{f.role}</p>
            </RevealOnScroll>
          </li>
        ))}
      </ul>
    </Section>
  )
}
