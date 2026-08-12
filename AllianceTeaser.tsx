import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'
import { headers } from 'next/headers'
import { getSiteFromHost, SITE_META } from '@/lib/site'
import { GA4_ID } from '@/lib/analytics'
import Script from 'next/script'
import ConsentBanner from '@/components/layout/ConsentBanner'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd'

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers()
  const site = getSiteFromHost(h.get('host'))
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
