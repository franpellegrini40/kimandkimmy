import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { ECOSYSTEM_STORY } from '@/content/ecosystem'

export default function EcosystemStory() {
  const { intro, founding } = ECOSYSTEM_STORY

  return (
    <>
      {/* Chapter 1 — Ecosystem introduction */}
      <Section tone="light">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <RevealOnScroll>
              <span className="eyebrow">{intro.eyebrow}</span>
              <h2 className="mt-4 max-w-lg text-3xl md:text-4xl">{intro.heading}</h2>
              <div className="mt-5 max-w-md space-y-4" style={{ color: 'var(--text-secondary)' }}>
                {intro.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.16} className="mt-8">
              <Button href="/apply/join" variant="accent">Request an Invitation</Button>
            </RevealOnScroll>
          </div>

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
            <div className="font-display pb-3 text-center text-lg" style={{ color: 'var(--accent-deep)' }}>
              VIVRA
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Photo
                  src="/images/founder-francisco-nologo.jpg"
                  alt="Francisco Pellegrini, Founder & CEO of VIVRA"
                  aspect="aspect-[4/5]"
                />
                <p className="mt-3 text-sm">Francisco Pellegrini</p>
                <p className="text-xs" style={{ color: 'var(--text-quiet)' }}>Founder &amp; CEO, VIVRA</p>
              </div>
              <div>
                <Photo
                  src="/images/founder-manuele-nologo.jpg"
                  alt="Manuele Monti, Co-Founder of VIVRA"
                  aspect="aspect-[4/5]"
                />
                <p className="mt-3 text-sm">Manuele Monti</p>
                <p className="text-xs" style={{ color: 'var(--text-quiet)' }}>Co-Founder, VIVRA</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Section>
    </>
  )
}
