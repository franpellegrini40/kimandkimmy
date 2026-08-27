'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Section from '@/components/ui/Section'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { ECOSYSTEM_INTRO, ECOSYSTEM_PILLARS } from '@/content/ecosystem'

// The real VIVRA icon mark (public/logo/vivra-icon.svg), reused as the rotating
// petal for each dimension so the diagram is literally built from the brand mark.
const ICON_PATH =
  'M102.89 68.403L115.546 38.4L108.821 38.4L99.799 59.83L90.902 38.4L83.593 38.4L96.207 68.403ZM81.185 83.467L51.181 70.811L51.181 77.535L72.613 86.557L71.99 86.817L81.185 86.817ZM147.959 78.12L147.959 70.809L117.955 83.425L117.955 86.817L127.01 86.817ZM114.918 76.135L145.084 63.87L140.329 59.115L118.794 67.888L127.657 46.443L122.488 41.275L110.191 71.409ZM88.918 71.438L76.65 41.273L71.895 46.028L80.669 67.563L59.224 58.7L54.055 63.868L84.191 76.165ZM139.898 53.011C147.38 62.039 151.881 73.629 151.881 86.271C151.881 86.455 151.857 86.633 151.855 86.817L127.009 86.817L126.527 87.017L147.959 96.039L147.959 102.764L118.374 90.284C117.764 92.925 116.604 95.348 115.02 97.441L145.085 109.707L139.916 114.876L118.47 106.013L127.245 127.547L122.489 132.303L110.221 102.136C106.944 104.067 102.951 104.759 102.951 104.759L115.547 134.721L108.239 134.721L99.34 113.289L90.319 134.721L83.593 134.721L96.251 104.716L89.221 101.709L76.924 131.844L71.756 126.675L80.619 105.23L59.085 114.004L54.329 109.248L84.451 96.999C82.83 94.766 81.688 92.166 81.185 89.316L81.185 90.15L51.18 102.765L51.18 95.456L71.989 86.817L47.605 86.817C47.603 86.633 47.581 86.455 47.581 86.271C47.581 73.37 52.276 61.572 60.037 52.467L57.258 46.953C45.815 24.251 24.537 7.975 0 2.49L102.677 208.173L102.754 208L102.841 208.173C106.309 202.613 192.549 2.382 192.549 2.382C178.419 0.001 156.697 20.186 139.898 53.011'

const ICON_CX = 96.2745
const ICON_CY = 104.086

export default function VivraEcosystem() {
  const [step, setStep] = useState(0)
  const reduced = useReducedMotion()
  const rotation = step * 45

  return (
    <Section tone="sand" id="ecosystem">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <RevealOnScroll>
          <span className="eyebrow">{ECOSYSTEM_INTRO.eyebrow}</span>
          <h2 className="mt-4 max-w-md text-3xl md:text-4xl">{ECOSYSTEM_INTRO.heading}</h2>
          <p className="mt-6 max-w-md" style={{ color: 'var(--text-secondary)' }}>{ECOSYSTEM_INTRO.body}</p>
          <p className="mt-4 text-xs" style={{ color: 'var(--text-quiet)' }}>
            Click the wheel to explore each dimension.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              aria-label="Rotate the VIVRA ecosystem wheel"
              className="absolute inset-0 h-full w-full cursor-pointer"
              style={{ background: 'transparent', border: 0 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: reduced ? 0 : rotation }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <svg viewBox="0 0 700 700" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <circle cx="350" cy="350" r="100" fill="none" stroke="var(--accent-deep)" strokeWidth="1.5" />
                  {ECOSYSTEM_PILLARS.map((p) => {
                    const rad = (p.angle * Math.PI) / 180
                    const petalCx = 350 + Math.cos(rad) * 175
                    const petalCy = 350 + Math.sin(rad) * 175
                    const dotCx = 350 + Math.cos(rad) * 225
                    const dotCy = 350 + Math.sin(rad) * 225
                    const lineStartX = 350 + Math.cos(rad) * 90
                    const lineStartY = 350 + Math.sin(rad) * 90
                    const iconRotation = p.angle + 90
                    const scale = 0.62

                    return (
                      <g key={p.label}>
                        <line
                          x1={lineStartX}
                          y1={lineStartY}
                          x2={dotCx}
                          y2={dotCy}
                          stroke="var(--accent-deep)"
                          strokeOpacity="0.4"
                          strokeWidth="1"
                          strokeDasharray="1 4"
                        />
                        <circle cx={dotCx} cy={dotCy} r="4" fill="var(--copper-deep)" />
                        <g transform={`translate(${petalCx}, ${petalCy}) rotate(${iconRotation}) scale(${scale}) translate(${-ICON_CX}, ${-ICON_CY})`}>
                          <path fill="var(--accent)" d={ICON_PATH} />
                        </g>
                      </g>
                    )
                  })}
                </svg>

                <ul>
                  {ECOSYSTEM_PILLARS.map((p) => (
                    <li
                      key={p.label}
                      className="absolute w-24 -translate-x-1/2 -translate-y-1/2 text-center text-[11px] leading-tight sm:w-28 sm:text-[13px]"
                      style={{ left: `${p.left}%`, top: `${p.top}%`, color: 'var(--text-primary)' }}
                    >
                      <span
                        className="inline-block"
                        style={{ transform: reduced ? undefined : `rotate(${-rotation}deg)`, transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)' }}
                      >
                        {p.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </button>

            <div
              className="pointer-events-none absolute flex items-center justify-center text-[10px] font-medium uppercase tracking-caps sm:text-xs"
              style={{
                left: '50%',
                top: '50%',
                width: '24%',
                height: '24%',
                transform: 'translate(-50%, -50%)',
                color: 'var(--accent-deep)',
              }}
            >
              VIVRA
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  )
}
