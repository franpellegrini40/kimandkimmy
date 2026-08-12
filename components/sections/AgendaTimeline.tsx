'use client'

import { useState } from 'react'
import { AGENDA } from '@/content/agenda'
import { trackEvent } from '@/lib/analytics'
import { clsx } from 'clsx'

export default function AgendaTimeline() {
  const [openDay, setOpenDay] = useState<number | null>(1)

  function toggle(day: number) {
    const next = openDay === day ? null : day
    setOpenDay(next)
    if (next) trackEvent('agenda_day_opened', { day: next })
  }

  return (
    <div className="border-y" style={{ borderColor: 'var(--rule)' }}>
      {AGENDA.map((d, i) => {
        const open = openDay === d.day
        return (
          <div key={d.day} className={i > 0 ? 'border-t' : ''} style={{ borderColor: 'var(--rule)' }}>
            <button
              onClick={() => toggle(d.day)}
              aria-expanded={open}
              className="flex w-full items-center justify-between py-6 text-left"
            >
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="eyebrow">{d.day === 0 ? 'Arrival' : `Day ${d.day}`}</span>
                <span className="text-lg">{d.title}</span>
                <span className="text-xs" style={{ color: 'var(--text-quiet)' }}>{d.date}</span>
              </span>
              <span className={clsx('transition-transform', open && 'rotate-45')}>+</span>
            </button>
            {open && (
              <div className="pb-6">
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{d.summary}</p>
                <ul className="mt-3 space-y-1 text-sm" style={{ color: 'var(--text-quiet)' }}>
                  {d.moments.map((m, i) => (
                    <li key={i}>· {m}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
