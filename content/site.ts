export type SiteId = 'vivra-world' | 'join-vivra'

// The header shows no inline links: everything lives behind the menu button
// (three lines), on every screen size. MENU_PRIMARY are the home-page chapters
// in scroll order; MENU_SECONDARY are the standalone pages.
export const MENU_PRIMARY = [
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'How it works', href: '/#how' },
  { label: 'Experiences', href: '/#ibiza' },
  { label: 'Membership', href: '/#members' },
  { label: 'Ecosystem', href: '/#ecosystem' },
  { label: 'Venues', href: '/#venues' },
  { label: 'Passport', href: '/#passport' },
  { label: 'Log in', href: '/login' },
]

export const LOGIN = { label: 'Log in', href: '/login' }

export const MENU_SECONDARY = [
  { label: 'Planetary Commons', href: '/#commons' },
  { label: 'Our story', href: '/#founders' },
  { label: 'Impact', href: '/impact' },
  { label: 'News', href: '/news' },
  { label: 'Concierge', href: '/concierge' },
  { label: 'Contact', href: '/contact' },
]

// Kept for any page that still imports it.
export const NAV_ITEMS = [{ label: 'VIVRA', href: '/' }, ...MENU_PRIMARY]

export const CTA_COPY = {
  join: 'Join VIVRA',
  ibiza: 'Join the Founding Retreat',
  discover: 'Discover VIVRA',
  earlyAccess: 'Request Early Access',
  alliance: 'Join VIVRA World Alliance',
  invite: 'Request invitation',
} as const

export const FOOTER_LINKS = {
  primary: [
    { label: 'Request invitation', href: '/#apply' },
    { label: 'Membership', href: '/membership' },
    { label: 'World Alliance', href: '/alliance' },
    { label: 'Experiences', href: '/#ibiza' },
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
