import { clsx } from 'clsx'
import Link from 'next/link'

// Matches the brand system's Button spec exactly: square corners, uppercase
// Neue Haas labels tracked out, colors driven by the surrounding theme's CSS vars
// (so the same variant is correct whether it sits on an ivory or prestige section).
type Variant = 'primary' | 'accent' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-medium uppercase tracking-caps transition disabled:cursor-not-allowed disabled:opacity-40'

const styles: Record<Variant, string> = {
  primary:
    'bg-[var(--surface-contrast)] text-[var(--text-on-contrast)] border border-[var(--surface-contrast)] hover:opacity-80',
  accent: 'bg-[var(--accent)] text-navy border border-[var(--accent)] hover:opacity-80',
  secondary:
    'bg-transparent text-[var(--text-primary)] border border-[var(--rule)] hover:border-[var(--text-primary)]',
  ghost:
    'bg-transparent text-[var(--text-primary)] border-0 border-b border-[var(--rule)] px-0 pb-1.5 hover:border-[var(--text-primary)]',
}

type ButtonProps = {
  children: React.ReactNode
  variant?: Variant
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  href,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = clsx(base, styles[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
