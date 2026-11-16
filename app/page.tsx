import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Philosophy from '@/components/sections/Philosophy'
import VivraEcosystem from '@/components/sections/VivraEcosystem'
import { HomeHero, HomeIsIsNot } from '@/components/sections/home/HomeTop'
import { HomeHowItWorks, HomeConversations, HomeFacilitators } from '@/components/sections/home/HomeAlliance'
import { HomeMembership, HomeThreeWaysIn, HomeVenues } from '@/components/sections/home/HomeMembership'
import { HomeFounders, HomeIbiza, HomeWall, HomeRituals } from '@/components/sections/home/HomeIbiza'
import { HomePassport, HomeCommons, HomeApply } from '@/components/sections/home/HomePlatform'

// Home, site v3. One scroll, in the order of the menu:
// Philosophy → How it works → Membership → Network → Ecosystem → Ibiza 2026 →
// Passport → Planetary Commons → Request invitation.
export default async function HomePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site} overHero>
      <HomeHero />
      <Philosophy />
      <HomeIsIsNot />
      <HomeHowItWorks />
      <HomeConversations />
      <HomeFacilitators />
      <HomeMembership />
      <HomeThreeWaysIn />
      <HomeVenues />
      <VivraEcosystem />
      <HomeFounders />
      <HomeIbiza />
      <HomeWall />
      <HomeRituals />
      <HomePassport />
      <HomeCommons />
      <HomeApply />
    </PageShell>
  )
}
