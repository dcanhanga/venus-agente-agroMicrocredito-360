import { Card, CardBody, CardHeader } from '@heroui/react'

import { QuickActionItem } from './quickActionItem'

export const QuickActionsCard = () => {
  return (
    <Card
      isHoverable
      as="section"
      className="border border-divider shadow-sm hover:shadow-md transition-shadow duration-300 "
    >
      <CardHeader>
        <h3 className="text-lg font-semibold text-foreground-400">
          Ações Rápidas
        </h3>
      </CardHeader>

      <CardBody className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <QuickActionItem
          description="23 solicitações aguardando análise"
          //href="/solicitacoes/pendentes"
          icon="📋"
          title="Revisar Pendentes"
        />
        <QuickActionItem
          description="Relatório mensal de performance"
          icon="📊"
          title="Gerar Relatório"
          //onClick={() => alert('Gerando relatório...')}
        />
        <QuickActionItem
          description="Cadastrar nova cooperativa"
          // href="/cooperativas/novo"
          icon="🏛️"
          title="Nova Cooperativa"
        />
        <QuickActionItem
          description="Parâmetros de avaliação"
          //href="/configuracoes"
          icon="⚙️"
          title="Configurações"
        />
      </CardBody>
    </Card>
  )
}
