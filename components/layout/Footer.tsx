import Link from 'next/link'
import { FOOTER_LINKS } from '@/content/site'

export default function Footer() {
  return (
    <footer className="border-t border-stone-900/10 bg-sand-100 py-14">
      <div className="container-vivra flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-xl tracking-[0.15em] text-stone-900">VIVRA</p>
          <p className="mt-3 text-sm text-stone-700">
            A curated community exploring new dimensions of wellbeing, longevity and human
            potential — beginning in Ibiza.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 text-sm">
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs uppercase tracking-wide text-stone-500">VIVRA</span>
            {FOOTER_LINKS.primary.map((l) => (
              <Link key={l.href} href={l.href} className="text-stone-800 hover:text-vivra-700">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs uppercase tracking-wide text-stone-500">Connect</span>
            {FOOTER_LINKS.social.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-800 hover:text-vivra-700"
              >
                {l.label}
              </a>
            ))}
            <Link href="/contact" className="text-stone-800 hover:text-vivra-700">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs uppercase tracking-wide text-stone-500">Legal</span>
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-stone-800 hover:text-vivra-700">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container-vivra mt-10 flex flex-col-reverse gap-4 border-t border-stone-900/10 pt-6 text-xs text-stone-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} VIVRA. All rights reserved.</p>
        <p>vivra.world · joinvivra.com</p>
      </div>
    </footer>
  )
}
