import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { VOICES } from '@/content/home'

// Voices from Ibiza: a still from each interview and one line, verbatim.
// On phones the cards scroll sideways; from lg they sit in one row of five.
export default function HomeVoices() {
  return (
    <Section tone="light" id="voices">
      <RevealOnScroll>
        <span className="eyebrow">{VOICES.eyebrow}</span>
        <h2 className="mt-4 text-3xl md:text-5xl">{VOICES.heading}</h2>
        <p className="mt-4 max-w-xl text-sm" style={{ color: 'var(--text-secondary)' }}>{VOICES.intro}</p>
      </RevealOnScroll>

      <ul className="-mx-6 mt-10 grid snap-x snap-mandatory scroll-px-6 auto-cols-[78%] grid-flow-col gap-4 overflow-x-auto px-6 pb-2 md:-mx-10 md:scroll-px-10 md:px-10 sm:auto-cols-[45%] lg:mx-0 lg:grid-flow-row lg:grid-cols-5 lg:overflow-visible lg:px-0">
        {VOICES.items.map((v, i) => (
          <li key={v.clip} className="snap-start">
            <RevealOnScroll delay={i * 0.05} className="group flex h-full flex-col">
              <Photo
                src={v.src}
                alt={`${v.name}, interviewed at the VIVRA gathering in Ibiza`}
                aspect="aspect-[4/5]"
                quality={90}
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 78vw"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <figure className="mt-5 flex flex-1 flex-col border-t pt-5" style={{ borderColor: 'var(--copper)' }}>
                <blockquote className="font-display text-lg leading-snug">“{v.quote}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span>{v.name}</span>
                  {v.role && <span style={{ color: 'var(--text-quiet)' }}>, {v.role}</span>}
                </figcaption>
              </figure>
            </RevealOnScroll>
          </li>
        ))}
      </ul>
    </Section>
  )
}
