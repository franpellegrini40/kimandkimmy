'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import AssetPlaceholder from '@/components/ui/AssetPlaceholder'
import Button from '@/components/ui/Button'
import { PEOPLE, type Person } from '@/content/people'

const INTERVAL_MS = 6000

export default function PeopleCarousel({ people = PEOPLE }: { people?: Person[] }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const reduced = useReducedMotion()
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!playing || reduced) return
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % people.length)
    }, INTERVAL_MS)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [index, playing, reduced, people.length])

  function goTo(i: number) {
    setIndex(i)
    setPlaying(false)
  }

  function step(delta: number) {
    goTo((index + delta + people.length) % people.length)
  }

  const active = people[index]

  return (
    <div>
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center md:gap-16">
        {/* Photo — crossfades between the active person's portrait */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {active.image ? (
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={85}
                  className="object-cover"
                  priority={index === 0}
                />
              ) : (
                <AssetPlaceholder note={`Portrait — ${active.name}, 4:5`} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Prev/next controls, overlaid on the photo */}
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous person"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-lg transition-colors"
            style={{ background: 'var(--black-a40)', color: 'var(--ivory)' }}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next person"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-lg transition-colors"
            style={{ background: 'var(--black-a40)', color: 'var(--ivory)' }}
          >
            ›
          </button>
        </div>

        {/* Text — every person's copy stays in the DOM (SEO/crawlability); only
            the active one is visible, the rest sit absolutely underneath it. */}
        <div className="relative min-h-[320px] sm:min-h-[280px] md:min-h-[360px]">
          {people.map((p, i) => (
            <div
              key={p.slug}
              aria-hidden={i !== index}
              className="transition-opacity duration-500"
              style={{
                opacity: i === index ? 1 : 0,
                position: i === index ? 'relative' : 'absolute',
                inset: i === index ? undefined : 0,
                pointerEvents: i === index ? 'auto' : 'none',
              }}
            >
              <span className="eyebrow">{p.category}</span>
              <h3 className="mt-3 text-2xl md:text-3xl">{p.name}</h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-quiet)' }}>{p.role}</p>
              <p className="mt-4 max-w-md text-sm" style={{ color: 'var(--text-secondary)' }}>{p.bio}</p>
              {p.quote && (
                <p className="mt-4 max-w-md text-sm italic" style={{ color: 'var(--accent-deep)' }}>
                  &ldquo;{p.quote}&rdquo;
                </p>
              )}
              {p.slug === 'sharon-cittone' && (
                <Button href="/downloads/vivra-world-flagship-workshop.pdf" variant="ghost" className="mt-6">
                  Download the Flagship Workshop (PDF)
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress dots — click any to jump there and pause autoplay */}
      <div className="mt-10 flex items-center gap-2 sm:gap-3">
        {people.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${p.name}`}
            aria-current={i === index}
            className="relative h-1 flex-1 overflow-hidden"
            style={{ background: 'var(--rule)' }}
          >
            {i === index && (
              <span
                key={`${index}-${playing}`}
                className="absolute inset-y-0 left-0 block"
                style={{
                  background: 'var(--accent-deep)',
                  width: playing && !reduced ? undefined : '100%',
                  animation: playing && !reduced ? `people-carousel-progress ${INTERVAL_MS}ms linear forwards` : undefined,
                }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes people-carousel-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
