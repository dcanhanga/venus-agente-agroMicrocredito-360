import { IHistoryAnalysis } from '@/types'
import * as XLSX from 'xlsx'

export function mapHistoryToExport(history: IHistoryAnalysis[]) {
  return history.map((item) => ({
    'ID Solicitação': item.request.id,
    'Cooperativa': item.cooperative.nome,
    'Valor Solicitado': item.request.valorSolicitado,
    'Status': item.request.status,
    'Data Solicitação': item.request.dataSolicitacao,
    'Solicitante': item.requester.email,
    'Finalidade': item.request.finalidadeCredito,
    'Nome da Cooperativa': item.cooperative.nome,
    'NIF': item.cooperative.nif,
    'Localidade': item.cooperative?.localizacao ?? '---',
    'Score de Risco': item.riskAnalysis?.score ?? '---',
  }))
}

export function exportExcel(history: IHistoryAnalysis[]) {
  const data = mapHistoryToExport(history)
  if (data.length === 0) return

  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Histórico')

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  const blob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'historico_avaliacoes.xlsx'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
