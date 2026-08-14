import Button from '@/components/ui/Button'
import {
  MEMBERSHIP_TIER_NAMES,
  MEMBERSHIP_BENEFITS,
  MEMBERSHIP_TERMS,
  LONGEVITY_PANEL,
} from '@/content/tiers'

export default function TiersGrid() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-1/3 border-b p-4 text-left align-bottom" style={{ borderColor: 'var(--rule)' }}>
                <span className="eyebrow">Every benefit, every tier</span>
              </th>
              {MEMBERSHIP_TIER_NAMES.map((tier) => (
                <th
                  key={tier.slug}
                  className="border-b p-4 text-left align-bottom"
                  style={{
                    borderColor: 'var(--rule)',
                    background: tier.slug === 'legacy' ? 'var(--surface-inset)' : undefined,
                  }}
                >
                  <div className="text-lg" style={{ color: 'var(--text-primary)' }}>{tier.name}</div>
                  <div className="mt-1 text-xs font-normal" style={{ color: 'var(--text-quiet)' }}>{tier.tagline}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MEMBERSHIP_BENEFITS.map((benefit, i) => (
              <tr key={i}>
                <td className="border-b p-4 align-top" style={{ borderColor: 'var(--rule-quiet)', color: 'var(--text-secondary)' }}>
                  {benefit.label}
                </td>
                {benefit.values.map((value, j) => (
                  <td
                    key={j}
                    className="border-b p-4 align-top"
                    style={{
                      borderColor: 'var(--rule-quiet)',
                      color: 'var(--text-primary)',
                      background: MEMBERSHIP_TIER_NAMES[j].slug === 'legacy' ? 'var(--surface-inset)' : undefined,
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-6 space-y-1.5 text-xs" style={{ color: 'var(--text-quiet)' }}>
        {MEMBERSHIP_TERMS.map((term, i) => (
          <li key={i}>— {term}</li>
        ))}
      </ul>

      <div className="mt-16">
        <span className="eyebrow">{LONGEVITY_PANEL.heading}</span>
        <h3 className="mt-3 text-2xl">{LONGEVITY_PANEL.subheading}</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {LONGEVITY_PANEL.tiers.map((tier) => (
            <div
              key={tier.name}
              className="border p-6"
              style={{
                borderColor: 'var(--rule)',
                background: tier.name === 'Legacy' ? 'var(--surface-inset)' : 'var(--surface-raised)',
              }}
            >
              <div className="text-xs uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--accent-deep)' }}>
                {tier.name}
              </div>
              <div className="mt-1 text-lg" style={{ color: 'var(--text-primary)' }}>{tier.label}</div>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {tier.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Button href="/apply/join" variant="secondary" className="mt-12">
        Request Early Access
      </Button>
    </div>
  )
}
