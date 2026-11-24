/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  // The October 2026 retreat pages described it as upcoming. The gathering is
  // now told on the home page (Experiences), so the old addresses send people
  // there; old links and search results keep working.
  async redirects() {
    return [
      { source: '/ibiza', destination: '/#ibiza', permanent: true },
      { source: '/agenda', destination: '/#ibiza', permanent: true },
      { source: '/apply/ibiza', destination: '/#ibiza', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
