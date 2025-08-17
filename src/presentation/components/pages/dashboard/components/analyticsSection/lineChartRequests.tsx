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

import { appTheme } from '@/presentation/styles/appTheme'
import { Dashboard } from '@/types/dashboard'
type Saida = { mes: string; total: number }
type Entrada = { mes: string; quantidade: number }
const meses = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
]
const formatar = (entrada: Entrada[]): Saida[] => {
  return entrada.map((item) => {
    const [_, mesNum] = item.mes.split('-') // ex: "2025-08"
    const mesIndex = parseInt(mesNum, 10) - 1

    return {
      mes: meses[mesIndex],
      total: item.quantidade,
    }
  })
}

export const LineChartRequest = ({ data }: { data?: Dashboard }) => (
  <ChartCard
    aria-labelledby="grafico-linha"
    role="region"
    title="Solicitações por Período"
  >
    <ResponsiveContainer height="100%" width="100%">
      <LineChart data={formatar(data?.dados.totalSolicitacoesPorMes ?? [])}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Line
          dataKey="total"
          dot={{ r: 5 }}
          stroke={appTheme.themes.dark.colors.secondary.DEFAULT}
          strokeWidth={3}
          type="monotone"
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>
)
