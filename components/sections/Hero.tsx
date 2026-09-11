import Link from 'next/link'
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
          <Link href="/#philosophy" className="inline-block transition-transform duration-200 hover:scale-125" style={{ color: 'var(--accent-deep)' }}>
            Live longer
          </Link>
          <span style={{ color: 'var(--text-quiet)' }}>·</span>
          <Link href="/#philosophy" className="inline-block transition-transform duration-200 hover:scale-125">
            Think bigger
          </Link>
          <span style={{ color: 'var(--text-quiet)' }}>·</span>
          <Link href="/#philosophy" className="inline-block italic transition-transform duration-200 hover:scale-125" style={{ color: 'var(--forest)' }}>
            Leave it better
          </Link>
        </p>

        <h1 className="max-w-4xl leading-[1.08]">
          <span className="block text-4xl md:text-6xl lg:text-7xl">
            Change within.
          </span>
          <span className="mt-1 block text-4xl italic md:text-6xl lg:text-7xl" style={{ color: 'var(--forest)' }}>
            Impact beyond.
          </span>
        </h1>

        <Link
          href="/apply/join"
          className="inline-block rounded-full px-4 py-1.5 text-xs uppercase transition-transform duration-200 hover:scale-110"
          style={{ background: 'var(--navy)', color: 'var(--copper)', letterSpacing: 'var(--tracking-caps)' }}
        >
          Coming Soon
        </Link>

        <p className="max-w-xl text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
          The <span className="text-base font-semibold md:text-lg" style={{ color: 'var(--text-primary)' }}>phygital</span> layer
          connecting communities through curated gatherings, transformative experiences and
          masterclasses in exceptional places.
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
