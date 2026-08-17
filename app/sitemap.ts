import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN || 'vivra.world'}`
  const routes = ['', '/ibiza', '/membership', '/venues', '/alliance', '/impact', '/people', '/agenda']

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
