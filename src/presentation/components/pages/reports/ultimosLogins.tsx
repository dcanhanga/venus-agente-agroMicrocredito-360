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

import { UltimosLogin } from '@/types/auditoria'

export function UltimosLoginsTable({ data }: { data: UltimosLogin[] }) {
  const [page, setPage] = React.useState(1)
  const rowsPerPage = 10

  const pages = Math.ceil(data.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return data.map((item, i) => ({
      ...item,
      key: i,
    })).slice(start, end)
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
        <TableColumn key="ultimo_login">Data de evento</TableColumn>
        <TableColumn key="email">Email novo</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'Nenhuma linha para exibir.'} items={items}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
