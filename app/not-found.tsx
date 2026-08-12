import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ background: 'var(--surface-page)', color: 'var(--text-primary)' }}
    >
      <span className="eyebrow">404</span>
      <h1 className="mt-4 text-3xl">This page has not found its place yet.</h1>
      <Link href="/" className="mt-6 text-sm underline" style={{ color: 'var(--accent-deep)' }}>
        Return home
      </Link>
    </div>
  )
}
