import { Tab, Tabs } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'

import { AlteracaoTable } from './alteracao'
import { UltimosLoginsTable } from './ultimosLogins'
import { UsuariosDeletadoTable } from './usuarioDeletado'

import { getAuditoria } from '@/services/auditoria'
export function ReportsPage() {
  const { data } = useQuery({
    queryFn: async () => {
      return await getAuditoria()
    },
    queryKey: ['auditoria'],
  })

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="alteracoes" title="Alterações">
          <AlteracaoTable data={data?.dados.alteracoes ?? []} />
        </Tab>
        <Tab key="ultimos_logins" title="Últimos logins">
          <UltimosLoginsTable data={data?.dados.ultimos_logins ?? []} />
        </Tab>
        <Tab key="usuarios_deletados" title="Usuários deletados">
          <UsuariosDeletadoTable data={data?.dados.usuarios_deletados ?? []} />
        </Tab>
      </Tabs>
    </div>
  )
}
