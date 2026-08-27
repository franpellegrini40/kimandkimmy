import { redirect } from 'next/navigation'

// Membership tiers now live on the unified Alliance page.
export default function MembershipPage() {
  redirect('/alliance')
}
