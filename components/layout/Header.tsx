'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { NAV_ITEMS, CTA_COPY } from '@/content/site'
import Button from '@/components/ui/Button'
import type { SiteId } from '@/lib/site'

export default function Header({ site }: { site: SiteId }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-sand-50/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-vivra flex h-20 items-center justify-between">
        <Link
          href="/"
          className={`font-display text-xl tracking-[0.15em] transition-colors ${
            solid ? 'text-stone-900' : 'text-white'
          }`}
        >
          VIVRA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors ${
                solid ? 'text-stone-800 hover:text-vivra-700' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href={site === 'join-vivra' ? '/apply/ibiza' : '/apply/join'} variant={solid ? 'primary' : 'secondary'} className={!solid ? 'border-white/60 text-white hover:border-white' : ''}>
            {site === 'join-vivra' ? CTA_COPY.ibiza : CTA_COPY.join}
          </Button>
        </nav>

        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${solid ? 'text-stone-900' : 'text-white'}`}
        >
          <span className="sr-only">Menu</span>
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-stone-900/10 bg-sand-50 px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)} className="text-lg text-stone-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            href={site === 'join-vivra' ? '/apply/ibiza' : '/apply/join'}
            className="mt-6 w-full"
            onClick={() => setMenuOpen(false)}
          >
            {site === 'join-vivra' ? CTA_COPY.ibiza : CTA_COPY.join}
          </Button>
        </nav>
      )}
    </header>
  )
}
