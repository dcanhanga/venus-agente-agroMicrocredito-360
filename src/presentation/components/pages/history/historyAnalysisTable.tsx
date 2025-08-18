import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Button,
  Chip,
} from '@heroui/react'

import { IHistoryAnalysis } from '@/types'

export function HistoryAnalysisTable({
  data,
  abrirModal,
}: {
  data: IHistoryAnalysis[]
  abrirModal: (id: number) => void
}) {
  const [page, setPage] = React.useState(1)
  const rowsPerPage = 6

  const pages = Math.ceil(data.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return data
      .map((item, i) => ({
        ...item,
        key: item.request.id || i,
        index: i,
      }))
      .slice(start, end)
  }, [page, data])

  return (
    <Table
      aria-label="Tabela de auditoria de alterações"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: 'min-h-[222px]',
      }}
    >
      <TableHeader>
        <TableColumn key="id">ID Solicitação</TableColumn>
        <TableColumn key="cooperativa">Cooperativa</TableColumn>
        <TableColumn key="valor">Valor</TableColumn>
        <TableColumn key="status">Status</TableColumn>
        <TableColumn key="dataSolicitacao">Data Solicitação</TableColumn>
        <TableColumn key="email">Solicitante</TableColumn>
        <TableColumn key="actions">Ações</TableColumn>
      </TableHeader>

      <TableBody emptyContent={'Nenhuma linha para exibir.'} items={items}>
        {(item) => (
          <TableRow key={item.key}>
            <TableCell>
              <button
                className="text-blue-600 font-semibold cursor-pointer"
                onClick={() => abrirModal(item.index)}
              >
                #{item.request.id}
              </button>
            </TableCell>
            <TableCell>{item.cooperative.nome}</TableCell>
            <TableCell className="font-semibold text-green-600">
              KZ {item.request.valorSolicitado}
            </TableCell>
            <TableCell>
              <Chip
                color={
                  item.request.status === 'APROVADA' ? 'success' : 'danger'
                }
                size="sm"
                variant="flat"
              >
                {item.request.status}
              </Chip>
            </TableCell>
            <TableCell className="text-sm text-gray-500">
              {item.request.dataSolicitacao}
            </TableCell>
            <TableCell className="text-sm text-gray-500">
              {item.requester.email}
            </TableCell>
            <TableCell>
              <Button
                isIconOnly
                size="sm"
                variant="flat"
                onPress={() => abrirModal(item.index)}
              >
                👁️
              </Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
