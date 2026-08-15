// Sourced directly from Vivra_Tier_Benefits_V2.pdf (approved). Pricing intentionally
// omitted per instruction — pricing to be announced.

export const MEMBERSHIP_TIER_NAMES = [
  { slug: 'explorer', name: 'Explorer', tagline: 'The most accessible way in.' },
  { slug: 'member', name: 'Member', tagline: 'The middle tier — deeper access.' },
  { slug: 'legacy', name: 'Legacy', tagline: 'The most premium tier.' },
] as const

export const MEMBERSHIP_BENEFITS: { label: string; values: [string, string, string] }[] = [
  {
    label: 'Executive coaching — top global coaching academies',
    values: ['1 session a year', '2 sessions a year', '4 sessions a year (every 3 months)'],
  },
  {
    label: 'QHHT healing session with Saha, incl. follow-up',
    values: ['1 session a year', '2 sessions a year', 'Priority access, up to 6 sessions every 2 months'],
  },
  {
    label: 'Sustainability & regenerative-economy workshop + Annual Report',
    values: ['Included', 'Included + Air Purifier', 'Included + Air Purifier + Recycled Gift'],
  },
  {
    label: 'Free nights in VIVRA venues ($150/night value, blackout-managed)',
    values: ['2 nights/year, low priority', '4 nights/year, medium priority', '7 nights/year, high priority'],
  },
  {
    label: 'Welcome kit, seal-embossed',
    values: [
      'Travel tag + amenity set',
      'Leather travel tag + linen/robe set + clothing',
      'Full linen & robe set + water vessel + leather tag + clothing',
    ],
  },
  {
    label: '24/7 concierge — human + AI',
    values: ['Included', 'White-glove', 'White-glove + dedicated contact'],
  },
  {
    label: 'Annual event ceremony (bronze seal ritual)',
    values: ['At discounted price', 'Included', 'Included + Founding wall naming'],
  },
  {
    label: 'VIVRA Longevity Panel — medical exams + follow-ups',
    values: [
      'Essentials (~26 biomarkers) + follow-up',
      'Comprehensive (~45 biomarkers) + follow-up',
      'Full Protocol (70+ biomarkers) + dedicated follow-up',
    ],
  },
  {
    label:
      'Marketplace & partner discounts (gyms, spas, nutrition, restaurants, co-working, clothing, supplements, retreats & experiences)',
    values: ['Up to 15%', 'Up to 20%', 'Up to 30%'],
  },
  {
    label: 'Personal regeneration ledger / impact report',
    values: ['Included', 'Included', 'Included + permanent founding record'],
  },
  {
    label: 'Priority booking — retreats & events',
    values: ['48 hrs', '72 hrs', 'First access, guaranteed seats'],
  },
  {
    label: 'Venue access at membership price',
    values: [
      '10% high season, 15% low season',
      '15% high season, 20% low season',
      '20% low season, 30% high season',
    ],
  },
  {
    label: 'Founding Advisory Circle seat',
    values: ['—', '—', 'Included'],
  },
  {
    label: 'Family / spouse privilege add-on',
    values: ['—', '—', 'Included'],
  },
]

export const MEMBERSHIP_TERMS = [
  'Minimum 3-month membership to cancel.',
  '30% discount for members of clubs already part of the VIVRA World Alliance.',
  '10% discount when paying annually.',
  'More benefits will be added.',
]

export const LONGEVITY_PANEL = {
  heading: 'The VIVRA Longevity Panel',
  subheading: 'Longevity Consultation — all-in model.',
  tiers: [
    {
      name: 'Explorer',
      label: 'Essentials',
      points: [
        '~26 biomarkers (heart, hormone, inflammation, metabolism core panel)',
        'Blood pressure check + wellness questionnaire',
        '1 consultation / year',
      ],
    },
    {
      name: 'Member',
      label: 'Comprehensive',
      points: [
        '~45 biomarkers (adds endurance, liver/kidney, recovery panels)',
        '3D body scan, 2x/year + fitness assessment',
        '2 consultations / year',
      ],
    },
    {
      name: 'Legacy',
      label: 'Full Protocol',
      points: [
        '70+ biomarkers (full Omni All-in-equivalent panel)',
        '3D body scan quarterly, VO₂ Max, mobility & strength eval',
        'Quarterly consult with a dedicated longevity curator + personalized meal plan',
      ],
    },
  ],
}
