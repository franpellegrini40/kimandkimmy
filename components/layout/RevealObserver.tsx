'use client'

import { useEffect } from 'react'

// One IntersectionObserver for every [data-reveal] and [data-inview] on the page (see
// components/ui/RevealOnScroll.tsx). A MutationObserver picks up elements that
// arrive later, after client-side navigation or when a panel opens.
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -80px 0px' },
    )
    const scan = () => document.querySelectorAll('[data-reveal]:not(.is-in), [data-inview]:not(.is-in)').forEach((el) => io.observe(el))
    scan()
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
  return null
}
