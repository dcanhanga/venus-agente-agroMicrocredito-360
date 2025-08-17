import {
  Card,
  CardBody,
  Input,
  Button,
  Select,
  SelectItem,
} from '@heroui/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import {
  addCooperative,
  getCooperatives,
  deleteCooperative, // precisa implementar no services/call
} from '../../../../services/call'

import { delinquencyRate } from '@/presentation/lib/utils'
import { allLocations, culturasNomes } from '@/presentation/lib/data'

export function CooperativesPage() {
  const [name, setName] = useState('')
  const [nif, setNif] = useState('')
  const [location, setLocation] = useState('')
  const [productType, setProductType] = useState('')
  const [productVolume, setProductVolume] = useState(0)
  const [patrimonioLiquido, setPatrimonioLiquido] = useState(0)
  const [fundacao, setFundacao] = useState('')
  const [cooperados, setCooperados] = useState(0)
  const [loading, setLoading] = useState(false)
  const [cooperatives, setCooperatives] = useState([])

  async function fetchCooperatives() {
    try {
      const data = await getCooperatives()

      setCooperatives(data)
    } catch {
      toast.error('Erro ao carregar as cooperativas!')
    }
  }

  useEffect(() => {
    fetchCooperatives()
  }, [])

  async function handleRegisterCooperative() {
    try {
      if (
        !name ||
        !nif ||
        !location ||
        !productType ||
        productVolume <= 0 ||
        patrimonioLiquido <= 0 ||
        !fundacao ||
        cooperados <= 0
      ) {
        toast.error('Preencha todos os campos corretamente!')

        return
      }

      setLoading(true)

      const newCoop = {
        nome: name,
        nif,
        tipoProduto: productType,
        localizacao: location,
        volumeProducao: productVolume,
        indicadoresInadimplencia: delinquencyRate(),
        patrimonioLiquido,
        fundacao,
        cooperados,
      }

      await addCooperative(newCoop)

      toast.success('Cooperativa cadastrada com sucesso!')

      clearFields()

      fetchCooperatives() // recarregar lista
    } catch {
      toast.error('Erro ao cadastrar cooperativa!')
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteCooperative(id: number) {
    try {
      await deleteCooperative(id)
      toast.success('Cooperativa eliminada com sucesso!')
      fetchCooperatives()
    } catch {
      toast.error('Erro ao eliminar cooperativa!')
    }
  }

  async function clearFields() {
    setName('')
    setNif('')
    setLocation('')
    setProductType('')
    setProductVolume(0)
    setPatrimonioLiquido(0)
    setFundacao('')
    setCooperados(0)
  }

  return (
    <div className="max-w-[1200px] mx-auto p-5 bg-gray-50 text-gray-800">
      {/* Formulário */}
      <Card className="mb-8">
        <CardBody>
          <h2 className="text-lg font-bold mb-5">Cadastrar Nova Cooperativa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            <Input
              label="Nome da Cooperativa"
              placeholder="Digite o nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="NIF"
              placeholder="Digite o NIF"
              value={nif}
              onChange={(e) => setNif(e.target.value)}
            />
            <Select
              label="Localização"
              placeholder="Selecione a província"
              selectedKeys={location ? [location] : []}
              onChange={(e) => setLocation(e.target.value)}
            >
              {allLocations.map((loc) => (
                <SelectItem key={loc}>{loc}</SelectItem>
              ))}
            </Select>
            <Select
              label="Tipo de Produto"
              placeholder="Selecione"
              selectedKeys={productType ? [productType] : []}
              onChange={(e) => setProductType(e.target.value)}
            >
              {culturasNomes.map((str) => (
                <SelectItem key={str}>
                  {str.charAt(0).toUpperCase() + str.slice(1)}
                </SelectItem>
              ))}
            </Select>

            <Input
              label="Volume do Produto"
              type="number"
              onChange={(e) => setProductVolume(parseInt(e.target.value) || 0)}
              placeholder="Digite o volume"
              value={productVolume.toString()}
            />
            <Input
              label="Patrimônio Líquido"
              type="number"
              onChange={(e) =>
                setPatrimonioLiquido(parseFloat(e.target.value) || 0)
              }
              placeholder="Digite o patrimônio líquido"
              value={patrimonioLiquido.toString()}
            />
            <Input
              label="Data de Fundação"
              type="date"
              onChange={(e) => setFundacao(e.target.value)}
              value={fundacao}
            />
            <Input
              label="Número de Cooperados"
              type="number"
              onChange={(e) => setCooperados(parseInt(e.target.value) || 0)}
              placeholder="Digite o nº de cooperados"
              value={cooperados.toString()}
            />
          </div>
          <div className="flex justify-end gap-4">
            <Button
              color="default"
              variant="flat"
              onClick={() => clearFields()}
            >
              Limpar
            </Button>
            <Button
              color="primary"
              isLoading={loading}
              onClick={handleRegisterCooperative}
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Lista */}
      <h2 className="text-xl font-bold mb-5">Cooperativas Cadastradas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cooperatives.map((coop: any) => (
          <Card
            key={coop.id}
            className="shadow-md hover:scale-[1.02] transition-transform"
          >
            <CardBody>
              <h3 className="font-bold text-gray-800 mb-2">{coop.nome}</h3>
              <p className="text-sm text-gray-500">🆔 NIF: {coop.nif}</p>
              <p className="text-sm text-gray-500">📍 {coop.localizacao}</p>
              <p className="text-sm text-gray-500">🏷 {coop.tipoProduto}</p>
              <p className="text-sm text-gray-500">
                📦 Volume: {coop.volumeProducao}
              </p>
              <p className="text-sm text-gray-500">
                📊 Inadimplência: {coop.indicadoresInadimplencia}
              </p>
              <p className="text-sm text-gray-400">
                📅 Criado em:{' '}
                {new Date(coop.dataCriacao).toLocaleDateString('pt-PT')}
              </p>
              <div className="flex gap-3 mt-4">
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => handleDeleteCooperative(coop.id)}
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
