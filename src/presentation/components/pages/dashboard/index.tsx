import { MetricsSection, AnalyticsSection } from './components'

export function DashboardPage() {
  return (
    <main
      aria-labelledby="dashboard-title"
      className="space-y-6 pb-8 px-4 md:px-8"
    >
      <h1 className="sr-only" id="dashboard-title">
        Painel de Controle
      </h1>
      <MetricsSection />
      <AnalyticsSection />
    </main>
  )
}
