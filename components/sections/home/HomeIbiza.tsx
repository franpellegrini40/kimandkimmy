import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { DAY_IN_LIFE } from '@/content/retreat'
import { ECOSYSTEM_STORY } from '@/content/ecosystem'
import IbizaReel from './IbizaReel'
import { FOUNDER_NOTE, IBIZA, RITUALS, WALL } from '@/content/home'

const FOUNDERS = [
  { name: 'Manuele Monti', role: 'Co-founder', linkedin: 'https://www.linkedin.com/in/manuelemonti/' },
  { name: 'Francisco Pellegrini', role: 'Founder & CEO', linkedin: 'https://www.linkedin.com/in/francisco-pellegrini' },
  { name: 'Alessandro Adamoli', role: 'Co-founder', linkedin: 'https://www.linkedin.com/in/alessandroluigiadamoli/' },
]

export function HomeFounders() {
  const { founding } = ECOSYSTEM_STORY
  return (
    <Section tone="light" id="founders">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <RevealOnScroll>
          <Photo
            src="/images/founders-trio.jpg"
            alt="Manuele Monti, Francisco Pellegrini and Alessandro Adamoli, the founders of VIVRA"
            aspect="aspect-[1122/1215]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <ul className="mt-4 grid grid-cols-3 text-center">
            {FOUNDERS.map((f) => (
              <li key={f.name}>
                <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="group block px-1">
                  <span className="block text-sm transition-colors group-hover:text-[var(--accent-deep)]">{f.name}</span>
                  <span className="block text-xs" style={{ color: 'var(--text-quiet)' }}>{f.role}</span>
                </a>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <span className="eyebrow">{founding.eyebrow}</span>
          <h2 className="mt-4 max-w-lg text-3xl md:text-4xl">{founding.heading}</h2>
          <div className="mt-5 max-w-md space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {founding.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <figure className="mt-10 max-w-md border-l-2 pl-6" style={{ borderColor: 'var(--forest)' }}>
            <figcaption className="eyebrow" style={{ color: 'var(--forest-deep)' }}>{FOUNDER_NOTE.heading}</figcaption>
            <blockquote className="mt-3 font-display text-lg leading-relaxed">{FOUNDER_NOTE.body}</blockquote>
            <p className="mt-3 text-xs" style={{ color: 'var(--text-quiet)' }}>{FOUNDER_NOTE.signature}</p>
          </figure>
        </RevealOnScroll>
      </div>
    </Section>
  )
}

export function HomeIbiza() {
  return (
    <Section tone="dark" id="ibiza">
      <div className="grid gap-12 lg:grid-cols-5 lg:items-center lg:gap-16">
        <RevealOnScroll className="lg:col-span-3">
          <span className="eyebrow" style={{ color: 'var(--aqua)' }}>{IBIZA.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-5xl">{IBIZA.heading}</h2>
          <div className="mt-6 max-w-xl space-y-4" style={{ color: 'var(--text-secondary)' }}>
            {IBIZA.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-px border" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
            {IBIZA.facts.map((f) => (
              <div key={f.label} className="p-4 md:p-5" style={{ background: 'var(--surface-raised)' }}>
                <dd className="font-display text-4xl" style={{ color: 'var(--aqua)' }}>{f.value}</dd>
                <dt className="mt-2 text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>
                  {f.label}
                </dt>
              </div>
            ))}
          </dl>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="lg:col-span-2">
          <IbizaReel />
        </RevealOnScroll>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {IBIZA.photos.map((photo, i) => (
          <li key={photo.src}>
            <RevealOnScroll delay={i * 0.05} className="group">
              <Photo
                src={photo.src}
                alt={photo.alt}
                aspect="aspect-square"
                sizes="(min-width: 768px) 25vw, 50vw"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <p className="mt-2.5 text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>
                {photo.caption}
              </p>
            </RevealOnScroll>
          </li>
        ))}
      </ul>

      <ol className="mt-14 grid gap-8 md:grid-cols-3">
        {IBIZA.days.map((d, i) => (
          <li key={d.label}>
            <RevealOnScroll delay={i * 0.06}>
              <div className="border-t pt-6" style={{ borderColor: 'var(--copper)' }}>
                <p className="text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--copper)' }}>{d.step}</p>
                <h3 className="mt-2 text-2xl">{d.label}</h3>
                <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{d.body}</p>
              </div>
            </RevealOnScroll>
          </li>
        ))}
      </ol>

      <RevealOnScroll className="mt-16">
        <div
          className="flex flex-col gap-6 border p-8 md:flex-row md:items-center md:justify-between md:p-10"
          style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}
        >
          <div>
            <span className="eyebrow" style={{ color: 'var(--copper)' }}>{IBIZA.next.eyebrow}</span>
            <p className="mt-3 font-display text-2xl md:text-3xl">{IBIZA.next.heading}</p>
          </div>
          <Button href="/#apply" variant="accent" className="shrink-0">{IBIZA.next.cta}</Button>
        </div>
      </RevealOnScroll>
    </Section>
  )
}

function Wall({ data, tone }: { data: typeof WALL.wrong; tone: 'wrong' | 'right' }) {
  const right = tone === 'right'
  return (
    <div className="h-full p-8 md:p-10" style={{ background: right ? '#e3f2e7' : 'var(--surface-raised)' }}>
      <h3 className="text-2xl md:text-3xl">{data.heading}</h3>
      <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{data.intro}</p>
      <ul className="mt-7 space-y-px">
        {data.notes.map((note) => (
          <li
            key={note}
            className="border-t py-3.5 font-display text-lg"
            style={{ borderColor: 'var(--rule)', color: right ? 'var(--forest-deep)' : 'var(--text-primary)' }}
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function HomeWall() {
  return (
    <Section tone="sand" id="wall">
      <RevealOnScroll>
        <span className="eyebrow">{WALL.eyebrow}</span>
      </RevealOnScroll>
      <div className="mt-8 grid gap-px border md:grid-cols-2" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
        <RevealOnScroll className="h-full">
          <Wall data={WALL.wrong} tone="wrong" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="h-full">
          <Wall data={WALL.right} tone="right" />
        </RevealOnScroll>
      </div>
      <p className="mt-5 text-xs italic" style={{ color: 'var(--text-quiet)' }}>{WALL.footnote}</p>
    </Section>
  )
}

export function HomeRituals() {
  return (
    <Section tone="light" id="life">
      <RevealOnScroll>
        <span className="eyebrow">{RITUALS.eyebrow}</span>
        <h2 className="mt-4 text-3xl md:text-5xl">{RITUALS.heading}</h2>
      </RevealOnScroll>

      <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {RITUALS.items.map((item, i) => (
          <li key={item.label} className={i === 0 ? 'col-span-2 md:col-span-1' : undefined}>
            <RevealOnScroll delay={i * 0.04} className="group relative">
              <Photo
                src={item.src}
                alt={item.alt}
                aspect={i === 0 ? 'aspect-[16/10] md:aspect-[3/4]' : 'aspect-[3/4]'}
                sizes="(min-width: 768px) 20vw, 50vw"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(0,14,33,0) 55%, rgba(0,14,33,0.8) 100%)' }}
              />
              <p className="absolute inset-x-0 bottom-0 p-4 font-display text-lg" style={{ color: 'var(--ivory)' }}>{item.label}</p>
            </RevealOnScroll>
          </li>
        ))}
      </ul>

      <dl className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
        {DAY_IN_LIFE.map((moment, i) => (
          <RevealOnScroll key={moment.time} delay={i * 0.04}>
            <div className="border-t pt-4" style={{ borderColor: 'var(--rule)' }}>
              <dt className="eyebrow">{moment.time}</dt>
              <dd className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{moment.moment}</dd>
            </div>
          </RevealOnScroll>
        ))}
      </dl>
    </Section>
  )
}
