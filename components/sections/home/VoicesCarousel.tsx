'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

// A native scroll-snap track with previous/next buttons. Every card is in the
// server-rendered HTML (good for search and for no-JS visitors); the buttons
// only scroll the track. Swipe works on phones, Shift+wheel/trackpad on desktop.
export default function VoicesCarousel({ children, label }: { children: React.ReactNode; label: string }) {
  const track = useRef<HTMLUListElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    update()
    const el = track.current
    el?.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el?.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const go = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const btn =
    'flex h-11 w-11 items-center justify-center border transition-colors hover:border-[var(--copper-deep)] hover:text-[var(--copper-deep)] disabled:pointer-events-none disabled:opacity-30'

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="flex justify-end gap-2">
        <button type="button" className={btn} style={{ borderColor: 'var(--rule)' }} onClick={() => go(-1)} disabled={atStart} aria-label="Previous voices">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" className={btn} style={{ borderColor: 'var(--rule)' }} onClick={() => go(1)} disabled={atEnd} aria-label="Next voices">
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <ul
        ref={track}
        className="-mx-6 mt-6 grid snap-x snap-mandatory scroll-px-6 auto-cols-[68%] grid-flow-col gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:auto-cols-[40%] md:-mx-10 md:scroll-px-10 md:auto-cols-[29%] md:px-10 lg:mx-0 lg:scroll-px-0 lg:auto-cols-[calc((100%-4rem)/4.4)] lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  )
}
