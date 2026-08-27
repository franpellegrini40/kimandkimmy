export const LIFESTYLE_INTRO = {
  eyebrow: 'Lifestyle',
  heading: 'More than a network of clubs — a marketplace for how you live.',
  body: 'Invite-only gatherings and experiences with leading facilitators, longevity products and services, and venue access across a growing regenerative network.',
}

export const GATHERING_FORMATS = [
  {
    key: 'experience',
    label: 'Experiences',
    duration: 'A single activation',
    description: 'One session, one evening, one moment — padel, sound healing, a long-table dinner. No commitment beyond the day.',
  },
  {
    key: '1-day',
    label: '1-Day Gathering',
    duration: 'A single day',
    description: 'A full day built around one theme — wellness, connection or work — with a small circle of members.',
  },
  {
    key: '3-day',
    label: '3-Day Gathering',
    duration: 'A long weekend',
    description: 'Enough time to actually reset — sessions, movement and real conversation, away from daily noise.',
  },
  {
    key: '5-day',
    label: '5-Day Gathering',
    duration: 'A full week',
    description: 'The deepest format — the kind of week that changes how you see the year ahead.',
  },
] as const

// Only list dates/details we can stand behind — "Coming soon" stays undated until confirmed.
export const UPCOMING_GATHERINGS = [
  {
    key: 'ibiza-founding',
    name: 'VIVRA Founding Gathering',
    location: 'Can Aylma, Ibiza, Spain',
    dates: 'October 4–9, 2026',
    format: '5-Day Gathering',
    status: 'open',
    href: '/ibiza',
  },
  {
    key: 'puglia',
    name: 'Puglia Gathering',
    location: 'Puglia, Italy',
    dates: 'December 2026',
    format: 'Coming soon',
    status: 'soon',
    href: null,
  },
] as const
