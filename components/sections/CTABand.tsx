import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import type { SiteId } from '@/lib/site'

export default function CTABand({ site }: { site: SiteId }) {
  const isJoin = site === 'join-vivra'

  return (
    <section className="bg-stone-900 py-16 text-center text-white">
      <Container>
        <h2 className="text-2xl md:text-3xl">
          {isJoin ? 'Request to join the Founding Retreat.' : 'Join VIVRA early.'}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={isJoin ? '/apply/ibiza' : '/apply/join'}>
            {isJoin ? 'Join the Founding Retreat' : 'Join VIVRA'}
          </Button>
          <Button href="/apply/alliance" variant="secondary" className="border-white/60 text-white hover:border-white">
            Join VIVRA World Alliance
          </Button>
        </div>
      </Container>
    </section>
  )
}
