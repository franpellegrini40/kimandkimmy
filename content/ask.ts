// "Ask VIVRA": the guided questions in the site's chat assistant.
//
// Every answer is copy that is already approved and live on the site (the
// source is noted on each one). Nothing here is new: no prices, no partner
// terms, no dates that are not on the site. To change an answer, change the
// page it comes from first, then mirror it here.

export type AskLink = { label: string; href: string }
export type AskItem = { id: string; question: string; answer: string[]; links?: AskLink[] }

export const ASK_INTRO = {
  title: 'Ask VIVRA',
  greeting: 'Hello. Pick a question below, or write to our team if you don’t find what you need.',
}

export const ASK_ITEMS: AskItem[] = [
  {
    id: 'what',
    question: 'What is VIVRA?',
    // content/home.ts HERO.body and IS
    answer: [
      'A phygital layer giving communities access to exclusive benefits, extraordinary gatherings, wellbeing experiences, expert-led masterclasses and exceptional venues worldwide.',
      'Not another club or another retreat: a regenerative alliance, connecting communities and ecosystems through one shared platform.',
    ],
    links: [{ label: 'Discover VIVRA', href: '/#philosophy' }],
  },
  {
    id: 'how',
    question: 'How does it work?',
    // content/alliance.ts ALLIANCE_HOW_IT_WORKS
    answer: [
      'Communities, ecosystems and membership clubs integrate VIVRA as “plug and play”. Their members can join VIVRA at preferential rates and unlock exclusive benefits, wellbeing experiences and expert-led masterclasses through curated gatherings in exceptional venues.',
      'Our platform brings together retreats, events and flagship workshops, making it easy for members to discover and book their next impactful experience.',
    ],
    links: [{ label: 'See how it works', href: '/membership' }],
  },
  {
    id: 'gatherings',
    question: 'What happens at a gathering?',
    // content/home.ts HOW_INTRO.body and IBIZA.body
    answer: [
      'VIVRA combines intimate masterclasses, wellbeing experiences and carefully curated connections to help members rethink how they live, lead and contribute.',
      'Our first gathering took place at Can Aylma, Ibiza, from 4 to 9 October 2026: a small group, by invitation, around a three-day workshop facilitated by Sharon Cittone. It left ten written commitments.',
    ],
    links: [{ label: 'The Ibiza gathering', href: '/#ibiza' }],
  },
  {
    id: 'membership',
    question: 'Can I become a member?',
    // components/sections/ContactTeaser.tsx and content/home.ts APPLY
    answer: [
      'Membership isn’t live yet. Join the waitlist and we’ll reach out as soon as early access opens.',
      'Our team will contact you to schedule a short call about your profile, our next gatherings and VIVRA membership.',
    ],
    links: [{ label: 'Join the waitlist', href: '/apply/join' }],
  },
  {
    id: 'community',
    question: 'I lead a community or club. Can we join the alliance?',
    // content/alliance.ts ALLIANCE_INDEPENDENCE and ALLIANCE_HOW_IT_WORKS step 3
    answer: [
      'Yes. Each club keeps its identity, members and team. VIVRA expands what it can offer through shared access to remarkable venues, technology, lifestyle experiences and regenerative initiatives.',
      'Community leaders receive dedicated benefits and opportunities to collaborate, co-host gatherings and expand their network.',
    ],
    links: [{ label: 'Apply to join VIVRA Alliance', href: '/apply/alliance' }],
  },
  {
    id: 'venues',
    question: 'Where are the venues?',
    // app/venues/page.tsx
    answer: [
      'Venues with a soul across the VIVRA network: Ibiza, Puglia, Tuscany, Viirelaid, Holbox, Antigua, Costa Rica, Bali, Sri Lanka and Dubai. More venues are coming.',
    ],
    links: [
      { label: 'See the venues', href: '/venues' },
      { label: 'Propose a venue', href: '/apply/venue' },
    ],
  },
]
