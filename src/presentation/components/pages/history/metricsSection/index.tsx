import { useQuery } from '@tanstack/react-query'

import { MetricCard } from '@/presentation/components/molecules'
import { historicalDecisions } from '@/services/history'

export function HistoricalDecisionsMetrics() {
  const { data } = useQuery({
    queryFn: async () => {
      return await historicalDecisions()
    },
    queryKey: ['historicalDecisions'],
  })

  return (
    <section
      aria-labelledby="historicalDecisions"
      className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
    >
      <h2 className="sr-only" id="historicalDecisions">
        Histórico de Decisões
      </h2>

      <MetricCard
        ariaLabel="23 solicitações pendentes"
        colorClass="text-success"
        label="Total Aprovadas"
        value={data?.dados.totalAprovadas ?? 0}
      />
      <MetricCard
        ariaLabel="156 solicitações aprovadas este mês"
        colorClass="text-danger"
        label="Total Rejeitados"
        value={data?.dados.totalRejeitadas ?? 0}
      />

      <MetricCard
        ariaLabel="Volume total de 2.4 milhões de kwanzas"
        colorClass="text-primary"
        label="Volume Total"
        value={Intl.NumberFormat('pt-AO', {
          style: 'currency',
          currency: 'AOA',
        }).format(
          Number(data?.dados.volumeTotal?.toString().replace(/,/g, '')) ?? 0,
        )}
      />
    </section>
  )
}
