import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'
import VenueGrid from '@/components/sections/VenueGrid'
import { LONGEVITY_PANEL, MEMBERSHIP_BENEFITS, MEMBERSHIP_TIER_NAMES } from '@/content/tiers'
import { AUDIENCE_TIERS } from '@/content/narrative'
import { ALLIANCE_VENUES } from '@/content/alliance'

// The home page shows the first seven benefits per tier (as the prototype did);
// the full table lives on /membership. Pricing is intentionally not shown.
const HOME_BENEFITS = MEMBERSHIP_BENEFITS.slice(0, 7)

const TIER_HEAD: Record<string, { bg: string; fg: string; sub: string }> = {
  explorer: { bg: '#e3f2e7', fg: 'var(--navy)', sub: 'var(--forest-deep)' },
  member: { bg: 'var(--aqua-100)', fg: 'var(--navy)', sub: 'var(--aqua-700)' },
  legacy: { bg: 'var(--navy)', fg: 'var(--ivory)', sub: 'var(--copper)' },
}

export function HomeMembership() {
  return (
    <Section tone="light" id="members">
      <RevealOnScroll className="max-w-2xl">
        <span className="eyebrow">Membership</span>
        <h2 className="mt-4 text-3xl md:text-5xl">
          What members <em className="italic" style={{ color: 'var(--forest)' }}>receive</em>.
        </h2>
        <p className="mt-5" style={{ color: 'var(--text-secondary)' }}>
          Upgrading to the alliance is the primary way in: one membership, three tiers, benefits that travel across the whole network.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {MEMBERSHIP_TIER_NAMES.map((tier, t) => {
          const head = TIER_HEAD[tier.slug]
          return (
            <RevealOnScroll key={tier.slug} delay={t * 0.06} className="h-full">
              <article className="flex h-full flex-col border" style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}>
                <header className="p-6" style={{ background: head.bg }}>
                  <h3 className="text-2xl" style={{ color: head.fg }}>{tier.name}</h3>
                  <p className="mt-1 text-xs" style={{ color: head.sub }}>{tier.tagline}</p>
                </header>
                <dl className="flex-1">
                  {HOME_BENEFITS.map((b) => (
                    <div key={b.label} className="border-t px-6 py-4" style={{ borderColor: 'var(--rule-quiet)' }}>
                      <dt className="text-sm font-medium">{b.label}</dt>
                      <dd className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>{b.values[t]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </RevealOnScroll>
          )
        })}
      </div>

      <RevealOnScroll delay={0.1} className="mt-8 flex flex-wrap gap-4">
        <Button href="/membership">See every benefit</Button>
        <Button href="/#apply" variant="secondary">Request early access</Button>
      </RevealOnScroll>

      {/* Longevity panel */}
      <div className="mt-20 border-t pt-14" style={{ borderColor: 'var(--rule)' }}>
        <RevealOnScroll className="max-w-2xl">
          <span className="eyebrow">{LONGEVITY_PANEL.heading}</span>
          <h3 className="mt-4 text-2xl md:text-3xl">{LONGEVITY_PANEL.subheading}</h3>
          <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
            One longevity pathway per tier, from first screening to a fully curated protocol.
          </p>
        </RevealOnScroll>
        <div className="mt-8 grid gap-px border md:grid-cols-3" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
          {LONGEVITY_PANEL.tiers.map((tier, i) => (
            <RevealOnScroll key={tier.name} delay={i * 0.05} className="h-full">
              <div className="h-full p-6 md:p-7" style={{ background: 'var(--surface-raised)' }}>
                <p className="text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--accent-deep)' }}>
                  {tier.name} · {tier.label}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {tier.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function HomeThreeWaysIn() {
  return (
    <Section tone="sand" id="for-whom">
      <RevealOnScroll>
        <span className="eyebrow">Who VIVRA is built for</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">One alliance, three ways in.</h2>
      </RevealOnScroll>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {AUDIENCE_TIERS.map((tier, i) => (
          <RevealOnScroll key={tier.key} delay={i * 0.06}>
            <div className="border-t pt-6" style={{ borderColor: 'var(--text-primary)' }}>
              <h3 className="text-xl">{tier.label}</h3>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{tier.body}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}

export function HomeVenues() {
  return (
    <Section tone="light" id="venues">
      <RevealOnScroll className="max-w-2xl">
        <span className="eyebrow">The network · {ALLIANCE_VENUES.length} destinations · More venues are coming</span>
        <h2 className="mt-4 text-3xl md:text-5xl">Where members belong.</h2>
        <p className="mt-5" style={{ color: 'var(--text-secondary)' }}>
          Intimate venues with a soul. Each one chosen for what it stands for, and held to the same regenerative standard.
        </p>
      </RevealOnScroll>
      <VenueGrid />
    </Section>
  )
}
