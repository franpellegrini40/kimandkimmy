import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { ECOSYSTEM_STORY } from '@/content/ecosystem'

export default function EcosystemStory() {
  const { intro, founding, manifesto } = ECOSYSTEM_STORY

  return (
    <>
      {/* Chapter 1 — Ecosystem introduction */}
      <Section tone="light">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <RevealOnScroll>
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2 className="mt-4 max-w-lg text-3xl md:text-4xl">{intro.heading}</h2>
            <p className="mt-5 max-w-md" style={{ color: 'var(--text-secondary)' }}>{intro.body}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Photo src={intro.image} alt={intro.imageAlt} aspect="aspect-[4/5]" />
          </RevealOnScroll>
        </div>
      </Section>

      {/* Chapter 2 — Founding story, an intimate human chapter */}
      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <RevealOnScroll className="md:order-2">
            <span className="eyebrow">{founding.eyebrow}</span>
            <h2 className="mt-4 max-w-lg text-3xl md:text-4xl">{founding.heading}</h2>
            <div className="mt-5 max-w-md space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {founding.paragraphs.map((p, i) =>
                i === founding.paragraphs.length - 1 ? (
                  <p key={i}>
                    {p.replace('one living ecosystem.', '')}
                    <span style={{ color: 'var(--forest-deep)' }}>one living ecosystem.</span>
                  </p>
                ) : (
                  <p key={i}>{p}</p>
                ),
              )}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="md:order-1">
            <Photo src={founding.image} alt={founding.imageAlt} aspect="aspect-[4/5]" />
          </RevealOnScroll>
        </div>
      </Section>

      {/* Chapter 4 — Physical ecosystem manifesto */}
      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll>
            <span
              className="block text-base uppercase md:text-xl"
              style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--accent-deep)' }}
            >
              {manifesto.eyebrow}
            </span>
            <span
              className="mt-2 block text-sm uppercase md:text-base"
              style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-secondary)' }}
            >
              {manifesto.eyebrowSub}
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl">{manifesto.heading}</h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08} className="mt-8 space-y-4 text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
            <p>{manifesto.bodyLead}</p>
            <p>{manifesto.bodyContrast}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.14} className="mt-8 space-y-1 text-base md:text-lg">
            <p style={{ color: 'var(--text-secondary)' }}>{manifesto.lineDigital}</p>
            <p style={{ color: 'var(--forest-deep)' }}>{manifesto.linePhysical}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="mt-8">
            <p className="text-xl italic md:text-2xl" style={{ color: 'var(--accent)' }}>{manifesto.tagline}</p>
            <p className="mt-4 text-sm md:text-base" style={{ color: 'var(--text-quiet)' }}>{manifesto.closing}</p>
          </RevealOnScroll>

          {/* Chapter 5 — Final invitation */}
          <RevealOnScroll delay={0.26} className="mt-12">
            <Button href="/apply/join" variant="accent">Request an Invitation</Button>
          </RevealOnScroll>
        </div>
      </Section>
    </>
  )
}
