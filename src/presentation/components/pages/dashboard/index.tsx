import './Dashboard.css'
import {
  MetricCard,
  LineChartRequest,
  PieChartStatusDistribution,
  QuickActionsCard,
} from './components'

export function DashboardPage() {
  return (
    <main className="space-y-4 pb-4">
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        <MetricCard
          colorClass="text-warning"
          label="Solicitações Pendentes"
          value={23}
        />
        <MetricCard
          colorClass="text-success"
          label="Aprovadas este Mês"
          value={156}
        />
        <MetricCard
          colorClass="text-danger"
          label="Rejeitadas este Mês"
          value={12}
        />
        <MetricCard
          colorClass="text-primary"
          label="Volume Total"
          value="2.4M KZ"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LineChartRequest />
        <PieChartStatusDistribution />
      </div>
      <QuickActionsCard />
      {/* <RecentActivitiesTable /> */}
    </main>
  )
}
