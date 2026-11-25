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

// [DECK] slide 12, Facilitators (Nov 2026 version): names, roles and the link
// on each photo come from the deck. Brian Nathan Siegal removed and Lola Vinagre
// added on Francisco's instruction, 2026-11-24. Photos: largest originals on
// file, all cropped to the same 4:5 frame with the eyes at the same height.
// CONFIRM: each facilitator's consent to be named on the public site.
export const FACILITATORS = [
  { name: 'Anaïs Verena Garcia y Boullosa', role: 'Holistic wellbeing doctor', image: '/people/anais-garcia.jpg', href: 'https://www.linkedin.com/in/verena-garcia-y-boullosa/' },
  { name: 'Saha', role: 'Energy healer · QHHT and reconnective healing', image: '/people/saha.jpg', href: 'https://www.facebook.com/sahan.abeysekera' },
  { name: 'Diana Maldonado', role: 'Wellness and healing', image: '/people/diana.jpg', href: 'https://humanstatemastery.com/' },
  { name: 'Dunja Will', role: 'Animal communicator · healer', image: '/people/dunja.jpg', href: 'https://outbackwhisperer.com/' },
  { name: 'Mallika Bajaj', role: 'Embodied leadership · wellness', image: '/people/mallika-bajaj.jpg', href: 'https://www.instagram.com/svyaglobal/' },
  { name: 'Lola Vinagre', role: 'Flagship executive chef · Ayurvedic food expert', image: '/people/lola-vinagre.jpg', href: 'https://www.instagram.com/lolavinagre/' },
  // Added by Francisco, 2026-11-24.
  { name: 'Anna Stepanova', role: 'Events, membership & guest experience', image: '/people/anna-stepanova.jpg', href: 'https://www.linkedin.com/in/anna-stepanova-dxb/' },
  // Added by Francisco, 2026-11-25 (Diva_Profile.pdf).
  { name: 'Diva Purba Slamet', role: 'Holistic wellness', image: '/people/diva-purba-slamet.jpg', href: 'https://www.instagram.com/diva.alchemy/' },
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
// [RECORD] A6 + [DECK] slide 7 ("Ibiza ran"). Francisco, 2026-11-17: the gathering
// was five days at Can Aylma (October 4 to 9, as originally announced); the
// facilitated See / Reimagine / Act workshop ran on three of them (5 to 7 October).
export const IBIZA = {
  eyebrow: 'First founding gathering · Delivered',
  heading: 'Ibiza, October 2026. Five days at Can Aylma.',
  body: [
    'Our first gathering took place at Can Aylma, Ibiza, from 4 to 9 October 2026. A small group, by invitation, in a 200-year-old finca.',
    'At its centre was a three-day workshop facilitated by Sharon Cittone: see, reimagine, act. The group mapped the systems it works in, worked through each other’s projects and closed with a 90-day commitment lab. It left ten written commitments.',
  ],
  facts: [
    { value: '5', label: 'Days at Can Aylma' },
    { value: '10', label: 'Written commitments' },
    { value: '90', label: 'Days to deliver them' },
  ],
  days: [
    {
      step: 'Workshop day 1',
      label: 'See',
      body: 'We asked what we are getting wrong about the future, and mapped the systems behind the answers.',
    },
    {
      step: 'Workshop day 2',
      label: 'Reimagine',
      body: 'Every project in the room was presented, then worked on by the whole group.',
    },
    {
      step: 'Workshop day 3',
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
  // Photos from the Ibiza founding gathering, October 2026 (Francisco, 2026-11-24).
  items: [
    { label: 'The circle', caption: 'Workshops and masterclasses', src: '/images/ibiza-2026/ritual-circle.jpg', alt: 'The founding gathering group at the long table after the systems workshop, Can Aylma' },
    { label: 'Long table', caption: 'Deep conversations and networking', src: '/images/ibiza-2026/ritual-long-table.jpg', alt: 'Participants working together over the systems map at Can Aylma' },
    { label: 'Ceremonies', caption: 'Shared meals and rituals', src: '/images/ibiza-2026/ritual-ceremonies.jpg', alt: 'Candle-lit dinner at the long table, Can Aylma' },
    { label: 'Movement', caption: 'Wellness', src: '/images/ibiza-2026/ritual-movement.jpg', alt: 'Sunrise movement practice on the wooden deck at Can Aylma' },
    { label: 'Holistic wellbeing', caption: 'Rest and recovery', src: '/images/ibiza-2026/ritual-wellbeing.jpg', alt: 'Evening in the pool among the banana leaves at Can Aylma' },
  ],
}

// The rhythm of a VIVRA day, in Francisco's words (2026-11-24).
export const DAY_RHYTHM = [
  {
    time: 'Morning',
    purpose: 'To move',
    body: 'Wellness and human connection, mixed with fitness and nature: yoga, breathwork, Alchemy Rewire, sound healing and more, to reset before the day. Free-will activity.',
  },
  {
    time: 'Midday',
    purpose: 'To work',
    body: 'Masterclass sessions on longevity, systemic impact, the regenerative economy and conscious leadership. Group workshops.',
  },
  {
    time: 'Afternoon',
    purpose: 'To wrap up',
    body: 'Mastermind work and teamwork, finishing with spa and wellness.',
  },
  {
    time: 'Evening',
    purpose: 'To relax and renew',
    body: 'Flagship private-chef long-table dinner, curated conversations, fire circle ceremonies and group healing sessions.',
  },
]

// [LOVABLE] platform section. Platform copy stays in the future tense until the MVP is live.
export const PLATFORM = {
  eyebrow: 'VIVRA platform MVP · Coming live soon',
  heading: 'One platform for how you live.',
  body: 'Invite-only events, masterclasses, wellbeing services and venue access across a growing regenerative network. One membership, one wallet and one booking layer.',
  demoNote: 'Sample figures are demo data. Impact verification and tracking to be confirmed before launch.',
  // Partners named by Francisco, 2026-11-24. Fondazione Rebecca has no logo on
  // file yet, so it shows as a name until one is supplied.
  impact: {
    eyebrow: 'Impact layer',
    heading: 'Built with our impact partners.',
    body: 'The impact layer of the VIVRA passport is being built with the Join The Planet Foundation and Fondazione Rebecca, together with Better World, so that every booking becomes a measurable, regenerative contribution.',
    photo: {
      src: '/images/impact/join-the-planet-messi.jpg',
      alt: 'Lionel Messi with the Join The Planet boot',
      href: 'https://www.jointheplanetproject.org/',
    },
    partners: [
      { name: 'Join The Planet Foundation', href: 'https://www.jointheplanetproject.org/', logo: '/images/partners/join-the-planet.png', w: 250, h: 162 },
      { name: 'Fondazione Rebecca', href: 'https://fondazionerebecca.com/', logo: null, w: 0, h: 0 },
      { name: 'Better World', href: 'https://betterworld.studio/', logo: '/images/partners/better-world.png', w: 1376, h: 359 },
    ],
  },
}

// [RECORD] A11 — vision, not a group decision; wording approved for public copy.
// Proof of concept and validation. Facts from the November 2026 investor deck
// (slides 6, 7, 8) and Francisco's instructions of 2026-11-24: Ibiza and the
// Planetary Commons are VIVRA's proofs of concept; an MOU is placed with GENT
// Club and the World Impact Forum; VIVRA is working with the Milan
// Longevity Summit through Sharon Cittone. No terms or figures are published.
export const COMMONS = {
  eyebrow: 'Proof of concept · Validation',
  heading: 'Proof, not projection.',
  intro: 'VIVRA is already running. Two proofs of concept, and the first communities plugging in.',
  items: [
    {
      key: 'ibiza',
      status: 'Proof of concept · Delivered',
      title: 'Ibiza founding gathering',
      body: 'Five days at Can Aylma in October 2026. A curated group, a three-day workshop, and ten written 90-day commitments.',
      href: '/#ibiza',
      linkLabel: 'See the gathering',
      logos: [],
    },
    {
      key: 'commons',
      status: 'Proof of concept · In set-up',
      title: 'The Planetary Commons',
      body: 'An ecosystem that plugged into VIVRA. The projects at the Ibiza gathering drew one shared band across their map: a common infrastructure for regenerative ecosystems. VIVRA is its coordinator and physical layer, and taking part in it is the ultimate upgrade of a VIVRA membership.',
      href: null,
      linkLabel: '',
      logos: [],
    },
    {
      key: 'alliance',
      status: 'Partnership · In progress',
      title: 'GENT Club and the World Impact Forum',
      body: 'The first communities to join the alliance, bringing their members into the VIVRA layer.',
      href: null,
      linkLabel: '',
      logos: [
        { src: '/images/partners/gent.png', alt: 'GENT Club', w: 726, h: 688, light: true },
        { src: '/images/partners/world-impact-forum.png', alt: 'World Impact Forum', w: 267, h: 188, light: false },
      ],
    },
    {
      key: 'milan',
      status: 'Partnership · In progress',
      title: 'Milan Longevity Summit',
      body: 'We are working with the Milan Longevity Summit through Sharon Cittone, who leads the Longevity & Wellbeing conversation at VIVRA.',
      href: 'https://www.milanlongevitysummit.org/',
      linkLabel: 'milanlongevitysummit.org',
      logos: [],
    },
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
  note: 'Francisco will write to you to schedule a short call about your profile, our next gatherings and VIVRA membership.',
}

// [INTERVIEWS] Voices from founding members. Quotes are verbatim from the burned-in English
// subtitles of the 13 Oct 2026 interview clips (Downloads\VIVRA RETIRO\entrevistas);
// "…" marks a cut, nothing is reworded. Catalogue: fran-os task VIV-0011.
// Photos are clean stills from each clip, cropped above the subtitle band.
// Names from Francisco, 2026-11-25. Roles left empty unless already on the site.
// CONFIRM: written consent from each person (VIV-0011). Until Francisco confirms
// it in writing, the section renders on preview/staging only, never on production
// (see showTestimonials() in lib/flags.ts).
export const VOICES = {
  eyebrow: 'Voices from founding members',
  heading: 'In their words.',
  intro: 'Recorded at the first VIVRA gathering, October 2026.',
  items: [
    {
      clip: 'entrevista 13',
      quote: 'VIVRA events and gatherings is about bringing that collective power and that collective dreams into collective realities.',
      name: 'Saha',
      role: 'Energy healer',
      src: '/images/testimonials/voice-e13.jpg',
    },
    {
      clip: 'entrevista 17',
      quote: 'It represents a much broader platform for doing good in this world… It’s so scalable here.',
      name: 'Bill',
      role: '',
      src: '/images/testimonials/voice-e17.jpg',
    },
    {
      clip: 'entrevista22',
      quote: 'Each of us is doing our own thing, but hopefully together we could do something that actually lasts in time.',
      name: 'Sharon',
      role: '',
      src: '/images/testimonials/voice-e22.jpg',
    },
    {
      clip: 'entrevista9',
      quote: 'To me, VIVRA is a new way of living… We usually are divided between work, family, friendship and passion. We want to gather all this in the same place.',
      name: 'Manuele Monti',
      role: 'Co-founder, VIVRA',
      src: '/images/testimonials/voice-e9.jpg',
    },
    {
      clip: 'entrevista21',
      quote: 'I’m really excited to go back home and take all these different perspectives and best ideas and go demonstrate what it really means to be regenerative.',
      name: 'Drew',
      role: '',
      src: '/images/testimonials/voice-e21.jpg',
    },
  ],
}
