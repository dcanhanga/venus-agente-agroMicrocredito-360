import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

import { ChartCard } from './chartCard'

const data = [
  { mes: 'Jan', total: 40 },
  { mes: 'Fev', total: 55 },
  { mes: 'Mar', total: 80 },
  { mes: 'Abr', total: 60 },
  { mes: 'Mai', total: 90 },
  { mes: 'Jun', total: 70 },
]

export const LineChartRequest = () => (
  <ChartCard title="Solicitações por Período">
    <ResponsiveContainer height="100%" width="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Line
          dataKey="total"
          dot={{ r: 5 }}
          stroke="#3b82f6"
          strokeWidth={3}
          type="monotone"
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>
)
