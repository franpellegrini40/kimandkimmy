'use client'

import { useRef, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)

  return (
    <div className="grain absolute inset-0 -z-10" style={{ background: 'var(--navy)' }}>
      {/* Mobile: a static image, not dependent on autoplay (which iOS can silently
          block under Low Power Mode regardless of muted/playsInline). */}
      <img
        src="/images/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        className="block h-full w-full object-cover md:hidden"
      />
      {!failed && (
        <video
          ref={videoRef}
          className="hidden h-full w-full object-cover md:block"
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
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,14,33,.82), rgba(0,14,33,.18) 55%, rgba(0,14,33,.4))',
        }}
      />
    </div>
  )
}
