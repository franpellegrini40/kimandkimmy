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
        <p className="mt-6 border border-red-600/30 bg-red-600/5 p-4 text-sm">
          LEGAL REVIEW NEEDED — placeholder only. Confirm applicant/attendee terms,
          cancellation and refund policy for the Ibiza retreat, and membership terms once
          approved, before launch.
        </p>
      </Section>
    </PageShell>
  )
}
