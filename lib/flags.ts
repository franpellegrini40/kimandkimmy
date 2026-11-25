// Feature flags for sections that wait on a confirmation from Francisco.

// Testimonials ("Voices from Ibiza") need written consent from each person
// (fran-os VIV-0011). Until then they show on local dev and Vercel previews
// (staging) only. Set SHOW_TESTIMONIALS=1 in Vercel Production once consent is in.
export function showTestimonials(): boolean {
  if (process.env.SHOW_TESTIMONIALS === '1') return true
  return process.env.VERCEL_ENV !== 'production'
}
