// The four "How it works" steps, told in order when the grid scrolls into view:
// each card rises in about a second after the previous one, its copper top rule
// draws left to right and the number lifts in, so the eye reads 01 → 04.
// No client JavaScript: the shared observer (RevealObserver) adds .is-in to
// [data-inview] and globals.css runs the sequence from the delays set here.
// Only transform and opacity animate; with reduced motion or without
// JavaScript everything shows at once.
const STEP_GAP = 0.9
const FIRST = 0.15

type Step = { step: string; label: string; detail: string }

export default function HowSteps({ steps }: { steps: readonly Step[] }) {
  return (
    <ol
      data-inview=""
      className="howsteps mt-12 grid gap-px border sm:grid-cols-2 lg:grid-cols-4"
      style={{ borderColor: 'var(--rule)', background: 'var(--rule)' }}
    >
      {steps.map((s, i) => {
        const t = FIRST + i * STEP_GAP
        return (
          <li key={s.step} className="howsteps-card relative h-full hover:z-10" style={{ transitionDelay: `${t}s` }}>
            {/* Zooms slightly on hover, lifting above its neighbours. */}
            <div
              className="relative h-full p-6 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,14,33,0.12)] md:p-7"
              style={{ background: 'var(--surface-raised)' }}
            >
              <span
                aria-hidden="true"
                className="howsteps-rule absolute inset-x-0 top-0 h-0.5 origin-left"
                style={{ background: 'var(--copper)', transitionDelay: `${t + 0.1}s` }}
              />
              <span className="howsteps-num block font-display text-3xl" style={{ color: 'var(--copper-deep)', transitionDelay: `${t + 0.25}s` }}>
                {s.step.padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg">{s.label}</h3>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{s.detail}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
