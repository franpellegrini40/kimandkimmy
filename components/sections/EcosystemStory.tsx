import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { ECOSYSTEM_STORY } from '@/content/ecosystem'

const FOUNDERS = [
  { name: 'Manuele Monti', role: 'Co-Founder', linkedin: 'https://www.linkedin.com/in/manuelemonti/' },
  { name: 'Francisco Pellegrini', role: 'CEO & Founder', linkedin: 'https://www.linkedin.com/in/francisco-pellegrini' },
  { name: 'Alessandro Adamoli', role: 'Co-Founder', linkedin: 'https://www.linkedin.com/in/alessandroluigiadamoli/' },
]

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
            <div className="relative">
              <Photo
                src="/images/founders-trio.jpg"
                alt="Manuele Monti, Francisco Pellegrini and Alessandro Adamoli, the founders of VIVRA"
                aspect="aspect-[1122/1215]"
              />
              <div className="absolute inset-0 grid grid-cols-3">
                {FOUNDERS.map((f) => (
                  <a
                    key={f.name}
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${f.name} on LinkedIn`}
                    className="group relative"
                  >
                    <span
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: 'rgba(0,14,33,0.15)' }}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 text-center">
              {FOUNDERS.map((f) => (
                <a
                  key={f.name}
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-1"
                >
                  <p className="text-sm transition-colors group-hover:text-[var(--accent-deep)]">{f.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-quiet)' }}>{f.role}</p>
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Section>
    </>
  )
}
