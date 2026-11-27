import { NextResponse } from 'next/server'
import { askSchema, conciergeSchema } from '@/lib/validation'
import { saveLead } from '@/lib/leads'
import { isRateLimited } from '@/lib/rateLimit'

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
  if (isRateLimited(`concierge:${ip}`)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const body = await request.json()

  if (body.honeypot) {
    return NextResponse.json({ ok: true })
  }

  // Questions from the "Ask VIVRA" chat: name, email and message only.
  if (body.kind === 'ask') {
    const ask = askSchema.safeParse(body)
    if (!ask.success) return NextResponse.json({ error: ask.error.flatten() }, { status: 400 })
    await saveLead('concierge', { ...ask.data, kind: 'Ask VIVRA question' })
    return NextResponse.json({ ok: true })
  }

  const parsed = conciergeSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  await saveLead('concierge', parsed.data)

  return NextResponse.json({ ok: true })
}
