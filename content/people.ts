// Sourced from the approved brochure (Nº 07, "Meet the Facilitators" / "Meet the Organizer").
// ASSET NEEDED: a portrait photo for each person — see ASSETS_NEEDED.md.

export type Person = {
  slug: string
  name: string
  role: string
  bio: string
  quote: string
  category: 'founder' | 'host' | 'practitioner' | 'speaker'
  image?: string
}

export const PEOPLE: Person[] = [
  {
    slug: 'francisco-pellegrini',
    name: 'Francisco Pellegrini',
    role: 'Founder & CEO, VIVRA',
    bio:
      'Francisco brings over 15 years of international experience as an entrepreneur, venture builder and growth executive across the GCC, Europe and Latin America. He has launched and scaled businesses across multiple sectors, raised multimillion dollars in funding and expanded ventures into 15+ markets. At VIVRA, he leads the vision, strategy and growth of a new platform connecting wellbeing, longevity, human potential, systemic impact, healing and meaningful global communities.',
    quote:
      'VIVRA was born from a simple belief: the way we live, connect and grow can be more conscious, more meaningful and ultimately more human.',
    category: 'founder',
    image: '/people/francisco-pellegrini.jpg',
  },
  {
    slug: 'sharon-cittone',
    name: 'Sharon Cittone',
    role: 'Longevity & Wellbeing Lead — Systemic Impact',
    bio:
      'Sharon leads VIVRA’s Systemic Impact — exploring how food, health, longevity and planetary wellbeing are deeply connected. Founder and CEO of Edible Planet Ventures and a voice at the Milan Longevity Summit, she brings together science, innovation and collaboration to drive systemic change. She hosts the FoodTech Junkies podcast, serves as Global Chair for Food Innovation at G100, and advises organizations including the World Food Programme Italia and the World Agriculture Forum.',
    quote:
      'I believe the future of food is collaborative. I work every day creating and strengthening a global food ecosystem that touches on every vertical and gives all stakeholders the possibility to collaborate together.',
    category: 'speaker',
    image: '/people/sharon-cittone.jpg',
  },
  {
    slug: 'diana',
    name: 'Diana',
    role: 'Wellness — Founder, Human State Mastery',
    bio:
      'Diana is the founder of Human State Mastery and VIVRA’s retreat operator, bringing together yoga, breathwork and extensive experience curating private wellness retreats. Her work focuses on helping people become more present, grounded and connected — to themselves, to others and to the experience unfolding around them. She has co-founded empowerment experiences in Dubai and organized exclusive retreats in Oman, UAE, Sri Lanka, Bali, Kyrgyzstan and Ibiza.',
    quote:
      'Any person in any season of life can live better when they are regulated and connected, and that is the mission of Human State.',
    category: 'practitioner',
    image: '/people/diana.jpg',
  },
  {
    slug: 'saha',
    name: 'Saha',
    role: 'Healing — QHHT & Reconnective Healing',
    bio:
      'Bridging quantum science and deep intuition, Saha unlocks profound human transformation. As a Quantum Healing Hypnosis Technique (QHHT) and Reconnective Healing practitioner, he facilitates global sessions to break limiting patterns and activate the body’s innate wellbeing — guiding journeys from the head to the heart.',
    quote:
      'Healing is going from the head to the heart to reclaim our wholeness. I help people find peace in the present by healing the past.',
    category: 'practitioner',
    image: '/people/saha.jpg',
  },
  {
    slug: 'dunja',
    name: 'Dunja',
    role: 'Healing — Interspecies Communicator',
    bio:
      'Fluent in German, Arabic and English, Dunja’s most profound conversations happen beyond words. As an interspecies communicator and founder of Animal Assisted Intuitive Transformation (AAIT), she bridges the gap between humans and animals — through Pet Talks, facilitating global healing sessions with horses, household pets and wildlife.',
    quote:
      'I speak German, Arabic, and English, but my most rewarding conversations are the telepathic, energetic, and intuitive communications I have with other species.',
    category: 'practitioner',
    image: '/people/dunja.jpg',
  },
  {
    slug: 'manuele-monti',
    name: 'Manuele Monti',
    role: 'Co-Founder, VIVRA — CEO, Techbricks',
    bio:
      'Manuele Monti is an engineer, entrepreneur and venture builder who transformed a career spanning scientific research, financial engineering and global energy markets into building technology-driven companies. Today, he works with conscious entrepreneurs and impact-driven investors to advance innovation, wellbeing and a regenerative economy for future generations.',
    quote:
      'Building deep tech ventures for systemic change through regenerative capital.',
    category: 'founder',
    image: '/people/manuele-monti.jpg',
  },
]
