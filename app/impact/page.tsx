import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { IMPACT_POSITIONING, IMPACT_PARTNERSHIP } from '@/content/impact'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Impact',
  description: 'How VIVRA and the VIVRA World Alliance track and fund verified regenerative impact, in partnership with Join The Planet Foundation.',
}

export default async function ImpactPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" className="pt-40">
        <RevealOnScroll>
          <span className="eyebrow">{IMPACT_POSITIONING.eyebrow}</span>
          <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">{IMPACT_POSITIONING.heading}</h1>
          <p className="mt-6 max-w-xl" style={{ color: 'var(--text-secondary)' }}>{IMPACT_POSITIONING.body}</p>
        </RevealOnScroll>
      </Section>

      <Section tone="dark">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <RevealOnScroll>
            <span className="eyebrow">{IMPACT_PARTNERSHIP.eyebrow}</span>
            <h2 className="mt-4 text-2xl md:text-3xl">{IMPACT_PARTNERSHIP.heading}</h2>
            <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>{IMPACT_PARTNERSHIP.body}</p>
            <a
              href={IMPACT_PARTNERSHIP.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block underline"
              style={{ color: 'var(--copper-deep)' }}
            >
              {IMPACT_PARTNERSHIP.linkLabel}
            </a>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <Photo
              src="/images/impact/join-the-planet-messi.jpg"
              alt="Join The Planet Foundation ambassador with the impact-tracked collectible"
              aspect="aspect-[2/3]"
            />
          </RevealOnScroll>
        </div>
      </Section>

      <CTABand site={site} />
    </PageShell>
  )
}
