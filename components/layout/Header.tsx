'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { NAV_ITEMS, CTA_COPY } from '@/content/site'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import type { SiteId } from '@/lib/site'

const LINKS = NAV_ITEMS.slice(1)
const CTA_HREF = '/apply/join'

export default function Header({ site, overHero = false }: { site: SiteId; overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()
  const pathname = usePathname()

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

  // Escape closes the mobile menu and returns focus to the trigger.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // Optional active-section indicator: only the home page has these anchor
  // targets in the DOM, so elsewhere this simply finds nothing to observe.
  useEffect(() => {
    if (pathname !== '/') {
      setActiveHref(null)
      return
    }
    const sections = LINKS.map((item) => {
      const id = item.href.split('#')[1]
      return id ? document.getElementById(id) : null
    }).filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveHref(`/#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  const solid = !overHero || scrolled || menuOpen
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
        style={{
          background: solid ? 'color-mix(in srgb, var(--surface-page) 95%, transparent)' : 'transparent',
          backdropFilter: solid ? 'blur(8px)' : undefined,
          boxShadow: solid ? '0 1px 0 var(--rule)' : undefined,
        }}
      >
        <div className="container-vivra">
          {/* Mobile / tablet bar (<lg): hamburger left, logo centered, a
              compact CTA on the right once there's room (>=sm), CTA folded
              into the menu below that. */}
          <div className="grid h-20 grid-cols-3 items-center lg:hidden">
            <button
              ref={menuButtonRef}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 flex-col items-center justify-center justify-self-start gap-[5px]"
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
              href={CTA_HREF}
              variant={solid ? 'primary' : 'secondary'}
              size="sm"
              className="hidden justify-self-end sm:inline-flex"
            >
              {CTA_COPY.invite}
            </Button>
          </div>

          {/* Desktop / large-tablet bar (>=lg): logo left, nav center-right, CTA far right. */}
          <div className="hidden h-20 items-center justify-between lg:flex">
            <Link
              href="/"
              aria-label="VIVRA home"
              className="text-[var(--text-primary)] transition-colors hover:text-[var(--copper-deep)] focus-visible:text-[var(--copper-deep)] active:text-[var(--copper-deep)]"
            >
              <Logo className="h-6 w-auto" />
            </Link>

            <nav aria-label="Primary" className="flex items-center gap-9">
              {LINKS.map((item) => {
                const isActive = activeHref === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className="relative py-2 text-[11px] uppercase transition-colors hover:text-[var(--forest-deep)]"
                    style={{
                      letterSpacing: 'var(--tracking-caps)',
                      color: isActive ? 'var(--accent-deep)' : 'var(--text-primary)',
                    }}
                  >
                    {item.label}
                    <span
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-left transition-transform duration-300"
                      style={{ background: 'var(--accent-deep)', transform: isActive ? 'scaleX(1)' : 'scaleX(0)' }}
                    />
                  </Link>
                )
              })}
            </nav>

            <Button href={CTA_HREF} variant={solid ? 'primary' : 'secondary'}>
              {CTA_COPY.invite}
            </Button>
          </div>
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
        className="fixed inset-0 z-[60] lg:hidden"
        style={{ background: 'rgba(0,14,33,0.5)', pointerEvents: menuOpen ? 'auto' : 'none' }}
        onClick={closeMenu}
      />
      <motion.nav
        id="mobile-nav"
        data-theme="prestige"
        aria-hidden={!menuOpen}
        initial={false}
        animate={{ x: menuOpen ? 0 : '-100%' }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-y-0 left-0 z-[70] flex w-full max-w-sm flex-col lg:hidden"
        style={{ background: 'var(--surface-page)', pointerEvents: menuOpen ? 'auto' : 'none' }}
        aria-label="Site navigation"
      >
        <div className="flex h-20 items-center justify-between px-6">
          <Link
            href="/"
            aria-label="VIVRA home"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="text-[var(--text-primary)] transition-colors hover:text-[var(--aqua)] focus-visible:text-[var(--aqua)] active:text-[var(--aqua)]"
          >
            <Logo className="h-5 w-auto" />
          </Link>
          <button
            aria-label="Close menu"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="flex h-11 w-11 items-center justify-center"
            style={{ color: 'var(--text-primary)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
          {LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className="block py-2 text-lg text-[var(--text-primary)] transition-colors hover:text-[var(--copper-deep)] active:text-[var(--copper-deep)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-6">
          <Button href={CTA_HREF} className="w-full" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>
            {CTA_COPY.invite}
          </Button>
        </div>
      </motion.nav>
    </>
  )
}
