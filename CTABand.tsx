import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sand-50 px-6 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 text-3xl text-stone-900">This page has not found its place yet.</h1>
      <Link href="/" className="mt-6 text-sm text-vivra-700 underline">
        Return home
      </Link>
    </div>
  )
}
