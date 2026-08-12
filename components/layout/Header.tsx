'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { NAV_ITEMS, CTA_COPY } from '@/content/site'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import type { SiteId } from '@/lib/site'

export default function Header({ site, overHero = false }: { site: SiteId; overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!overHero) return
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [overHero])

  const solid = !overHero || scrolled || menuOpen

  return (
    <header
      data-theme={solid ? undefined : 'prestige'}
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        background: solid ? 'color-mix(in srgb, var(--surface-page) 95%, transparent)' : 'transparent',
        backdropFilter: solid ? 'blur(8px)' : undefined,
        boxShadow: solid ? '0 1px 0 var(--rule)' : undefined,
      }}
    >
      <div className="container-vivra flex h-20 items-center justify-between">
        <Link href="/" aria-label="VIVRA home" style={{ color: 'var(--text-primary)' }}>
          <Logo className="h-5 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-primary)' }}
            >
              {item.label}
            </Link>
          ))}
          <Button href={site === 'join-vivra' ? '/apply/ibiza' : '/apply/join'} variant={solid ? 'primary' : 'secondary'}>
            {site === 'join-vivra' ? CTA_COPY.ibiza : CTA_COPY.join}
          </Button>
        </nav>

        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          style={{ color: 'var(--text-primary)' }}
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

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t lg:hidden"
            style={{ borderColor: 'var(--rule)', background: 'var(--surface-page)' }}
          >
            <div className="px-6 py-6">
              <ul className="flex flex-col gap-5">
                {NAV_ITEMS.slice(1).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-lg"
                      style={{ color: 'var(--text-primary)' }}
                    >
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
