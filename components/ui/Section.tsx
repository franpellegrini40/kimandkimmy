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
      className={clsx(
        'py-20 md:py-28',
        tone === 'dark' && 'grain bg-stone-900 text-sand-50',
        tone === 'sand' && 'bg-sand-100',
        tone === 'light' && 'bg-sand-50',
        className
      )}
    >
      <Container className={clsx(narrow && 'max-w-3xl')}>{children}</Container>
    </section>
  )
}
