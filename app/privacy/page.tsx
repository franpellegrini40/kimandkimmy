import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'

export const metadata = { title: 'Privacy Policy' }

export default async function PrivacyPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <h1 className="text-3xl">Privacy Policy</h1>
        <p className="mt-6 border border-red-600/30 bg-red-600/5 p-4 text-sm">
          LEGAL REVIEW NEEDED — this is a placeholder structure, not an approved policy.
          Have counsel confirm language on: data collected via the Join / Ibiza / Alliance
          forms, analytics (GA4, Meta Pixel, LinkedIn Insight Tag), cookie categories,
          international transfers (VIVRA expects EU visitors), retention, and user rights
          under GDPR/CCPA as applicable.
        </p>
        <div className="prose mt-8 max-w-none" style={{ color: 'var(--text-secondary)' }}>
          <p>
            VIVRA collects the information you provide through our application forms
            (name, email, contact details, and your responses) to evaluate your interest,
            communicate with you about VIVRA, and — where you have consented — send updates
            about the Founding Retreat and membership.
          </p>
          <p>
            We use analytics tools to understand how visitors use this site. Analytics
            cookies only load after you accept them in the cookie banner.
          </p>
          <p>To request access to, correction of, or deletion of your data, contact francisco@ithaka.vc.</p>
        </div>
      </Section>
    </PageShell>
  )
}
