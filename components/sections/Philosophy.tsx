import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { PHILOSOPHY_INTRO, PHILOSOPHY_PILLARS } from '@/content/philosophy'

export default function Philosophy() {
  return (
    <Section tone="light" id="philosophy">
      <RevealOnScroll>
        <span className="eyebrow">{PHILOSOPHY_INTRO.eyebrow}</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">{PHILOSOPHY_INTRO.heading}</h2>
      </RevealOnScroll>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {PHILOSOPHY_PILLARS.map((pillar, i) => (
          <RevealOnScroll key={pillar.key} delay={i * 0.06} className="group">
            <div className="relative">
              <Photo
                src={pillar.image}
                alt={pillar.imageAlt}
                aspect="aspect-[4/5]"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span
                  className="eyebrow rounded-full px-4 py-1.5 backdrop-blur-sm"
                  style={{
                    background: 'rgba(247,244,238,0.88)',
                    color: pillar.key === 'leave-it-better' ? 'var(--forest-deep)' : 'var(--accent-deep)',
                  }}
                >
                  {pillar.eyebrow}
                </span>
              </div>
            </div>
            <h3
              className="mt-5 text-2xl"
              style={{ color: pillar.key === 'leave-it-better' ? 'var(--forest)' : 'var(--accent-deep)' }}
            >
              {pillar.label}
            </h3>
            <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {pillar.body}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
