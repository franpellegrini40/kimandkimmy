import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden text-center"
      style={{ background: 'var(--ivory)', color: 'var(--text-primary)' }}
    >
      <div className="container-vivra relative z-10 flex flex-col items-center gap-8 py-32 md:gap-10">
        <p
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm uppercase md:text-base"
          style={{ letterSpacing: 'var(--tracking-caps)' }}
        >
          <span style={{ color: 'var(--accent-deep)' }}>Live longer</span>
          <span style={{ color: 'var(--text-quiet)' }}>·</span>
          <span>Think bigger</span>
          <span style={{ color: 'var(--text-quiet)' }}>·</span>
          <span className="italic" style={{ color: 'var(--forest)' }}>Leave it better</span>
        </p>

        <h1 className="max-w-4xl leading-[1.08]">
          <span className="block text-4xl md:text-6xl lg:text-7xl">
            The world&rsquo;s first <span style={{ color: 'var(--forest)' }}>regenerative</span>
          </span>
          <span className="mt-1 block text-4xl italic md:text-6xl lg:text-7xl">
            membership alliance.
          </span>
        </h1>

        <span
          className="rounded-full border px-4 py-1.5 text-xs uppercase"
          style={{ borderColor: 'var(--rule)', color: 'var(--text-quiet)', letterSpacing: 'var(--tracking-caps)' }}
        >
          Coming Soon
        </span>

        <p className="max-w-xl text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
          Where wellbeing becomes potential, travel becomes purpose, and connection becomes impact.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Button href="/apply/join" variant="accent" size="xs">
            Request Invitation
          </Button>
          <Button href="/impact" variant="secondary" size="xs">
            See Your Passport
          </Button>
        </div>
      </div>
    </section>
  )
}
