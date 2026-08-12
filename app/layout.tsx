import type { Metadata } from 'next'
import { Jost, Manrope } from 'next/font/google'
import './globals.css'
import { headers } from 'next/headers'
import { getSiteFromHost, SITE_META } from '@/lib/site'
import { GA4_ID } from '@/lib/analytics'
import Script from 'next/script'
import ConsentBanner from '@/components/layout/ConsentBanner'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd'

// The brand system specifies Optima (display) and Neue Haas Grotesk Display (text) —
// both commercial fonts whose license files weren't included in the design-system export.
// Jost/Manrope stand in visually until real .woff2 files are supplied (see ASSETS_NEEDED.md);
// tailwind.config.ts still lists the real family names first so licensed fonts drop in for free.
const display = Jost({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
})

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers()
  const site = getSiteFromHost(h.get('x-forwarded-host') || h.get('host'))
  const meta = SITE_META[site]
  return {
    metadataBase: new URL(`https://${meta.domain}`),
    title: { default: meta.name, template: `%s — ${meta.name}` },
    description: meta.tagline,
    openGraph: {
      title: meta.name,
      description: meta.tagline,
      siteName: meta.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.name,
      description: meta.tagline,
    },
    icons: { icon: '/favicon.ico' },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <OrganizationJsonLd />
        {GA4_ID && (
          <>
            <Script
              id="ga4-consent-default"
              strategy="beforeInteractive"
            >{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied' });
            `}</Script>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', { anonymize_ip: true });
            `}</Script>
          </>
        )}
        {children}
        <WhatsAppButton />
        <ConsentBanner />
      </body>
    </html>
  )
}
