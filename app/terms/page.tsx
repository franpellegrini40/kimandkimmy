import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'

export const metadata = { title: 'Terms' }

export default async function TermsPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <h1 className="text-3xl">Terms</h1>
        <p className="mt-6 rounded-lg border border-clay-500/30 bg-clay-400/10 p-4 text-sm text-stone-700">
          LEGAL REVIEW NEEDED — placeholder only. Confirm applicant/attendee terms,
          cancellation and refund policy for the Ibiza retreat, and membership terms once
          approved, before launch.
        </p>
      </Section>
    </PageShell>
  )
}
