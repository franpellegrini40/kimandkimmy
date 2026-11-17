// Server-only. The first email a new applicant receives after the
// "Request invitation" form: a short personal note from Francisco asking
// for a call. Wording approved by Francisco on 2026-11-17.
//
// Delivery uses Resend (https://resend.com). It stays switched off until
// RESEND_API_KEY is set, and it can only send as francisco@ithaka.vc once
// the ithaka.vc domain is verified in Resend (DNS records). Until then the
// function logs and returns, and the lead is still saved and notified.

const FROM = process.env.WELCOME_FROM_EMAIL || 'Francisco Pellegrini <francisco@ithaka.vc>'
const REPLY_TO = process.env.WELCOME_REPLY_TO || 'francisco@ithaka.vc'

export const WELCOME_SUBJECT = 'Thank you for your interest in VIVRA'

export function welcomeBody(firstName: string) {
  return [
    `Hi ${firstName},`,
    'I am Francisco Pellegrini, CEO of VIVRA. Thank you for your interest in being part of VIVRA.',
    'I would like to schedule a call with you, so we can talk about your profile and how I can help you become a founding member of VIVRA, join our next gatherings and events, and access the benefits of our membership.',
    'Just reply to this email with two or three times that work for you, and we will set it up.',
    'Change within, impact beyond.',
    'Francisco Pellegrini\nFounder & CEO, VIVRA',
  ]
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function sendWelcomeEmail({ to, firstName }: { to: string; firstName: string }) {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.info('[welcome-email] RESEND_API_KEY not set, skipping welcome email')
    return { sent: false as const, reason: 'not-configured' }
  }

  // Names come from a public form: keep them to one short line of plain text.
  const name = firstName.replace(/[\r\n]+/g, ' ').trim().slice(0, 60) || 'there'
  const paragraphs = welcomeBody(name)
  const text = paragraphs.join('\n\n')
  const html = `<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#000e21;max-width:560px">${paragraphs
    .map((p) => `<p style="margin:0 0 16px">${escapeHtml(p).replace(/\n/g, '<br>')}</p>`)
    .join('')}</div>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({ from: FROM, to: [to], reply_to: REPLY_TO, subject: WELCOME_SUBJECT, text, html }),
    })
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`)
    return { sent: true as const }
  } catch (err) {
    // Never fail the application because the email could not be sent.
    console.error('[welcome-email] send failed', err)
    return { sent: false as const, reason: 'error' }
  }
}
