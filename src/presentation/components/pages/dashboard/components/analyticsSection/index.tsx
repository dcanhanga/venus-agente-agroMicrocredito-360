import { LineChartRequest } from './lineChartRequests'
import { PieChartStatusDistribution } from './pieChartStatusDistribution'

export function AnalyticsSection() {
  return (
    <section
      aria-labelledby="graficos-analiticos"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <h2 className="sr-only" id="graficos-analiticos">
        Gráficos analíticos
      </h2>

      <LineChartRequest />

      <PieChartStatusDistribution />
    </section>
  )
}
