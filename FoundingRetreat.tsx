import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import AllianceForm from '@/components/forms/AllianceForm'

export const metadata: Metadata = {
  title: 'Apply to VIVRA World Alliance',
  description: 'Apply to bring your organization into the VIVRA World Alliance.',
}

export default async function ApplyAlliancePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <span className="eyebrow">VIVRA World Alliance</span>
        <h1 className="mt-4 text-3xl md:text-4xl">Apply to join the Alliance.</h1>
        <p className="mt-3 text-stone-700">
          For membership clubs, hospitality brands, wellness businesses and aligned
          communities.
        </p>
        <div className="mt-10">
          <AllianceForm />
        </div>
      </Section>
    </PageShell>
  )
}
