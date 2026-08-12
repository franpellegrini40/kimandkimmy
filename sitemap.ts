import { NextResponse } from 'next/server'
import { allianceSchema } from '@/lib/validation'
import { saveLead } from '@/lib/leads'
import { isRateLimited } from '@/lib/rateLimit'

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
  if (isRateLimited(`alliance:${ip}`)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const body = await request.json()

  if (body.honeypot) {
    return NextResponse.json({ ok: true })
  }

  const parsed = allianceSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  await saveLead('alliance', parsed.data)

  return NextResponse.json({ ok: true })
}
