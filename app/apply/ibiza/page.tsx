import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import IbizaForm from '@/components/forms/IbizaForm'
import { RETREAT_FACTS } from '@/content/retreat'

export const metadata: Metadata = {
  title: 'Join the Founding Retreat',
  description: 'Request to join the VIVRA Founding Gathering at Can Aylma, Ibiza.',
}

export default async function ApplyIbizaPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <span className="eyebrow">{RETREAT_FACTS.status}</span>
        <h1 className="mt-4 text-3xl md:text-4xl">Request to join.</h1>
        <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
          {RETREAT_FACTS.dates} · Can Aylma, Ibiza. Every place includes a short curator
          fit-conversation — tell us a little about yourself and our team will follow up
          personally.
        </p>
        <div className="mt-10">
          <IbizaForm />
        </div>
      </Section>
    </PageShell>
  )
}
