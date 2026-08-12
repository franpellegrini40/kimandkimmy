import { headers } from 'next/headers'

export type SiteId = 'vivra-world' | 'join-vivra'

const JOIN_DOMAIN = process.env.NEXT_PUBLIC_JOIN_DOMAIN || 'joinvivra.com'

export function getSiteFromHost(host: string | null): SiteId {
  if (host && host.includes(JOIN_DOMAIN.split('.')[0])) return 'join-vivra'
  return 'vivra-world'
}

export async function getCurrentSite(): Promise<SiteId> {
  const h = await headers()
  return getSiteFromHost(h.get('x-forwarded-host') || h.get('host'))
}

export const SITE_META = {
  'vivra-world': {
    name: 'VIVRA World',
    domain: 'vivra.world',
    tagline: 'A global community exploring new dimensions of wellbeing, longevity and human potential.',
  },
  'join-vivra': {
    name: 'VIVRA — Founding Retreat',
    domain: 'joinvivra.com',
    tagline: 'Ibiza. The first expression of VIVRA.',
  },
} as const
