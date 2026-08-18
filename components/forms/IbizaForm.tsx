'use client'

import { FormEvent, useEffect, useState } from 'react'
import { TextField, TextAreaField, SelectField, HoneypotField } from './fields'
import SuccessScreen from './SuccessScreen'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import { captureAndGetUtm } from '@/lib/utm'

export default function IbizaForm() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    trackEvent('form_started', { form: 'ibiza' })
    return () => {
      if (!done) trackEvent('form_abandoned', { form: 'ibiza', step })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function nextStep() {
    trackEvent('form_step_completed', { form: 'ibiza', step })
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
      phone: formData.get('phone'),
      location: formData.get('location'),
      linkedin: formData.get('linkedin') || '',
      whyInterested: formData.get('whyInterested'),
      foundingMemberInterest: formData.get('foundingMemberInterest'),
      referral: formData.get('referral') || '',
      honeypot: formData.get('honeypot'),
      utm: captureAndGetUtm(),
      source: 'website',
    }

    try {
      const res = await fetch('/api/ibiza', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')
      trackEvent('form_completed', { form: 'ibiza' })
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
        heading="Thank you for requesting to join the Ibiza Founding Retreat."
        body="Our team will review your request and follow up shortly with next steps."
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
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField label="Email" name="email" type="email" required />
            <TextField label="WhatsApp / Phone" name="phone" required />
          </div>
          <TextField label="Country / City" name="location" required />
          <TextField label="LinkedIn / Instagram / Website (optional)" name="linkedin" />
          <Button type="button" onClick={nextStep} className="w-full sm:w-auto">
            Continue
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <TextAreaField
            label="What makes you interested in joining?"
            name="whyInterested"
            required
          />
          <SelectField
            label="Interested in becoming a founding VIVRA member?"
            name="foundingMemberInterest"
            required
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'maybe', label: 'Maybe' },
              { value: 'no', label: 'No' },
            ]}
          />
          <TextField label="How did you hear about us? (optional)" name="referral" />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            <Button type="button" variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Request to Join'}
            </Button>
          </div>
        </>
      )}
    </form>
  )
}
