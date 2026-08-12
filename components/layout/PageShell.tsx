import Header from './Header'
import Footer from './Footer'
import type { SiteId } from '@/lib/site'

export default function PageShell({
  site,
  children,
  overHero = false,
}: {
  site: SiteId
  children: React.ReactNode
  overHero?: boolean
}) {
  return (
    <>
      <Header site={site} overHero={overHero} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
