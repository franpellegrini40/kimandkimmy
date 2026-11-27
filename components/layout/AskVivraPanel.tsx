'use client'

import { useEffect, useRef, useState } from 'react'
import { ASK_INTRO, ASK_ITEMS, type AskItem } from '@/content/ask'

// The "Ask VIVRA" panel: guided questions answered with approved site copy
// (content/ask.ts), and a short form that sends anything else to the team
// through /api/concierge (rate limited, honeypot, emailed like every form).
type View = { kind: 'menu' } | { kind: 'answer'; item: AskItem } | { kind: 'form' } | { kind: 'sent' }

export default function AskVivraPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [view, setView] = useState<View>({ kind: 'menu' })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const panel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    panel.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'ask',
          name: f.get('name'),
          email: f.get('email'),
          message: f.get('message'),
          honeypot: f.get('company'),
          source: typeof window !== 'undefined' ? window.location.pathname : undefined,
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setView({ kind: 'sent' })
    } catch {
      setError('We could not send your message. Please try again in a moment.')
    } finally {
      setSending(false)
    }
  }

  const input = 'mt-1 w-full border bg-white px-3 py-2.5 text-sm outline-none focus:border-[var(--accent-deep)]'
  const back = (
    <button type="button" onClick={() => setView({ kind: 'menu' })} className="text-xs underline" style={{ color: 'var(--text-quiet)' }}>
      ← All questions
    </button>
  )

  return (
    <div
      id="ask-vivra"
      ref={panel}
      tabIndex={-1}
      role="dialog"
      aria-label={ASK_INTRO.title}
      hidden={!open}
      className="fixed inset-x-3 bottom-20 z-40 flex max-h-[min(70vh,560px)] flex-col border shadow-[0_20px_60px_rgba(0,14,33,0.22)] outline-none sm:inset-x-auto sm:right-6 sm:w-[380px] md:bottom-24"
      style={{ background: 'var(--surface-page)', borderColor: 'var(--rule)', color: 'var(--text-primary)' }}
    >
      <div className="border-b px-5 py-4" style={{ borderColor: 'var(--rule)', background: 'var(--navy)', color: 'var(--ivory)' }}>
        <p className="font-display text-xl">{ASK_INTRO.title}</p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 text-sm" aria-live="polite">
        {view.kind === 'menu' && (
          <>
            <p style={{ color: 'var(--text-secondary)' }}>{ASK_INTRO.greeting}</p>
            <ul className="mt-4 space-y-2">
              {ASK_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setView({ kind: 'answer', item })}
                    className="w-full border px-3.5 py-2.5 text-left transition-colors hover:border-[var(--copper-deep)] hover:text-[var(--copper-deep)]"
                    style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}
                  >
                    {item.question}
                  </button>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setView({ kind: 'form' })} className="mt-5 text-sm underline" style={{ color: 'var(--copper-deep)' }}>
              Didn’t find your answer? Write to our team
            </button>
          </>
        )}

        {view.kind === 'answer' && (
          <>
            {back}
            <p className="mt-4 font-display text-lg">{view.item.question}</p>
            <div className="mt-3 space-y-3" style={{ color: 'var(--text-secondary)' }}>
              {view.item.answer.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {view.item.links && (
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {view.item.links.map((l) => (
                  <a key={l.href} href={l.href} onClick={onClose} className="text-sm underline" style={{ color: 'var(--copper-deep)' }}>
                    {l.label} →
                  </a>
                ))}
              </div>
            )}
            <button type="button" onClick={() => setView({ kind: 'form' })} className="mt-6 block text-xs underline" style={{ color: 'var(--text-quiet)' }}>
              Still have a question? Write to our team
            </button>
          </>
        )}

        {view.kind === 'form' && (
          <form onSubmit={submit} className="space-y-3">
            {back}
            <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>Tell us what you’d like to know. Our team will reply by email.</p>
            <label className="block">
              <span className="text-xs">Name</span>
              <input name="name" required autoComplete="name" className={input} style={{ borderColor: 'var(--rule)' }} />
            </label>
            <label className="block">
              <span className="text-xs">Email</span>
              <input name="email" type="email" required autoComplete="email" className={input} style={{ borderColor: 'var(--rule)' }} />
            </label>
            <label className="block">
              <span className="text-xs">Your question</span>
              <textarea name="message" required rows={4} maxLength={2000} className={input} style={{ borderColor: 'var(--rule)' }} />
            </label>
            {/* Honeypot: hidden from people, filled by bots. */}
            <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {error && <p className="text-xs text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={sending}
              className="w-full px-4 py-3 text-[11px] font-medium uppercase disabled:opacity-60"
              style={{ background: 'var(--navy)', color: 'var(--ivory)', letterSpacing: 'var(--tracking-caps)' }}
            >
              {sending ? 'Sending…' : 'Send'}
            </button>
          </form>
        )}

        {view.kind === 'sent' && (
          <>
            <p className="font-display text-lg">Thank you.</p>
            <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>We’ve received your question. Our team will reply by email.</p>
            <div className="mt-5">{back}</div>
          </>
        )}
      </div>
    </div>
  )
}
