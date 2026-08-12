import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata = { title: 'Contact' }

export default async function ContactPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <h1 className="text-3xl">Contact</h1>
        <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
          For general enquiries, write to{' '}
          <a href="mailto:hello@vivra.world" className="underline">
            hello@vivra.world
          </a>
          . For VIVRA World Alliance partnerships, write to{' '}
          <a href="mailto:alliance@vivra.world" className="underline">
            alliance@vivra.world
          </a>
          .
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/apply/join">Join VIVRA</Button>
          <Button href="/apply/ibiza" variant="secondary">
            Join the Founding Retreat
          </Button>
        </div>
      </Section>
    </PageShell>
  )
}
