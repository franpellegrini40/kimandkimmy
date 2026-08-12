import { clsx } from 'clsx'

/**
 * Stand-in for photography/video not yet supplied. Renders an intentional-looking
 * gradient (never generic stock imagery) plus a visible spec so it's obvious what
 * production asset needs to replace it before launch.
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

  return (
    <div
      className={clsx(
        'relative flex items-end overflow-hidden rounded-2xl bg-gradient-to-br',
        gradients[tone],
        aspect,
        className
      )}
    >
      <p className="m-3 max-w-[90%] rounded-md bg-stone-900/80 px-3 py-1.5 text-[11px] leading-snug text-sand-50">
        ASSET NEEDED — {note}
      </p>
    </div>
  )
}
