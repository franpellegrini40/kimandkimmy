import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import { PRICING_CONTACT } from '@/content/retreat'

export default function ContactTeaser() {
  return (
    <Section tone="light" id="contact">
      <RevealOnScroll className="max-w-2xl">
        <span className="eyebrow">Contact</span>
        <h2 className="mt-4 text-3xl md:text-4xl">Join the VIVRA membership waitlist.</h2>
        <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
          Membership isn&rsquo;t live yet. Join the waitlist and we&rsquo;ll reach out as soon as early access opens.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/apply/join">Join the Waitlist</Button>
        </div>
        <p className="mt-8 text-sm" style={{ color: 'var(--text-quiet)' }}>
          Prefer to reach us directly?{' '}
          <a href={`mailto:${PRICING_CONTACT.email}`} className="underline" style={{ color: 'var(--text-primary)' }}>
            Email
          </a>{' '}
          or{' '}
          <a href={PRICING_CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--text-primary)' }}>
            WhatsApp
          </a>
          .
        </p>
        <p className="mt-3 text-sm">
          <a href="/concierge" className="underline" style={{ color: 'var(--forest-deep)' }}>
            or Contact our Concierge
          </a>
        </p>
      </RevealOnScroll>
    </Section>
  )
}
