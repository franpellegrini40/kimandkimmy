import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { ALLIANCE_VENUES_INTRO, ALLIANCE_VENUES } from '@/content/alliance'

export default function VenuesTeaser() {
  const featured = ALLIANCE_VENUES.slice(0, 6)

  return (
    <Section tone="light" id="venues">
      <RevealOnScroll>
        <span className="eyebrow">{ALLIANCE_VENUES_INTRO.eyebrow}</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">{ALLIANCE_VENUES_INTRO.heading}</h2>
        <p className="mt-4 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
          {ALLIANCE_VENUES_INTRO.body}
        </p>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {featured.map((venue, i) => (
          <RevealOnScroll key={venue.name} delay={i * 0.04}>
            <div className="group overflow-hidden">
              <Photo
                src={venue.image}
                alt={`${venue.name}, ${venue.location}`}
                aspect="aspect-[4/5]"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-110"
              />
              <p className="mt-2 text-sm">
                {venue.name}{' '}
                <span style={{ color: 'var(--text-quiet)' }}>· {venue.location}</span>
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2} className="mt-10">
        <Button href="/venues">Explore All Venues</Button>
      </RevealOnScroll>
    </Section>
  )
}
