export type SiteId = 'vivra-world' | 'join-vivra'

export const NAV_ITEMS = [
  { label: 'VIVRA', href: '/' },
  { label: 'Ibiza', href: '/ibiza' },
  { label: 'Experience', href: '/ibiza#experience' },
  { label: 'People', href: '/people' },
  { label: 'Membership', href: '/membership' },
  { label: 'Venues', href: '/venues' },
  { label: 'Alliance', href: '/alliance' },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact' },
]

export const CTA_COPY = {
  join: 'Join VIVRA',
  ibiza: 'Join the Founding Retreat',
  discover: 'Discover VIVRA',
  earlyAccess: 'Request Early Access',
  alliance: 'Join VIVRA World Alliance',
} as const

export const BRAND_PILLARS = {
  tagline: 'Balance to live longer. Backed to think bigger. Awareness to leave it better.',
  subtext: 'Where wellbeing becomes potential, travel becomes purpose, and connection becomes impact.',
}

export const FOOTER_LINKS = {
  primary: [
    { label: 'Join VIVRA', href: '/membership' },
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
