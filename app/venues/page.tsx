import type { Metadata } from 'next'
import { getCurrentSite, SITE_META } from '@/lib/site'
import { ALLIANCE_VENUES } from '@/content/alliance'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import VenueGrid from '@/components/sections/VenueGrid'
import VenuesFilm, { VENUES_FILM } from '@/components/sections/VenuesFilm'
import CTABand from '@/components/sections/CTABand'

const DESCRIPTION =
  'Venues with a soul across the VIVRA network: Ibiza, Puglia, Tuscany, Viirelaid, Holbox, Antigua, Costa Rica, Bali, Sri Lanka and Dubai. More venues are coming.'

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite()
  const url = `https://${SITE_META[site].domain}/venues`
  return {
    title: 'Venues',
    description: DESCRIPTION,
    alternates: { canonical: url },
    openGraph: { title: 'VIVRA Venues', description: DESCRIPTION, url, type: 'website', images: [VENUES_FILM.poster] },
  }
}

export default async function VenuesPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: 'VIVRA venues',
            description: DESCRIPTION,
            thumbnailUrl: [`https://${SITE_META[site].domain}${VENUES_FILM.poster}`],
            uploadDate: '2026-11-24',
            duration: 'PT25S',
            contentUrl: `https://${SITE_META[site].domain}${VENUES_FILM.src}`,
          }),
        }}
      />
      <Section tone="light" className="pt-40">
        <RevealOnScroll>
          <span className="eyebrow">The network · {ALLIANCE_VENUES.length} destinations · More venues are coming</span>
          <h1 className="mt-4 max-w-2xl text-3xl md:text-4xl">Where members belong.</h1>
          <p className="mt-6 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Very exclusive, conscious and luxury venues — each one upgraded to the same
            regenerative standard, opening steadily around the world.
          </p>
        </RevealOnScroll>
      </Section>

      <VenuesFilm />

      <Section tone="light">
        <VenueGrid />
        <RevealOnScroll delay={0.1} className="mt-10 flex flex-wrap gap-4">
          <Button href="/apply/alliance">Enquire About a Venue</Button>
          <Button href="/apply/venue" variant="secondary">Apply as a Venue</Button>
        </RevealOnScroll>
      </Section>

      <CTABand site={site} />
    </PageShell>
  )
}
