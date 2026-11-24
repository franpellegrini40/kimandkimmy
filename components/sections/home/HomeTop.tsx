import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { HERO } from '@/content/home'
import HeroVideo from './HeroVideo'
import IsIsNot from './IsIsNot'

// The Ibiza footage is warm (wood, terracotta, late sun), so the hero takes
// the brand's copper rather than aqua. Copper only ever sits on this dark
// overlay, never on ivory. A lighter copper keeps small text legible over video.
const COPPER_LIGHT = '#E3A877'
// "Leave it better" and "Impact beyond.": copper or the brand forest green (lifted for legibility on video).
const FOREST_LIGHT = '#5CC27E'
const HEADLINE_ACCENT = FOREST_LIGHT

export function HomeHero() {
  return (
    <section
      id="top"
      data-theme="prestige"
      className="relative flex min-h-[640px] flex-col overflow-hidden"
      style={{ height: '100svh', background: 'var(--navy)', color: 'var(--ivory)' }}
    >
      {/* The Ibiza highlights fill the hero on every screen. */}
      <HeroVideo className="absolute inset-0 h-full w-full object-cover" />
      {/* Darkens the film enough for white type, heavier at top (header) and bottom (stats). */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,14,33,0.62) 0%, rgba(0,14,33,0.5) 30%, rgba(0,14,33,0.55) 60%, rgba(0,14,33,0.9) 100%)',
        }}
      />

      <div className="container-vivra relative flex flex-1 flex-col items-center justify-center gap-6 pt-24 text-center md:gap-7">
        <p
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase"
          style={{ letterSpacing: 'var(--tracking-caps)' }}
        >
          {HERO.claims.map((claim, i) => (
            <span key={claim} style={{ color: i === 2 ? 'var(--aqua)' : 'rgba(247,244,238,0.9)' }}>
              {claim}
            </span>
          ))}
        </p>

        <h1 className="max-w-5xl text-[clamp(3rem,1.2rem+6vw,6.25rem)] leading-[0.98] !text-[var(--ivory)]">
          <span className="block">{HERO.headline[0]}</span>
          <span className="block italic" style={{ color: HEADLINE_ACCENT }}>
            {HERO.headline[1]}
          </span>
        </h1>

        <p className="max-w-xl text-base md:text-lg" style={{ color: 'rgba(247,244,238,0.88)' }}>
          {HERO.body}
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Button
            href="/#apply"
            className="!border-[var(--ivory)] !bg-[var(--ivory)] !text-[var(--navy)] hover:!border-[var(--forest-deep)] hover:!bg-[var(--forest-deep)] hover:!text-white active:!border-[var(--forest)] active:!bg-[var(--forest)] active:!text-white focus-visible:!bg-[var(--forest-deep)] focus-visible:!text-white"
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
          style={{ borderColor: 'rgba(224,165,111,0.6)', color: COPPER_LIGHT, letterSpacing: 'var(--tracking-caps)' }}
        >
          {HERO.badge}
        </span>
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
