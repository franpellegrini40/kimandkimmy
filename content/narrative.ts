// Canonical VIVRA narrative reference — the single story every page, deck and
// piece of copy should read as one chapter of. Derived from the founder's 5W1H
// working sessions (Aug–Sep 2026); nothing here is invented, only distilled.
// Use this file as the source of truth before writing new copy anywhere —
// landing sections, the investor deck, brochures, social.

export const BRAND_POSITIONING =
  'VIVRA is the physical experience layer for transformative communities — curated gatherings, in exceptional homes, for people ready to turn success into meaningful action.'

export const BRAND_EXPLANATION_50 =
  "VIVRA brings together founders, investors, leaders and creators who've already succeeded, but feel the parts of their life — wellbeing, relationships, growth, impact — pulling apart. Through curated gatherings in exceptional private homes, respected practitioners, and a growing alliance of membership clubs, VIVRA reconnects what success usually separates."

export const BRAND_NARRATIVE_150 =
  "Modern success has connected us to more people and possibilities than ever — yet the parts of life that matter most often stay disconnected. Founders, investors, leaders and creators reach a point where what they've built, how they live and what they leave behind stop feeling like one story.\n\nVIVRA exists to bring them back together: the physical experience layer for transformative communities. Curate the right people. Bring them into exceptional private homes. Combine respected masterclasses, holistic wellbeing and facilitated connection. Turn insight into commitments, collaborations and action. Sustain it through follow-up, expert support and a growing global network — made available to selected clubs and communities without asking them to build any of it themselves.\n\nLive longer. Think bigger. Leave it better."

// WHO — three tiers, not one flat audience. Keep this hierarchy whenever WHO
// needs restating: the primary member is the one the copy is written for; the
// other two are context, not co-equal addressees.
export const AUDIENCE_TIERS = [
  {
    key: 'primary',
    label: 'Primary members',
    body: 'Founders, entrepreneurs, investors and next-generation leaders seeking personal wellbeing, meaningful connections and positive impact.',
  },
  {
    key: 'ecosystem',
    label: 'Ecosystem partners',
    body: 'Membership clubs, curated communities, practitioners, impact leaders and regenerative hospitality partners.',
  },
  {
    key: 'amplifiers',
    label: 'Amplifiers',
    body: 'Athletes, artists, creators and voices aligned with VIVRA values — people who bring others in by example, not by ad spend.',
  },
] as const

// HOW — the mechanism, in order. Each beat earns its place; don't reorder or
// pad it into a longer list.
export const VIVRA_FORMULA = [
  { key: 'masterclasses', label: 'Masterclasses', body: 'expand how you think.' },
  { key: 'wellbeing', label: 'Wellbeing practices', body: 'change how you feel.' },
  { key: 'masterminds', label: 'Masterminds', body: 'turn insight into action.' },
  { key: 'support', label: 'Ongoing expert support', body: 'makes it last.' },
] as const

// The three layers underneath every gathering — the connective structure that
// explains how the Ecosystem wheel, the Experience Pillars and VIVRA Makes
// Possible all relate to each other, rather than reading as separate systems.
// Use this to introduce or frame those sections, not to replace them.
export const THREE_LAYERS = [
  {
    key: 'physical',
    label: 'Physical Layer',
    body: 'Curated gatherings, transformative experiences and exceptional places.',
  },
  {
    key: 'community',
    label: 'Community Layer',
    body: 'A highly curated global network of members, experts and partner ecosystems.',
  },
  {
    key: 'digital',
    label: 'Digital & Wellbeing Layer',
    body: 'Continuous support, marketplace, expert access and relationship management between physical experiences.',
  },
] as const

// HOW VIVRA MAKES MONEY — plain, investor-legible, no jargon. This replaced a
// "[DATA REQUIRED]" placeholder on the investor deck's Business Model slide
// (2026-09-11) with the founder's own answer.
export const MONETIZATION = {
  heading: 'Three ways VIVRA earns — one shared system.',
  points: [
    'Membership fees — direct, or upgraded in through an allied club.',
    'A share of every gathering, masterclass and service booked through the VIVRA marketplace.',
    'A portion of that share paid back to the club or community that brought the member in — so the ecosystem grows by promoting VIVRA, not competing with it.',
  ],
}
