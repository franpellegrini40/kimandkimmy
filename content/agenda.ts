// CONTENT NEEDED: real multi-day agenda from the brochure. Skeleton kept intentionally
// generic (arrival / integration / departure) since no specific day-by-day content has
// been supplied yet — replace before launch.

export type AgendaDay = {
  day: number
  title: string
  summary: string
  moments: string[]
}

export const AGENDA: AgendaDay[] = [
  {
    day: 1,
    title: 'Arrival & Connection',
    summary: 'PENDING — confirm from brochure agenda',
    moments: ['PENDING'],
  },
  {
    day: 2,
    title: 'PENDING',
    summary: 'PENDING — confirm from brochure agenda',
    moments: ['PENDING'],
  },
  {
    day: 3,
    title: 'PENDING',
    summary: 'PENDING — confirm from brochure agenda',
    moments: ['PENDING'],
  },
  {
    day: 4,
    title: 'Departure',
    summary: 'PENDING — confirm from brochure agenda',
    moments: ['PENDING'],
  },
]
