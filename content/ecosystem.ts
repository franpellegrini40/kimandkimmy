export const ECOSYSTEM_INTRO = {
  eyebrow: 'The VIVRA Ecosystem',
  heading: 'Eight dimensions. One shared direction.',
  body: 'Each dimension strengthens the whole — bringing people, purpose and opportunity into one connected ecosystem.',
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
