'use client'

import { useEffect, useRef, useState } from 'react'

// Hero loops (VIV-0035). Each has a landscape and a portrait cut, AV1 first
// with an H.264 fallback, and a WebP poster per shape:
// - 'v5' (default): Bruno's hero v5, option C, 14 s, 8 shots (villa photos in
//   high resolution and three clips), closing on the shot it opens with, so
//   the loop has no visible seam. Wide AV1 1.8 MB / H.264 2.4 MB; phone AV1
//   0.8 MB / H.264 1.2 MB.
// - 'villa': the earlier villa loop (hero v4), 11.5 s.
// The poster is not set on <video>: HeroPoster paints it underneath as the
// page's LCP image, and the video stays transparent until it has frames.
// Only the file for the current screen shape is downloaded, once the browser
// is idle; with reduced motion or data-saver the poster shows instead.
export const HERO_LOOPS = {
  v5: {
    wide: { av1: '/videos/hero-v5-1080p-av1.mp4', h264: '/videos/hero-v5-1080p.mp4', poster: '/videos/hero-v5-poster.webp', codec: 'av01.0.08M.10' },
    tall: { av1: '/videos/hero-v5-mobile-av1.mp4', h264: '/videos/hero-v5-mobile.mp4', poster: '/videos/hero-v5-poster-mobile.webp', codec: 'av01.0.05M.10' },
  },
  // Option A (wide cut only, 1 MB AV1 / 2.2 MB H.264); phones get the v5 phone cut.
  a: {
    wide: { av1: '/videos/hero-v5a-1080p-av1.mp4', h264: '/videos/hero-v5a-1080p.mp4', poster: '/videos/hero-v5a-poster.webp', codec: 'av01.0.08M.10' },
    tall: { av1: '/videos/hero-v5-mobile-av1.mp4', h264: '/videos/hero-v5-mobile.mp4', poster: '/videos/hero-v5-poster-mobile.webp', codec: 'av01.0.05M.10' },
  },
  villa: {
    wide: { av1: '/videos/hero-villa-1080p-av1.mp4', h264: '/videos/hero-villa-1080p.mp4', poster: '/videos/hero-villa-poster.webp', codec: 'av01.0.08M.10' },
    tall: { av1: '/videos/hero-villa-mobile-av1.mp4', h264: '/videos/hero-villa-mobile.mp4', poster: '/videos/hero-villa-poster-mobile.webp', codec: 'av01.0.05M.10' },
  },
} as const
export type HeroLoop = keyof typeof HERO_LOOPS

// Same breakpoint as the poster's <picture>: portrait screens get the phone cut.
const WIDE_QUERY = '(min-aspect-ratio: 1/1)'

export function HeroPoster({ loop }: { loop: HeroLoop }) {
  const l = HERO_LOOPS[loop]
  return (
    <picture>
      <source media="(max-aspect-ratio: 1/1)" srcSet={l.tall.poster} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element -- art-directed poster, already sized WebP */}
      <img
        src={l.wide.poster}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </picture>
  )
}

export default function HeroVideo({ loop = 'v5', className = '' }: { loop?: HeroLoop; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [reduced, setReduced] = useState<boolean | null>(null)
  useEffect(() => setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches), [])
  const [play, setPlay] = useState(false)
  const [shape, setShape] = useState<'wide' | 'tall'>('wide')

  useEffect(() => {
    const mq = window.matchMedia(WIDE_QUERY)
    const pick = () => setShape(mq.matches ? 'wide' : 'tall')
    pick()
    mq.addEventListener('change', pick)
    return () => mq.removeEventListener('change', pick)
  }, [])

  // Load only once playback is allowed, and again if the loop or shape changes.
  useEffect(() => {
    if (!play) return
    ref.current?.load()
    ref.current?.play().catch(() => {})
  }, [shape, play, loop])

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (reduced !== false || conn?.saveData) return // wait until the motion preference is known
    const start = () => setPlay(true)
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    if (w.requestIdleCallback) w.requestIdleCallback(start)
    else setTimeout(start, 200)
  }, [reduced])

  const s = HERO_LOOPS[loop][shape]
  return (
    <video ref={ref} className={className} muted loop playsInline autoPlay={play} preload="none" aria-hidden="true">
      {play && <source key={`${loop}-${shape}-av1`} src={s.av1} type={`video/mp4; codecs="${s.codec}"`} />}
      {play && <source key={`${loop}-${shape}-h264`} src={s.h264} type="video/mp4" />}
    </video>
  )
}
