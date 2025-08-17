import { api } from '.'

import { HistoricalDecisions } from '@/types/history'

export async function historicalDecisions() {
  const data = await api.get<HistoricalDecisions>(
    'api/solicitacoes-micro-credito/historico-decisoes',
  )

  return data.data
}
