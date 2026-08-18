'use client'

import { FormEvent, useEffect, useState } from 'react'
import { TextField, TextAreaField, SelectField, HoneypotField } from './fields'
import SuccessScreen from './SuccessScreen'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import { captureAndGetUtm } from '@/lib/utm'

export default function AllianceForm() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    trackEvent('form_started', { form: 'alliance' })
    return () => {
      if (!done) trackEvent('form_abandoned', { form: 'alliance', step })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function nextStep() {
    trackEvent('form_step_completed', { form: 'alliance', step })
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
      organization: formData.get('organization'),
      position: formData.get('position'),
      email: formData.get('email'),
      website: formData.get('website'),
      country: formData.get('country'),
      orgType: formData.get('orgType'),
      communitySize: formData.get('communitySize') || '',
      whyJoin: formData.get('whyJoin'),
      partnershipInterests: formData.get('partnershipInterests') || '',
      honeypot: formData.get('honeypot'),
      utm: captureAndGetUtm(),
      source: 'website',
    }

    try {
      const res = await fetch('/api/alliance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')
      trackEvent('form_completed', { form: 'alliance' })
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
        heading="Thank you for applying to VIVRA World Alliance."
        body="Our partnerships team will review your application and reach out shortly."
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
            <TextField label="Organization" name="organization" required />
            <TextField label="Position" name="position" required />
          </div>
          <TextField label="Business email" name="email" type="email" required />
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField label="Website" name="website" required />
            <TextField label="Country" name="country" required />
          </div>
          <Button type="button" onClick={nextStep} className="w-full sm:w-auto">
            Continue
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <SelectField
            label="Type of organization"
            name="orgType"
            required
            options={[
              { value: 'membership-club', label: 'Membership / Private Club' },
              { value: 'wellness-brand', label: 'Wellness Brand' },
              { value: 'hospitality', label: 'Hospitality Brand' },
              { value: 'longevity', label: 'Longevity Business' },
              { value: 'retreat-operator', label: 'Retreat Operator' },
              { value: 'impact-org', label: 'Impact Organization' },
              { value: 'other', label: 'Other' },
            ]}
          />
          <TextField label="Approximate community / member size (optional)" name="communitySize" />
          <TextAreaField label="Why would you like to join the Alliance?" name="whyJoin" required />
          <TextAreaField label="Partnership interests (optional)" name="partnershipInterests" />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            <Button type="button" variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Apply to Join the Alliance'}
            </Button>
          </div>
        </>
      )}
    </form>
  )
}
