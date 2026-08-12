export default function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VIVRA',
    url: 'https://vivra.world',
    sameAs: ['https://instagram.com/vivra.world', 'https://linkedin.com/company/vivra-world'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
