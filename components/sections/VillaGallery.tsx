import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { VILLA_PERKS } from '@/content/retreat'

const GALLERY_PHOTOS = [
  { src: '/images/villa-facade-night.jpg', alt: 'Can Aylma’s arched courtyard at dusk', aspect: 'aspect-video' },
  { src: '/images/villa-facade.jpg', alt: 'Whitewashed entrance path at Can Aylma', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-living.jpg', alt: 'Open-plan kitchen and living space', aspect: 'aspect-video' },
  { src: '/images/villa-dining.jpg', alt: 'Long-table dining terrace at golden hour', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-pool.jpg', alt: 'Salt water pool with loungers', aspect: 'aspect-video' },
  { src: '/images/villa-kitchen.jpg', alt: 'Outdoor kitchen counter', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-view.jpg', alt: 'Lounge chairs overlooking the Ibiza hills', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-sauna.jpg', alt: 'The sauna in the wellness zone', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-hammam.jpg', alt: 'The hammam plunge room', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-bedroom.jpg', alt: 'A guest room at Can Aylma', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-teepee.jpg', alt: 'The ceremonial teepee at sunrise', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-firepit.jpg', alt: 'Fire pit lounge seating', aspect: 'aspect-video' },
  { src: '/images/villa-gym.jpg', alt: 'The outdoor gym', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-cabana.jpg', alt: 'Massage cabana in the garden', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-aerial.jpg', alt: 'Aerial view of the garden and pool', aspect: 'aspect-video' },
]

export default function VillaGallery() {
  return (
    <Section tone="sand" id="villa">
      <RevealOnScroll>
        <span className="eyebrow">The Villa</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Can Aylma — where it happens.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {GALLERY_PHOTOS.map((photo, i) => (
          <RevealOnScroll
            key={photo.src}
            delay={i * 0.04}
            className={photo.aspect === 'aspect-video' ? 'col-span-2' : ''}
          >
            <Photo src={photo.src} alt={photo.alt} aspect={photo.aspect} />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-14">
        <h3 className="text-sm uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>
          Perks
        </h3>
        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          {VILLA_PERKS.map((perk) => (
            <li key={perk.label} className="flex items-start gap-2 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
              {perk.label}
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </Section>
  )
}
