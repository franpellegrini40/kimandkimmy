// Sourced from Vivra_World_Alliance_Short_Overview.pdf (approved for public use — positioning
// and venue network only; partner names, deal terms and investor-facing framing intentionally
// excluded per instruction).

export const ALLIANCE_TAGLINE = "The world's first regenerative membership alliance."

export const ALLIANCE_POSITIONING = {
  eyebrow: 'VIVRA World Alliance',
  heading: 'The OneWorld of membership clubs.',
  body: "VIVRA connects existing clubs the way OneWorld connects airlines. Your club keeps its name, its members and its team — VIVRA adds a shared layer of venues, technology, lifestyle and impact on top. It's a B2B alliance: clubs join first, and their members follow.",
}

export const ALLIANCE_HOW_IT_WORKS = [
  { label: 'Your brand, your members', detail: 'Nothing about how you run your club changes — it stays yours.' },
  { label: 'Network-wide access', detail: 'Your members gain venue and event access across every partner in the alliance.' },
  { label: 'One shared currency', detail: 'Everyone earns and spends VIVRA Credits, anywhere in the network.' },
  { label: 'Tiers that map to yours', detail: 'Explorer, Member and Legacy sit on top of whatever tiers you already offer.' },
]

export const MEMBERSHIP_MANIFESTO = {
  heading: 'Not another club. A living exchange.',
  body: [
    'VIVRA brings together remarkable places, intimate gatherings, transformative learning and trusted longevity practices within one regenerative alliance.',
    'One membership opens the door to it all — wherever VIVRA takes you next.',
  ],
  closing: 'Join early. Help shape what comes next.',
}

export const ALLIANCE_INDEPENDENCE = {
  heading: 'Independent by nature. Stronger together.',
  body: [
    'VIVRA does for independent clubs what OneWorld did for airlines: it connects distinct brands without asking them to become the same.',
    'Each club keeps its identity, members and team. VIVRA expands what it can offer through shared access to remarkable venues, technology, lifestyle experiences and regenerative initiatives.',
    'Clubs join the alliance. Their members gain more ways to experience it.',
  ],
}

export const ALLIANCE_MEMBERSHIP = {
  heading: 'Members become VIPs — Very Impactful People.',
  body: 'Joining the alliance doesn’t hand your members another card — it upgrades the club itself. One membership, one wallet, one booking layer, member pricing everywhere they go. We call it the VIVRA Passport: a single credential that carries your access, your credits and your impact across every venue in the network. Every booking creates verified impact — clean-water credits and carbon offsets, tracked per member. Admission is by application.',
}

// `region` groups venues for the filter tabs on /venues. `tag` is an editorial
// descriptor (not a certified claim) — swap in anything more specific per venue.
export const ALLIANCE_VENUES = [
  { name: 'Holbox', location: 'Mexico', status: 'open', region: 'americas', tag: 'Car-Free Island', image: '/images/alliance/holbox.jpg' },
  { name: 'Puglia', location: 'Italy', status: 'open', region: 'europe', tag: 'Countryside Estate', image: '/images/alliance/puglia.jpg' },
  { name: 'Viirelaid', location: 'Estonia', status: 'open', region: 'europe', tag: 'Carbon Neutral Island', image: '/images/alliance/viirelaid.jpg' },
  { name: 'Koh Phangan', location: 'Thailand', status: 'open', region: 'asia', tag: 'Wellness Island', image: '/images/alliance/koh-phangan.jpg' },
  { name: 'Antigua', location: 'Caribbean', status: 'open', region: 'americas', tag: 'Beachfront', image: '/images/alliance/antigua.jpg' },
  { name: 'Ibiza', location: 'Spain', status: 'open', region: 'europe', tag: 'Founding Home', image: '/images/alliance/ibiza.jpg' },
  { name: 'Costa Rica', location: 'Central America', status: 'open', region: 'americas', tag: 'Rainforest Estate', image: '/images/alliance/costa-rica.jpg' },
  { name: 'Bali', location: 'Indonesia', status: 'soon', region: 'asia', tag: 'Cliffside', image: '/images/alliance/bali.jpg' },
  { name: 'Sri Lanka', location: 'Indian Ocean', status: 'open', region: 'asia', tag: 'Ocean Retreat', image: '/images/alliance/sri-lanka.jpg' },
  { name: 'Dubai', location: 'UAE', status: 'soon', region: 'middle-east', tag: 'Desert Gateway', image: '/images/alliance/dubai.jpg' },
  { name: 'Hamptons', location: 'USA', status: 'soon', region: 'americas', tag: 'Coastal Estate', image: '/images/alliance/hamptons.jpg' },
  { name: 'Patagonia', location: 'Argentina', status: 'soon', region: 'americas', tag: 'Wild Frontier', image: '/images/alliance/patagonia.jpg' },
] as const

export const ALLIANCE_VENUES_INTRO = {
  eyebrow: 'The network',
  heading: '12 destinations, five continents — and growing.',
  body: 'A regenerative hospitality network, each venue upgraded to the same standard. Eight are open today; the rest are on their way.',
}

export const ALLIANCE_BENEFITS = [
  'Your members gain access across every venue and event in the network',
  'A shared booking layer and one wallet — VIVRA Credits, earned and spent anywhere',
  'Verified impact on every booking, tracked per member',
  'A tier structure that layers on top of what you already offer',
]
