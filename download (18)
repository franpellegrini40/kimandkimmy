'use client'

import { useEffect, useState } from 'react'

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
      className="fixed inset-x-0 bottom-0 z-50 border-t border-sand-200 bg-sand-50/98 px-6 py-5 backdrop-blur md:px-10"
    >
      <div className="container-vivra flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm text-stone-800">
          We use cookies to understand how visitors engage with VIVRA and to remember your
          preferences. See our{' '}
          <a href="/privacy" className="underline hover:text-vivra-700">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => choose(false)}
            className="rounded-full border border-stone-800/20 px-5 py-2 text-sm text-stone-800 transition hover:border-stone-800/40"
          >
            Decline
          </button>
          <button
            onClick={() => choose(true)}
            className="rounded-full bg-vivra-700 px-5 py-2 text-sm text-white transition hover:bg-vivra-600"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
