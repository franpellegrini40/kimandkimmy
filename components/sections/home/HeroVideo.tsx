'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Full-screen background video for the home hero.
// Wide screens get the horizontal aerial film of Can Aylma; phones get a
// silent vertical loop cut from the Ibiza reel (only shots without speech or
// subtitles). Only the matching file is downloaded. With reduced motion the
// poster stays still.
const SOURCES = {
  wide: { src: '/videos/villa-hero.mp4', webm: '/videos/villa-hero.webm', poster: '/images/hero-poster.jpg' },
  tall: { src: '/videos/hero-mobile.mp4', webm: null, poster: '/videos/hero-mobile-poster.jpg' },
} as const

export default function HeroVideo() {
  const [kind, setKind] = useState<'wide' | 'tall' | null>(null)
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const mq = window.matchMedia('(max-aspect-ratio: 4/5)')
    const pick = () => setKind(mq.matches ? 'tall' : 'wide')
    pick()
    mq.addEventListener('change', pick)
    return () => mq.removeEventListener('change', pick)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || !kind) return
    el.load()
    if (!reduced) el.play().catch(() => {})
  }, [kind, reduced])

  const current = SOURCES[kind ?? 'wide']

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="metadata"
      poster={current.poster}
      aria-hidden="true"
    >
      {kind && current.webm && <source src={current.webm} type="video/webm" />}
      {kind && <source src={current.src} type="video/mp4" />}
    </video>
  )
}
