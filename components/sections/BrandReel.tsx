'use client'

import { useEffect, useRef, useState } from 'react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function BrandReel() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return
    const el = videoRef.current
    if (!el) return
    el.load()
    el.play().catch(() => {})
  }, [shouldLoad])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: 'var(--navy)' }}
      aria-label="A glimpse of the VIVRA World Alliance"
    >
      <RevealOnScroll className="px-6 pb-8 pt-14 text-center md:pt-20">
        <p className="font-display text-4xl leading-tight md:text-6xl" style={{ color: 'var(--ivory)' }}>
          Life, elevated <em style={{ fontStyle: 'italic' }}>everywhere.</em>
        </p>
        <p className="mt-6 text-xl md:text-2xl" style={{ color: 'var(--ivory)' }}>
          Exceptional homes, <em style={{ color: 'var(--copper)', fontStyle: 'italic' }}>reserved for meaningful gathering.</em>
        </p>
      </RevealOnScroll>

      <video
        ref={videoRef}
        className="block h-[56vh] w-full object-cover md:h-[82vh]"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/videos/vivra-brand-reel-poster.jpg"
      >
        {shouldLoad && (
          <>
            <source src="/videos/vivra-brand-reel.webm" type="video/webm" />
            <source src="/videos/vivra-brand-reel.mp4" type="video/mp4" />
          </>
        )}
      </video>
    </section>
  )
}
