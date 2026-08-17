import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { PRICING, PRICING_CONTACT, EVERY_PLACE_INCLUDES, RETREAT_FACTS } from '@/content/retreat'

export default function PricingSection() {
  return (
    <Section tone="light" id="join">
      <RevealOnScroll>
        <span className="eyebrow">{RETREAT_FACTS.status}</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Your place.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <RevealOnScroll>
          <div className="border p-8" style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}>
            <span className="eyebrow">{PRICING.solo.label}</span>
            <p className="mt-3 text-2xl">On request</p>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-quiet)' }}>{PRICING.solo.detail}</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <div className="border p-8" style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}>
            <span className="eyebrow">{PRICING.double.label}</span>
            <p className="mt-3 text-2xl">On request</p>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-quiet)' }}>{PRICING.double.detail}</p>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.12} className="mt-6 max-w-2xl text-sm" style={{ color: 'var(--text-quiet)' }}>
        <p>{PRICING.includes}</p>
        <p className="mt-1 italic">{PRICING.note}</p>
        <p className="mt-4">
          For pricing, contact us directly —{' '}
          <a href={`mailto:${PRICING_CONTACT.email}`} className="underline" style={{ color: 'var(--text-primary)' }}>
            Email
          </a>{' '}
          or{' '}
          <a href={PRICING_CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--text-primary)' }}>
            WhatsApp
          </a>
          .
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.16} className="mt-10">
        <h3 className="text-sm uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>
          Every place includes
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {EVERY_PLACE_INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
              {item}
            </li>
          ))}
        </ul>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="mt-10">
        <Button href="/apply/ibiza" variant="accent">Join the Founding Retreat</Button>
      </RevealOnScroll>
    </Section>
  )
}
