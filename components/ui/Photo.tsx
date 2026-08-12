import Image from 'next/image'
import { clsx } from 'clsx'

export default function Photo({
  src,
  alt,
  aspect = 'aspect-[4/5]',
  className,
  priority = false,
  sizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
}: {
  src: string
  alt: string
  aspect?: string
  className?: string
  priority?: boolean
  sizes?: string
}) {
  return (
    <div className={clsx('relative overflow-hidden rounded-2xl', aspect, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  )
}
