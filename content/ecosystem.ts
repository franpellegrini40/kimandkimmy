export const ECOSYSTEM_INTRO = {
  eyebrow: 'The VIVRA Ecosystem',
  heading: 'Eight dimensions. One shared direction.',
  body: 'Each dimension strengthens the whole — bringing people, purpose and opportunity into one connected ecosystem.',
}

// Clockwise from top, matching the approved concept diagram.
// angle: degrees, SVG convention (0 = right, 90 = down, -90 = up).
export const ECOSYSTEM_PILLARS = [
  { label: 'Wellbeing', angle: -90, left: 50, top: 12.86 },
  { label: 'Healing', angle: -45, left: 76.26, top: 23.74 },
  { label: 'Community', angle: 0, left: 87.14, top: 50 },
  { label: 'Lifestyle', angle: 45, left: 76.26, top: 76.26 },
  { label: 'Sustainable Tourism', angle: 90, left: 50, top: 87.14 },
  { label: 'Business', angle: 135, left: 23.74, top: 76.26 },
  { label: 'Systemic Impact', angle: 180, left: 12.86, top: 50 },
  { label: 'Human Potential', angle: 225, left: 23.74, top: 23.74 },
] as const
