// Server-only. Storage adapter for the three application forms.
//
// Priority: Supabase (if configured) > Formspree (if configured) > local JSON file
// (dev/testing only — most serverless hosts, including Vercel, have a read-only or
// ephemeral filesystem in production, so the local-file path is NOT a production
// database; configure Supabase or Formspree before launch. See README "Forms & CRM").

import path from 'node:path'

export type LeadType = 'join' | 'ibiza' | 'alliance'

type LeadRecord = {
  type: LeadType
  data: Record<string, unknown>
  createdAt: string
}

async function saveToSupabase(record: LeadRecord) {
  const url = `${process.env.SUPABASE_URL}/rest/v1/leads`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      type: record.type,
      payload: record.data,
      status: 'New',
      created_at: record.createdAt,
    }),
  })
  if (!res.ok) throw new Error(`Supabase insert failed: ${res.status} ${await res.text()}`)
}

async function saveToFormspree(record: LeadRecord) {
  const endpoint = {
    join: process.env.FORMSPREE_JOIN_ENDPOINT,
    ibiza: process.env.FORMSPREE_IBIZA_ENDPOINT,
    alliance: process.env.FORMSPREE_ALLIANCE_ENDPOINT,
  }[record.type]
  if (!endpoint) return false

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(record.data),
  })
  if (!res.ok) throw new Error(`Formspree submit failed: ${res.status}`)
  return true
}

async function saveToLocalFile(record: LeadRecord) {
  try {
    const fs = await import('node:fs/promises')
    const dir = path.join(process.cwd(), 'data')
    await fs.mkdir(dir, { recursive: true })
    const file = path.join(dir, 'leads.dev.json')
    let existing: LeadRecord[] = []
    try {
      existing = JSON.parse(await fs.readFile(file, 'utf-8'))
    } catch {
      existing = []
    }
    existing.push(record)
    await fs.writeFile(file, JSON.stringify(existing, null, 2))
  } catch (err) {
    console.error(
      '[leads] Could not persist to local file (expected on serverless hosts). Configure SUPABASE_URL or a FORMSPREE_*_ENDPOINT.',
      err
    )
  }
}

async function notifyWebhook(record: LeadRecord) {
  const url = process.env.LEAD_NOTIFY_WEBHOOK_URL
  if (!url) return
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `New VIVRA ${record.type} application: ${record.data.email ?? 'unknown email'}`,
        ...record,
      }),
    })
  } catch (err) {
    console.error('[leads] webhook notification failed', err)
  }
}

export async function saveLead(type: LeadType, data: Record<string, unknown>) {
  const record: LeadRecord = { type, data, createdAt: new Date().toISOString() }

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    await saveToSupabase(record)
  } else {
    const usedFormspree = await saveToFormspree(record)
    if (!usedFormspree) await saveToLocalFile(record)
  }

  await notifyWebhook(record)
  return record
}

export async function listLocalLeads(): Promise<LeadRecord[]> {
  try {
    const fs = await import('node:fs/promises')
    const file = path.join(process.cwd(), 'data', 'leads.dev.json')
    return JSON.parse(await fs.readFile(file, 'utf-8'))
  } catch {
    return []
  }
}
