'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'

const CONSENT_KEY = 'vivra-consent'

function updateGtagConsent(granted: boolean) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  w.gtag?.('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: granted ? 'granted' : 'denied',
  })
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    if (!stored) setVisible(true)
    else updateGtagConsent(stored === 'granted')
  }, [])

  function choose(granted: boolean) {
    window.localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied')
    updateGtagConsent(granted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t px-6 py-5 backdrop-blur md:px-10"
      style={{ borderColor: 'var(--rule)', background: 'color-mix(in srgb, var(--surface-page) 96%, transparent)' }}
    >
      <div className="container-vivra flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm">
          We use cookies to understand how visitors engage with VIVRA and to remember your
          preferences. See our{' '}
          <a href="/privacy" className="underline hover:opacity-70">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="secondary" onClick={() => choose(false)}>
            Decline
          </Button>
          <Button variant="primary" onClick={() => choose(true)}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
