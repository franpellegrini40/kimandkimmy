import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { PRICING, EVERY_PLACE_INCLUDES, RETREAT_FACTS } from '@/content/retreat'

export default function PricingSection() {
  return (
    <Section tone="light" id="join">
      <RevealOnScroll>
        <span className="eyebrow">{RETREAT_FACTS.status}</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Your place.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <RevealOnScroll>
          <div className="rounded-2xl border border-stone-900/10 bg-sand-50 p-8">
            <span className="eyebrow">{PRICING.solo.label}</span>
            <p className="mt-3 text-3xl text-stone-900">{PRICING.solo.price}</p>
            <p className="mt-2 text-sm text-stone-500">{PRICING.solo.detail}</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <div className="rounded-2xl border border-stone-900/10 bg-sand-50 p-8">
            <span className="eyebrow">{PRICING.double.label}</span>
            <p className="mt-3 text-3xl text-stone-900">{PRICING.double.price}</p>
            <p className="mt-2 text-sm text-stone-500">{PRICING.double.detail}</p>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.12} className="mt-6 max-w-2xl text-sm text-stone-500">
        <p>{PRICING.includes}</p>
        <p className="mt-1 italic">{PRICING.note}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.16} className="mt-10">
        <h3 className="text-sm uppercase tracking-wide text-stone-500">Every place includes</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {EVERY_PLACE_INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-stone-800">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vivra-600" />
              {item}
            </li>
          ))}
        </ul>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="mt-10">
        <Button href="/apply/ibiza">Join the Founding Retreat</Button>
      </RevealOnScroll>
    </Section>
  )
}
