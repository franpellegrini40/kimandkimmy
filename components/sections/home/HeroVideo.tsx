'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Highlights of the Ibiza reel, silent, lightly graded warm and sharpened.
// The reel is vertical (720 x 1280), so it is never stretched:
// - landscape screens get a 1600 x 900 full-width film (about 7.9 MB): each
//   shot cropped to the band where the people are (heads stay in), the
//   source's compression blocks cleaned (deblock + light denoise) before a
//   single high-quality upscale, encoded at high quality with no added grain;
// - portrait screens (phones) get the single vertical loop (about 5 MB, 22 s).
// Only the file for the current screen shape is downloaded, once the browser
// is idle; with reduced motion or data-saver the poster shows instead.
const SOURCES = {
  wide: { src: '/videos/hero-wide.mp4', poster: '/videos/hero-wide-poster.jpg' },
  tall: { src: '/videos/hero-highlights.mp4', poster: '/videos/hero-highlights-poster.jpg' },
}
export const HIGHLIGHTS = SOURCES.tall

export default function HeroVideo({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()
  const [play, setPlay] = useState(false)
  const [shape, setShape] = useState<'wide' | 'tall'>('wide')

  useEffect(() => {
    const mq = window.matchMedia('(min-aspect-ratio: 1/1)')
    const pick = () => setShape(mq.matches ? 'wide' : 'tall')
    pick()
    mq.addEventListener('change', pick)
    return () => mq.removeEventListener('change', pick)
  }, [])

  // Load only once playback is allowed, and again only if the screen shape changes.
  useEffect(() => {
    if (!play) return
    ref.current?.load()
    ref.current?.play().catch(() => {})
  }, [shape, play])

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (reduced || conn?.saveData) return
    const start = () => setPlay(true)
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    if (w.requestIdleCallback) w.requestIdleCallback(start)
    else setTimeout(start, 200)
  }, [reduced])

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      autoPlay={play}
      preload="none"
      poster={SOURCES[shape].poster}
      aria-hidden="true"
    >
      {play && <source key={shape} src={SOURCES[shape].src} type="video/mp4" />}
    </video>
  )
}
