'use client'

import { FormEvent, useEffect, useState } from 'react'
import { TextField, TextAreaField, FileField, HoneypotField } from './fields'
import SuccessScreen from './SuccessScreen'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/francisco@ithaka.vc'
const MAX_TOTAL_BYTES = 8 * 1024 * 1024

export default function VenueApplicationForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    trackEvent('form_started', { form: 'venue_application' })
    return () => {
      if (!done) trackEvent('form_abandoned', { form: 'venue_application' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    if (formData.get('honeypot')) return

    const files = formData.getAll('attachments') as File[]
    const totalBytes = files.reduce((sum, f) => sum + (f?.size || 0), 0)
    if (totalBytes > MAX_TOTAL_BYTES) {
      setError(
        'Those files are too large to submit here (8MB total limit). Please add a Google Drive/Dropbox link in "Additional media links" instead, or attach fewer/smaller files.'
      )
      return
    }

    formData.delete('honeypot')
    formData.set('_subject', `New VIVRA venue application: ${formData.get('venueName')}`)
    formData.set('_template', 'table')
    formData.set('_captcha', 'false')

    setSubmitting(true)
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      if (!res.ok) throw new Error('Submission failed')
      trackEvent('form_completed', { form: 'venue_application' })
      setDone(true)
    } catch {
      setError('Something went wrong. Please try again or email francisco@ithaka.vc directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <SuccessScreen
        heading="Thank you for applying as a VIVRA venue."
        body="Our team will review your submission and reach out shortly."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <HoneypotField />

      <TextField label="Venue name" name="venueName" required />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Your name" name="contactName" required />
        <TextField label="Email" name="email" type="email" required />
      </div>
      <TextField label="Phone (optional)" name="contactPhone" type="tel" />

      <TextField label="Address / street" name="address" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="City" name="city" required />
        <TextField label="Country" name="country" required />
      </div>
      <TextField
        label="Google Maps link"
        name="googleMapsLink"
        type="url"
        placeholder="https://maps.google.com/…"
      />

      <TextAreaField
        label="Tell us about the venue"
        name="details"
        required
        placeholder="Capacity, amenities, style, what makes it a fit for VIVRA…"
      />

      <FileField
        label="Photos / videos"
        name="attachments"
        multiple
        accept="image/*,video/*"
        hint="Up to 8MB total. For larger videos, add a link below instead."
      />
      <TextField
        label="Additional media links (optional)"
        name="mediaLinks"
        placeholder="Google Drive, Dropbox, WeTransfer…"
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? 'Submitting…' : 'Submit Venue Application'}
      </Button>
    </form>
  )
}
