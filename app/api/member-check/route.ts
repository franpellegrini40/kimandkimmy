import { NextResponse } from 'next/server'
import { z } from 'zod'
import { isRateLimited } from '@/lib/rateLimit'
import { checkMember, MEMBER_PLATFORM_URL } from '@/lib/members'

const schema = z.object({ email: z.string().email() })

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
  if (isRateLimited(`member-check:${ip}`)) {
    return NextResponse.json({ error: 'Too many attempts. Try again in a few minutes.' }, { status: 429 })
  }

  const parsed = schema.safeParse(await request.json().catch(() => ({})))
  if (!parsed.success) {
    return NextResponse.json({ error: 'Enter a valid email.' }, { status: 400 })
  }

  const status = checkMember(parsed.data.email)
  if (status === 'not-member') {
    return NextResponse.json({ member: false })
  }
  // 'member', or no list configured: the platform's own sign-in decides.
  return NextResponse.json({ member: true, url: MEMBER_PLATFORM_URL })
}
