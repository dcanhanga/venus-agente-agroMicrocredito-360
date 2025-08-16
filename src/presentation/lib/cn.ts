import { ICreditAnalysis } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function transformevaluationToHistory(evaluations: ICreditAnalysis[]) {
  return evaluations.map((evaluation) => {
    const request = evaluation.solicitacao
    const requester = evaluation.solicitante
    const cooperative = evaluation.cooperativa
    const lastReview = evaluation.ultimaAvaliacao
    return {
      request,
      cooperative,
      lastReview,
      requester
    }
  })
}
