// Sourced from the approved brochure (Nº 06 "A Day, Imagined" / Nº 07 "Days One to Five").

export type AgendaDay = {
  day: number
  date: string
  title: string
  summary: string
  moments: string[]
}

export const AGENDA: AgendaDay[] = [
  {
    day: 0,
    date: 'Sunday, October 4',
    title: 'Arrivals',
    summary: 'Private arrivals and a slow first evening settling into Can Aylma.',
    moments: [
      'Private arrivals & transfer',
      'Welcome tea + orientation',
      'Settle · pool · garden · amenities',
      'Sunset ritual & welcome dinner',
    ],
  },
  {
    day: 1,
    date: 'Monday, October 5',
    title: 'Longevity & Wellbeing',
    summary:
      'Becoming a systemic leader — a shared foundation to explore complexity, systemic leadership and regenerative thinking.',
    moments: [
      'Morning — Yoga & Breathwork · Reset',
      'Midday — Longevity & Wellbeing; Future Systems by Sharon Cittone',
      'Afternoon — Longevity & Wellbeing; Future Systems by Sharon Cittone',
      'Evening — Sound healing · fireside dinner',
    ],
  },
  {
    day: 2,
    date: 'Tuesday, October 6',
    title: 'Regenerative Impact',
    summary:
      'Activate — ideas into impact. An immersive future-scenario experience designing a society where people, economies and nature thrive.',
    moments: [
      'Morning — Yoga / Breathwork · Reset',
      'Midday — Regenerative Economy Masterclass',
      'Afternoon — Regenerative Economy Masterclass',
      'Evening — Curated conversation dinner',
    ],
  },
  {
    day: 3,
    date: 'Wednesday, October 7',
    title: 'Conscious Leadership',
    summary:
      'Very Impactful People — defining each participant’s 90-day commitment and creating pathways for continued impact beyond the retreat.',
    moments: [
      'Morning — Yoga with Sound Healing',
      'Midday — Conscious Leadership Mastermind',
      'Afternoon — Conscious Leadership Mastermind · Spa & wellness (choice)',
      'Evening — Spanish dinner',
    ],
  },
  {
    day: 4,
    date: 'Thursday, October 8',
    title: 'Integrate',
    summary: 'Turning insight into practice — presenting VIVRA World and closing the circle.',
    moments: [
      'Morning — Mindful walk in nature',
      'Midday — Presenting VIVRA World · 90-day commitments + matching',
      'Afternoon — Closing Circle & VIVRA Membership Presentation',
      'Evening — Celebration dinner & Reconnective Healing',
    ],
  },
  {
    day: 5,
    date: 'Friday, October 9',
    title: 'Enjoy & Ready to Depart',
    summary: 'A calm, unhurried departure.',
    moments: [
      'Morning — Yoga & Equine Healing (optional) · Transfer to the airport (from morning)',
      'Midday — Free time — enjoy the amenities',
      'Afternoon — Free time — enjoy the amenities · Check-out max 6pm',
      'Evening — Transfer to the airport',
    ],
  },
]
