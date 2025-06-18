import { QuickActionItem } from './quickActionItem'

export const QuickActionsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        Ações Rápidas
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>
    </div>
  )
}
