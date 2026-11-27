import Image from 'next/image'
import { clsx } from 'clsx'

export default function Photo({
  src,
  alt,
  aspect = 'aspect-[4/5]',
  className,
  imgClassName,
  priority = false,
  sizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
  quality = 85,
}: {
  src: string
  alt: string
  aspect?: string
  className?: string
  imgClassName?: string
  priority?: boolean
  sizes?: string
  quality?: number
}) {
  return (
    <div className={clsx('relative overflow-hidden', aspect, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={clsx('object-cover', imgClassName)}
      />
    </div>
  )
}
