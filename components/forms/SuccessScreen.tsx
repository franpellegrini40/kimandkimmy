export default function SuccessScreen({
  heading,
  body,
}: {
  heading: string
  body: string
}) {
  return (
    <div className="rounded-2xl border border-vivra-600/20 bg-vivra-50 p-10 text-center">
      <span className="eyebrow">Received</span>
      <h2 className="mt-3 text-2xl text-stone-900">{heading}</h2>
      <p className="mt-3 text-stone-700">{body}</p>
    </div>
  )
}
