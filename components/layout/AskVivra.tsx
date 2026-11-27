'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

// The floating "Ask VIVRA" button. It is tiny; the panel (questions, answers
// and the contact form) is a separate chunk that is downloaded only when a
// visitor first opens it, or hovers the button, so it never slows the page.
const loadPanel = () => import('./AskVivraPanel')
const AskVivraPanel = dynamic(loadPanel, { ssr: false })

export default function AskVivra() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const toggle = () => {
    setMounted(true)
    setOpen((o) => !o)
  }

  return (
    <>
      {mounted && <AskVivraPanel open={open} onClose={() => setOpen(false)} />}
      <button
        type="button"
        onClick={toggle}
        onPointerEnter={() => void loadPanel()}
        aria-expanded={open}
        aria-controls="ask-vivra"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 border px-4 py-3 text-[11px] font-medium uppercase shadow-[0_10px_30px_rgba(0,14,33,0.18)] transition-colors hover:bg-[var(--forest-deep)] md:bottom-6 md:right-6"
        style={{ background: 'var(--navy)', color: 'var(--ivory)', borderColor: 'var(--navy)', letterSpacing: 'var(--tracking-caps)' }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 5h16v11H9l-5 4V5z" strokeLinejoin="round" />
          )}
        </svg>
        {open ? 'Close' : 'Ask VIVRA'}
      </button>
    </>
  )
}
