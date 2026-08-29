export type SiteId = 'vivra-world' | 'join-vivra'

// Header nav — deliberately kept to 5 items + the CTA (Lifestyle, Alliance,
// Concierge, Impact and Contact stay reachable via the footer and in-page
// CTAs, e.g. Hero's "See Your Passport" -> /impact, MembershipTeaser's
// "Explore Membership" -> /alliance — but are not primary-nav items).
export const NAV_ITEMS = [
  { label: 'VIVRA', href: '/' },
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Experiences', href: '/#experience' },
  { label: 'Ecosystem', href: '/#ecosystem' },
  { label: 'Venues', href: '/venues' },
  { label: 'Membership', href: '/#membership' },
]

export const CTA_COPY = {
  join: 'Join VIVRA',
  ibiza: 'Join the Founding Retreat',
  discover: 'Discover VIVRA',
  earlyAccess: 'Request Early Access',
  alliance: 'Join VIVRA World Alliance',
  invite: 'Request an Invitation',
} as const

export const FOOTER_LINKS = {
  primary: [
    { label: 'Join VIVRA', href: '/alliance' },
    { label: 'Ibiza Retreat', href: '/ibiza' },
    { label: 'World Alliance', href: '/alliance' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/vivra.world' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/vivra-world' },
  ],
}
