'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// The hero loop: the villa at Can Aylma with no people in it (VIV-0035,
// Bruno's hero-v4 cut, 11.5 s, silent). Each screen shape has an AV1 file and
// an H.264 fallback; the browser takes the first it can play:
// - landscape: 1920 x 1080, AV1 about 1.4 MB, H.264 about 2.2 MB;
// - portrait (phones): 720 x 1280, AV1 about 0.7 MB, H.264 about 1.2 MB.
// Only the file for the current screen shape is downloaded, once the browser
// is idle; with reduced motion or data-saver the poster shows instead.
// Licence for the villa footage is still pending: stage only for now.
const SOURCES = {
  wide: {
    av1: '/videos/hero-villa-1080p-av1.mp4',
    h264: '/videos/hero-villa-1080p.mp4',
    poster: '/videos/hero-villa-poster.webp',
    av1Codec: 'av01.0.08M.10',
  },
  tall: {
    av1: '/videos/hero-villa-mobile-av1.mp4',
    h264: '/videos/hero-villa-mobile.mp4',
    poster: '/videos/hero-villa-poster-mobile.webp',
    av1Codec: 'av01.0.05M.10',
  },
}

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

  const s = SOURCES[shape]
  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      autoPlay={play}
      preload="none"
      poster={s.poster}
      aria-hidden="true"
    >
      {play && <source key={`${shape}-av1`} src={s.av1} type={`video/mp4; codecs="${s.av1Codec}"`} />}
      {play && <source key={`${shape}-h264`} src={s.h264} type="video/mp4" />}
    </video>
  )
}
