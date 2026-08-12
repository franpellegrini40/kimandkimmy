import { clsx } from 'clsx'

/**
 * Stand-in for photography/video not yet supplied. Renders an intentional-looking
 * gradient plus a centered mark echoing the VIVRA emblem (never generic stock imagery),
 * with a visible spec so it's obvious what production asset needs to replace it.
 */
export default function AssetPlaceholder({
  note,
  aspect = 'aspect-[4/5]',
  className,
  tone = 'sand',
}: {
  note: string
  aspect?: string
  className?: string
  tone?: 'sand' | 'olive' | 'clay' | 'vivra'
}) {
  const gradients: Record<string, string> = {
    sand: 'from-sand-200 via-sand-100 to-sand-50',
    olive: 'from-olive-500/30 via-sand-100 to-sand-50',
    clay: 'from-clay-400/25 via-sand-100 to-sand-50',
    vivra: 'from-vivra-100 via-sand-100 to-sand-50',
  }

  const markColor: Record<string, string> = {
    sand: 'text-stone-900/10',
    olive: 'text-olive-600/15',
    clay: 'text-clay-500/15',
    vivra: 'text-vivra-600/15',
  }

  return (
    <div
      className={clsx(
        'relative flex items-end overflow-hidden rounded-2xl bg-gradient-to-br',
        gradients[tone],
        aspect,
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className={clsx('absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2', markColor[tone])}
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

      <p className="relative m-3 max-w-[90%] rounded-md bg-stone-900/80 px-3 py-1.5 text-[11px] leading-snug text-sand-50">
        ASSET NEEDED — {note}
      </p>
    </div>
  )
}
