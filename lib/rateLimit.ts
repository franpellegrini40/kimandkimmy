// Minimal in-memory rate limit: resets per server instance, good enough to blunt
// naive bot submission bursts. For real scale, swap in Upstash Redis rate limiting —
// noted in README "Security".

const hits = new Map<string, { count: number; windowStart: number }>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5

export function isRateLimited(key: string): boolean {
  const now = Date.now()
  const entry = hits.get(key)

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(key, { count: 1, windowStart: now })
    return false
  }

  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}
