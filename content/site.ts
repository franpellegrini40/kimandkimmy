export type SiteId = 'vivra-world' | 'join-vivra'

export const NAV_ITEMS = [
  { label: 'VIVRA', href: '/' },
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Ecosystem', href: '/#ecosystem' },
  { label: 'Venues', href: '/venues' },
  { label: 'Lifestyle', href: '/lifestyle' },
  { label: 'Alliance', href: '/alliance' },
  { label: 'Concierge', href: '/concierge' },
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
