import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import IbizaForm from '@/components/forms/IbizaForm'

export const metadata: Metadata = {
  title: 'Join the Founding Retreat',
  description: 'Request to join the VIVRA Founding Retreat in Ibiza.',
}

export default async function ApplyIbizaPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <span className="eyebrow">Ibiza Founding Retreat</span>
        <h1 className="mt-4 text-3xl md:text-4xl">Request to join.</h1>
        <p className="mt-3 text-stone-700">
          Tell us a little about yourself. Our team reviews every request personally.
        </p>
        <div className="mt-10">
          <IbizaForm />
        </div>
      </Section>
    </PageShell>
  )
}
