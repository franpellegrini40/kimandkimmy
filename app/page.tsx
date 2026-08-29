import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Hero from '@/components/sections/Hero'
import BrandReel from '@/components/sections/BrandReel'
import Philosophy from '@/components/sections/Philosophy'
import VivraEcosystem from '@/components/sections/VivraEcosystem'
import EcosystemStory from '@/components/sections/EcosystemStory'
import VillaGallery from '@/components/sections/VillaGallery'
import ExperiencePillars from '@/components/sections/ExperiencePillars'
import HealingPractices from '@/components/sections/HealingPractices'
import DayInLife from '@/components/sections/DayInLife'
import MembershipTeaser from '@/components/sections/MembershipTeaser'
import AllianceTeaser from '@/components/sections/AllianceTeaser'
import CTABand from '@/components/sections/CTABand'

export default async function HomePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site} overHero>
      <Hero />
      <BrandReel />
      <Philosophy />
      <VivraEcosystem />
      <EcosystemStory />
      <ExperiencePillars />
      <VillaGallery />
      <HealingPractices />
      <DayInLife />
      <MembershipTeaser />
      <AllianceTeaser />
      <CTABand site={site} />
    </PageShell>
  )
}
