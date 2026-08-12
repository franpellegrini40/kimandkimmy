import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import JoinForm from '@/components/forms/JoinForm'

export const metadata: Metadata = {
  title: 'Join VIVRA',
  description: 'Request early access to the VIVRA community.',
}

export default async function ApplyJoinPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <span className="eyebrow">Join VIVRA</span>
        <h1 className="mt-4 text-3xl md:text-4xl">Request early access.</h1>
        <p className="mt-3 text-stone-700">
          A few details so we can understand where you would like to connect with VIVRA.
        </p>
        <div className="mt-10">
          <JoinForm />
        </div>
      </Section>
    </PageShell>
  )
}
