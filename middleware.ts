import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Canonicalizes both domains to their apex (non-www) form. Both worldvivra.com and
// joinvivra.com are added to the SAME hosting project — the host header alone is
// what makes app/page.tsx render the right homepage (see lib/site.ts).
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone()
    url.host = host.replace('www.', '')
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
