import type { Metadata } from 'next'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import FoundingRetreat from '@/components/sections/FoundingRetreat'
import WhoJoins from '@/components/sections/WhoJoins'
import VillaGallery from '@/components/sections/VillaGallery'
import ExperiencePillars from '@/components/sections/ExperiencePillars'
import DayInLife from '@/components/sections/DayInLife'
import PricingSection from '@/components/sections/PricingSection'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'VIVRA Founding Retreat — Ibiza',
  description:
    'The VIVRA Founding Gathering at Can Aylma, Ibiza: five days exploring longevity, regenerative economy, conscious leadership and personal transformation. By invitation only, few places.',
}

export default async function IbizaPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <div className="h-20" />
      <FoundingRetreat />
      <WhoJoins />
      <VillaGallery />
      <ExperiencePillars />
      <DayInLife />
      <PricingSection />
      <CTABand site={site} />
    </PageShell>
  )
}
