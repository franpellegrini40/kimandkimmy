import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { RETREAT_FACTS, WHY_IBIZA, WHO_JOINS } from '@/content/retreat'

export default function FoundingRetreat() {
  return (
    <Section tone="dark" id="ibiza">
      <RevealOnScroll>
        <span className="eyebrow text-vivra-300">{RETREAT_FACTS.status}</span>
        <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">{WHY_IBIZA.heading}</h2>
      </RevealOnScroll>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <RevealOnScroll>
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg text-white">Why Ibiza</h3>
            <p className="mt-2 text-sm text-white/70">{WHY_IBIZA.body}</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg text-white">{WHO_JOINS.heading}</h3>
            <p className="mt-2 text-sm text-white/70">{WHO_JOINS.intro}</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.16}>
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg text-white">Can Aylma</h3>
            <p className="mt-2 text-sm text-white/70">{WHY_IBIZA.villa}</p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <Photo
          src="/images/villa-dining.jpg"
          alt="Long-table dinner at sunset, Can Aylma"
          aspect="aspect-video"
          className="md:col-span-2"
        />
        <Photo src="/images/villa-view.jpg" alt="View over the Ibiza hills from Can Aylma" />
      </div>

      <div className="mt-12">
        <Button href="/apply/ibiza">Join the Founding Retreat</Button>
      </div>
    </Section>
  )
}
