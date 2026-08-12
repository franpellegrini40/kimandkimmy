import Button from '@/components/ui/Button'
import HeroVideo from './HeroVideo'
import { RETREAT_FACTS } from '@/content/retreat'
import type { SiteId } from '@/lib/site'

export default function Hero({ site }: { site: SiteId }) {
  const isJoin = site === 'join-vivra'

  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden text-white">
      <HeroVideo />

      <div className="container-vivra relative z-10 flex flex-col gap-6 pb-20 pt-32">
        <span className="eyebrow text-vivra-100">VIVRA — Coming Live Soon</span>

        {isJoin ? (
          <>
            <h1 className="max-w-2xl text-4xl leading-tight md:text-6xl">
              VIVRA Founding Retreat
              <span className="block italic text-vivra-100">Ibiza</span>
            </h1>
            <p className="max-w-md text-sm uppercase tracking-widest text-white/80">
              {RETREAT_FACTS.dates}
            </p>
          </>
        ) : (
          <>
            <h1 className="max-w-2xl text-4xl leading-tight md:text-6xl">
              A community for those exploring
              <span className="block italic text-vivra-100">what comes next.</span>
            </h1>
            <p className="max-w-lg text-base text-white/85 md:text-lg">
              Wellbeing. Longevity. Human potential. Regenerative impact. VIVRA begins in
              Ibiza — and continues as a global community.
            </p>
          </>
        )}

        <div className="mt-4 flex flex-wrap gap-4">
          <Button href={isJoin ? '/apply/ibiza' : '/apply/join'} variant="primary">
            {isJoin ? 'Join the Founding Retreat' : 'Join VIVRA'}
          </Button>
          <Button
            href={isJoin ? '/' : '/ibiza'}
            variant="secondary"
            className="border-white/60 text-white hover:border-white"
          >
            {isJoin ? 'Discover VIVRA' : 'Explore Ibiza Founding Retreat'}
          </Button>
        </div>
      </div>
    </section>
  )
}
