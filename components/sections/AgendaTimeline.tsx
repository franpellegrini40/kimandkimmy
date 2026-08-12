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
    <div className="divide-y divide-stone-900/10 border-y border-stone-900/10">
      {AGENDA.map((d) => {
        const open = openDay === d.day
        return (
          <div key={d.day}>
            <button
              onClick={() => toggle(d.day)}
              aria-expanded={open}
              className="flex w-full items-center justify-between py-6 text-left"
            >
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="eyebrow">{d.day === 0 ? 'Arrival' : `Day ${d.day}`}</span>
                <span className="text-lg text-stone-900">{d.title}</span>
                <span className="text-xs text-stone-400">{d.date}</span>
              </span>
              <span className={clsx('transition-transform', open && 'rotate-45')}>+</span>
            </button>
            {open && (
              <div className="pb-6">
                <p className="text-sm text-stone-700">{d.summary}</p>
                <ul className="mt-3 space-y-1 text-sm text-stone-500">
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
