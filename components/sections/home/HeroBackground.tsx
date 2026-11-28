'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import HeroVideo, { HeroPoster } from './HeroVideo'

// Hero background, VIV-0035. Candidates for Francisco to compare:
// - 'v5' (default): hero v5, option C (HeroVideo over its poster);
// - 'a': hero v5, option A (phones get the v5 phone cut);
// - 'villa': the earlier villa loop (hero v4);
// - 'photo': the villa arches at blue hour, still, with a slow 20 s zoom;
// - 'navy': no image, navy with a fine grain, type only.
// Off production, ?hero=a|villa|photo|navy switches the background so they can
// be compared on the same page. Production always shows the default.
export type HeroVariant = 'v5' | 'a' | 'villa' | 'photo' | 'navy'

export default function HeroBackground({ allowSwitch }: { allowSwitch: boolean }) {
  const [variant, setVariant] = useState<HeroVariant>('v5')

  useEffect(() => {
    if (!allowSwitch) return
    const v = new URLSearchParams(window.location.search).get('hero')
    if (v === 'a' || v === 'villa' || v === 'photo' || v === 'navy') setVariant(v)
  }, [allowSwitch])

  if (variant === 'navy') return <div aria-hidden="true" className="grain absolute inset-0" style={{ background: 'var(--navy)' }} />

  if (variant === 'photo')
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image src="/images/villa-facade-night.jpg" alt="" fill priority quality={85} sizes="100vw" className="hero-zoom object-cover" />
      </div>
    )

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <HeroPoster loop={variant} />
      <HeroVideo loop={variant} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  )
}
