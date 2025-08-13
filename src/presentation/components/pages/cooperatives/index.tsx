import {
  Card,
  CardBody,
  Input,
  Button,
  Select,
  SelectItem,
} from '@heroui/react'

export function CooperativesPage() {
  const cooperativas = [
    {
      id: 1,
      nome: 'Cooperativa Agricultores Unidos',
      categoria: 'Agricultura',
      dataCadastro: '2025-08-10',
      local: 'Luanda',
    },
    {
      id: 2,
      nome: 'Cooperativa Pescadores do Mar',
      categoria: 'Pesca',
      dataCadastro: '2025-08-12',
      local: 'Benguela',
    },
  ]

  return (
    <>
      <div className="max-w-[1200px] mx-auto p-5 bg-gray-50 text-gray-800">
        {/* Formulário de Cadastro */}
        <Card className="mb-8">
          <CardBody>
            <h2 className="text-lg font-bold mb-5">
              Cadastrar Nova Cooperativa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
              <Input label="Nome da Cooperativa" placeholder="Digite o nome" />
              <Input label="Localização" placeholder="Digite a localização" />
              <Select label="Categoria" placeholder="Selecione">
                <SelectItem key="agri">Agricultura</SelectItem>
                <SelectItem key="pesca">Pesca</SelectItem>
                <SelectItem key="comercio">Comércio</SelectItem>
              </Select>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="flat" color="default">
                Limpar
              </Button>
              <Button color="primary">Salvar</Button>
            </div>
          </CardBody>
        </Card>

        {/* Filtros */}
        <Card className="mb-8">
          <CardBody>
            <h2 className="text-lg font-bold mb-5">Filtros de Pesquisa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              <Input type="date" label="Data Inicial" />
              <Input type="date" label="Data Final" />
              <Select label="Categoria" placeholder="Selecione">
                <SelectItem key="all">Todas</SelectItem>
                <SelectItem key="agri">Agricultura</SelectItem>
                <SelectItem key="pesca">Pesca</SelectItem>
              </Select>
              <Input label="Localização" placeholder="Digite" />
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="flat" color="default">
                Limpar Filtros
              </Button>
              <Button color="primary">Aplicar Filtros</Button>
            </div>
          </CardBody>
        </Card>

        {/* Lista de Cooperativas */}
        <h2 className="text-xl font-bold mb-5">Cooperativas Cadastradas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cooperativas.map((coop) => (
            <Card
              key={coop.id}
              className="shadow-md hover:scale-[1.02] transition-transform"
            >
              <CardBody>
                <h3 className="font-bold text-gray-800 mb-2">{coop.nome}</h3>
                <p className="text-sm text-gray-500 mb-1">📍 {coop.local}</p>
                <p className="text-sm text-gray-500 mb-1">
                  🏷 {coop.categoria}
                </p>
                <p className="text-sm text-gray-400">📅 {coop.dataCadastro}</p>
                <div className="flex gap-3 mt-4">
                  <Button size="sm" color="success">
                    Ver
                  </Button>
                  <Button size="sm" color="warning">
                    Editar
                  </Button>
                  <Button size="sm" color="danger">
                    Excluir
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
