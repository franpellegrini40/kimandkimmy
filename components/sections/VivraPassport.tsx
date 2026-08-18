const ICON_PATH =
  'M102.89 68.403L115.546 38.4L108.821 38.4L99.799 59.83L90.902 38.4L83.593 38.4L96.207 68.403ZM81.185 83.467L51.181 70.811L51.181 77.535L72.613 86.557L71.99 86.817L81.185 86.817ZM147.959 78.12L147.959 70.809L117.955 83.425L117.955 86.817L127.01 86.817ZM114.918 76.135L145.084 63.87L140.329 59.115L118.794 67.888L127.657 46.443L122.488 41.275L110.191 71.409ZM88.918 71.438L76.65 41.273L71.895 46.028L80.669 67.563L59.224 58.7L54.055 63.868L84.191 76.165ZM139.898 53.011C147.38 62.039 151.881 73.629 151.881 86.271C151.881 86.455 151.857 86.633 151.855 86.817L127.009 86.817L126.527 87.017L147.959 96.039L147.959 102.764L118.374 90.284C117.764 92.925 116.604 95.348 115.02 97.441L145.085 109.707L139.916 114.876L118.47 106.013L127.245 127.547L122.489 132.303L110.221 102.136C106.944 104.067 102.951 104.759 102.951 104.759L115.547 134.721L108.239 134.721L99.34 113.289L90.319 134.721L83.593 134.721L96.251 104.716L89.221 101.709L76.924 131.844L71.756 126.675L80.619 105.23L59.085 114.004L54.329 109.248L84.451 96.999C82.83 94.766 81.688 92.166 81.185 89.316L81.185 90.15L51.18 102.765L51.18 95.456L71.989 86.817L47.605 86.817C47.603 86.633 47.581 86.455 47.581 86.271C47.581 73.37 52.276 61.572 60.037 52.467L57.258 46.953C45.815 24.251 24.537 7.975 0 2.49L102.677 208.173L102.754 208L102.841 208.173C106.309 202.613 192.549 2.382 192.549 2.382C178.419 0.001 156.697 20.186 139.898 53.011'

export default function VivraPassport({
  name = 'Francisco Pellegrini',
  tier = 'Legacy Member',
  number = 'N.º 000001',
}: {
  name?: string
  tier?: string
  number?: string
}) {
  return (
    <svg viewBox="0 0 400 560" role="img" aria-label={`VIVRA Passport — ${name}`} className="h-auto w-full max-w-[340px]">
      <defs>
        <radialGradient id="passportSheen" cx="50%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#0c2038" />
          <stop offset="100%" stopColor="#000e21" />
        </radialGradient>
        <linearGradient id="passportFoil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f6f8" />
          <stop offset="45%" stopColor="#37c8d9" />
          <stop offset="100%" stopColor="#008190" />
        </linearGradient>
      </defs>

      {/* Cover */}
      <rect x="1" y="1" width="398" height="558" rx="14" fill="url(#passportSheen)" />
      <rect x="1" y="1" width="398" height="558" rx="14" fill="none" stroke="rgba(255,255,255,0.14)" />
      <rect x="16" y="16" width="368" height="528" rx="6" fill="none" stroke="var(--copper, #c57a3c)" strokeOpacity="0.55" strokeWidth="1" />

      {/* Header */}
      <text x="200" y="66" textAnchor="middle" fontSize="12" letterSpacing="4" fill="var(--copper, #c57a3c)" fontFamily="var(--font-body, sans-serif)">
        WORLD ALLIANCE
      </text>

      {/* Emblem */}
      <g transform="translate(104, 150) scale(0.98)">
        <path d={ICON_PATH} fill="url(#passportFoil)" />
      </g>

      <text x="200" y="410" textAnchor="middle" fontSize="30" letterSpacing="10" fill="#f7f4ee" fontFamily="var(--font-display, serif)">
        VIVRA
      </text>
      <text x="200" y="436" textAnchor="middle" fontSize="11" letterSpacing="5" fill="rgba(247,244,238,0.55)">
        PASSPORT
      </text>

      <line x1="48" y1="466" x2="352" y2="466" stroke="rgba(255,255,255,0.14)" />

      {/* Member details */}
      <text x="48" y="494" fontSize="9" letterSpacing="2.5" fill="rgba(247,244,238,0.45)">
        MEMBER
      </text>
      <text x="48" y="518" fontSize="19" fill="#f7f4ee" fontFamily="var(--font-display, serif)">
        {name.toUpperCase()}
      </text>

      <text x="48" y="542" fontSize="10" letterSpacing="1.5" fill="var(--aqua, #37c8d9)">
        {tier.toUpperCase()}
      </text>
      <text x="352" y="542" fontSize="10" letterSpacing="1" fill="rgba(247,244,238,0.45)" textAnchor="end">
        {number}
      </text>
    </svg>
  )
}
