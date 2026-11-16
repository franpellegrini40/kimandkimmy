import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { HERO, IS, IS_NOT } from '@/content/home'

// Copper never sits on ivory (brand rule), so the three claims use aqua, navy and forest.
const CLAIM_COLORS = ['var(--accent-deep)', 'var(--text-primary)', 'var(--forest-deep)']

export function HomeHero() {
  return (
    <section id="top" style={{ background: 'var(--ivory)', color: 'var(--text-primary)' }}>
      <div className="container-vivra flex flex-col items-center gap-7 pb-14 pt-36 text-center md:gap-8 md:pt-44">
        <p
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase"
          style={{ letterSpacing: 'var(--tracking-caps)' }}
        >
          {HERO.claims.map((claim, i) => (
            <span key={claim} style={{ color: CLAIM_COLORS[i] }}>
              {claim}
            </span>
          ))}
        </p>

        <span
          className="border px-4 py-1.5 text-[10px] uppercase"
          style={{ borderColor: 'var(--forest)', color: 'var(--forest-deep)', letterSpacing: 'var(--tracking-caps)' }}
        >
          {HERO.badge}
        </span>

        <h1 className="max-w-4xl text-[clamp(2.75rem,1.4rem+6vw,5.75rem)] leading-[1.02]">
          <span className="block">{HERO.headline[0]}</span>
          <span className="block italic" style={{ color: 'var(--forest)' }}>
            {HERO.headline[1]}
          </span>
        </h1>

        <p className="max-w-xl text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
          {HERO.body}
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Button
            href="/#apply"
            className="!border-[var(--forest-deep)] !bg-[var(--forest-deep)] !text-white hover:!border-[var(--navy)] hover:!bg-[var(--navy)]"
          >
            Request invitation
          </Button>
          <Button href="/#philosophy" variant="secondary">
            Discover VIVRA
          </Button>
        </div>
      </div>

      <div className="container-vivra pb-20 md:pb-28">
        <div className="relative overflow-hidden" style={{ background: 'var(--navy)' }}>
          <video
            className="block h-[52vh] w-full object-cover md:h-[76vh]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            aria-label="Can Aylma, Ibiza, seen from above"
          >
            <source src="/videos/villa-hero.webm" type="video/webm" />
            <source src="/videos/villa-hero.mp4" type="video/mp4" />
          </video>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
            style={{ background: 'linear-gradient(180deg, rgba(0,14,33,0) 0%, rgba(0,14,33,0.75) 100%)' }}
          />
          <dl className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-px sm:grid-cols-4" style={{ background: 'var(--white-a12)' }}>
            {HERO.stats.map((s) => (
              <div
                key={s.label}
                className="flex items-baseline justify-center gap-2.5 px-3 py-4"
                style={{ background: 'rgba(0,14,33,0.72)', backdropFilter: 'blur(6px)' }}
              >
                <dd className="font-display text-2xl" style={{ color: 'var(--ivory)' }}>{s.value}</dd>
                <dt className="text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--aqua-300)' }}>
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
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
