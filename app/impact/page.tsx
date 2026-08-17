import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { IMPACT_POSITIONING, IMPACT_POC_INTRO, POC_PARTNERS, IMPACT_PARTNERSHIP } from '@/content/impact'
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

      <Section tone="sand">
        <RevealOnScroll>
          <span className="eyebrow">{IMPACT_POC_INTRO.eyebrow}</span>
          <h2 className="mt-4 max-w-xl text-2xl md:text-3xl">{IMPACT_POC_INTRO.heading}</h2>
          <p className="mt-4 max-w-xl" style={{ color: 'var(--text-secondary)' }}>{IMPACT_POC_INTRO.body}</p>
        </RevealOnScroll>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {POC_PARTNERS.map((poc, i) => (
            <RevealOnScroll key={poc.name} delay={i * 0.08}>
              <div className="h-full border p-6" style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}>
                <h3 className="text-lg" style={{ color: 'var(--text-primary)' }}>{poc.name}</h3>
                <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{poc.description}</p>
                <a
                  href={poc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm underline"
                  style={{ color: 'var(--accent-deep)' }}
                >
                  {poc.href.replace('https://', '')}
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
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
