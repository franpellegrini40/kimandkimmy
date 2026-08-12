import Button from '@/components/ui/Button'
import { MEMBERSHIP_TIERS } from '@/content/tiers'

export default function TiersGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {MEMBERSHIP_TIERS.map((tier) => (
        <div key={tier.slug} className="border p-8" style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}>
          <span className="eyebrow">{tier.status}</span>
          <h3 className="mt-3 text-2xl">{tier.name}</h3>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-quiet)' }}>{tier.audience}</p>
          <ul className="mt-6 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {tier.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                {b}
              </li>
            ))}
          </ul>
          <Button href="/apply/join" variant="secondary" className="mt-8">
            Request Early Access
          </Button>
        </div>
      ))}
    </div>
  )
}
