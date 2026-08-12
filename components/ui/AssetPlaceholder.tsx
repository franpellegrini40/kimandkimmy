import { clsx } from 'clsx'

/**
 * Stand-in for photography not yet supplied. Renders a mark echoing the VIVRA emblem,
 * themed automatically via the surrounding section's CSS variables, with a visible spec
 * so it's obvious what production asset needs to replace it.
 */
export default function AssetPlaceholder({
  note,
  aspect = 'aspect-[4/5]',
  className,
}: {
  note: string
  aspect?: string
  className?: string
}) {
  return (
    <div
      className={clsx('relative flex items-end overflow-hidden', aspect, className)}
      style={{ background: 'var(--surface-inset)' }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{ color: 'var(--accent-deep)' }}
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4
          const x2 = 50 + Math.cos(angle) * 30
          const y2 = 50 + Math.sin(angle) * 30
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )
        })}
      </svg>

      <p
        className="relative m-3 max-w-[90%] px-3 py-1.5 text-[11px] leading-snug"
        style={{ background: 'var(--surface-contrast)', color: 'var(--text-on-contrast)' }}
      >
        ASSET NEEDED — {note}
      </p>
    </div>
  )
}
