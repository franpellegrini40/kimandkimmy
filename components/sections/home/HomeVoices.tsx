import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { VOICES } from '@/content/home'
import VoicesCarousel from './VoicesCarousel'

// Voices from founding members: a still from each interview and one line,
// verbatim, in a swipeable carousel (about 4.5 cards visible on desktop, 1.5 on phones).
export default function HomeVoices() {
  return (
    <Section tone="light" id="voices">
      <VoicesCarousel
        label={VOICES.eyebrow}
        header={
          <RevealOnScroll>
            <span className="eyebrow">{VOICES.eyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-5xl">{VOICES.heading}</h2>
            <p className="mt-4 max-w-xl text-sm" style={{ color: 'var(--text-secondary)' }}>{VOICES.intro}</p>
          </RevealOnScroll>
        }
      >
          {VOICES.items.map((v, i) => (
            <li key={v.clip} className="snap-start" aria-roledescription="slide" aria-label={`${i + 1} of ${VOICES.items.length}`}>
              <figure className="group flex h-full flex-col">
                <div className="overflow-hidden">
                  <Photo
                    src={v.src}
                    alt={`${v.name}${v.role ? `, ${v.role}` : ''}, a founding member of VIVRA`}
                    aspect="aspect-[4/5]"
                    quality={85}
                    sizes="(min-width: 1024px) 19vw, (min-width: 768px) 26vw, (min-width: 640px) 38vw, 62vw"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex flex-1 flex-col border-t pt-4" style={{ borderColor: 'var(--copper)' }}>
                  <blockquote className="font-display text-base leading-snug md:text-lg">“{v.quote}”</blockquote>
                  <figcaption className="mt-3 text-sm">
                    <span>{v.name}</span>
                    {v.role && <span style={{ color: 'var(--text-quiet)' }}> · {v.role}</span>}
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
      </VoicesCarousel>
    </Section>
  )
}
