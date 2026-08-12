import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AssetPlaceholder from '@/components/ui/AssetPlaceholder'
import { VILLA_PERKS } from '@/content/retreat'

const GALLERY_SPECS = [
  'Villa exterior — whitewashed facade, cactus garden, 4:5',
  'Outdoor pergola dining under the olive tree, 4:5',
  'Salt water pool with loungers and mountain view, 16:9',
  'Wellness zone — sauna & hammam, 4:5',
  'Ceremonial teepee & fire pit at dusk, 4:5',
  'Garden and surrounding pine hills, 16:9',
]

export default function VillaGallery() {
  return (
    <Section tone="sand" id="villa">
      <RevealOnScroll>
        <span className="eyebrow">The Villa</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Where it happens.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {GALLERY_SPECS.map((spec, i) => (
          <RevealOnScroll key={spec} delay={i * 0.05} className={i === 2 ? 'col-span-2 md:col-span-1' : ''}>
            <AssetPlaceholder note={spec} aspect={spec.includes('16:9') ? 'aspect-video' : 'aspect-[4/5]'} />
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
