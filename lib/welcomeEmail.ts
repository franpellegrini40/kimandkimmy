// Server-only. The first email a new applicant receives after the
// "Request invitation" form: a short personal note from Francisco asking
// for a call. Wording approved by Francisco on 2026-11-17.
//
// Two ways to send, checked in this order. With neither configured the
// function logs and returns; the lead is still saved and notified.
//
// 1. Gmail (SMTP_USER + SMTP_PASS): sends from a Gmail account using a
//    Google "app password". No DNS needed. The email comes from that Gmail
//    address and lands in its Sent folder; replies go to WELCOME_REPLY_TO.
// 2. Resend (RESEND_API_KEY): sends from a domain verified in Resend.
//
// ithaka.vc mail runs on Microsoft 365 and nobody on the VIVRA side has DNS
// access to it, so the "From" cannot be francisco@ithaka.vc without the
// domain admin. Replies still reach that inbox through Reply-To.

import nodemailer from 'nodemailer'

const REPLY_TO = process.env.WELCOME_REPLY_TO || 'francisco@ithaka.vc'
const FROM_NAME = process.env.WELCOME_FROM_NAME || 'Francisco Pellegrini · VIVRA'

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

function compose(firstName: string) {
  // Names come from a public form: keep them to one short line of plain text.
  const name = firstName.replace(/[\r\n]+/g, ' ').trim().slice(0, 60) || 'there'
  const paragraphs = welcomeBody(name)
  return {
    text: paragraphs.join('\n\n'),
    html: `<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#000e21;max-width:560px">${paragraphs
      .map((p) => `<p style="margin:0 0 16px">${escapeHtml(p).replace(/\n/g, '<br>')}</p>`)
      .join('')}</div>`,
  }
}

async function sendViaGmail(to: string, text: string, html: string) {
  const user = process.env.SMTP_USER as string
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: { user, pass: process.env.SMTP_PASS },
  })
  await transporter.sendMail({
    from: { name: FROM_NAME, address: user },
    to,
    replyTo: REPLY_TO,
    subject: WELCOME_SUBJECT,
    text,
    html,
  })
}

async function sendViaResend(to: string, text: string, html: string) {
  const from = process.env.WELCOME_FROM_EMAIL
  if (!from) throw new Error('WELCOME_FROM_EMAIL must be set to an address on a domain verified in Resend')
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
    body: JSON.stringify({ from, to: [to], reply_to: REPLY_TO, subject: WELCOME_SUBJECT, text, html }),
  })
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`)
}

export async function sendWelcomeEmail({ to, firstName }: { to: string; firstName: string }) {
  const viaGmail = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS)
  const viaResend = Boolean(process.env.RESEND_API_KEY)
  if (!viaGmail && !viaResend) {
    console.info('[welcome-email] no sender configured (SMTP_USER/SMTP_PASS or RESEND_API_KEY), skipping')
    return { sent: false as const, reason: 'not-configured' }
  }

  const { text, html } = compose(firstName)
  try {
    if (viaGmail) await sendViaGmail(to, text, html)
    else await sendViaResend(to, text, html)
    return { sent: true as const }
  } catch (err) {
    // Never fail the application because the email could not be sent.
    console.error('[welcome-email] send failed', err)
    return { sent: false as const, reason: 'error' }
  }
}
