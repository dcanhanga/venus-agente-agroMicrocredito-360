//@ts-nocheck
import {
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Card,
  CardHeader,
  CardBody,
} from '@heroui/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { HiOfficeBuilding, HiShieldExclamation } from 'react-icons/hi'
import { HiCheckCircle } from 'react-icons/hi'

import { ICreditAnalysis } from '@/types'
import { getAvaliations, addDecision, addAnalisys } from '@/services/call'
import { GuaranteeGrid } from '../../molecules/guaranteeGrid'
export function ReviewsPage() {
  const [evaluation, setEvaluation] = useState<ICreditAnalysis[]>([])
  const [filteredEvaluation, setFilteredEvaluation] = useState<
    ICreditAnalysis[]
  >([])
  const [selectedAvaliationIndex, setSelectedAvaliationIndex] = useState(0)
  const [cooperativeOptions, setCooperativeOptions] = useState<string[]>([])
  const [observacoes, setObservacoes] = useState('')
  const [loadingDecision, setLoadingDecision] = useState(false)
  const [loadingAnalisys, setLoadingAnalisys] = useState(false)
  // Filtros
  const [filters, setFilters] = useState({
    cooperativa: '',
    valorMin: '',
    valorMax: '',
    prioridade: '',
    dataLimite: '',
  })

  const selectedCooperative =
    filteredEvaluation[selectedAvaliationIndex]?.cooperativa
  const selectedRiskAnalisys =
    filteredEvaluation[selectedAvaliationIndex]?.analisesRisco[0]
  const selectedSolicitation =
    filteredEvaluation[selectedAvaliationIndex]?.solicitacao
  async function fetchGuarantees() {
    try {
      const data = await getAvaliations({
        statusSolicitacao: 'PENDENTE',
      })
      setEvaluation(data)
      setFilteredEvaluation(data)
    } catch (error: any) {
      toast.error(error)
    }
  }
  async function handleDecision(aprovada: boolean) {
    if (!selectedSolicitation) return
    setLoadingDecision(true)

    const payload = {
      id: 1,
      idSolicitacao: selectedSolicitation.id,
      decisao: observacoes || (aprovada ? 'Aprovado' : 'Reprovado'),
      aprovada,
    }

    try {
      await addDecision(payload)
      toast.success(
        aprovada
          ? 'Decisão de aprovação registrada!'
          : 'Decisão de rejeição registrada!',
      )
      setObservacoes('')
      fetchGuarantees()
    } catch (error: any) {
      toast.error('Erro ao registrar decisão: ' + error)
    } finally {
      setLoadingDecision(false)
    }
  }

  async function applyAnalisys(solicitationId) {
    try {
      if (!solicitationId) return
      setLoadingAnalisys(true)
      const analisys = await addAnalisys(solicitationId)
      toast.success('Solicitação analisada com sucesso')
      fetchGuarantees()
    } catch (error: any) {
      toast.error(error)
    }
    setLoadingAnalisys(false)
  }

  function applyFilters() {
    let filtered = [...evaluation]

    if (filters.cooperativa && filters.cooperativa != 'all') {
      filtered = filtered.filter((e) =>
        e.cooperativa.nome
          .toLowerCase()
          .includes(filters.cooperativa.toLowerCase()),
      )
    }
    if (filters.valorMin) {
      filtered = filtered.filter(
        (e) => e.solicitacao.valorSolicitado >= Number(filters.valorMin),
      )
    }
    if (filters.valorMax) {
      filtered = filtered.filter(
        (e) => e.solicitacao.valorSolicitado <= Number(filters.valorMax),
      )
    }
    if (filters.dataLimite) {
      filtered = filtered.filter(
        (e) => e.solicitacao.dataSolicitacao <= filters.dataLimite,
      )
    }
    setFilteredEvaluation(filtered)
    setSelectedAvaliationIndex(0)
  }

  useEffect(() => {
    fetchGuarantees()
  }, [])
  useEffect(() => {
    const uniqueCooperatives = Array.from(
      new Set(evaluation.map((e) => e.cooperativa.nome)),
    )

    setCooperativeOptions(uniqueCooperatives)
  }, [evaluation])

  return (
    <div className="max-w-[1400px] mx-auto p-5 font-sans bg-gray-100 text-gray-800">
      {/* Page Header */}
      <div className="flex justify-between items-center bg-white p-5 rounded-lg mb-5 shadow">
        <h1 className="text-2xl font-bold text-gray-700">
          Avaliação de Solicitações
        </h1>
        <div className="flex gap-5">
          <div className="text-center">
            <div className={`text-xl font-bold text-amber-500`}>
              {filteredEvaluation.length}
            </div>
            <div className="text-sm text-gray-500">Pendentes</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-5">
        <CardBody>
          <div className="flex items-end gap-4">
            <Select
              label="Cooperativa"
              placeholder="Todas"
              selectedKeys={filters.cooperativa ? [filters.cooperativa] : []}
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0] || '' // pega o único selecionado
                setFilters((f) => ({
                  ...f,
                  cooperativa: value === 'all' ? '' : value,
                }))
              }}
            >
              <SelectItem key="all" value="all">
                Todas
              </SelectItem>
              {cooperativeOptions.map((coop) => (
                <SelectItem key={coop} value={coop}>
                  {coop}
                </SelectItem>
              ))}
            </Select>
            <Input
              label="Valor Mínimo"
              placeholder="KZ 0"
              type="number"
              onChange={(e) =>
                setFilters((f) => ({ ...f, valorMin: e.target.value }))
              }
            />
            <Input
              label="Valor Máximo"
              placeholder="KZ 500.000"
              type="number"
              onChange={(e) =>
                setFilters((f) => ({ ...f, valorMax: e.target.value }))
              }
            />
            <Input
              label="Data Limite"
              type="date"
              onChange={(e) =>
                setFilters((f) => ({ ...f, dataLimite: e.target.value }))
              }
            />
            <Button className="mt-5" color="primary" onClick={applyFilters}>
              🔍 Filtrar
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-5">
        <Card>
          <CardHeader className="bg-gray-50 border-b text-gray-700 font-medium">
            {`Solicitações Pendentes (${filteredEvaluation.length})`}
          </CardHeader>
          <CardBody className="p-0">
            {filteredEvaluation.map((evaluation, i) => {
              const request = evaluation.solicitacao
              const cooperative = evaluation.cooperativa
              const garantees = evaluation.garantias
              const riskAnalysis = evaluation?.analisesRisco[0]
              return (
                <div
                  key={i}
                  className={`p-5 border-b hover:bg-gray-50 cursor-pointer ${
                    selectedAvaliationIndex === i
                      ? 'bg-blue-50 border-l-4 border-blue-500'
                      : ''
                  }`}
                  onClick={() => setSelectedAvaliationIndex(i)}
                >
                  <div className="flex justify-between">
                    <div className="font-bold text-gray-700">#{request.id}</div>
                    <div className="flex flex-col items-end">
                      <p className="text-lg font-bold text-green-600">
                        {request.valorSolicitado} KZ
                      </p>
                      <div>
                        {!riskAnalysis && (
                          <Button
                            isLoading={loadingAnalisys}
                            onClick={() => applyAnalisys(request.id)}
                            className=" rounded-md text-white bg-purple-400 px-4 py-2 text-xs"
                          >
                            Analisar Risco
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <div>
                      <span className="text-gray-500 font-medium">
                        Cooperativa:
                      </span>
                      {cooperative.nome}
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Prazo:</span>
                      {request.dataSolicitacao}
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">
                        Finalidade:
                      </span>
                      {request.finalidadeCredito}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                      Garantias
                    </h3>
                    <GuaranteeGrid guarantees={garantees} />
                  </div>
                </div>
              )
            })}
          </CardBody>
        </Card>

        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader className="font-bold text-lg flex items-center gap-2">
              🏛️ Informações da Cooperativa
            </CardHeader>
            <CardBody className="grid grid-cols-2 gap-4 text-sm">
              {selectedCooperative ? (
                <>
                  <InfoItem label="Nome" value={selectedCooperative.nome} />
                  <InfoItem label="NIF" value={selectedCooperative.nif} />
                  <InfoItem
                    label="Fundação"
                    value={selectedCooperative.fundacao}
                  />
                  <InfoItem
                    label="Patrimônio Líquido"
                    value={`KZ ${selectedCooperative.patrimonio_liquido}`}
                  />
                </>
              ) : (
                <Placeholder
                  icon={<HiOfficeBuilding className="text-gray-400 text-5xl" />}
                  text="Nenhuma cooperativa selecionada"
                />
              )}
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="font-bold text-lg flex items-center gap-2">
              ⚠️ Análise de Risco
            </CardHeader>
            <CardBody>
              {selectedRiskAnalisys ? (
                <>
                  <div className="text-center bg-gray-50 p-5 rounded mb-4">
                    <div className="text-4xl font-bold text-amber-500">
                      {selectedRiskAnalisys?.score?.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">Score de Risco</div>
                  </div>
                  <ul className="text-sm">
                    <li className="flex justify-between border-b py-2">
                      <span>Classificação de Risco</span>
                      <span className="text-green-600">
                        {selectedRiskAnalisys.classificacaoRisco}
                      </span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span>Justificativa</span>
                      <span className="text-green-600">
                        ✓ {selectedRiskAnalisys.justificativa}
                      </span>
                    </li>
                  </ul>
                </>
              ) : (
                <Placeholder
                  icon={
                    <HiShieldExclamation className="text-gray-400 text-5xl" />
                  }
                  text="Nenhuma análise de risco disponível"
                />
              )}
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="font-bold text-lg flex items-center gap-2">
              ⚖️ Decisão
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Textarea
                label="Observações"
                placeholder="Observações e justificativas para a decisão..."
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
              />
              <div className="flex gap-2">
                <Button
                  className="flex-1"
                  color="success"
                  isLoading={loadingDecision}
                  disabled={loadingDecision}
                  onClick={() => handleDecision(true)}
                >
                  ✅ Aprovar
                </Button>
                <Button
                  className="flex-1"
                  color="danger"
                  isLoading={loadingDecision}
                  disabled={loadingDecision}
                  onClick={() => handleDecision(false)}
                >
                  ❌ Rejeitar
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase text-gray-500 font-medium">{label}</div>
      <div className="font-medium text-gray-700">{value}</div>
    </div>
  )
}

function Placeholder({ icon, text }: { icon: JSX.Element; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 text-gray-500 col-span-2">
      {icon}
      <p className="mt-3">{text}</p>
    </div>
  )
}
