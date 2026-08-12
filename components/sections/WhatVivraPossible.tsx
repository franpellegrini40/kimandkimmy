import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { VIVRA_MAKES_POSSIBLE } from '@/content/retreat'

export default function WhatVivraPossible() {
  return (
    <Section tone="sand">
      <RevealOnScroll>
        <span className="eyebrow">What VIVRA Makes Possible</span>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">Around the work, a whole world.</h2>
      </RevealOnScroll>

      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-stone-900/10 bg-stone-900/10 sm:grid-cols-3">
        {VIVRA_MAKES_POSSIBLE.map((item, i) => (
          <RevealOnScroll
            key={item.key}
            delay={i * 0.04}
            className={i === VIVRA_MAKES_POSSIBLE.length - 1 ? 'sm:col-span-2' : ''}
          >
            <div className="h-full bg-sand-50 p-6">
              <h3 className="text-base text-stone-900">{item.label}</h3>
              <p className="mt-2 text-xs text-stone-500">{item.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
