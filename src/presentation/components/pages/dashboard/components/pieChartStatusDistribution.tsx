import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'

import { ChartCard } from './chartCard'

import { appTheme } from '@/presentation/styles/appTheme'

const data = [
  { name: 'Aprovadas', value: 65 },
  { name: 'Pendentes', value: 20 },
  { name: 'Rejeitadas', value: 15 },
]

const COLORS = [
  appTheme.themes.dark.colors.success.DEFAULT,
  appTheme.themes.dark.colors.warning.DEFAULT,
  appTheme.themes.dark.colors.danger.DEFAULT,
]

export const PieChartStatusDistribution = () => (
  <ChartCard title="Distribuição por Status">
    <ResponsiveContainer height="100%" width="100%">
      <PieChart>
        <Pie label data={data} dataKey="value" nameKey="name" outerRadius={100}>
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </ChartCard>
)
