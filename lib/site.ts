export type SiteId = 'vivra-world' | 'join-vivra'

const JOIN_DOMAIN = process.env.NEXT_PUBLIC_JOIN_DOMAIN || 'joinvivra.com'

export function getSiteFromHost(host: string | null): SiteId {
  if (host && host.includes(JOIN_DOMAIN.split('.')[0])) return 'join-vivra'
  return 'vivra-world'
}

// Francisco chose option A (2026-11-28): worldvivra.com is the one site
// (joinvivra.com and livevivra.com redirect to it), so every page uses the
// VIVRA World metadata and no page reads the request host. That keeps pages
// static, built once and served from the CDN instead of rendered per visit.
export const CURRENT_SITE: SiteId = 'vivra-world'

export async function getCurrentSite(): Promise<SiteId> {
  return CURRENT_SITE
}

export const SITE_META = {
  'vivra-world': {
    name: 'VIVRA World',
    domain: 'worldvivra.com',
    tagline: 'Live longer. Think bigger. Leave it better.',
  },
  'join-vivra': {
    name: 'VIVRA',
    domain: 'joinvivra.com',
    tagline: 'Change within. Impact beyond. A community of communities: curated gatherings in venues that have a soul.',
  },
} as const
