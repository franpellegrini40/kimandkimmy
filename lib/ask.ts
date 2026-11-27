// How "Ask VIVRA" answers a question.
//
// Today there is a single engine: the guided questions in content/ask.ts, so
// every answer is approved site copy and nothing costs anything to run.
//
// Ready for later, not active: a model-backed engine can be added by
// implementing AskEngine (for example in an /api/ask route that answers only
// from content/*.ts) and switching ASK_ENGINE when NEXT_PUBLIC_ASK_AI=1.
// Until then free-text questions go to the team through /api/concierge.

import { ASK_ITEMS, type AskItem } from '@/content/ask'

export type AskEngine = {
  /** Answers a question, or returns null so the visitor is offered the team form. */
  answer(question: string): Promise<Pick<AskItem, 'answer' | 'links'> | null>
}

export const faqEngine: AskEngine = {
  async answer(question) {
    const item = ASK_ITEMS.find((i) => i.id === question || i.question === question)
    return item ? { answer: item.answer, links: item.links } : null
  },
}

export const ASK_AI_ENABLED = process.env.NEXT_PUBLIC_ASK_AI === '1' // stays off: no model is wired yet
export const ASK_ENGINE: AskEngine = faqEngine
