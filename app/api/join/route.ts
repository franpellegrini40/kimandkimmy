import { NextResponse } from 'next/server'
import { joinSchema } from '@/lib/validation'
import { saveLead } from '@/lib/leads'
import { isRateLimited } from '@/lib/rateLimit'
import { sendWelcomeEmail } from '@/lib/welcomeEmail'

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
  if (isRateLimited(`join:${ip}`)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const body = await request.json()

  if (body.honeypot) {
    return NextResponse.json({ ok: true })
  }

  const parsed = joinSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  await saveLead('join', parsed.data)
  await sendWelcomeEmail({ to: parsed.data.email, firstName: parsed.data.firstName })

  return NextResponse.json({ ok: true })
}
