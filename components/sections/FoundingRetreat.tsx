import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { RETREAT_FACTS, WHY_IBIZA } from '@/content/retreat'

export default function FoundingRetreat() {
  return (
    <Section tone="dark" id="ibiza">
      <RevealOnScroll>
        <span className="eyebrow">{RETREAT_FACTS.status}</span>
        <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">{WHY_IBIZA.heading}</h2>
      </RevealOnScroll>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
        <RevealOnScroll>
          <Photo src="/images/villa-pool-loungers.jpg" alt="The pool and gardens at Can Aylma, Ibiza" aspect="aspect-[4/5]" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="space-y-6">
          <div>
            <h3 className="text-lg" style={{ color: 'var(--text-primary)' }}>Why Ibiza</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{WHY_IBIZA.body}</p>
          </div>
          <div>
            <h3 className="text-lg" style={{ color: 'var(--text-primary)' }}>Can Aylma</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{WHY_IBIZA.villa}</p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="mt-12">
        <Button href="/apply/ibiza" variant="accent">Join the Founding Retreat</Button>
      </div>
    </Section>
  )
}
