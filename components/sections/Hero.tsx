import Button from '@/components/ui/Button'
import { ALLIANCE_TAGLINE } from '@/content/alliance'

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden text-center"
      style={{ background: 'var(--ivory)', color: 'var(--text-primary)' }}
    >
      <div className="container-vivra relative z-10 flex flex-col items-center gap-8 py-32 md:gap-10">
        <h1
          className="max-w-3xl text-3xl leading-tight md:text-5xl"
          style={{ color: 'var(--accent-deep)' }}
        >
          {ALLIANCE_TAGLINE}
        </h1>

        <div
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-base uppercase md:text-xl"
          style={{ letterSpacing: 'var(--tracking-caps)' }}
        >
          <span style={{ color: 'var(--accent-deep)' }}>Live longer</span>
          <span style={{ color: 'var(--text-quiet)' }}>·</span>
          <span>Think bigger</span>
          <span style={{ color: 'var(--text-quiet)' }}>·</span>
          <span className="italic" style={{ color: 'var(--forest)' }}>Leave it better</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/apply/join" variant="accent" size="xs">
            Request Invitation
          </Button>
          <Button href="/impact" variant="secondary" size="xs">
            See Your Passport
          </Button>
        </div>

        <p className="mt-4 max-w-xl text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
          Where wellbeing becomes potential, travel becomes purpose, and connection becomes impact.
        </p>
      </div>
    </section>
  )
}
