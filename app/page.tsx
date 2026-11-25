import type { Metadata } from 'next'
import { getCurrentSite, SITE_META } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Philosophy from '@/components/sections/Philosophy'
import VivraEcosystem from '@/components/sections/VivraEcosystem'
import { HomeHero, HomeIsIsNot } from '@/components/sections/home/HomeTop'
import { HomeHowItWorks, HomeConversations, HomeFacilitators } from '@/components/sections/home/HomeAlliance'
import { HomeMembership, HomeThreeWaysIn, HomeVenues } from '@/components/sections/home/HomeMembership'
import { HomeFounders, HomeIbiza, HomeWall, HomeRituals } from '@/components/sections/home/HomeIbiza'
import { HomePassport, HomeCommons, HomeApply } from '@/components/sections/home/HomePlatform'
import HomeVoices from '@/components/sections/home/HomeVoices'
import { showTestimonials } from '@/lib/flags'

// Home, site v3. One scroll, in the order of the menu:
// Philosophy → How it works → Experiences → Membership → Ecosystem → Venues →
// Passport → Planetary Commons → Request invitation.
// Copy from the approved landing copy (A0).
const HOME_DESCRIPTION =
  'VIVRA is a community of communities. Curated gatherings in venues that have a soul, and a platform to stay connected and track the impact you leave behind.'

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite()
  const url = `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN || 'worldvivra.com'}`
  return {
    title: { absolute: 'VIVRA · Change within. Impact beyond.' },
    description: HOME_DESCRIPTION,
    alternates: { canonical: url },
    openGraph: { title: 'VIVRA · Change within. Impact beyond.', description: HOME_DESCRIPTION, url, type: 'website' },
    twitter: { card: 'summary_large_image', title: 'VIVRA · Change within. Impact beyond.', description: HOME_DESCRIPTION },
  }
}

// Structured data so search engines can show the Ibiza recap as a video result.
function VideoJsonLd({ domain }: { domain: string }) {
  const base = `https://${domain}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'VIVRA founding gathering, Ibiza 2026: the recap',
    description:
      'Francisco Pellegrini, founder of VIVRA, on the first VIVRA gathering at Can Aylma, Ibiza, in October 2026.',
    thumbnailUrl: [`${base}/videos/ibiza-recap-poster.jpg`],
    uploadDate: '2026-11-17',
    duration: 'PT57S',
    contentUrl: `${base}/videos/ibiza-recap.mp4`,
    embedUrl: `${base}/#ibiza`,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default async function HomePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site} overHero>
      <VideoJsonLd domain={SITE_META[site].domain} />
      <HomeHero />
      <Philosophy />
      <HomeIsIsNot />
      <HomeHowItWorks />
      <HomeConversations />
      <HomeFacilitators />
      <HomeIbiza />
      {showTestimonials() && <HomeVoices />}
      <HomeWall />
      <HomeRituals />
      <HomeMembership />
      <HomeThreeWaysIn />
      <VivraEcosystem />
      <HomeFounders />
      <HomeVenues />
      <HomePassport />
      <HomeCommons />
      <HomeApply />
    </PageShell>
  )
}
