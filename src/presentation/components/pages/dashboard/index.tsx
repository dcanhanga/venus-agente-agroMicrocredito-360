import './Dashboard.css'
import {
  MetricCard,
  LineChartRequest,
  PieChartStatusDistribution,
  QuickActionsCard,
} from './components'
export function DashboardPage() {
  return (
    <main>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mb-4">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <LineChartRequest />
        <PieChartStatusDistribution />
      </div>
      <div>
        <QuickActionsCard />
      </div>
      <div className="dashboard-grid">
        {/* Quick Actions */}

        {/* Recent Activity */}
        {/* <div className="card activity-card">
          <div className="chart-title">Atividades Recentes</div>
          <div className="activity-list">
            {[
              {
                title: 'Cooperativa São João - Solicitação #2024-0156',
                details: 'R$ 50.000 • Há 2 horas • Analista: Maria Santos',
                status: 'Pendente',
                className: 'status-pending',
              },
              {
                title: 'Cooperativa Agro Sul - Solicitação #2024-0155',
                details: 'R$ 120.000 • Há 4 horas • Analista: João Silva',
                status: 'Aprovada',
                className: 'status-approved',
              },
              {
                title: 'Cooperativa Verde Campo - Solicitação #2024-0154',
                details: 'R$ 75.000 • Há 6 horas • Analista: Carlos Lima',
                status: 'Rejeitada',
                className: 'status-rejected',
              },
              {
                title: 'Cooperativa Leste - Solicitação #2024-0153',
                details: 'R$ 200.000 • Há 1 dia • Analista: Ana Costa',
                status: 'Aprovada',
                className: 'status-approved',
              },
              {
                title: 'Cooperativa Norte - Solicitação #2024-0152',
                details: 'R$ 90.000 • Há 1 dia • Analista: Pedro Rocha',
                status: 'Pendente',
                className: 'status-pending',
              },
            ].map((item, index) => (
              <div key={index} className="activity-item">
                <div className="activity-info">
                  <div className="activity-title">{item.title}</div>
                  <div className="activity-details">{item.details}</div>
                </div>
                <span className={`activity-status ${item.className}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </main>
  )
}
