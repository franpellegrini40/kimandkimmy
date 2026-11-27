'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { MENU_PRIMARY, MENU_SECONDARY, CTA_COPY, LOGIN } from '@/content/site'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import type { SiteId } from '@/lib/site'

const CTA_HREF = '/#apply'

// One bar on every screen size: logo left, CTA + a three-line menu button
// right. All navigation lives in the drawer the button opens, so the bar
// never crowds, however many chapters the site grows.
export default function Header({ overHero = false }: { site: SiteId; overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)
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
    // Always open the drawer from its top, whatever it was scrolled to before.
    if (drawerRef.current) drawerRef.current.scrollTop = 0
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Escape closes the menu and returns focus to the trigger.
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

  // Marks the chapter currently on screen, so the drawer shows where you are.
  useEffect(() => {
    if (pathname !== '/') {
      setActiveHref(null)
      return
    }
    const entries = MENU_PRIMARY.map((item) => {
      const el = document.getElementById(item.href.split('#')[1] ?? '')
      return el ? { href: item.href, el } : null
    }).filter((x): x is { href: string; el: HTMLElement } => Boolean(x))
    if (entries.length === 0) return

    const observer = new IntersectionObserver(
      (obsEntries) => {
        const visible = obsEntries.find((e) => e.isIntersecting)
        if (!visible) return
        const match = entries.find((s) => s.el === visible.target)
        if (match) setActiveHref(match.href)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    entries.forEach((s) => observer.observe(s.el))
    return () => observer.disconnect()
  }, [pathname])

  const solid = !overHero || scrolled || menuOpen
  const closeMenu = () => setMenuOpen(false)
  const tab = menuOpen ? 0 : -1

  // The page is scroll-locked while the drawer is open, so a plain hash link
  // would be swallowed. For chapters on the page we are already on: close,
  // release the lock, then scroll.
  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false)
    const [path, hash] = href.split('#')
    if (!hash || (path || '/') !== pathname) return
    const target = document.getElementById(hash)
    if (!target) return
    e.preventDefault()
    document.body.style.overflow = ''
    window.history.pushState(null, '', `#${hash}`)
    setActiveHref(href)
    window.setTimeout(() => target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' }), 0)
  }

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
        <div className="container-vivra flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="VIVRA home"
            className="text-[var(--text-primary)] transition-colors hover:text-[var(--accent-deep)]"
          >
            <Logo className="h-5 w-auto md:h-6" />
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <Link
              href={LOGIN.href}
              className={`px-1 py-2 text-[10px] font-medium uppercase text-[var(--text-primary)] transition-colors md:px-2 ${
                // Copper on hover: the light copper over the dark video, the deeper copper once the bar turns ivory.
                solid ? 'hover:text-[var(--copper-deep)] focus-visible:text-[var(--copper-deep)]' : 'hover:text-[#E3A877] focus-visible:text-[#E3A877]'
              }`}
              style={{ letterSpacing: 'var(--tracking-caps)' }}
            >
              {LOGIN.label}
            </Link>
            <Button
              href={CTA_HREF}
              size="sm"
              className="hidden !border-[var(--navy)] !bg-[var(--navy)] !text-white hover:!border-[var(--copper)] hover:!bg-[var(--copper)] active:!border-[var(--copper-deep)] active:!bg-[var(--copper-deep)] focus-visible:!bg-[var(--copper)] sm:inline-flex"
            >
              {CTA_COPY.invite}
            </Button>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="group flex h-11 items-center gap-3 border px-3 transition-colors hover:border-[var(--text-primary)] md:px-4"
              style={{ borderColor: 'var(--rule)', color: 'var(--text-primary)' }}
            >
              <span
                className="hidden text-[10px] font-medium uppercase md:inline"
                style={{ letterSpacing: 'var(--tracking-caps)' }}
              >
                Menu
              </span>
              <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
                <span className="h-px w-full" style={{ background: 'currentColor' }} />
                <span className="h-px w-full" style={{ background: 'currentColor' }} />
                <span className="h-px w-full" style={{ background: 'currentColor' }} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/*
        Overlay + drawer stay mounted (never conditionally rendered) so every
        nav <Link> remains a real, crawlable anchor in the DOM. Only visibility
        and interactivity are toggled.
      */}
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[60]"
        style={{ background: 'rgba(0,14,33,0.5)', pointerEvents: menuOpen ? 'auto' : 'none' }}
        onClick={closeMenu}
      />
      <motion.nav
        ref={drawerRef}
        id="site-menu"
        data-theme="prestige"
        aria-hidden={!menuOpen}
        aria-label="Site navigation"
        initial={false}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col overflow-y-auto"
        style={{
          background: 'var(--surface-page)',
          color: 'var(--text-primary)',
          pointerEvents: menuOpen ? 'auto' : 'none',
          visibility: menuOpen ? 'visible' : undefined,
        }}
      >
        <div className="flex h-20 shrink-0 items-center justify-between px-6 md:px-10">
          <Link href="/" aria-label="VIVRA home" tabIndex={tab} onClick={closeMenu} className="text-[var(--text-primary)]">
            <Logo className="h-5 w-auto" />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={tab}
            onClick={closeMenu}
            className="flex h-11 w-11 items-center justify-center border transition-colors hover:border-[var(--text-primary)]"
            style={{ borderColor: 'var(--rule)', color: 'var(--text-primary)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <ol className="flex-1 px-6 py-2 md:px-10">
          {MENU_PRIMARY.map((item, i) => {
            const isActive = activeHref === item.href
            return (
              <li key={item.href} className="border-b" style={{ borderColor: 'var(--rule-quiet)' }}>
                <Link
                  href={item.href}
                  tabIndex={tab}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={(e) => goTo(e, item.href)}
                  // Copper on hover and for the chapter on screen (light copper, legible on navy).
                  className={`group flex items-baseline gap-5 py-3 transition-colors hover:text-[#E3A877] focus-visible:text-[#E3A877] ${
                    isActive ? 'text-[#E3A877]' : 'text-[var(--text-primary)]'
                  }`}
                >
                  <span className="w-6 text-[10px] tabular-nums" style={{ color: 'var(--text-quiet)', letterSpacing: '0.1em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-2xl">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ol>

        <div className="shrink-0 px-6 pb-8 md:px-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {MENU_SECONDARY.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  tabIndex={tab}
                  onClick={(e) => goTo(e, item.href)}
                  className="text-[10px] uppercase text-[var(--text-secondary)] transition-colors hover:text-[#5CC27E] focus-visible:text-[#5CC27E]"
                  style={{ letterSpacing: 'var(--tracking-caps)' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={CTA_HREF} variant="accent" className="mt-6 w-full" tabIndex={tab} onClick={closeMenu}>
            {CTA_COPY.invite}
          </Button>
        </div>
      </motion.nav>
    </>
  )
}
