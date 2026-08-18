'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
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

  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const solid = !overHero || scrolled || menuOpen
  const ctaHref = site === 'join-vivra' ? '/apply/ibiza' : '/apply/join'
  const ctaLabel = site === 'join-vivra' ? CTA_COPY.ibiza : CTA_COPY.join

  return (
    <>
      <header
        data-theme={solid ? undefined : 'prestige'}
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
        style={{
          background: solid ? 'color-mix(in srgb, var(--surface-page) 95%, transparent)' : 'transparent',
          backdropFilter: solid ? 'blur(8px)' : undefined,
          boxShadow: solid ? '0 1px 0 var(--rule)' : undefined,
        }}
      >
        <div className="container-vivra grid h-20 grid-cols-3 items-center">
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center justify-self-start gap-[5px]"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="sr-only">Menu</span>
            <span className="h-px w-6" style={{ background: 'currentColor' }} />
            <span className="h-px w-6" style={{ background: 'currentColor' }} />
            <span className="h-px w-6" style={{ background: 'currentColor' }} />
          </button>

          <Link
            href="/"
            aria-label="VIVRA home"
            className="justify-self-center text-[var(--text-primary)] transition-colors hover:text-[var(--copper-deep)] focus-visible:text-[var(--copper-deep)] active:text-[var(--copper-deep)]"
          >
            <Logo className="h-5 w-auto" />
          </Link>

          <Button
            href={ctaHref}
            variant={solid ? 'primary' : 'secondary'}
            className={`hidden justify-self-end sm:inline-flex${solid ? '' : ' hover:text-[var(--copper-deep)]'}`}
          >
            {ctaLabel}
          </Button>
        </div>
      </header>

      {/*
        The overlay + drawer are always mounted (never conditionally rendered) so every
        nav <Link> stays a real, crawlable anchor in the DOM for SEO/link-equity purposes —
        only visibility/interactivity is toggled via animation + aria/pointer-events, never
        via mount/unmount.
      */}
      <motion.div
        aria-hidden={!menuOpen}
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[60]"
        style={{ background: 'rgba(0,14,33,0.5)', pointerEvents: menuOpen ? 'auto' : 'none' }}
        onClick={() => setMenuOpen(false)}
      />
      <motion.nav
        data-theme="prestige"
        aria-hidden={!menuOpen}
        initial={false}
        animate={{ x: menuOpen ? 0 : '-100%' }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-y-0 left-0 z-[70] flex w-full max-w-sm flex-col"
        style={{ background: 'var(--surface-page)', pointerEvents: menuOpen ? 'auto' : 'none' }}
        aria-label="Site navigation"
      >
        <div className="flex h-20 items-center justify-between px-6">
          <Link
            href="/"
            aria-label="VIVRA home"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="text-[var(--text-primary)] transition-colors hover:text-[var(--aqua)] focus-visible:text-[var(--aqua)] active:text-[var(--aqua)]"
          >
            <Logo className="h-5 w-auto" />
          </Link>
          <button
            aria-label="Close menu"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center"
            style={{ color: 'var(--text-primary)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
          {NAV_ITEMS.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-lg text-[var(--text-primary)] transition-colors hover:text-[var(--copper-deep)] active:text-[var(--copper-deep)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-6">
          <Button href={ctaHref} className="w-full" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
            {ctaLabel}
          </Button>
        </div>
      </motion.nav>
    </>
  )
}
