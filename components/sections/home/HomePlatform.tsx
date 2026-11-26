import Image from 'next/image'
import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
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

          <RevealOnScroll delay={0.2} className="mt-6 max-w-xl border" style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}>
            <div className="grid gap-0 sm:grid-cols-[0.8fr_1.2fr]">
              <a
                href={PLATFORM.impact.photo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden"
                aria-label="Join The Planet Foundation website (opens in a new tab)"
              >
                <Photo
                  src={PLATFORM.impact.photo.src}
                  alt={PLATFORM.impact.photo.alt}
                  aspect="aspect-[4/5] sm:aspect-auto sm:h-full"
                  quality={90}
                  sizes="(min-width: 640px) 240px, 100vw"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </a>
              <div className="p-6">
                <span className="eyebrow" style={{ color: 'var(--forest-deep)' }}>{PLATFORM.impact.eyebrow}</span>
                <h3 className="mt-2 text-lg">{PLATFORM.impact.heading}</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{PLATFORM.impact.body}</p>
                <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                  {PLATFORM.impact.partners.map((p) => (
                    <li key={p.name}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block opacity-80 transition-opacity hover:opacity-100"
                        aria-label={`${p.name} (opens in a new tab)`}
                      >
                        {p.logo ? (
                          <Image src={p.logo} alt={p.name} width={p.w} height={p.h} className="h-9 w-auto" />
                        ) : (
                          <span className="font-display text-sm uppercase" style={{ letterSpacing: '0.12em', color: 'var(--navy)' }}>
                            {p.name}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
      <RevealOnScroll className="max-w-3xl">
        <span className="eyebrow" style={{ color: 'var(--copper)' }}>{COMMONS.eyebrow}</span>
        <h2 className="mt-4 text-3xl md:text-5xl">{COMMONS.heading}</h2>
        <p className="mt-5 text-lg" style={{ color: 'var(--text-secondary)' }}>{COMMONS.intro}</p>
      </RevealOnScroll>

      <ul className="mt-12 grid gap-px border md:grid-cols-2" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
        {COMMONS.items.map((item, i) => (
          <li key={item.key} className="h-full">
            <RevealOnScroll delay={i * 0.06} className="h-full">
              <article className="flex h-full flex-col p-7 md:p-9" style={{ background: 'var(--surface-raised)' }}>
                <p className="text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--copper)' }}>
                  {item.status}
                </p>
                <h3 className="mt-3 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{item.body}</p>
                {item.logos.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    {item.logos.map((l) => (
                      <span
                        key={l.alt}
                        className="flex h-20 items-center justify-center px-4"
                        style={{ background: l.light ? 'var(--ivory)' : '#000' }}
                      >
                        <Image src={l.src} alt={l.alt} width={l.w} height={l.h} className="h-14 w-auto" />
                      </span>
                    ))}
                  </div>
                )}
                {item.href && (
                  <a
                    href={item.href}
                    {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="mt-auto inline-block pt-6 text-sm underline underline-offset-4 transition-colors hover:text-[var(--aqua)]"
                    style={{ color: 'var(--ivory)' }}
                  >
                    {item.linkLabel}
                  </a>
                )}
              </article>
            </RevealOnScroll>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm" style={{ color: 'var(--text-quiet)' }}>{COMMONS.note}</p>
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
            <a href={`mailto:${PRICING_CONTACT.email}`} className="underline" style={{ color: 'var(--text-primary)' }}>Email us</a>.
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
