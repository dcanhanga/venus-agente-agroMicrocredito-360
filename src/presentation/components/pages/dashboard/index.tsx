import './Dashboard.css'
export function DashboardPage() {
  return (
    <main>
      {/* Header */}

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Metric Cards */}
        <div className="card metric-card">
          <div className="metric-number pending">23</div>
          <div className="metric-label">Solicitações Pendentes</div>
        </div>
        <div className="card metric-card">
          <div className="metric-number approved">156</div>
          <div className="metric-label">Aprovadas este Mês</div>
        </div>
        <div className="card metric-card">
          <div className="metric-number rejected">12</div>
          <div className="metric-label">Rejeitadas este Mês</div>
        </div>
        <div className="card metric-card">
          <div className="metric-number total">R$ 2.4M</div>
          <div className="metric-label">Volume Total</div>
        </div>

        {/* Charts */}
        <div className="card chart-card">
          <div className="chart-title">Solicitações por Período</div>
          <div className="chart-placeholder">
            [Gráfico de Linha - Tendência de Solicitações]
          </div>
        </div>
        <div className="card chart-card">
          <div className="chart-title">Distribuição por Status</div>
          <div className="chart-placeholder">
            [Gráfico de Pizza - % Aprovadas/Rejeitadas/Pendentes]
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card actions-card">
          <div className="chart-title">Ações Rápidas</div>
          <div className="action-buttons">
            <div className="action-btn">
              <div className="action-title">📋 Revisar Pendentes</div>
              <div className="action-desc">
                23 solicitações aguardando análise
              </div>
            </div>
            <div className="action-btn">
              <div className="action-title">📊 Gerar Relatório</div>
              <div className="action-desc">Relatório mensal de performance</div>
            </div>
            <div className="action-btn">
              <div className="action-title">🏛️ Nova Cooperativa</div>
              <div className="action-desc">Cadastrar nova cooperativa</div>
            </div>
            <div className="action-btn">
              <div className="action-title">⚙️ Configurações</div>
              <div className="action-desc">Parâmetros de avaliação</div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="card alerts-card">
          <div className="chart-title">Alertas & Notificações</div>
          <div className="alert-item alert-warning">
            <div className="alert-title">⚠️ Atenção Requerida</div>
            <div className="alert-text">
              5 solicitações pendentes há mais de 3 dias
            </div>
          </div>
          <div className="alert-item alert-info">
            <div className="alert-title">📈 Performance</div>
            <div className="alert-text">
              Taxa de aprovação 15% acima da média
            </div>
          </div>
          <div className="alert-item alert-warning">
            <div className="alert-title">🏛️ Cooperativa em Risco</div>
            <div className="alert-text">
              COOP-ABC apresenta indicadores de risco elevado
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card activity-card">
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
        </div>
      </div>
    </main>
  )
}
