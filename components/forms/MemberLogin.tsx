'use client'

import { FormEvent, useState } from 'react'

type State =
  | { kind: 'idle' }
  | { kind: 'checking' }
  | { kind: 'member'; url: string }
  | { kind: 'not-member' }
  | { kind: 'error'; message: string }

// Founding members enter the email they used for the Ibiza gathering. If it
// is on the participants' list they continue to the member platform, where
// they register (first time) or sign in with that same email.
export default function MemberLogin() {
  const [state, setState] = useState<State>({ kind: 'idle' })

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = String(new FormData(e.currentTarget).get('email') || '')
    setState({ kind: 'checking' })
    try {
      const res = await fetch('/api/member-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) return setState({ kind: 'error', message: data.error || 'Something went wrong. Try again.' })
      if (!data.member) return setState({ kind: 'not-member' })
      setState({ kind: 'member', url: data.url })
      window.location.href = data.url
    } catch {
      setState({ kind: 'error', message: 'Something went wrong. Try again.' })
    }
  }

  return (
    <div className="mt-7 w-full max-w-xl">
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">Your email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="The email you used for Ibiza"
            className="w-full rounded-full border px-5 py-3 text-sm outline-none backdrop-blur-sm placeholder:text-white/60 focus:border-white"
            style={{ borderColor: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.12)', color: '#fff' }}
          />
        </label>
        <button
          type="submit"
          disabled={state.kind === 'checking' || state.kind === 'member'}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:brightness-110 disabled:opacity-60"
          style={{ background: 'var(--forest-deep)' }}
        >
          {state.kind === 'checking' ? 'Checking…' : state.kind === 'member' ? 'Opening…' : 'Enter your gathering'}
          <span aria-hidden="true">→</span>
        </button>
      </form>

      <div aria-live="polite" className="mt-4 text-sm [&_p]:text-white/85 [&_a]:text-white">
        {state.kind === 'member' && (
          <p>
            Welcome back. Taking you to the member platform. Register or sign in there with this same email.{' '}
            <a href={state.url} className="underline">Open it</a> if nothing happens.
          </p>
        )}
        {state.kind === 'not-member' && (
          <p>
            We could not find this email among the members of our first gathering. If you were in Ibiza with another email, try that one, or write to Francisco. If you are new to VIVRA, <a href="#new" className="underline">request an invitation</a> below.
          </p>
        )}
        {state.kind === 'error' && <p className="!text-red-200">{state.message}</p>}
      </div>
    </div>
  )
}
