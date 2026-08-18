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
    domain: 'worldvivra.com',
    tagline: 'Live longer. Think bigger. Leave it better.',
  },
  'join-vivra': {
    name: 'VIVRA Founding Gathering',
    domain: 'joinvivra.com',
    tagline: '1st Founding Gathering · By Invitation Only · Few Places — Can Aylma, Ibiza.',
  },
} as const
