const BADGES = ['7 of 10 free nights', 'Named concierge', 'Private access', '+10% earning']

const METRICS = [
  { label: 'Water Restored', value: '28,420 L' },
  { label: 'CO₂ Drawn Down', value: '14.6 t' },
  { label: 'Trees Grown', value: '312' },
]

export default function ImpactDashboard() {
  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-2xl border"
      style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}
    >
      {/* Identity */}
      <div
        className="flex items-center justify-between p-6"
        style={{ background: 'linear-gradient(135deg, var(--aqua-100), var(--ivory))' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg"
            style={{ background: 'var(--navy)', color: 'var(--ivory)' }}
          >
            F
          </div>
          <div>
            <div className="text-base" style={{ color: 'var(--navy)' }}>Francisco Pellegrini</div>
            <div className="text-xs" style={{ color: 'var(--black-a60)' }}>Member No. 00001</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--black-a60)' }}>
            Circle
          </div>
          <div className="text-lg" style={{ color: 'var(--aqua-700)' }}>Legacy</div>
        </div>
      </div>

      {/* Credits balance */}
      <div className="border-t p-6" style={{ borderColor: 'var(--rule)' }}>
        <div className="text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>
          Credits Balance
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl">12,450</span>
          <span className="text-sm" style={{ color: 'var(--text-quiet)' }}>VIVRA Credits</span>
        </div>
      </div>

      {/* Impact metrics */}
      <div className="grid grid-cols-3 border-t" style={{ borderColor: 'var(--rule)' }}>
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className="p-4 text-center"
            style={{ borderLeft: i > 0 ? '1px solid var(--rule)' : undefined }}
          >
            <div className="text-lg" style={{ color: 'var(--text-primary)' }}>{m.value}</div>
            <div className="mt-1 text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Benefit badges */}
      <div className="flex flex-wrap gap-2 border-t p-6" style={{ borderColor: 'var(--rule)' }}>
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="rounded-full border px-3 py-1.5 text-xs"
            style={{ borderColor: 'var(--rule)', color: 'var(--text-secondary)' }}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  )
}
