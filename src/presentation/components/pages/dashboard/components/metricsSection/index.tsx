import { useQuery } from '@tanstack/react-query'

import { MetricCard } from './metricCard'

import { getDashboard } from '@/services/dasboard'
import { Dashboard } from '@/types/dashboard'

export function MetricsSection({data}:{data?:Dashboard}) {


  return (
    <section
      aria-labelledby="metricas-resumo"
      className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
    >
      <h2 className="sr-only" id="metricas-resumo">
        Resumo de métricas
      </h2>

      <MetricCard
        ariaLabel="23 solicitações pendentes"
        colorClass="text-warning"
        label="Solicitações Pendentes"
        value={data?.dados.aprovadasEsteMes ?? 0}
      />
      <MetricCard
        ariaLabel="156 solicitações aprovadas este mês"
        colorClass="text-success"
        label="Aprovadas este Mês"
        value={data?.dados.aprovadasEsteMes ?? 0}
      />
      <MetricCard
        ariaLabel="12 solicitações rejeitadas este mês"
        colorClass="text-danger"
        label="Rejeitadas este Mês"
        value={data?.dados.rejeitadasEsteMes ?? 0}
      />
      <MetricCard
        ariaLabel="Volume total de 2.4 milhões de kwanzas"
        colorClass="text-primary"
        label="Volume Total"
        value={Intl.NumberFormat('pt-AO', {
          style: 'currency',
          currency: 'AOA',
        }).format(Number(data?.dados.volumeTotal?.toString().replace(/,/g, "")) ??0)}
      />
    </section>
  )
}
