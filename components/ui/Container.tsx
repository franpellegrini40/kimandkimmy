import { clsx } from 'clsx'

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={clsx('container-vivra', className)}>{children}</div>
}
