import { z } from 'zod'

const base = {
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Enter a valid email'),
  location: z.string().min(1, 'Required'),
  linkedin: z.string().optional().or(z.literal('')),
  message: z.string().optional().or(z.literal('')),
  utm: z.record(z.string()).optional(),
  source: z.string().optional(),
}

export const joinSchema = z.object({
  ...base,
  interest: z.string().min(1, 'Tell us what interests you most'),
  membershipInterest: z.enum(['yes', 'exploring', 'not-yet']),
  ibizaInterest: z.enum(['yes', 'exploring', 'not-yet']),
})

export const ibizaSchema = z.object({
  ...base,
  phone: z.string().min(1, 'Required — WhatsApp or phone'),
  whyInterested: z.string().min(1, 'Required'),
  foundingMemberInterest: z.enum(['yes', 'maybe', 'no']),
  referral: z.string().optional().or(z.literal('')),
})

export const allianceSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  organization: z.string().min(1, 'Required'),
  position: z.string().min(1, 'Required'),
  email: z.string().email('Enter a valid business email'),
  website: z.string().min(1, 'Required'),
  country: z.string().min(1, 'Required'),
  orgType: z.string().min(1, 'Required'),
  communitySize: z.string().optional().or(z.literal('')),
  whyJoin: z.string().min(1, 'Required'),
  partnershipInterests: z.string().optional().or(z.literal('')),
  utm: z.record(z.string()).optional(),
  source: z.string().optional(),
})

export type JoinInput = z.infer<typeof joinSchema>
export type IbizaInput = z.infer<typeof ibizaSchema>
export type AllianceInput = z.infer<typeof allianceSchema>
