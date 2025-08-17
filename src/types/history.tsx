type Dados = {
  volumeTotal: number
  totalAprovadas: number
  totalRejeitadas: number
}
export type HistoricalDecisions = {
  dados: Dados
  sucesso: boolean
}
