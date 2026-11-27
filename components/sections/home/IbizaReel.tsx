'use client'

import { useState } from 'react'
import Image from 'next/image'

// Francisco's 57-second Ibiza recap. It has a voiceover, so it never
// autoplays: the poster shows first and the video file (about 5 MB) is only
// requested once the visitor presses play.
export default function IbizaReel() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden border" style={{ borderColor: 'var(--rule)', background: '#000' }}>
      {playing ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/ibiza-recap.mp4"
          poster="/videos/ibiza-recap-poster.jpg"
          controls
          autoPlay
          playsInline
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play the Ibiza recap video, 57 seconds, with sound"
          className="group absolute inset-0 block h-full w-full text-left"
        >
          <Image
            src="/videos/ibiza-recap-poster.jpg"
            alt="Francisco Pellegrini speaking at Can Aylma, Ibiza"
            fill
            sizes="340px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,14,33,0.15) 0%, rgba(0,14,33,0) 40%, rgba(0,14,33,0.85) 100%)' }}
          />
          <span
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-colors group-hover:bg-[var(--copper)]"
            style={{ borderColor: 'var(--ivory)', background: 'rgba(0,14,33,0.45)', color: 'var(--ivory)' }}
            aria-hidden="true"
          >
            <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor"><path d="M1 0l17 10L1 20z" /></svg>
          </span>
          <span className="absolute inset-x-0 bottom-0 p-5">
            <span className="block text-[10px] uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--copper-light)' }}>
              Watch · 0:57
            </span>
            <span className="mt-1.5 block font-display text-xl" style={{ color: 'var(--ivory)' }}>The Ibiza recap</span>
          </span>
        </button>
      )}
    </div>
  )
}
