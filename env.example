import { trackEvent } from '@/lib/analytics'

const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL

export default function WhatsAppButton() {
  if (!WHATSAPP_URL) return null

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('cta_click', { cta: 'whatsapp_community' })}
      aria-label="Join the VIVRA community on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.55 3.75 1.5 5.29L2 22l4.94-1.6a9.87 9.87 0 0 0 5.1 1.4c5.46 0 9.91-4.45 9.91-9.9C21.95 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.1.11-1.77-.11-.4-.13-.92-.3-1.58-.6-2.8-1.21-4.6-4.05-4.74-4.24-.14-.19-1.14-1.51-1.14-2.88 0-1.37.72-2.03.97-2.31.25-.28.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.24.58.79 2 .86 2.15.07.15.11.32.02.51-.28.6-.63.94-.87 1.2-.13.14-.27.29-.11.57.5.9 1.13 1.68 1.9 2.32.72.6 1.34.92 1.64 1.06.3.14.48.12.66-.06.22-.24.68-.79.87-1.06.19-.27.37-.22.61-.13.24.09 1.55.73 1.82.86.27.13.44.19.51.3.07.11.07.63-.17 1.29Z" />
      </svg>
      Join our community
    </a>
  )
}
