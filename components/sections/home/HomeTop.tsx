import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { HERO } from '@/content/home'
import HeroBackground from './HeroBackground'
import IsIsNot from './IsIsNot'

// VIV-0035: navy and cream, with copper as the only accent. The headline's
// emphasis comes from the serif italic, not from colour. A lighter copper
// keeps the small label legible over the film.
const COPPER_LIGHT = '#E3A877'

export function HomeHero() {
  // ?hero=photo|navy works on preview and staging only (see HeroBackground).
  const allowSwitch = process.env.VERCEL_ENV !== 'production'

  return (
    <section
      id="top"
      data-theme="prestige"
      className="relative flex min-h-[640px] flex-col overflow-hidden"
      style={{ height: '100svh', background: 'var(--navy)', color: 'var(--ivory)' }}
    >
      <HeroBackground allowSwitch={allowSwitch} />
      {/* A lighter veil than before so the villa breathes, heavier at the
          bottom where the buttons sit. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,14,33,0.35) 0%, rgba(0,14,33,0.55) 50%, rgba(0,14,33,0.85) 100%)',
        }}
      />

      <div className="container-vivra relative flex flex-1 flex-col items-center justify-center gap-6 pt-24 text-center md:gap-7">
        <p className="text-[11px] font-medium uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: COPPER_LIGHT }}>
          {HERO.eyebrow}
        </p>

        <h1 className="max-w-5xl text-[clamp(3.25rem,1.3rem+6.6vw,7rem)] font-light leading-[0.98] !text-[var(--ivory)]">
          <span className="block">{HERO.headline[0]}</span>
          <span className="block italic">{HERO.headline[1]}</span>
        </h1>

        <p className="max-w-xl text-base md:text-lg" style={{ color: 'rgba(247,244,238,0.88)' }}>
          {HERO.body}
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Button
            href="/#apply"
            className="!border-[var(--ivory)] !bg-[var(--ivory)] !text-[var(--navy)] hover:!border-[var(--copper)] hover:!bg-[var(--copper)] hover:!text-[var(--navy)] active:!border-[var(--copper)] active:!bg-[var(--copper)] focus-visible:!bg-[var(--copper)]"
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
      </div>
    </section>
  )
}

export function HomeIsIsNot() {
  return (
    <Section tone="sand" className="!py-16 md:!py-20">
      <IsIsNot />
    </Section>
  )
}
