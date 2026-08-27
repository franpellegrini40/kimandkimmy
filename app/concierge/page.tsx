import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import ConciergeForm from '@/components/forms/ConciergeForm'

export const metadata: Metadata = {
  title: 'VIVRA Concierge',
  description: 'Tell us the days you want. We design them, end to end.',
}

export default async function ConciergePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <span className="eyebrow">Concierge</span>
        <h1 className="mt-4 text-3xl md:text-4xl">
          Just <em style={{ fontStyle: 'italic', color: 'var(--forest)' }}>ask</em>.
        </h1>
        <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
          Tell us the days you want. We design them, end to end.
        </p>
        <div className="mt-10">
          <ConciergeForm />
        </div>
      </Section>
    </PageShell>
  )
}
