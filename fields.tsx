import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AssetPlaceholder from '@/components/ui/AssetPlaceholder'
import Button from '@/components/ui/Button'
import { RETREAT_FACTS } from '@/content/retreat'

export default function FoundingRetreat() {
  return (
    <Section tone="dark" id="ibiza">
      <RevealOnScroll>
        <span className="eyebrow text-vivra-300">{RETREAT_FACTS.status}</span>
        <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
          Ibiza is not a conference. It is not a wellness retreat. It is the first
          expression of VIVRA.
        </h2>
      </RevealOnScroll>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { title: 'Why Ibiza', body: 'PENDING — approved brochure copy' },
          { title: 'Who Attends', body: 'PENDING — approved brochure copy' },
          { title: 'Why Founding', body: 'PENDING — approved brochure copy' },
        ].map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.08}>
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.body}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <AssetPlaceholder note="Ibiza sunset long-table dinner, 16:9" aspect="aspect-video" className="md:col-span-2" tone="clay" />
        <AssetPlaceholder note="Curated conversation moment, 4:5" tone="vivra" />
      </div>

      <div className="mt-12">
        <Button href="/apply/ibiza">Join the Founding Retreat</Button>
      </div>
    </Section>
  )
}
