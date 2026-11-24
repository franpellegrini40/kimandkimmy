import type { Metadata } from 'next'
import Image from 'next/image'
import { getCurrentSite } from '@/lib/site'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import JoinForm from '@/components/forms/JoinForm'
import MemberLogin from '@/components/forms/MemberLogin'

export const metadata: Metadata = {
  title: 'Log in',
  description: 'Member log in for VIVRA, and how to request an invitation if you are new.',
}

// Look and feel follows the Lovable member-area prototype
// (vivra-world.lovable.app/members): a rounded photo hero, serif heading,
// pill buttons. Founding members check their email (MemberLogin,
// lib/members.ts) and continue to the member platform; everyone else is
// routed to the invitation form, which triggers Francisco's welcome email.

export default async function LoginPage() {
  const site = await getCurrentSite()

  return (
    <PageShell site={site}>
      <section className="pt-28 md:pt-32" style={{ background: 'var(--surface-page)' }}>
        <div className="container-vivra">
          <div className="relative min-h-[540px] overflow-hidden rounded-3xl md:min-h-[600px]">
            <Image
              src="/images/ibiza-2026/systems-mapping.jpg"
              alt="Founding members mapping systems at the long table, Can Aylma, Ibiza"
              fill
              priority
              sizes="100vw"
              quality={90}
              // Anchored near the top so the people's heads stay in the wide frame.
              className="object-cover object-[center_8%]"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(90deg, rgba(0,14,33,0.82) 0%, rgba(0,14,33,0.55) 45%, rgba(0,14,33,0.15) 100%)' }}
            />
            <div className="relative flex min-h-[540px] flex-col justify-center px-6 py-14 md:min-h-[600px] md:px-14">
              <span className="text-[11px] font-medium uppercase text-white/85" style={{ letterSpacing: 'var(--tracking-caps)' }}>
                Founding members
              </span>
              <h1 className="mt-4 max-w-2xl text-4xl !text-white md:text-6xl">Ibiza was the beginning.</h1>
              <p className="mt-4 max-w-lg text-white/85">
                Continue what we started together. Enter the email you used for the gathering: if you were there, you can register and sign in to the member platform.
              </p>
              <MemberLogin />
            </div>
          </div>
        </div>
      </section>

      <Section tone="light" id="new">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="eyebrow">New to VIVRA</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Request an invitation.</h2>
            <p className="mt-4 max-w-md" style={{ color: 'var(--text-secondary)' }}>
              Tell us who you are. Francisco will write to you to schedule a short call about your profile, our next gatherings and VIVRA membership.
            </p>
            <div className="mt-8">
              <Button href="/" variant="ghost">Back to VIVRA</Button>
            </div>
          </div>
          <div className="rounded-3xl border p-6 md:p-10 lg:col-span-3" style={{ borderColor: 'var(--rule)', background: 'var(--surface-raised)' }}>
            <JoinForm />
          </div>
        </div>
      </Section>
    </PageShell>
  )
}
