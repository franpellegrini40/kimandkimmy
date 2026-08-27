import Button from '@/components/ui/Button'
import { ALLIANCE_TAGLINE } from '@/content/alliance'
import type { SiteId } from '@/lib/site'

export default function Hero({ site }: { site: SiteId }) {
  const isJoin = site === 'join-vivra'

  return (
    <section
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden text-center"
      style={{ background: 'var(--ivory)', color: 'var(--text-primary)' }}
    >
      <div className="container-vivra relative z-10 flex flex-col items-center gap-6 py-32">
        <span className="eyebrow text-sm">{ALLIANCE_TAGLINE}</span>

        <h1 className="max-w-2xl text-3xl leading-tight md:text-5xl">
          Live longer. Think bigger. <em style={{ color: 'var(--accent-deep)' }}>Leave it better.</em>
        </h1>

        <p className="max-w-xl text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
          Where wellbeing becomes potential, travel becomes purpose, and connection becomes impact.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
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
