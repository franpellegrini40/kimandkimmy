'use client'

import { useRef, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)

  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-800 via-olive-600 to-stone-900">
      {!failed && (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          onError={() => setFailed(true)}
          onPlay={() => trackEvent('video_play', { video: 'hero' })}
        >
          <source src="/videos/villa-hero.webm" type="video/webm" />
          <source src="/videos/villa-hero.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-stone-900/40" />
    </div>
  )
}
