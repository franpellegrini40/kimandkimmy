export default function SuccessScreen({
  heading,
  body,
}: {
  heading: string
  body: string
}) {
  return (
    <div className="border p-10 text-center" style={{ borderColor: 'var(--rule)', background: 'var(--surface-inset)' }}>
      <span className="eyebrow">Received</span>
      <h2 className="mt-3 text-2xl">{heading}</h2>
      <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>{body}</p>
    </div>
  )
}
