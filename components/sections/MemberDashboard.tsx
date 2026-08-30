import Link from 'next/link'

const QUICK_ACTIONS = [
  { label: 'View Bio Markers' },
  { label: 'Consult an Expert', href: '/concierge' },
  { label: 'Download Flagship Workshops', href: '/downloads/vivra-world-flagship-workshop.pdf' },
  { label: 'Impact', href: '/impact' },
  { label: 'Upgrade Membership' },
]

export default function MemberDashboard() {
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
            <div className="text-xs" style={{ color: 'var(--black-a60)' }}>Member No. 000001</div>
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

      {/* Quick actions */}
      <div className="flex flex-wrap gap-2 border-t p-6" style={{ borderColor: 'var(--rule)' }}>
        {QUICK_ACTIONS.map((action) =>
          action.href ? (
            <Link
              key={action.label}
              href={action.href}
              className="rounded-full border px-3 py-1.5 text-xs transition-colors hover:border-[var(--accent-deep)] hover:text-[var(--accent-deep)]"
              style={{ borderColor: 'var(--rule)', color: 'var(--text-secondary)' }}
            >
              {action.label}
            </Link>
          ) : (
            <span
              key={action.label}
              className="rounded-full border px-3 py-1.5 text-xs"
              style={{ borderColor: 'var(--rule)', color: 'var(--text-secondary)' }}
            >
              {action.label}
            </span>
          ),
        )}
      </div>

      {/* VIVRA AI concierge */}
      <div className="border-t p-6" style={{ borderColor: 'var(--rule)', background: 'var(--navy)' }}>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: 'var(--aqua)' }} />
          <span className="text-sm" style={{ color: 'var(--ivory)' }}>VIVRA AI &middot; 24/7 Concierge</span>
        </div>

        <div className="mt-4 space-y-2">
          <div
            className="ml-auto max-w-[85%] rounded-lg rounded-tr-none px-3 py-2 text-xs"
            style={{ background: 'var(--white-a12)', color: 'var(--ivory)' }}
          >
            What should I focus on for my longevity plan this quarter?
          </div>
          <div
            className="max-w-[85%] rounded-lg rounded-tl-none px-3 py-2 text-xs"
            style={{ background: 'var(--aqua-900)', color: 'var(--ivory)' }}
          >
            Your next biomarker panel is due in three weeks — want me to book it, or find your next retreat first?
          </div>
        </div>

        <div
          className="mt-4 flex items-center justify-between rounded-full border px-4 py-2.5 text-xs"
          style={{ borderColor: 'var(--white-a12)', color: 'var(--white-a70)' }}
        >
          Ask about your wellbeing, retreats or longevity plan
          <span style={{ color: 'var(--aqua)' }}>&rarr;</span>
        </div>
      </div>
    </div>
  )
}
