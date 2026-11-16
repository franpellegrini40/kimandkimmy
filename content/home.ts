// Home page (site v3) content.
//
// Structure follows the Lovable prototype (vivra-world.lovable.app). Copy comes
// from three approved sources only:
//   [LOVABLE]  the Lovable prototype
//   [DECK]     VIVRA · Investor Deck 2026 (Nov 2026) — public-safe lines only;
//              pricing, financials, round terms and partner deal terms stay out
//   [RECORD]   the Ibiza retreat record, via "VIVRA - Landing and MVP Copy
//              2026-10-19.md" (section codes A1–A14 quoted below)
// Anything marked CONFIRM is waiting on Francisco before it goes live.

export const HERO = {
  claims: ['Live longer', 'Think bigger', 'Leave it better'],
  headline: ['Change within.', 'Impact beyond.'],
  badge: 'Coming soon',
  // [DECK] slide 1
  body: 'A phygital layer giving communities access to exclusive benefits, extraordinary gatherings, wellbeing experiences, expert-led masterclasses and exceptional venues worldwide.',
  // [LOVABLE] hero stats
  stats: [
    { value: '11', label: 'Destinations' },
    { value: '5', label: 'Continents' },
    { value: '4', label: 'Conversations' },
    { value: '1', label: 'Alliance' },
  ],
}

// [LOVABLE] "What VIVRA is not / What VIVRA is"
export const IS_NOT = [
  'Another club.',
  'Another retreat.',
  'A standalone community competing for your members.',
  'A retreat that ends when you leave.',
  'A membership built around discounts alone.',
]

export const IS = [
  'A regenerative alliance.',
  'Connecting communities and ecosystems through one shared platform.',
  'Giving members access to extraordinary gatherings, world-class experts and wellbeing experiences.',
  'Building lasting connections that turn personal growth into collective, verified and tracked impact.',
]

// [LOVABLE] How it works intro
export const HOW_INTRO = {
  eyebrow: 'How it works',
  heading: 'A gathering should change more than your network.',
  body: 'VIVRA combines intimate masterclasses, wellbeing experiences and carefully curated connections to help members rethink how they live, lead and contribute.',
}

// [DECK] slide 12, Facilitators. CONFIRM: each facilitator's consent to be
// named on the public site (the Lovable prototype showed them unnamed).
export const FACILITATORS = [
  { name: 'Anaïs Verena Garcia y Boullosa', role: 'Holistic wellbeing doctor', image: '/people/anais-garcia.jpg' },
  { name: 'Saha', role: 'Energy healer · QHHT and reconnective healing', image: '/people/saha.jpg' },
  { name: 'Diana Maldonado', role: 'Wellness and healing', image: '/people/diana.jpg' },
  { name: 'Dunja Will', role: 'Animal communicator · healer', image: '/people/dunja.jpg' },
  { name: 'Mallika Bajaj', role: 'Embodied leadership · wellness', image: '/people/mallika-bajaj.jpg' },
  { name: 'Brian Nathan Siegal', role: 'Performance coach · leadership', image: '/people/brian-siegal.jpg' },
]

export const EXPERT = {
  name: 'Sharon Cittone',
  role: 'Longevity & Wellbeing Lead · Systemic Impact',
  body: 'Sharon leads the Longevity & Wellbeing conversation across the VIVRA alliance. She facilitated our first founding gathering in Ibiza.',
  portrait: '/people/sharon-cittone.jpg',
  workshopImage: '/images/sharon-workshop.webp',
  pdf: '/downloads/vivra-world-flagship-workshop.pdf',
}

// The first founding gathering, now delivered.
// [RECORD] A6 + [DECK] slide 7 ("Ibiza ran").
export const IBIZA = {
  eyebrow: 'First founding gathering · Delivered',
  heading: 'Ibiza, October 2026. Three days: see, reimagine, act.',
  body: [
    'Our first gathering took place at Can Aylma, Ibiza, from 5 to 7 October 2026. A small group, by invitation, in a 200-year-old finca, facilitated by Sharon Cittone.',
    'The group mapped the systems it works in, worked through each other’s projects and closed with a 90-day commitment lab. It left ten written commitments.',
  ],
  facts: [
    { value: '3', label: 'Days at Can Aylma' },
    { value: '10', label: 'Written commitments' },
    { value: '90', label: 'Days to deliver them' },
  ],
  days: [
    {
      step: 'Day 1',
      label: 'See',
      body: 'We asked what we are getting wrong about the future, and mapped the systems behind the answers.',
    },
    {
      step: 'Day 2',
      label: 'Reimagine',
      body: 'Every project in the room was presented, then worked on by the whole group.',
    },
    {
      step: 'Day 3',
      label: 'Act',
      body: 'A 90-day action lab. Each commitment written on a card, with a name and a date.',
    },
  ],
  photos: [
    { src: '/images/ibiza-2026/systems-mapping.jpg', alt: 'Participants mapping systems on paper at Can Aylma, Ibiza', caption: 'Systems mapping' },
    { src: '/images/ibiza-2026/morning-practice.jpg', alt: 'Morning practice on the open deck at Can Aylma', caption: 'Morning practice' },
    { src: '/images/ibiza-2026/long-table.jpg', alt: 'The group working around the long table at Can Aylma', caption: 'Project clinics' },
    { src: '/images/ibiza-2026/group.jpg', alt: 'The founding gathering group at Can Aylma, Ibiza, October 2026', caption: 'The founding group' },
  ],
  // [DECK] slide 6: Puglia gathering, scheduled December 2026.
  // CONFIRM: venue and exact dates before announcing more than month and region.
  next: {
    eyebrow: 'We will gather more',
    heading: 'Next gathering: Puglia, Italy. December 2026.',
    cta: 'Request an invitation',
  },
}

// [RECORD] A2 + A3 — unsigned notes from the walls of the Ibiza gathering.
export const WALL = {
  eyebrow: 'From the walls of our first gathering',
  wrong: {
    heading: 'What are we getting wrong?',
    intro: 'In Ibiza we asked the room what we are getting wrong about the future. The answers went on the wall.',
    notes: [
      'Extraction instead of mutualism.',
      'Need versus greed.',
      'Rugged individualism versus collaboration.',
      'Capital first, shareholder value, return on investment.',
      'We are optimising towards more work.',
    ],
  },
  right: {
    heading: 'And if we got it right?',
    intro: 'The second wall held what the room wanted instead.',
    notes: [
      'Finance as a tool for holistic wellbeing.',
      'No division between work, family and community.',
      'Profit as an outcome of added value.',
      'From transaction to relationships.',
      'Stewards for the next generations.',
    ],
  },
  footnote: 'Written on the walls of our first gathering. Ibiza, October 2026.',
}

// [LOVABLE] "A day at VIVRA — Rituals, not amenities."
export const RITUALS = {
  eyebrow: 'A day at VIVRA',
  heading: 'Rituals, not amenities.',
  items: [
    { label: 'The circle', src: '/images/villa-evening-gathering.jpg', alt: 'An evening circle at Can Aylma' },
    { label: 'Long table', src: '/images/ibiza-2026/long-table.jpg', alt: 'The long table at Can Aylma' },
    { label: 'Fire circle', src: '/images/villa-firepit.jpg', alt: 'The fire pit at Can Aylma' },
    { label: 'Movement', src: '/images/ibiza-2026/morning-practice.jpg', alt: 'Morning movement practice at Can Aylma' },
    { label: 'Salt water pool', src: '/images/villa-pool.jpg', alt: 'The salt water pool at Can Aylma' },
  ],
}

// [LOVABLE] platform section. Platform copy stays in the future tense until the MVP is live.
export const PLATFORM = {
  eyebrow: 'VIVRA platform MVP · Coming live soon',
  heading: 'One platform for how you live.',
  body: 'Invite-only events, masterclasses, wellbeing services and venue access across a growing regenerative network. One membership, one wallet and one booking layer.',
  demoNote: 'Sample figures are demo data. Impact verification and tracking to be confirmed before launch.',
  impact: {
    eyebrow: 'Impact layer',
    heading: 'With the Join The Planet Foundation.',
    body: 'The impact layer of the VIVRA passport is being built together with the Join The Planet Foundation, so that every booking becomes a measurable, regenerative contribution.',
  },
}

// [RECORD] A11 — vision, not a group decision; wording approved for public copy.
export const COMMONS = {
  eyebrow: 'The long view',
  heading: 'Part of something larger: the Planetary Commons.',
  body: [
    'At the Ibiza gathering, the projects in the room drew one band across the top of their map: the Planetary Commons. A shared infrastructure for regenerative ecosystems, owned collectively rather than by any single project.',
    'VIVRA’s place in it is the physical layer. We convene the people and run the gatherings where this work becomes real. For our members, the long view is simple: the ultimate upgrade of a VIVRA membership is to take part in the Planetary Commons.',
  ],
  note: 'The Planetary Commons is still being designed. We will share each step with our members.',
}

// [RECORD] A12 — Francisco's own words. CONFIRM: reads as you.
export const FOUNDER_NOTE = {
  eyebrow: 'A note from the founder',
  heading: 'Why I am building VIVRA.',
  body: 'I am not a retreat manager. A retreat ends. What I want to build is the spine that keeps an ecosystem standing: the place where people, venues and communities stay connected after the gathering, and where we track the impact we create together. That is why we want to stay close to every member.',
  signature: 'Francisco Pellegrini, Founder & CEO',
}

export const APPLY = {
  eyebrow: 'Join VIVRA',
  heading: 'Request early access.',
  body: 'A few details so we can understand where you would like to connect with VIVRA.',
  note: 'Membership isn’t live yet. Join the waitlist and we’ll reach out as soon as early access opens.',
}
