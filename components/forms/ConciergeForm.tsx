'use client'

import { FormEvent, useEffect, useState } from 'react'
import { TextField, TextAreaField, SelectField, HoneypotField } from './fields'
import SuccessScreen from './SuccessScreen'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import { captureAndGetUtm } from '@/lib/utm'
import { ALLIANCE_VENUES } from '@/content/alliance'

const PURPOSES = [
  { value: 'wellness-longevity', label: 'Wellness & longevity' },
  { value: 'business-connection', label: 'Business & connection' },
  { value: 'celebration', label: 'Celebration' },
  { value: 'a-quiet-reset', label: 'A quiet reset' },
]

export default function ConciergeForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    trackEvent('form_started', { form: 'concierge' })
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      home: formData.get('home'),
      purpose: formData.get('purpose'),
      arrival: formData.get('arrival'),
      departure: formData.get('departure'),
      note: formData.get('note') || '',
      honeypot: formData.get('honeypot'),
      utm: captureAndGetUtm(),
      source: 'website',
    }

    try {
      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')
      trackEvent('form_completed', { form: 'concierge' })
      setDone(true)
    } catch {
      setError('Something went wrong. Please try again or email francisco@ithaka.vc.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <SuccessScreen
        heading="Your concierge has it."
        body="Someone from the VIVRA team will be in touch within a day to confirm the details."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <HoneypotField />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="First name" name="firstName" required />
        <TextField label="Last name" name="lastName" required />
      </div>
      <TextField label="Email" name="email" type="email" required />

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Home"
          name="home"
          required
          options={ALLIANCE_VENUES.map((v) => ({ value: v.name, label: `${v.name} · ${v.location}` }))}
        />
        <SelectField label="For" name="purpose" required options={PURPOSES} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Arrival" name="arrival" type="date" required />
        <TextField label="Departure" name="departure" type="date" required />
      </div>

      <TextAreaField
        label="A note to your concierge"
        name="note"
        placeholder="Dietary plan, transport, longevity focus, a celebration…"
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send to Concierge'}
        </Button>
        <span className="text-xs" style={{ color: 'var(--text-quiet)' }}>
          By invitation · reserved for members
        </span>
      </div>
    </form>
  )
}
