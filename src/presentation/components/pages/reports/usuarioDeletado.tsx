import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from '@heroui/react'

import { UsuariosDeletado } from '@/types/auditoria'

export function UsuariosDeletadoTable({ data }: { data: UsuariosDeletado[] }) {
  const [page, setPage] = React.useState(1)
  const rowsPerPage = 10

  const pages = Math.ceil(data.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return data.slice(start, end)
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
        <TableColumn key="id_utilizador">Id utilizador</TableColumn>
        <TableColumn key="data_evento">Data de evento</TableColumn>
        <TableColumn key="email">Email</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'Nenhuma linha para exibir.'} items={items}>
        {(item) => (
          <TableRow key={item.id_utilizador}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
