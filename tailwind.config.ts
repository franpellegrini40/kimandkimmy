// CONTENT NEEDED: approved tier names, positioning and benefits from the brochure.
// Kept intentionally sparse — do not invent benefit claims.

export type Tier = {
  slug: string
  name: string
  audience: string
  benefits: string[]
  status: 'Coming Soon'
}

export const MEMBERSHIP_TIERS: Tier[] = [
  {
    slug: 'founding-member',
    name: 'Founding Member',
    audience: 'PENDING — who this tier is designed for',
    benefits: ['PENDING — approved benefit copy'],
    status: 'Coming Soon',
  },
  {
    slug: 'global-member',
    name: 'Global Member',
    audience: 'PENDING — who this tier is designed for',
    benefits: ['PENDING — approved benefit copy'],
    status: 'Coming Soon',
  },
]

export const ALLIANCE_BENEFITS = [
  'PENDING — approved Alliance value proposition from the brochure',
]
