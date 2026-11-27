import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { LIFESTYLE_INTRO, GATHERING_FORMATS, UPCOMING_GATHERINGS } from '@/content/lifestyle'

export const metadata: Metadata = {
  title: 'VIVRA Lifestyle',
  description: 'A marketplace for how you live — gatherings and experiences across the VIVRA World Alliance.',
}

export default async function LifestylePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <Section tone="light" className="pt-40">
        <RevealOnScroll>
          <span className="eyebrow">{LIFESTYLE_INTRO.eyebrow}</span>
          <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">{LIFESTYLE_INTRO.heading}</h1>
          <p className="mt-6 max-w-xl" style={{ color: 'var(--text-secondary)' }}>{LIFESTYLE_INTRO.body}</p>
        </RevealOnScroll>
      </Section>

      <Section tone="sand">
        <RevealOnScroll>
          <span className="eyebrow">Ways to gather</span>
          <h2 className="mt-4 max-w-xl text-2xl md:text-3xl">Four formats, one standard.</h2>
        </RevealOnScroll>
        <div className="mt-10 grid gap-px overflow-hidden border sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
          {GATHERING_FORMATS.map((format, i) => (
            <RevealOnScroll key={format.key} delay={i * 0.05}>
              <div className="h-full p-6" style={{ background: 'var(--surface-raised)' }}>
                <div className="text-xs uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--accent-deep)' }}>
                  {format.duration}
                </div>
                <h3 className="mt-2 text-lg">{format.label}</h3>
                <p className="mt-2 text-xs" style={{ color: 'var(--text-quiet)' }}>{format.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <RevealOnScroll>
          <span className="eyebrow">Upcoming gatherings</span>
          <h2 className="mt-4 max-w-xl text-2xl md:text-3xl">On the calendar.</h2>
        </RevealOnScroll>

        <div className="mt-10 grid gap-px overflow-hidden border sm:grid-cols-2" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
          {UPCOMING_GATHERINGS.map((gathering, i) => (
            <RevealOnScroll key={gathering.key} delay={i * 0.05}>
              <div className="flex h-full flex-col p-6" style={{ background: 'var(--surface-raised)' }}>
                <span
                  className="w-fit rounded-full px-3 py-1 text-[10px] uppercase"
                  style={{
                    letterSpacing: 'var(--tracking-caps)',
                    background: gathering.status === 'open' ? 'var(--aqua-100)' : 'var(--surface-inset)',
                    color: gathering.status === 'open' ? 'var(--accent-deep)' : 'var(--text-quiet)',
                  }}
                >
                  {gathering.status === 'open' ? 'Open for applications' : 'Coming soon'}
                </span>
                <h3 className="mt-4 text-xl">{gathering.name}</h3>
                <div className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>{gathering.location}</div>
                <div className="mt-3 text-xs uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>
                  {gathering.dates} · {gathering.format}
                </div>
                {gathering.href && (
                  <Button href={gathering.href} variant="secondary" size="sm" className="mt-6 w-fit">
                    View the Gathering
                  </Button>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.1} className="mt-10">
          <Button href="/apply/join">Request Early Access</Button>
        </RevealOnScroll>
      </Section>
    </PageShell>
  )
}
