import { clsx } from 'clsx'
import Container from './Container'

export default function Section({
  children,
  className,
  id,
  tone = 'light',
  narrow = false,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  tone?: 'light' | 'dark' | 'sand'
  narrow?: boolean
}) {
  return (
    <section
      id={id}
      data-theme={tone === 'dark' ? 'prestige' : undefined}
      className={clsx('py-20 md:py-28', tone === 'dark' && 'grain', className)}
      style={{
        background: tone === 'sand' ? 'var(--surface-inset)' : 'var(--surface-page)',
        color: 'var(--text-primary)',
      }}
    >
      <Container className={clsx(narrow && 'max-w-3xl')}>{children}</Container>
    </section>
  )
}
