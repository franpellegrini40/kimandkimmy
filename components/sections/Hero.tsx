import Button from '@/components/ui/Button'
import HeroVideo from './HeroVideo'
import { RETREAT_FACTS } from '@/content/retreat'
import type { SiteId } from '@/lib/site'

export default function Hero({ site }: { site: SiteId }) {
  const isJoin = site === 'join-vivra'

  return (
    <section
      data-theme="prestige"
      className="relative flex min-h-[92vh] items-end overflow-hidden"
      style={{ color: 'var(--text-primary)' }}
    >
      <HeroVideo />

      <div className="container-vivra relative z-10 flex flex-col gap-6 pb-20 pt-32">
        <span className="eyebrow" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.65)' }}>{RETREAT_FACTS.status}</span>

        <h1 className="max-w-2xl text-4xl leading-tight md:text-6xl">{RETREAT_FACTS.tagline}</h1>

        {isJoin ? (
          <p className="max-w-md text-sm uppercase tracking-caps" style={{ color: 'var(--text-secondary)' }}>
            {RETREAT_FACTS.dates} · Can Aylma, Ibiza
          </p>
        ) : (
          <p className="max-w-lg text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {RETREAT_FACTS.subTagline} VIVRA begins in Ibiza — and continues as a global
            community.
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-4">
          <Button href={isJoin ? '/apply/ibiza' : '/apply/join'} variant="accent">
            {isJoin ? 'Join the Founding Retreat' : 'Join VIVRA'}
          </Button>
          <Button href={isJoin ? '/' : '/ibiza'} variant="secondary">
            {isJoin ? 'Discover VIVRA' : 'Explore Ibiza Founding Retreat'}
          </Button>
        </div>
      </div>
    </section>
  )
}
