'use client'

import { FormEvent, useEffect, useState } from 'react'
import { TextField, TextAreaField, SelectField, HoneypotField } from './fields'
import SuccessScreen from './SuccessScreen'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import { captureAndGetUtm } from '@/lib/utm'

export default function JoinForm() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    trackEvent('form_started', { form: 'join' })
    return () => {
      if (!done) trackEvent('form_abandoned', { form: 'join', step })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function nextStep() {
    trackEvent('form_step_completed', { form: 'join', step })
    setStep(2)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      location: formData.get('location'),
      linkedin: formData.get('linkedin') || '',
      interest: formData.get('interest'),
      membershipInterest: formData.get('membershipInterest'),
      ibizaInterest: formData.get('ibizaInterest'),
      message: formData.get('message') || '',
      honeypot: formData.get('honeypot'),
      utm: captureAndGetUtm(),
      source: 'website',
    }

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')
      trackEvent('form_completed', { form: 'join' })
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
        heading="Thank you for joining the early-access community."
        body="We'll be in touch as VIVRA membership opens. In the meantime, keep an eye on your inbox."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <HoneypotField />

      {step === 1 && (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField label="First name" name="firstName" required />
            <TextField label="Last name" name="lastName" required />
          </div>
          <TextField label="Email" name="email" type="email" required />
          <TextField label="Country / City" name="location" required />
          <TextField label="LinkedIn or website (optional)" name="linkedin" />
          <Button type="button" onClick={nextStep} className="w-full sm:w-auto">
            Continue
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <TextAreaField
            label="What interests you most about VIVRA?"
            name="interest"
            required
          />
          <SelectField
            label="Interested in VIVRA Membership?"
            name="membershipInterest"
            required
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'exploring', label: 'Exploring' },
              { value: 'not-yet', label: 'Not yet' },
            ]}
          />
          <SelectField
            label="Interested in the Ibiza Founding Retreat?"
            name="ibizaInterest"
            required
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'exploring', label: 'Exploring' },
              { value: 'not-yet', label: 'Not yet' },
            ]}
          />
          <TextAreaField label="Short message (optional)" name="message" />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            <Button type="button" variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Join VIVRA'}
            </Button>
          </div>
        </>
      )}
    </form>
  )
}
