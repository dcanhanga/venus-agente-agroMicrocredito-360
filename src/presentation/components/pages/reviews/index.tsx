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

import { ICreditAnalysis } from '@/types'
import { getAvaliations, addDecision } from '@/services/call'

export function ReviewsPage() {
  const [evaluation, setEvaluation] = useState<ICreditAnalysis[]>([])
  const [filteredEvaluation, setFilteredEvaluation] = useState<
    ICreditAnalysis[]
  >([])
  const [selectedAvaliationIndex, setSelectedAvaliationIndex] = useState(0)
  const [cooperativeOptions, setCooperativeOptions] = useState<string[]>([])
  const [observacoes, setObservacoes] = useState('')
  const [loadingDecision, setLoadingDecision] = useState(false)
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
      console.log(data)

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

  function applyFilters() {
    let filtered = [...evaluation]

    if (filters.cooperativa && filters.cooperativa != '') {
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
              onChange={(e) => {
                setFilters((f) => ({ ...f, cooperativa: e.target.value }))
                console.log(e.target.value)
              }}
            >
              <SelectItem value="0">Todas</SelectItem>
              {cooperativeOptions.map((coop, idx) => (
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
              const garanteeString = evaluation.garantias
                .map((g) => g.descricao)
                .join(',')

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
                    <div className="text-lg font-bold text-green-600">
                      {request.valorSolicitado} KZ
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
                    <div>
                      <span className="text-gray-500 font-medium">
                        Garantia:
                      </span>
                      {garanteeString}
                    </div>
                  </div>
                </div>
              )
            })}
          </CardBody>
        </Card>

        {/* Details Panel */}
        <div className="flex flex-col gap-5">
          {/* Cooperative Info */}
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
          {/* Risk Analysis */}
          <Card>
            <CardHeader className="font-bold text-lg flex items-center gap-2">
              ⚠️ Análise de Risco
            </CardHeader>
            <CardBody>
              {selectedRiskAnalisys ? (
                <>
                  <div className="text-center bg-gray-50 p-5 rounded mb-4">
                    <div className="text-4xl font-bold text-amber-500">
                      {selectedRiskAnalisys.score}
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
          {/* Documents */}
          <Card>
            <CardHeader className="font-bold text-lg flex items-center gap-2">
              📄 Documentos
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
              {[
                '📋 Formulário de Solicitação',
                '📊 Demonstrações Financeiras',
                '🏠 Documentos de Garantia',
                '✅ Certidões Negativas',
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 border rounded bg-gray-50"
                >
                  <span>{doc}</span>
                  <a className="text-blue-600 text-sm font-medium" href="#">
                    Ver
                  </a>
                </div>
              ))}
            </CardBody>
          </Card>
          {/* Decision */}
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
