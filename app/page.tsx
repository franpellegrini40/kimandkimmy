import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Hero from '@/components/sections/Hero'
import BrandReel from '@/components/sections/BrandReel'
import Philosophy from '@/components/sections/Philosophy'
import HowItWorksTeaser from '@/components/sections/HowItWorksTeaser'
import VivraEcosystem from '@/components/sections/VivraEcosystem'
import EcosystemStory from '@/components/sections/EcosystemStory'
import ExperiencePillars from '@/components/sections/ExperiencePillars'
import HealingPractices from '@/components/sections/HealingPractices'
import VenuesTeaser from '@/components/sections/VenuesTeaser'
import ImpactTeaser from '@/components/sections/ImpactTeaser'
import NewsTeaser from '@/components/sections/NewsTeaser'
import ContactTeaser from '@/components/sections/ContactTeaser'
import DayInLife from '@/components/sections/DayInLife'
import MembershipTeaser from '@/components/sections/MembershipTeaser'
import CTABand from '@/components/sections/CTABand'

export default async function HomePage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site} overHero>
      <Hero />
      <Philosophy />
      <HowItWorksTeaser />
      <BrandReel />
      <VivraEcosystem />
      <EcosystemStory />
      <ExperiencePillars />
      <HealingPractices />
      <VenuesTeaser />
      <ImpactTeaser />
      <NewsTeaser />
      <ContactTeaser />
      <DayInLife />
      <MembershipTeaser />
      <CTABand site={site} />
    </PageShell>
  )
}
