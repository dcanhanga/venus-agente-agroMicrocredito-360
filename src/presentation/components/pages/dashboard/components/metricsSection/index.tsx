import { MetricCard } from './metricCard'

export function MetricsSection() {
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
        value={23}
      />
      <MetricCard
        ariaLabel="156 solicitações aprovadas este mês"
        colorClass="text-success"
        label="Aprovadas este Mês"
        value={156}
      />
      <MetricCard
        ariaLabel="12 solicitações rejeitadas este mês"
        colorClass="text-danger"
        label="Rejeitadas este Mês"
        value={12}
      />
      <MetricCard
        ariaLabel="Volume total de 2.4 milhões de kwanzas"
        colorClass="text-primary"
        label="Volume Total"
        value="2.4M KZ"
      />
    </section>
  )
}
