'use client'

import { useState } from 'react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import { ALLIANCE_VENUES } from '@/content/alliance'

const REGIONS = [
  { key: 'all', label: 'All' },
  { key: 'europe', label: 'Europe' },
  { key: 'asia', label: 'Asia' },
  { key: 'americas', label: 'Americas' },
  { key: 'middle-east', label: 'Middle East' },
] as const

export default function VenueGrid() {
  const [region, setRegion] = useState<string>('all')
  const venues = region === 'all' ? ALLIANCE_VENUES : ALLIANCE_VENUES.filter((v) => v.region === region)

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2">
        {REGIONS.map((r) => (
          <button
            key={r.key}
            type="button"
            onClick={() => setRegion(r.key)}
            className="rounded-full border px-4 py-2 text-xs uppercase transition-colors"
            style={{
              letterSpacing: 'var(--tracking-caps)',
              borderColor: region === r.key ? 'var(--text-primary)' : 'var(--rule)',
              background: region === r.key ? 'var(--text-primary)' : 'transparent',
              color: region === r.key ? 'var(--surface-page)' : 'var(--text-secondary)',
            }}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        {venues.map((venue, i) => (
          <RevealOnScroll key={venue.name} delay={i * 0.03}>
            <div className="group relative cursor-pointer">
              <Photo
                src={venue.image}
                alt={`${venue.name}, ${venue.location}`}
                aspect="aspect-[4/5]"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(0,14,33,0) 40%, rgba(0,14,33,0.85) 100%)' }}
              />
              <span
                className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] uppercase"
                style={{
                  letterSpacing: 'var(--tracking-caps)',
                  background: 'var(--ivory)',
                  color: 'var(--text-primary)',
                }}
              >
                {venue.tag}
              </span>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                <div
                  className="text-[10px] uppercase"
                  style={{ letterSpacing: 'var(--tracking-caps)', color: venue.status === 'open' ? 'var(--aqua-300)' : 'var(--white-a70)' }}
                >
                  {venue.location} · {venue.status === 'open' ? 'Open now' : 'Opening soon'}
                </div>
                <div className="mt-1 text-lg" style={{ color: 'var(--ivory)' }}>
                  {venue.name}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
