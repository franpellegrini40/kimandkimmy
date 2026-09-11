import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import ImpactDashboard from '@/components/sections/ImpactDashboard'
import {
  IMPACT_POSITIONING,
  IMPACT_PASSPORT_INTRO,
  IMPACT_PASSPORT_FEATURES,
  IMPACT_POC_INTRO,
  POC_PARTNERS,
  IMPACT_PARTNERSHIP,
} from '@/content/impact'
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

      <Section tone="light">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <RevealOnScroll>
            <span className="eyebrow">{IMPACT_PASSPORT_INTRO.eyebrow}</span>
            <h2 className="mt-4 max-w-md text-2xl md:text-3xl">{IMPACT_PASSPORT_INTRO.heading}</h2>
            <p className="mt-4 max-w-md" style={{ color: 'var(--text-secondary)' }}>{IMPACT_PASSPORT_INTRO.body}</p>
            <div className="mt-8 space-y-6">
              {IMPACT_PASSPORT_FEATURES.map((f, i) => (
                <RevealOnScroll key={f.key} delay={i * 0.06} className="flex gap-4">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  <div>
                    <h3 className="text-base">{f.label}</h3>
                    <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>{f.body}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="flex justify-center">
            <ImpactDashboard />
          </RevealOnScroll>
        </div>
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
              <div
                className="relative h-full border p-6 transition-transform duration-200 hover:z-10 hover:scale-105"
                style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}
              >
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
