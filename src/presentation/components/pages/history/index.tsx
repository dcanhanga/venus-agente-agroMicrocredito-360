import {
  Button,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Card,
  CardBody,
} from '@heroui/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { HiOutlineInformationCircle } from 'react-icons/hi'

import { GuaranteeGrid } from '../../molecules/guaranteeGrid'

import { HistoricalDecisionsMetrics } from './metricsSection'
import { HistoryAnalysisTable } from './historyAnalysisTable'

import { transformevaluationToHistory } from '@/presentation/lib'
import { getAvaliations } from '@/services/call'
import { IHistoryAnalysis } from '@/types'
import { exportExcel } from '@/presentation/lib/exportXls'
const arrayValues = (values: Set<string>) => Array.from(values)

export function HistoryPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedId, setSelectedId] = useState<number | undefined>()
  const [history, setHistory] = useState<IHistoryAnalysis[]>([])
  const [statusSolicitacao, setStatusSolicitacao] = useState<string>('HISTORY')
  const [values, setValues] = useState(new Set(['HISTORY']))

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues(new Set(e.target.value.split(',')))
  }
  const filterByStatus = () => {
    setStatusSolicitacao(arrayValues(values)[0])
  }
  const abrirModal = (id: number) => {
    setSelectedId(id)
    onOpen()
  }

  async function fetchHistory() {
    try {
      const data = await getAvaliations({
        statusSolicitacao: statusSolicitacao,
      })

      setHistory(transformevaluationToHistory(data))
    } catch (error: any) {
      toast.error(error)
    }
  }
  useEffect(() => {
    fetchHistory()
  }, [statusSolicitacao])

  return (
    <div className="max-w-[1400px] mx-auto p-5 space-y-6">
      <HistoricalDecisionsMetrics />

      <Card
        isHoverable
        className="border border-divider shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <CardBody>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Filtros e Busca</h2>
            <Button
              color="success"
              size="sm"
              startContent="📊"
              onPress={() => exportExcel(history)}
            >
              Exportar Dados
            </Button>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
            <Select
              defaultSelectedKeys={['HISTORY']}
              label="Status"
              selectedKeys={values}
              onChange={handleSelectionChange}
            >
              <SelectItem key="HISTORY">Todos</SelectItem>
              <SelectItem key="APROVADA">Aprovadas</SelectItem>
              <SelectItem key="REJEITADA">Rejeitadas</SelectItem>
            </Select>

            {/* <Select label="Cooperativa">
              <SelectItem>Todas</SelectItem>
              <SelectItem>Cooperativa São João</SelectItem>
              <SelectItem>Cooperativa Agro Sul</SelectItem>
              <SelectItem>Cooperativa Verde Campo</SelectItem>
            </Select> */}

            {/* <Input defaultValue="2024-01-01" label="Data Inicial" type="date" />
            <Input defaultValue="2024-06-15" label="Data Final" type="date" />
            <Input label="Valor Mínimo" placeholder="R$ 0" type="number" /> */}
            <Button color="primary" startContent="🔍" onPress={filterByStatus}>
              Buscar
            </Button>
            {/* <Button color="secondary" startContent="🔄">
              Limpar
            </Button> */}
          </div>
        </CardBody>
      </Card>

      {/* Results Table */}

      <HistoryAnalysisTable abrirModal={abrirModal} data={history} />

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
                      <div className="grid md:grid-cols-1 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg ">
                          <div className="grid grid-cols-2">
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
                              <b>Finalidade:</b>{' '}
                              {item.request.finalidadeCredito}
                            </p>
                          </div>
                          <p>
                            <b>Garantia:</b>
                            <GuaranteeGrid guarantees={item.allGuarantees} />
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
