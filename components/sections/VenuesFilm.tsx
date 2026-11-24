'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// The venues film (25 s, 1280 x 720, silent, about 5 MB). It lives only on
// /venues, so the home page never downloads it. Even here it loads only when
// it is about to scroll into view, plays muted in a loop, and stays a still
// poster with reduced motion or data-saver. Shown at 16:9 on every screen,
// so nothing is cropped on phones.
export const VENUES_FILM = {
  src: '/videos/venues-film.mp4',
  poster: '/videos/venues-film-poster.jpg',
}

export default function VenuesFilm() {
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (reduced || conn?.saveData) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoad(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])

  useEffect(() => {
    if (!load) return
    ref.current?.load()
    ref.current?.play().catch(() => {})
  }, [load])

  return (
    <section aria-label="A film of the VIVRA venues" style={{ background: 'var(--navy)' }}>
      <div className="container-vivra py-10 md:py-14">
        <div className="relative aspect-video w-full overflow-hidden">
          <video
            ref={ref}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            loop
            playsInline
            autoPlay={load}
            preload="none"
            poster={VENUES_FILM.poster}
            aria-label="Moments from venues across the VIVRA network"
          >
            {load && <source src={VENUES_FILM.src} type="video/mp4" />}
          </video>
        </div>
        <p className="mt-6 text-center font-display text-2xl md:text-4xl" style={{ color: 'var(--ivory)' }}>
          Life, elevated <em className="italic">everywhere.</em>
        </p>
      </div>
    </section>
  )
}
