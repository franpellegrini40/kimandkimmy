'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// The Ibiza reel, as a silent loop of its quiet shots (no speech, no
// subtitles). The reel is vertical, so:
// - variant "background": fills the hero. On phones it is shown sharp; on
//   wider screens it is blurred, because a vertical film stretched across a
//   wide screen loses too much quality.
// - variant "frame": the same loop shown sharp, at its own 9:16 size, next to
//   the headline on wider screens.
// With reduced motion the poster stays still.
export const REEL_LOOP = { src: '/videos/hero-mobile.mp4', poster: '/videos/hero-mobile-poster.jpg' }

export default function HeroVideo({ variant, className = '' }: { variant: 'background' | 'frame'; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced) el.pause()
    else el.play().catch(() => {})
  }, [reduced])

  return (
    <video
      ref={ref}
      className={className}
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="auto"
      poster={REEL_LOOP.poster}
      aria-hidden={variant === 'background' ? true : undefined}
      aria-label={variant === 'frame' ? 'Moments from the VIVRA founding gathering at Can Aylma, Ibiza' : undefined}
    >
      <source src={REEL_LOOP.src} type="video/mp4" />
    </video>
  )
}
