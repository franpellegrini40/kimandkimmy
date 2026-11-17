import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Log in',
  description: 'Member log in for the VIVRA platform.',
}

// Placeholder until the platform MVP provides member authentication.
// When it does, point LOGIN.href in content/site.ts at the real sign-in.
export default async function LoginPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" narrow className="pt-40">
        <span className="eyebrow">Member area</span>
        <h1 className="mt-4 text-3xl md:text-4xl">Log in.</h1>
        <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
          The VIVRA member area is not open yet. We are building the platform, and member log in will be available here as soon as it goes live.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/#apply">Request invitation</Button>
          <Button href="/" variant="secondary">Back to VIVRA</Button>
        </div>
      </Section>
    </PageShell>
  )
}
