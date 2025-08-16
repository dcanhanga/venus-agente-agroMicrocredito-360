import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ICreditAnalysis } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function transformevaluationToHistory(evaluations: ICreditAnalysis[]) {
  return evaluations.map((evaluation) => {
    const request = evaluation.solicitacao
    const requester = evaluation.solicitante
    const cooperative = evaluation.cooperativa
    const lastReview = evaluation.ultimaAvaliacao
    const guarantees = evaluation.garantias.map((g) => g.descricao).join(',')
    const riskAnalysis = evaluation?.analisesRisco[0]
    return {
      request,
      cooperative,
      lastReview,
      requester,
      guarantees,
      riskAnalysis,
    }
  })
}
