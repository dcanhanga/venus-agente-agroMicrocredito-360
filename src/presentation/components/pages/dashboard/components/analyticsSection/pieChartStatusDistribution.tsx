import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'
import React from 'react'

import { ChartCard } from './chartCard'

import { appTheme } from '@/presentation/styles/appTheme'
import { Dashboard } from '@/types/dashboard'

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

export const PieChartStatusDistribution = ({ data }: { data?: Dashboard }) => {
  const dataFormated = React.useMemo(() => {
    return [
        { name: 'Aprovadas', value: data?.dados.aprovadasEsteMes ?? 0 },
        { name: 'Pendentes', value: data?.dados.rejeitadasEsteMes ?? 0 },
        { name: 'Rejeitadas', value: data?.dados.rejeitadasEsteMes ?? 0 },
      ]

  }, [data])

  return (
    <ChartCard
      aria-labelledby="grafico-pizza"
      role="region"
      title="Distribuição por Status"
    >
      <ResponsiveContainer height="100%" width="100%">
        <PieChart>
          <Pie
            label
            data={dataFormated}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          >
            {dataFormated.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
