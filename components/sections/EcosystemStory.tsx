import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { ECOSYSTEM_STORY } from '@/content/ecosystem'

export default function EcosystemStory() {
  const { intro, founding, profiles, manifesto } = ECOSYSTEM_STORY

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

      {/* Chapter 3 — Six ecosystem profiles, elegant typographic cards */}
      <Section tone="light">
        <RevealOnScroll className="mb-10 max-w-lg">
          <span className="eyebrow">Who Shapes the Ecosystem</span>
        </RevealOnScroll>

        <div className="grid gap-px overflow-hidden border sm:grid-cols-2 md:grid-cols-3" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
          {profiles.map((profile, i) => (
            <RevealOnScroll key={profile.label} delay={i * 0.04}>
              <div
                className="group h-full p-7 transition-transform duration-500 ease-out hover:-translate-y-1"
                style={{ background: 'var(--surface-raised)' }}
              >
                <h3 className="text-lg transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                  {profile.label}
                </h3>
                <span
                  className="mt-3 block h-px w-8 transition-all duration-300 group-hover:w-14"
                  style={{ background: 'var(--accent)' }}
                />
                <p className="mt-4 text-sm" style={{ color: 'var(--text-quiet)' }}>{profile.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Chapter 4 — Physical ecosystem manifesto, immersive gathering image */}
      <Section tone="sand">
        <RevealOnScroll>
          <Photo
            src={manifesto.image}
            alt={manifesto.imageAlt}
            aspect="aspect-video"
            className="mb-14"
          />
        </RevealOnScroll>

        <div className="mx-auto max-w-2xl text-center">
          <RevealOnScroll>
            <span className="eyebrow">{manifesto.eyebrow}</span>
            <span
              className="mt-1 block text-[10px] uppercase"
              style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}
            >
              {manifesto.eyebrowSub}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl">{manifesto.heading}</h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08} className="mt-6 space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <p>{manifesto.bodyLead}</p>
            <p>{manifesto.bodyContrast}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.14} className="mt-8 space-y-1 text-sm">
            <p style={{ color: 'var(--text-secondary)' }}>{manifesto.lineDigital}</p>
            <p style={{ color: 'var(--forest-deep)' }}>{manifesto.linePhysical}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="mt-8">
            <p className="text-lg italic" style={{ color: 'var(--accent)' }}>{manifesto.tagline}</p>
            <p className="mt-4 text-sm" style={{ color: 'var(--text-quiet)' }}>{manifesto.closing}</p>
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
