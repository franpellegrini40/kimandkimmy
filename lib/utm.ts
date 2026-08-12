'use client'

const STORAGE_KEY = 'vivra-utm'

export function captureAndGetUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
  const fromUrl: Record<string, string> = {}
  keys.forEach((k) => {
    const v = params.get(k)
    if (v) fromUrl[k] = v
  })

  if (Object.keys(fromUrl).length > 0) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl))
    return fromUrl
  }

  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}
