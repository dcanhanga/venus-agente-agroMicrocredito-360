import { api } from '.'

import { Dashboard } from '@/types/dashboard'

export async function getDashboard() {
  const data = await api.get<Dashboard>('api/solicitacoes-micro-credito/dasboard')

  return data.data
}
