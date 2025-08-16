import {
  Button,
  Input,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
  Pagination,
  Card,
  CardBody,
} from '@heroui/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { transformevaluationToHistory } from '@/presentation/lib'
import { getAvaliations } from '@/services/call'
import { IHistoryAnalysis } from '@/types'
import { HiOutlineInformationCircle } from 'react-icons/hi'
export function HistoryPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedId, setSelectedId] = useState<number | undefined>()
  const [history, setHistory] = useState<IHistoryAnalysis[]>([])

  const abrirModal = (id: number) => {
    setSelectedId(id)
    onOpen()
  }

  async function fetchHistory() {
    try {
      const data = await getAvaliations({
        statusSolicitacao: 'HISTORY',
      })

      setHistory(transformevaluationToHistory(data))
    } catch (error: any) {
      toast.error(error)
    }
  }
  useEffect(() => {
    fetchHistory()
  }, [])

  return (
    <div className="max-w-[1400px] mx-auto p-5 space-y-6">
      {/* Page Header */}
      <Card shadow="sm">
        <CardBody>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Histórico de Decisões
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center border">
              <div className="text-2xl font-bold text-green-600">1,247</div>
              <div className="text-sm text-gray-500">Total Aprovadas</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center border">
              <div className="text-2xl font-bold text-red-600">156</div>
              <div className="text-sm text-gray-500">Total Rejeitadas</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center border">
              <div className="text-2xl font-bold text-blue-600">R$ 45.2M</div>
              <div className="text-sm text-gray-500">Volume Total</div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Filters */}
      <Card shadow="sm">
        <CardBody>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Filtros e Busca</h2>
            <Button color="success" size="sm" startContent="📊">
              Exportar Dados
            </Button>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
            <Select defaultSelectedKeys={['todos']} label="Status">
              <SelectItem key="todos">Todos</SelectItem>
              <SelectItem key="aprovadas">Aprovadas</SelectItem>
              <SelectItem key="rejeitadas">Rejeitadas</SelectItem>
            </Select>

            <Select label="Cooperativa">
              <SelectItem>Todas</SelectItem>
              <SelectItem>Cooperativa São João</SelectItem>
              <SelectItem>Cooperativa Agro Sul</SelectItem>
              <SelectItem>Cooperativa Verde Campo</SelectItem>
            </Select>

            <Input defaultValue="2024-01-01" label="Data Inicial" type="date" />
            <Input defaultValue="2024-06-15" label="Data Final" type="date" />
            <Input label="Valor Mínimo" placeholder="R$ 0" type="number" />
            <Button color="primary" startContent="🔍">
              Buscar
            </Button>
            <Button color="secondary" startContent="🔄">
              Limpar
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Results Table */}
      <Card shadow="sm">
        <CardBody className="overflow-x-auto">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-700">Resultados</h2>
            <span className="text-sm text-gray-500">
              Mostrando 1-25 de 1,403 registros
            </span>
          </div>

          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left text-sm font-semibold text-gray-600">
                  ID Solicitação
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">
                  Cooperativa
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">
                  Valor
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">
                  Data Decisão
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">
                  Solicitante
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">
                  Tempo Análise
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-600">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {history.map((hist, i) => (
                <tr className="hover:bg-gray-50">
                  <td
                    className="p-3 text-blue-600 font-semibold cursor-pointer"
                    onClick={() => abrirModal(i)}
                  >
                    # {hist.request.id}
                  </td>
                  <td className="p-3"> {hist.cooperative.nome}</td>
                  <td className="p-3 font-semibold text-green-600">
                    KZ {hist.request.valorSolicitado}
                  </td>
                  <td className="p-3">
                    <Chip
                      color={
                        hist.request.status == 'APROVADA' ? 'success' : 'danger'
                      }
                      size="sm"
                      variant="flat"
                    >
                      {hist.request.status}
                    </Chip>
                  </td>
                  <td className="p-3 text-sm text-gray-500">
                    {hist.request.dataSolicitacao}
                  </td>
                  <td className="p-3 text-sm text-gray-500">
                    {hist.requester.email}
                  </td>
                  <td className="p-3">6 horas</td>
                  <td className="p-3 flex gap-2">
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      onPress={() => abrirModal(i)}
                    >
                      👁️
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">
              Mostrando 1 a 25 de 1,403 registros
            </span>
            <Pagination initialPage={1} total={57} />
          </div>
        </CardBody>
      </Card>

      {/* Detail Modal */}
      <Modal
        isOpen={isOpen}
        scrollBehavior="inside"
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="font-bold">
                Detalhes da Solicitação
              </ModalHeader>
              <ModalBody>
                {selectedId != undefined && history[selectedId] ? (
                  (() => {
                    const item = history[selectedId]

                    return (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">
                            Informações da Solicitação
                          </h4>
                          <p>
                            <b>ID:</b> # {item.request.id}
                          </p>
                          <p>
                            <b>Valor:</b> KZ {item.request.valorSolicitado}
                          </p>
                          <p>
                            <b>Data Solicitação:</b>{' '}
                            {item.request.dataSolicitacao}
                          </p>
                          <p>
                            <b>Finalidade:</b> {item.request.finalidadeCredito}
                          </p>
                          <p>
                            <b>Garantia:</b> {item.guarantees}
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">
                            Dados da Cooperativa
                          </h4>
                          <p>
                            <b>Nome:</b> {item.cooperative.nome}
                          </p>
                          <p>
                            <b>CNPJ:</b> {item.cooperative.nif}
                          </p>
                          <p>
                            <b>Score de Risco:</b>{' '}
                            {item.riskAnalysis?.score ?? '---'}
                          </p>
                        </div>
                      </div>
                    )
                  })()
                ) : (
                  <div className="flex items-center justify-center h-40 text-gray-400">
                    <HiOutlineInformationCircle size={48} />
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
