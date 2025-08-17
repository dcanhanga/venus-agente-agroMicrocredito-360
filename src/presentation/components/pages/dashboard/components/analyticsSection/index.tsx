import { Dashboard } from '@/types/dashboard'
import { LineChartRequest } from './lineChartRequests'
import { PieChartStatusDistribution } from './pieChartStatusDistribution'

export function AnalyticsSection({data}:{data?:Dashboard}) {
  return (
    <section
      aria-labelledby="graficos-analiticos"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <h2 className="sr-only" id="graficos-analiticos">
        Gráficos analíticos
      </h2>

      <LineChartRequest data={data} />

      <PieChartStatusDistribution data={data} />
    </section>
  )
}
