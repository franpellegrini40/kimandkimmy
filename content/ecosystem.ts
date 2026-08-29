export const ECOSYSTEM_INTRO = {
  eyebrow: 'The VIVRA Ecosystem',
  heading: 'Eight dimensions. One shared direction.',
  body: 'Each dimension strengthens the whole — bringing people, purpose and opportunity into one connected ecosystem.',
}

// Clockwise from top, matching the approved concept diagram.
// angle: degrees, SVG convention (0 = right, 90 = down, -90 = up).
// anchorX: horizontal translate for the label, as a percentage of its own width.
// Due-east/due-west labels sit on a single unbroken line at the same height as
// the dot, so centering them (-50%) lets the near half of the text overlap the
// dot; anchoring outward (0% / -100%) keeps the whole label clear of it. The
// other six angles stack diagonally or wrap to two lines and stay centered.
export const ECOSYSTEM_PILLARS = [
  { label: 'Wellbeing', angle: -90, left: 50, top: 12.86, anchorX: -50 },
  { label: 'Conscious Growth', angle: -45, left: 76.26, top: 23.74, anchorX: -50 },
  { label: 'Reconnection', angle: 0, left: 87.14, top: 50, anchorX: 0 },
  { label: 'Belonging', angle: 45, left: 76.26, top: 76.26, anchorX: -50 },
  { label: 'Lifestyle', angle: 90, left: 50, top: 87.14, anchorX: -50 },
  { label: 'Regenerative Travel', angle: 135, left: 23.74, top: 76.26, anchorX: -50 },
  { label: 'Purposeful Enterprise', angle: 180, left: 12.86, top: 50, anchorX: -100 },
  { label: 'Systemic Impact', angle: 225, left: 23.74, top: 23.74, anchorX: -50 },
] as const
