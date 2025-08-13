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
import { useState } from 'react'
export function HistoryPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedId, setSelectedId] = useState(null)

  const abrirModal = (id: any) => {
    setSelectedId(id)
    onOpen()
  }
  return (
    <div className="max-w-[1400px] mx-auto p-5 space-y-6">
      {/* Page Header */}
      <Card shadow="sm">
        <CardBody>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Histórico de Decisões
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <div className="bg-gray-50 p-4 rounded-lg text-center border">
              <div className="text-2xl font-bold text-purple-600">2.3 dias</div>
              <div className="text-sm text-gray-500">Tempo Médio</div>
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
            <Select label="Status" defaultSelectedKeys={['todos']}>
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

            <Input label="Data Inicial" type="date" defaultValue="2024-01-01" />
            <Input label="Data Final" type="date" defaultValue="2024-06-15" />

            <Select label="Analista">
              <SelectItem>Todos</SelectItem>
              <SelectItem>João Silva</SelectItem>
              <SelectItem>Maria Santos</SelectItem>
              <SelectItem>Carlos Lima</SelectItem>
              <SelectItem>Ana Costa</SelectItem>
            </Select>

            <Input label="Valor Mínimo" type="number" placeholder="R$ 0" />
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <Input
              className="flex-1"
              placeholder="Buscar por ID, cooperativa ou observações..."
            />
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
                  Analista
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
              <tr className="hover:bg-gray-50">
                <td
                  className="p-3 text-blue-600 font-semibold cursor-pointer"
                  onClick={() => abrirModal('#2024-0155')}
                >
                  #2024-0155
                </td>
                <td className="p-3">Cooperativa Agro Sul</td>
                <td className="p-3 font-semibold text-green-600">R$ 120.000</td>
                <td className="p-3">
                  <Chip color="success" size="sm" variant="flat">
                    Aprovada
                  </Chip>
                </td>
                <td className="p-3 text-sm text-gray-500">14/06/2024 16:45</td>
                <td className="p-3 text-sm text-gray-500">João Silva</td>
                <td className="p-3">6 horas</td>
                <td className="p-3 flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="flat"
                    onPress={() => abrirModal('#2024-0155')}
                  >
                    👁️
                  </Button>
                  <Button isIconOnly size="sm" variant="flat">
                    📝
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">
              Mostrando 1 a 25 de 1,403 registros
            </span>
            <Pagination total={57} initialPage={1} />
          </div>
        </CardBody>
      </Card>

      {/* Detail Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="font-bold">
                Detalhes da Solicitação {selectedId}
              </ModalHeader>
              <ModalBody>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Informações da Solicitação
                    </h4>
                    <p>
                      <b>ID:</b> #2024-0155
                    </p>
                    <p>
                      <b>Valor:</b> R$ 120.000
                    </p>
                    <p>
                      <b>Prazo:</b> 36 meses
                    </p>
                    <p>
                      <b>Finalidade:</b> Equipamentos
                    </p>
                    <p>
                      <b>Garantia:</b> Imóvel Rural
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Dados da Cooperativa</h4>
                    <p>
                      <b>Nome:</b> Cooperativa Agro Sul
                    </p>
                    <p>
                      <b>CNPJ:</b> 12.345.678/0001-90
                    </p>
                    <p>
                      <b>Cooperados:</b> 1.247
                    </p>
                    <p>
                      <b>Score de Risco:</b> 6.8 (Baixo)
                    </p>
                  </div>
                </div>
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
