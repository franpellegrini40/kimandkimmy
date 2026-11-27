import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import type { SiteId } from '@/lib/site'

export default function CTABand({ site }: { site: SiteId }) {

  return (
    <section data-theme="prestige" className="grain py-16 text-center" style={{ background: 'var(--surface-page)', color: 'var(--text-primary)' }}>
      <Container>
        <h2 className="text-2xl md:text-3xl">
          Join VIVRA early.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/#apply">
            Request invitation
          </Button>
          <Button href="/apply/alliance" variant="secondary">
            Join VIVRA World Alliance
          </Button>
        </div>
      </Container>
    </section>
  )
}
