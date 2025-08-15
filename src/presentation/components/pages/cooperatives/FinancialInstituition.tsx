import {
  Card,
  CardBody,
  Input,
  Button,
  Select,
  SelectItem,
} from '@heroui/react'
import { useState, useEffect } from 'react'
import {
  addFinancialInstituition,
  deleteFinancialInstituitions,
  getFinancialInstituitions,
} from '../../../../services/call'
import { toast } from 'react-toastify'

export function FinancialInstitutionsPage() {
  const [instituicoes, setInstituicoes] = useState<any>([])
  const [form, setForm] = useState({
    nome: '',
    tipo: '',
    idUtilizador: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (field: any, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  // Buscar lista ao carregar a página
  useEffect(() => {
    carregarInstituicoes()
  }, [])

  const carregarInstituicoes = async () => {
    try {
      const data = await getFinancialInstituitions()
      setInstituicoes(data)
    } catch (error) {
      toast.error('Erro ao carregar instituições financeiras')
    }
  }

  const cadastrarInstituicao = async () => {
    if (!form.nome || !form.tipo || !form.idUtilizador) {
      toast.warning('Preencha todos os campos!')
      return
    }

    try {
      setLoading(true)
      const newFnInstitituition = {
        nome: form.nome,
        tipo: form.tipo,
        idUtilizador: Number(form.idUtilizador),
      }

      await addFinancialInstituition(newFnInstitituition)
      toast.success('Instituição financeira cadastrada com sucesso!')
      setForm({ nome: '', tipo: '', idUtilizador: '' })
      await carregarInstituicoes()
    } catch (error) {
      toast.error('Erro ao cadastrar instituição financeira!')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: any) => {
    try {
      await deleteFinancialInstituitions(id)
      toast.success('Instituição excluída com sucesso!')
      setInstituicoes((prev: any) => prev.filter((inst: any) => inst.id !== id))
    } catch (error) {
      toast.error('Erro ao excluir instituição!')
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto p-5 bg-gray-50 text-gray-800">
      {/* Formulário */}
      <Card className="mb-8">
        <CardBody>
          <h2 className="text-lg font-bold mb-5">
            Cadastrar Nova Instituição Financeira
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            <Input
              label="Nome da Instituição"
              placeholder="Digite o nome"
              value={form.nome}
              onChange={(e) => handleChange('nome', e.target.value)}
            />
            <Select
              label="Tipo"
              placeholder="Selecione o tipo"
              selectedKeys={form.tipo ? [form.tipo] : []}
              onChange={(e) => handleChange('tipo', e.target.value)}
            >
              <SelectItem key="Banco">Banco</SelectItem>
              <SelectItem key="Cooperativas de Crédito e Microfinanças">
                Cooperativas de Crédito e Microfinanças
              </SelectItem>
              <SelectItem key="Sociedades de Investimento e Capital de Risco">
                Sociedades de Investimento e Capital de Risco
              </SelectItem>
              <SelectItem key="Casas de Câmbio">Casas de Câmbio</SelectItem>
            </Select>
            <Input
              label="ID do Utilizador"
              type="number"
              placeholder="Digite o ID"
              value={form.idUtilizador}
              onChange={(e) => handleChange('idUtilizador', e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-4">
            <Button
              variant="flat"
              color="default"
              onPress={() => setForm({ nome: '', tipo: '', idUtilizador: '' })}
            >
              Limpar
            </Button>
            <Button
              color="primary"
              onPress={cadastrarInstituicao}
              isLoading={loading}
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Lista */}
      <h2 className="text-xl font-bold mb-5">Instituições Financeiras</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {instituicoes.map((inst: any) => (
          <Card
            key={inst.id}
            className="shadow-md hover:scale-[1.02] transition-transform"
          >
            <CardBody>
              <h3 className="font-bold text-gray-800 mb-2">{inst.nome}</h3>
              <p className="text-sm text-gray-500 mb-1">🏦 {inst.tipo}</p>
              <p className="text-sm text-gray-500 mb-1">
                👤 ID Utilizador: {inst.idUtilizador}
              </p>
              <p className="text-sm text-gray-400">
                📅 Criado: {inst.dataCriacao}
              </p>
              <p className="text-sm text-gray-400">
                🔄 Atualizado: {inst.dataAtualizacao}
              </p>
              <p className="text-sm text-gray-400">
                ✏️ Modificado por: {inst.modificadoPorNome}
              </p>
              <div className="flex gap-3 mt-4">
                <Button size="sm" color="success">
                  Ver
                </Button>
                <Button size="sm" color="warning">
                  Editar
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  onPress={() => handleDelete(inst.id)}
                >
                  Excluir
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
