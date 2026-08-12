import { clsx } from 'clsx'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark'

const styles: Record<Variant, string> = {
  primary: 'bg-vivra-700 text-white hover:bg-vivra-600',
  secondary: 'border border-stone-900/25 text-stone-900 hover:border-stone-900/50',
  ghost: 'text-stone-900 underline-offset-4 hover:underline',
  dark: 'bg-stone-900 text-sand-50 hover:bg-stone-800',
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
  const base = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition disabled:cursor-not-allowed disabled:opacity-50',
    styles[variant],
    className
  )

  if (href) {
    return (
      <Link href={href} className={base} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
