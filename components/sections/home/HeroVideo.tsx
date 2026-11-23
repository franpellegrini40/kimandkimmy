'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Highlights of the Ibiza reel: a silent 23-second loop of the quiet shots
// (workshop first, then the estate), lightly graded warm. About 3 MB.
//
// Only ONE video is ever downloaded:
// - phones and narrow screens: the loop fills the hero;
// - wide screens: a light blurred still fills the hero and the loop plays
//   sharp in its own 9:16 frame beside the headline.
// The video waits for the browser to be idle, and is skipped altogether with
// reduced motion or data-saver; the poster image shows instead.
export const HIGHLIGHTS = {
  src: '/videos/hero-highlights.mp4',
  poster: '/videos/hero-highlights-poster.jpg',
}

type Mode = 'background' | 'frame'

export default function HeroVideo({ mode, className = '' }: { mode: Mode; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)').matches
    // Each instance only loads where it is the visible one.
    if ((mode === 'frame') !== wide) return
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (reduced || conn?.saveData) return
    const start = () => setPlay(true)
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    if (w.requestIdleCallback) w.requestIdleCallback(start)
    else setTimeout(start, 200)
  }, [mode, reduced])

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
