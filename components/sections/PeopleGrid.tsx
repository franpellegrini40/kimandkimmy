import AssetPlaceholder from '@/components/ui/AssetPlaceholder'
import { PEOPLE } from '@/content/people'

export default function PeopleGrid() {
  if (PEOPLE.length === 0) {
    return (
      <div className="grid gap-8 md:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i}>
            <AssetPlaceholder note="Portrait, 4:5" tone={i % 2 ? 'clay' : 'vivra'} />
            <p className="mt-3 text-xs uppercase tracking-wide text-stone-400">
              CONTENT NEEDED — name, role, bio
            </p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {PEOPLE.map((p) => (
        <div key={p.slug}>
          <AssetPlaceholder note={`Portrait — ${p.name}, 4:5`} tone="vivra" />
          <h3 className="mt-3 text-base text-stone-900">{p.name}</h3>
          <p className="text-sm text-stone-500">{p.role}</p>
          <p className="mt-2 text-sm text-stone-700">{p.bio}</p>
        </div>
      ))}
    </div>
  )
}
