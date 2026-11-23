import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { HERO, IS, IS_NOT } from '@/content/home'
import HeroVideo from './HeroVideo'

export function HomeHero() {
  return (
    <section
      id="top"
      data-theme="prestige"
      className="relative flex min-h-[640px] flex-col overflow-hidden"
      style={{ height: '100svh', background: 'var(--navy)', color: 'var(--ivory)' }}
    >
      {/* Phones: the reel sharp, edge to edge. Wider screens: the same reel blurred behind, sharp in its own frame. */}
      <HeroVideo variant="background" className="absolute inset-0 h-full w-full object-cover lg:scale-110 lg:blur-2xl" />
      {/* Darkens the film enough for white type, heavier at top (header) and bottom (stats). */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,14,33,0.6) 0%, rgba(0,14,33,0.4) 30%, rgba(0,14,33,0.45) 60%, rgba(0,14,33,0.88) 100%)',
        }}
      />

      <div className="container-vivra relative flex flex-1 items-center gap-12 pt-24 lg:gap-16 lg:pb-8">
      <div className="flex flex-1 flex-col items-center gap-6 text-center md:gap-7 lg:items-start lg:text-left">
        <p
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase lg:justify-start"
          style={{ letterSpacing: 'var(--tracking-caps)' }}
        >
          {HERO.claims.map((claim, i) => (
            <span key={claim} style={{ color: i === 2 ? 'var(--aqua-300)' : 'rgba(247,244,238,0.9)' }}>
              {claim}
            </span>
          ))}
        </p>

        <h1 className="max-w-5xl text-[clamp(3rem,1.2rem+6vw,6.25rem)] leading-[0.98] !text-[var(--ivory)]">
          <span className="block">{HERO.headline[0]}</span>
          <span className="block italic" style={{ color: 'var(--aqua-300)' }}>
            {HERO.headline[1]}
          </span>
        </h1>

        <p className="max-w-xl text-base md:text-lg" style={{ color: 'rgba(247,244,238,0.88)' }}>
          {HERO.body}
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
          <Button
            href="/#apply"
            className="!border-[var(--ivory)] !bg-[var(--ivory)] !text-[var(--navy)] hover:!border-[var(--aqua)] hover:!bg-[var(--aqua)]"
          >
            Request invitation
          </Button>
          <Button
            href="/#philosophy"
            className="!border-[rgba(247,244,238,0.6)] !bg-transparent !text-[var(--ivory)] hover:!border-[var(--ivory)] hover:!bg-[rgba(247,244,238,0.1)]"
          >
            Discover VIVRA
          </Button>
        </div>

        <span
          className="mt-1 border px-3 py-1 text-[10px] uppercase"
          style={{ borderColor: 'rgba(169,230,236,0.6)', color: 'var(--aqua-300)', letterSpacing: 'var(--tracking-caps)' }}
        >
          {HERO.badge}
        </span>
      </div>

      <div className="relative hidden aspect-[9/16] h-[min(68svh,640px)] shrink-0 overflow-hidden border lg:block" style={{ borderColor: 'rgba(247,244,238,0.25)' }}>
        <HeroVideo variant="frame" className="absolute inset-0 h-full w-full object-cover" />
        <span
          className="absolute inset-x-0 bottom-0 p-4 text-[10px] uppercase"
          style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--ivory)', background: 'linear-gradient(180deg, transparent, rgba(0,14,33,0.7))' }}
        >
          Can Aylma, Ibiza · October 2026
        </span>
      </div>
      </div>

      <dl className="relative grid grid-cols-2 border-t sm:grid-cols-4" style={{ borderColor: 'rgba(247,244,238,0.18)' }}>
        {HERO.stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-baseline justify-center gap-2.5 border-[rgba(247,244,238,0.18)] px-3 py-4 md:py-5 ${
              i % 2 === 1 ? 'border-l' : ''
            } ${i >= 2 ? 'border-t sm:border-t-0' : ''} ${i === 2 ? 'sm:border-l' : ''}`}
          >
            <dd className="font-display text-2xl md:text-3xl" style={{ color: 'var(--ivory)' }}>{s.value}</dd>
            <dt className="text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--aqua-300)' }}>
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function HomeIsIsNot() {
  return (
    <Section tone="sand" className="!py-16 md:!py-20">
      <div className="grid gap-px border md:grid-cols-2" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
        <RevealOnScroll className="h-full">
          <div className="h-full p-8 md:p-10" style={{ background: 'var(--surface-page)' }}>
            <span className="eyebrow" style={{ color: 'var(--text-quiet)' }}>What VIVRA is not</span>
            <ul className="mt-6 space-y-3">
              {IS_NOT.map((line) => (
                <li key={line} className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0" style={{ background: 'var(--text-quiet)' }} />
                  <span className="line-through decoration-[var(--black-a12)]">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="h-full">
          <div data-theme="prestige" className="grain h-full p-8 md:p-10" style={{ background: 'var(--surface-page)', color: 'var(--text-primary)' }}>
            <span className="eyebrow" style={{ color: 'var(--aqua)' }}>What VIVRA is</span>
            <ul className="mt-6 space-y-3">
              {IS.map((line, i) => (
                <li key={line} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--aqua)' }} />
                  <span className={i === 0 ? 'font-display text-2xl' : undefined} style={{ color: i === 0 ? 'var(--ivory)' : 'var(--text-secondary)' }}>
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  )
}
