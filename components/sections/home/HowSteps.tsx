'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'

// The four "How it works" steps, told in order when the grid scrolls into view:
// each card rises in about a second after the previous one, its copper top rule
// draws left to right and the number lifts in, so the eye reads 01 → 04.
// Only transform and opacity animate (no layout work), the text is in the HTML
// from the start for SEO, and with reduced motion everything shows at once.
const EASE = [0.22, 1, 0.36, 1] as const
const STEP_GAP = 0.9

type Step = { step: string; label: string; detail: string }

const list: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: STEP_GAP, delayChildren: 0.15 } },
}
const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}
const rule: Variants = {
  hidden: { scaleX: 0 },
  shown: { scaleX: 1, transition: { duration: 0.9, delay: 0.1, ease: EASE } },
}
const num: Variants = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25, ease: EASE } },
}

export default function HowSteps({ steps }: { steps: readonly Step[] }) {
  const reduced = useReducedMotion()

  return (
    <motion.ol
      className="mt-12 grid gap-px border sm:grid-cols-2 lg:grid-cols-4"
      style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}
      variants={list}
      initial={reduced ? false : 'hidden'}
      whileInView="shown"
      viewport={{ once: true, margin: '-80px' }}
    >
      {steps.map((s) => (
        <motion.li key={s.step} variants={card} className="relative h-full hover:z-10">
          {/* Zooms slightly on hover, lifting above its neighbours. */}
          <div
            className="relative h-full p-6 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,14,33,0.12)] md:p-7"
            style={{ background: 'var(--surface-raised)' }}
          >
            <motion.span
              aria-hidden="true"
              variants={rule}
              className="absolute inset-x-0 top-0 h-0.5 origin-left"
              style={{ background: 'var(--copper)' }}
            />
            <motion.span variants={num} className="block font-display text-3xl" style={{ color: 'var(--aqua-700)' }}>
              {s.step.padStart(2, '0')}
            </motion.span>
            <h3 className="mt-4 text-lg">{s.label}</h3>
            <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{s.detail}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}
