'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Highlights of the Ibiza reel: a silent 23-second loop of the quiet shots
// (workshop first, then the estate), lightly graded warm. About 2.7 MB.
// It fills the hero on every screen. The video waits for the browser to be
// idle, and is skipped with reduced motion or data-saver; the poster shows
// instead.
export const HIGHLIGHTS = {
  src: '/videos/hero-highlights.mp4',
  poster: '/videos/hero-highlights-poster.jpg',
}

export default function HeroVideo({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (reduced || conn?.saveData) return
    const start = () => setPlay(true)
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    if (w.requestIdleCallback) w.requestIdleCallback(start)
    else setTimeout(start, 200)
  }, [reduced])

  useEffect(() => {
    if (play) ref.current?.play().catch(() => {})
  }, [play])

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      autoPlay={play}
      preload="none"
      poster={HIGHLIGHTS.poster}
      aria-hidden="true"
    >
      {play && <source src={HIGHLIGHTS.src} type="video/mp4" />}
    </video>
  )
}
