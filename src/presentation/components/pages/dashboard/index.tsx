import { useQuery } from '@tanstack/react-query'
import { MetricsSection, AnalyticsSection } from './components'
import { getDashboard } from '@/services/dasboard'

export function DashboardPage() {
  const { data } = useQuery({
    queryFn: async () => {
      return await getDashboard()
    },
    queryKey: ['metrics'],
  })
  return (
    <main
      aria-labelledby="dashboard-title"
      className="space-y-6 pb-8 px-4 md:px-8"
    >
      <h1 className="sr-only" id="dashboard-title">
        Painel de Controle
      </h1>
      <MetricsSection data={data} />
      <AnalyticsSection data={data} />
    </main>
  )
}
