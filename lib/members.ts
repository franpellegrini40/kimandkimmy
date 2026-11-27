// Server-only. Who may use the VIVRA member platform.
//
// The platform itself (vivra.ai-os.az.techbricks.io, run by TechBricks) is the
// real gate: it signs people in through Microsoft and decides who gets in.
// This list is a friendly pre-check on the website, so that someone who was
// not at a gathering is pointed to the invitation form instead of hitting a
// failed sign-in.
//
// FOUNDING_MEMBER_EMAILS is set in Vercel (never in code): a comma- or
// newline-separated list of the participants' emails. When it is empty the
// check is skipped and everyone is sent to the platform's own sign-in.

export const MEMBER_PLATFORM_URL =
  process.env.NEXT_PUBLIC_MEMBER_PLATFORM_URL || 'https://vivra.ai-os.az.techbricks.io/'

export const normalizeEmail = (email: string) => email.trim().toLowerCase()

function memberList(): Set<string> | null {
  const raw = process.env.FOUNDING_MEMBER_EMAILS
  if (!raw || !raw.trim()) return null
  return new Set(raw.split(/[\s,;]+/).map(normalizeEmail).filter(Boolean))
}

export function checkMember(email: string): 'member' | 'not-member' | 'unchecked' {
  const list = memberList()
  if (!list) return 'unchecked'
  return list.has(normalizeEmail(email)) ? 'member' : 'not-member'
}
