import AssetPlaceholder from '@/components/ui/AssetPlaceholder'
import { PEOPLE } from '@/content/people'

export default function PeopleGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {PEOPLE.map((p) => (
        <div key={p.slug}>
          <AssetPlaceholder note={`Portrait — ${p.name}, 4:5`} />
          <h3 className="mt-3 text-base">{p.name}</h3>
          <p className="text-sm" style={{ color: 'var(--text-quiet)' }}>{p.role}</p>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{p.bio}</p>
        </div>
      ))}
    </div>
  )
}
