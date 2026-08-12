export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
export const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

type VivraEvent =
  | 'cta_click'
  | 'form_started'
  | 'form_step_completed'
  | 'form_completed'
  | 'form_abandoned'
  | 'video_play'
  | 'video_complete'
  | 'agenda_day_opened'
  | 'gallery_opened'
  | 'scroll_depth'

export function trackEvent(name: VivraEvent, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] }
  if (typeof w.gtag === 'function') {
    w.gtag('event', name, params)
  }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: name, ...params })
}

export function readUtmParams(search: string) {
  const params = new URLSearchParams(search)
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
  const out: Record<string, string> = {}
  keys.forEach((k) => {
    const v = params.get(k)
    if (v) out[k] = v
  })
  return out
}
