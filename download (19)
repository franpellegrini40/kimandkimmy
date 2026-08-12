import Header from './Header'
import Footer from './Footer'
import type { SiteId } from '@/lib/site'

export default function PageShell({
  site,
  children,
}: {
  site: SiteId
  children: React.ReactNode
}) {
  return (
    <>
      <Header site={site} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
