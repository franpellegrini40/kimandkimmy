export const ECOSYSTEM_INTRO = {
  eyebrow: 'The VIVRA Ecosystem',
  heading: 'Eight dimensions. One shared direction.',
  body: 'Each dimension strengthens the whole — bringing people, purpose and opportunity into one connected ecosystem.',
}

// The Ecosystem storytelling sequence that replaces Who Joins on the home
// page only — /ibiza keeps the original WhoJoins + ExperiencePillars
// components untouched, so this lives as its own export rather than
// reshaping theirs.
export const ECOSYSTEM_STORY = {
  intro: {
    eyebrow: 'Ecosystem',
    heading: 'The right people change what becomes possible.',
    body: 'A carefully curated mix of founders, investors, leaders, creators, wellbeing pioneers, digital nomads and regenerative builders — brought together by what they can discover, contribute and create.',
    image: '/images/vivra-gathering-table.jpg',
    imageAlt: 'The VIVRA circle gathered around the long table',
  },
  founding: {
    eyebrow: 'How VIVRA Began',
    heading: 'Built from lives already lived.',
    paragraphs: [
      'VIVRA began with a shared realization: success in one part of life means little when everything else remains disconnected.',
      'After decades building ventures, communities and new ideas across different parts of the world, our founding members came together at a similar moment in their lives. Each had explored a different dimension — wellbeing, human growth, enterprise, impact, travel, lifestyle and community.',
      'VIVRA emerged as the place where those paths could finally meet. Not as separate interests, but as one living ecosystem.',
    ],
    image: '/people/francisco-pellegrini.jpg',
    imageAlt: 'Francisco Pellegrini, Founder & CEO of VIVRA',
  },
  profiles: [
    { label: 'Builders', body: 'Turning ideas, experience and capital into meaningful progress.' },
    { label: 'Catalysts', body: 'Moving people, organizations and systems forward.' },
    { label: 'Creators', body: 'Shaping culture through new perspectives and forms of expression.' },
    { label: 'Practitioners', body: 'Expanding human wellbeing and potential through science, wisdom and practice.' },
    { label: 'Place-Makers', body: 'Creating exceptional settings for meaningful connection.' },
    { label: 'Explorers', body: 'Bringing curiosity, openness and a desire to experience life differently.' },
  ],
  manifesto: {
    eyebrow: 'A Physical Ecosystem of V.I.P.',
    eyebrowSub: 'Very Impactful People',
    heading: 'Not another network. A living one.',
    bodyLead:
      'VIVRA brings its ecosystem into the physical world through intimate gatherings, shared experiences and exceptional homes.',
    bodyContrast:
      'Because digital connection creates reach — but time together creates trust, unexpected ideas and relationships that move beyond the gathering itself.',
    lineDigital: 'Digital keeps the ecosystem connected.',
    linePhysical: 'Physical experiences make it real.',
    tagline: 'Different paths. One shared direction.',
    closing:
      'Every gathering is curated for chemistry, contribution and the possibilities that can only emerge together.',
    image: '/images/ecosystem-physical-gathering.jpg',
    imageAlt: 'A VIVRA circle gathered in conversation under a stone-vaulted ceiling',
  },
}

// Clockwise from top, matching the approved concept diagram.
// angle: degrees, SVG convention (0 = right, 90 = down, -90 = up).
// Reconnection is the one label on a single unbroken line sitting at the exact
// same height as its dot, so a centered label overlaps the dot; nudging it
// down clears the dot without widening the label (which would overflow the
// diagram's box on narrow screens). The other seven either stack diagonally
// or wrap to two lines and clear the dot on their own.
export const ECOSYSTEM_PILLARS = [
  { label: 'Wellbeing', angle: -90, left: 50, top: 12.86 },
  { label: 'Conscious Growth', angle: -45, left: 76.26, top: 23.74 },
  { label: 'Reconnection', angle: 0, left: 87.14, top: 58 },
  { label: 'Belonging', angle: 45, left: 76.26, top: 76.26 },
  { label: 'Lifestyle', angle: 90, left: 50, top: 87.14 },
  { label: 'Regenerative Travel', angle: 135, left: 23.74, top: 76.26 },
  { label: 'Purposeful Enterprise', angle: 180, left: 12.86, top: 50 },
  { label: 'Systemic Impact', angle: 225, left: 23.74, top: 23.74 },
] as const
