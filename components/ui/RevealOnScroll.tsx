// Fades and lifts content in as it scrolls into view.
//
// No client JavaScript per instance: this renders a plain <div data-reveal>,
// and one shared observer (components/layout/RevealObserver.tsx) adds
// .is-in when each element comes near the viewport. The CSS lives in
// globals.css. Content is in the HTML from the start (search engines and
// no-JS visitors see everything), and with reduced motion nothing is hidden.
export default function RevealOnScroll({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div data-reveal="" className={className} style={delay ? { ...style, transitionDelay: `${delay}s` } : style}>
      {children}
    </div>
  )
}
