'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { IS, IS_NOT } from '@/content/home'

// "What VIVRA is not / What VIVRA is", told as a short sequence when the
// section scrolls into view:
// 1. each "not" line is crossed out in turn by a thin line drawn left to right,
//    and fades back;
// 2. then the dark panel answers: an aqua rule grows, and each "is" line rises in.
// Hovering a side brings it forward. With reduced motion everything shows at once.
const EASE = [0.22, 1, 0.36, 1] as const
const STRIKE_START = 0.25
const STRIKE_STEP = 0.22
const ANSWER_START = STRIKE_START + IS_NOT.length * STRIKE_STEP + 0.1

export default function IsIsNot() {
  const reduced = useReducedMotion()
  const view = { once: true, margin: '-120px' } as const

  return (
    <div className="group/cmp grid gap-px border md:grid-cols-2" style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}>
      {/* What VIVRA is not */}
      <div
        className="h-full p-8 transition-opacity duration-500 md:p-10 md:group-hover/cmp:opacity-60 md:hover:!opacity-100"
        style={{ background: 'var(--surface-page)' }}
      >
        <span className="eyebrow" style={{ color: 'var(--text-quiet)' }}>What VIVRA is not</span>
        <ul className="mt-6 space-y-3">
          {IS_NOT.map((line, i) => {
            const delay = STRIKE_START + i * STRIKE_STEP
            return (
              <li key={line} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0" style={{ background: 'var(--text-quiet)' }} />
                <span className="relative">
                  <motion.span
                    initial={reduced ? false : { color: 'rgba(0,14,33,0.75)' }}
                    whileInView={{ color: 'rgba(0,14,33,0.38)' }}
                    viewport={view}
                    transition={{ duration: 0.5, delay: delay + 0.15 }}
                  >
                    {line}
                  </motion.span>
                  {/* The strike line, drawn across once the text is in view. */}
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 right-0 top-1/2 h-px origin-left"
                    style={{ background: 'var(--copper-deep)' }}
                    initial={reduced ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={view}
                    transition={{ duration: 0.45, delay, ease: EASE }}
                  />
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* What VIVRA is */}
      <div
        data-theme="prestige"
        className="grain h-full p-8 transition-opacity duration-500 md:p-10 md:group-hover/cmp:opacity-60 md:hover:!opacity-100"
        style={{ background: 'var(--surface-page)', color: 'var(--text-primary)' }}
      >
        <span className="eyebrow" style={{ color: 'var(--copper-light)' }}>What VIVRA is</span>
        <motion.div
          aria-hidden="true"
          className="mt-4 h-px w-16 origin-left"
          style={{ background: 'var(--copper)' }}
          initial={reduced ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={view}
          transition={{ duration: 0.6, delay: ANSWER_START, ease: EASE }}
        />
        <ul className="mt-6 space-y-3">
          {IS.map((line, i) => (
            <motion.li
              key={line}
              className="flex items-start gap-3"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ duration: 0.6, delay: ANSWER_START + 0.15 + i * 0.12, ease: EASE }}
            >
              <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--copper)' }} />
              <span className={i === 0 ? 'font-display text-2xl' : undefined} style={{ color: i === 0 ? 'var(--ivory)' : 'var(--text-secondary)' }}>
                {line}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
