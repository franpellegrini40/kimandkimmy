import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import ImpactDashboard from '@/components/sections/ImpactDashboard'
import JoinForm from '@/components/forms/JoinForm'
import { IMPACT_PASSPORT_FEATURES } from '@/content/impact'
import { PRICING_CONTACT } from '@/content/retreat'
import { APPLY, COMMONS, PLATFORM } from '@/content/home'

export function HomePassport() {
  return (
    <Section tone="sand" id="passport">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <RevealOnScroll>
            <span className="eyebrow">{PLATFORM.eyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-5xl">{PLATFORM.heading}</h2>
            <p className="mt-5 max-w-lg" style={{ color: 'var(--text-secondary)' }}>{PLATFORM.body}</p>
          </RevealOnScroll>

          <ul className="mt-9 max-w-lg">
            {IMPACT_PASSPORT_FEATURES.map((f, i) => (
              <li key={f.key}>
                <RevealOnScroll delay={i * 0.05}>
                  <div className="flex gap-4 border-t py-5" style={{ borderColor: 'var(--rule)' }}>
                    <span className="text-xs tabular-nums" style={{ color: 'var(--accent-deep)', letterSpacing: '0.1em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg">{f.label}</h3>
                      <p className="mt-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>{f.body}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ul>

          <RevealOnScroll delay={0.2} className="mt-6 max-w-lg border p-6" style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}>
            <span className="eyebrow" style={{ color: 'var(--forest-deep)' }}>{PLATFORM.impact.eyebrow}</span>
            <h3 className="mt-2 text-lg">{PLATFORM.impact.heading}</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{PLATFORM.impact.body}</p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.1} className="flex flex-col items-center">
          <ImpactDashboard />
          <p className="mt-4 max-w-md text-center text-xs" style={{ color: 'var(--text-quiet)' }}>{PLATFORM.demoNote}</p>
        </RevealOnScroll>
      </div>
    </Section>
  )
}

export function HomeCommons() {
  return (
    <Section tone="dark" id="commons">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <RevealOnScroll className="lg:col-span-2">
          <span className="eyebrow" style={{ color: 'var(--copper)' }}>{COMMONS.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-4xl">{COMMONS.heading}</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="lg:col-span-3">
          <div className="space-y-5 text-lg" style={{ color: 'var(--text-secondary)' }}>
            {COMMONS.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 border-t pt-5 text-sm" style={{ borderColor: 'var(--rule)', color: 'var(--text-quiet)' }}>
            {COMMONS.note}
          </p>
        </RevealOnScroll>
      </div>
    </Section>
  )
}

export function HomeApply() {
  return (
    <Section tone="light" id="apply">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <RevealOnScroll className="lg:col-span-2">
          <span className="eyebrow">{APPLY.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-5xl">{APPLY.heading}</h2>
          <p className="mt-5" style={{ color: 'var(--text-secondary)' }}>{APPLY.body}</p>
          <p className="mt-4 text-sm" style={{ color: 'var(--text-quiet)' }}>{APPLY.note}</p>
          <p className="mt-8 text-sm" style={{ color: 'var(--text-quiet)' }}>
            Prefer to reach us directly?{' '}
            <a href={`mailto:${PRICING_CONTACT.email}`} className="underline" style={{ color: 'var(--text-primary)' }}>Email</a>{' '}
            or{' '}
            <a href={PRICING_CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--text-primary)' }}>
              WhatsApp
            </a>
            .
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="lg:col-span-3">
          <div className="border p-6 md:p-10" style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}>
            <JoinForm />
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  )
}
