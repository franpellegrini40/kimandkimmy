import { listLocalLeads } from '@/lib/leads'

export const dynamic = 'force-dynamic'

// Only surfaces leads written to the local-file fallback (see lib/leads.ts) — i.e.
// useful in development, or in production only if Supabase/Formspree are NOT
// configured. Once Supabase is wired up, view leads there instead.
export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>
}) {
  const sp = await searchParams
  const authorized = process.env.ADMIN_ACCESS_KEY && sp.key === process.env.ADMIN_ACCESS_KEY

  if (!authorized) {
    return (
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <h1 className="text-xl">Restricted</h1>
        <p className="mt-2 text-sm text-stone-500">
          Append <code>?key=YOUR_ADMIN_ACCESS_KEY</code> to the URL.
        </p>
      </div>
    )
  }

  const leads = await listLocalLeads()

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-2xl">Leads (local file fallback)</h1>
      <p className="mt-2 text-sm text-stone-500">{leads.length} total.</p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-stone-900/10 text-stone-500">
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">Type</th>
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Email</th>
              <th className="py-2 pr-4">Source / UTM</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => {
              const d = lead.data as Record<string, unknown>
              return (
                <tr key={i} className="border-b border-stone-900/5">
                  <td className="py-3 pr-4">{new Date(lead.createdAt).toLocaleString()}</td>
                  <td className="py-3 pr-4">{lead.type}</td>
                  <td className="py-3 pr-4">
                    {[d.firstName, d.lastName].filter(Boolean).join(' ') ||
                      (d.organization as string)}
                  </td>
                  <td className="py-3 pr-4">{String(d.email ?? '')}</td>
                  <td className="py-3 pr-4 text-xs text-stone-500">
                    {JSON.stringify(d.utm ?? {})}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
