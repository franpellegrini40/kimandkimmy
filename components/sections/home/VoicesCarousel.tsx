'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

// A native scroll-snap track with previous/next buttons. Every card is in the
// server-rendered HTML (good for search and for no-JS visitors); the buttons
// only scroll the track. Swipe works on phones, Shift+wheel/trackpad on desktop.
// It also moves on its own, one card every few seconds, looping back to the
// start. Autoplay pauses while the pointer or keyboard focus is on it, right
// after a touch or a click, while it is off screen or the tab is hidden, and
// never runs with reduced motion.
const AUTO_MS = 4500
export default function VoicesCarousel({ children, label, header }: { children: React.ReactNode; label: string; header?: React.ReactNode }) {
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

  const go = useCallback((dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }, [])

  // Autoplay.
  const paused = useRef(false)
  const visible = useRef(false)
  const lastTouch = useRef(0)
  useEffect(() => {
    const el = track.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    const id = window.setInterval(() => {
      if (paused.current || !visible.current || document.hidden) return
      if (Date.now() - lastTouch.current < AUTO_MS * 2) return
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) el.scrollTo({ left: 0, behavior: 'smooth' })
      else go(1)
    }, AUTO_MS)
    return () => {
      io.disconnect()
      window.clearInterval(id)
    }
  }, [go])
  const hold = (v: boolean) => () => (paused.current = v)
  const touched = () => (lastTouch.current = Date.now())

  const btn =
    'flex h-11 w-11 items-center justify-center border transition-colors hover:border-[var(--copper-deep)] hover:text-[var(--copper-deep)] disabled:pointer-events-none disabled:opacity-30'

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={(e) => e.pointerType === 'mouse' && (paused.current = true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && (paused.current = false)}
      onFocus={hold(true)}
      onBlur={hold(false)}
      onPointerDown={touched}
      onTouchStart={touched}
    >
      <div className="flex items-end justify-between gap-6">
        <div>{header}</div>
        <div className="flex shrink-0 gap-2">
        <button type="button" className={btn} style={{ borderColor: 'var(--rule)' }} onClick={() => go(-1)} disabled={atStart} aria-label="Previous voices">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" className={btn} style={{ borderColor: 'var(--rule)' }} onClick={() => go(1)} disabled={atEnd} aria-label="Next voices">
          <span aria-hidden="true">→</span>
        </button>
        </div>
      </div>
      <ul
        ref={track}
        className="-mx-6 mt-10 grid snap-x snap-mandatory scroll-px-6 auto-cols-[62%] grid-flow-col gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:auto-cols-[38%] md:-mx-10 md:scroll-px-10 md:auto-cols-[26%] md:px-10 lg:mx-0 lg:scroll-px-0 lg:auto-cols-[19%] lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  )
}
