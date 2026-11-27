'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import HeroVideo from './HeroVideo'

// Hero background, VIV-0035. Three candidates for Francisco to compare:
// - 'video' (default): the villa loop with no people (HeroVideo);
// - 'photo': the villa arches at blue hour, still, with a slow 20 s zoom;
// - 'navy': no image, navy with a fine grain, type only.
// Off production, ?hero=photo or ?hero=navy switches the background, so the
// three can be compared on the same page. Production always shows the default.
export type HeroVariant = 'video' | 'photo' | 'navy'

export default function HeroBackground({ allowSwitch }: { allowSwitch: boolean }) {
  const [variant, setVariant] = useState<HeroVariant>('video')

  useEffect(() => {
    if (!allowSwitch) return
    const v = new URLSearchParams(window.location.search).get('hero')
    if (v === 'photo' || v === 'navy') setVariant(v)
  }, [allowSwitch])

  if (variant === 'navy') return <div aria-hidden="true" className="grain absolute inset-0" style={{ background: 'var(--navy)' }} />

  if (variant === 'photo')
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/villa-facade-night.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="hero-zoom object-cover"
        />
      </div>
    )

  return <HeroVideo className="absolute inset-0 h-full w-full object-cover" />
}
