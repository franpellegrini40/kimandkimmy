import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { VILLA_PERKS } from '@/content/retreat'

const GALLERY_PHOTOS = [
  { src: '/images/villa-facade.jpg', alt: 'Whitewashed entrance path at Can Aylma', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-dining.jpg', alt: 'Long-table dining terrace at golden hour', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-pool.jpg', alt: 'Salt water pool with loungers', aspect: 'aspect-video' },
  { src: '/images/villa-kitchen.jpg', alt: 'Outdoor kitchen counter', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-view.jpg', alt: 'Lounge chairs overlooking the Ibiza hills', aspect: 'aspect-[4/5]' },
  { src: '/images/villa-aerial.jpg', alt: 'Aerial view of the garden and pool', aspect: 'aspect-video' },
]

export default function VillaGallery() {
  return (
    <Section tone="sand" id="villa">
      <RevealOnScroll>
        <span className="eyebrow">The Villa</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Can Aylma — where it happens.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {GALLERY_PHOTOS.map((photo, i) => (
          <RevealOnScroll
            key={photo.src}
            delay={i * 0.05}
            className={photo.aspect === 'aspect-video' ? 'col-span-2 md:col-span-1' : ''}
          >
            <Photo src={photo.src} alt={photo.alt} aspect={photo.aspect} />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-14">
        <h3 className="text-sm uppercase tracking-wide text-stone-500">Perks</h3>
        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          {VILLA_PERKS.map((perk) => (
            <li key={perk.label} className="flex items-start gap-2 text-sm text-stone-800">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vivra-600" />
              {perk.label}
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </Section>
  )
}
