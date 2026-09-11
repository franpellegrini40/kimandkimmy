import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { PRICING_CONTACT } from '@/content/retreat'

export const metadata = { title: 'Contact' }

export default async function ContactPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-4 text-3xl">Join the VIVRA membership waitlist.</h1>
        <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
          Membership isn’t live yet. Join the waitlist and we’ll reach out as soon as
          early access opens.
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
      </Section>
    </PageShell>
  )
}
