import Link from 'next/link'
import { FOOTER_LINKS } from '@/content/site'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  return (
    <footer className="border-t py-14" style={{ borderColor: 'var(--rule)', background: 'var(--surface-inset)' }}>
      <div className="container-vivra flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <Logo className="h-4 w-auto" />
          <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
            A curated community exploring new dimensions of wellbeing, longevity and human
            potential — beginning in Ibiza.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 text-sm">
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>VIVRA</span>
            {FOOTER_LINKS.primary.map((l) => (
              <Link key={l.href} href={l.href} className="hover:opacity-70">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>Connect</span>
            {FOOTER_LINKS.social.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
                {l.label}
              </a>
            ))}
            <Link href="/contact" className="hover:opacity-70">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs uppercase" style={{ letterSpacing: 'var(--tracking-caps)', color: 'var(--text-quiet)' }}>Legal</span>
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:opacity-70">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="container-vivra mt-10 flex flex-col-reverse gap-4 border-t pt-6 text-xs md:flex-row md:items-center md:justify-between"
        style={{ borderColor: 'var(--rule)', color: 'var(--text-quiet)' }}
      >
        <p>© {new Date().getFullYear()} VIVRA. All rights reserved.</p>
        <p>vivra.world · joinvivra.com</p>
      </div>
    </footer>
  )
}
