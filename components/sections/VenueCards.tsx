import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { ALLIANCE_VENUES } from '@/content/alliance'

export default function VenueCards() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {ALLIANCE_VENUES.map((venue, i) => (
        <RevealOnScroll key={venue.name} delay={i * 0.03}>
          <div className="border" style={{ borderColor: 'var(--rule)' }}>
            <div className="relative">
              <Photo src={venue.image} alt={`${venue.name}, ${venue.location}`} aspect="aspect-[4/3]" />
              <span
                className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border"
                style={{
                  background: venue.status === 'open' ? 'var(--accent)' : 'transparent',
                  borderColor: venue.status === 'open' ? 'var(--accent)' : 'var(--paper)',
                }}
              />
            </div>
            <div className="p-4">
              <div style={{ color: 'var(--text-primary)' }}>{venue.name}</div>
              <div className="mt-1 text-xs" style={{ color: 'var(--text-quiet)' }}>{venue.location}</div>
              <div
                className="mt-3 text-[10px] uppercase"
                style={{ letterSpacing: 'var(--tracking-caps)', color: venue.status === 'open' ? 'var(--accent-deep)' : 'var(--text-quiet)' }}
              >
                {venue.status === 'open' ? 'Open now' : 'Opening soon'}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  )
}
