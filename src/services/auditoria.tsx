import { api } from '.'

import { Auditoria } from '@/types/auditoria'

export async function getAuditoria() {
  const data = await api.get<Auditoria>('api/utilizadores/auditoria')

  return data.data
}
