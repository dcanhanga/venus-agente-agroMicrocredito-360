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

export function ReviewsPage() {
  return (
    <div className="max-w-[1400px] mx-auto p-5 font-sans bg-gray-100 text-gray-800">
      {/* Page Header */}
      <div className="flex justify-between items-center bg-white p-5 rounded-lg mb-5 shadow">
        <h1 className="text-2xl font-bold text-gray-700">
          Avaliação de Solicitações
        </h1>
        <div className="flex gap-5">
          {[
            { num: 23, label: 'Pendentes', color: 'text-amber-500' },
            { num: 8, label: 'Hoje', color: 'text-amber-500' },
            { num: 5, label: 'Atrasadas', color: 'text-amber-500' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-xl font-bold ${stat.color}`}>
                {stat.num}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-5">
        <CardBody>
          <div className="flex items-end gap-4">
            <Select label="Cooperativa" placeholder="Todas as cooperativas">
              <SelectItem>Todas as cooperativas</SelectItem>
              <SelectItem>Cooperativa São João</SelectItem>
              <SelectItem>Cooperativa Agro Sul</SelectItem>
              <SelectItem>Cooperativa Verde Campo</SelectItem>
            </Select>
            <Input type="number" label="Valor Mínimo" placeholder="KZ 0" />
            <Input
              type="number"
              label="Valor Máximo"
              placeholder="KZ 500.000"
            />
            <Select label="Prioridade" placeholder="Todas">
              <SelectItem>Todas</SelectItem>
              <SelectItem>Alta</SelectItem>
              <SelectItem>Média</SelectItem>
              <SelectItem>Baixa</SelectItem>
            </Select>
            <Input type="date" label="Data Limite" />
            <Button color="primary" className="mt-5">
              🔍 Filtrar
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-5">
        {/* List */}
        <Card>
          <CardHeader className="bg-gray-50 border-b text-gray-700 font-medium">
            Solicitações Pendentes (23)
          </CardHeader>
          <CardBody className="p-0">
            {[
              {
                id: '#2024-0156',
                valor: 'R$ 50.000',
                coop: 'São João',
                prazo: '24 meses',
                finalidade: 'Capital de Giro',
                garantia: 'Safra Futura',
                tempo: 'Recebida há 2 horas',
                prioridade: 'Alta',
                selected: true,
              },
              {
                id: '#2024-0157',
                valor: 'R$ 120.000',
                coop: 'Agro Sul',
                prazo: '36 meses',
                finalidade: 'Equipamentos',
                garantia: 'Imóvel Rural',
                tempo: 'Recebida há 4 horas',
                prioridade: 'Média',
              },
              {
                id: '#2024-0158',
                valor: 'R$ 75.000',
                coop: 'Verde Campo',
                prazo: '18 meses',
                finalidade: 'Custeio',
                garantia: 'Aval Solidário',
                tempo: 'Recebida há 1 dia',
                prioridade: 'Baixa',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-5 border-b hover:bg-gray-50 cursor-pointer ${
                  item.selected ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
              >
                <div className="flex justify-between">
                  <div className="font-bold text-gray-700">{item.id}</div>
                  <div className="text-lg font-bold text-green-600">
                    {item.valor}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                  <div>
                    <span className="text-gray-500 font-medium">
                      Cooperativa:
                    </span>{' '}
                    {item.coop}
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Prazo:</span>{' '}
                    {item.prazo}
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">
                      Finalidade:
                    </span>{' '}
                    {item.finalidade}
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Garantia:</span>{' '}
                    {item.garantia}
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{item.tempo}</span>
                  <span
                    className={`px-2 py-1 rounded-full font-medium ${
                      item.prioridade === 'Alta'
                        ? 'bg-red-100 text-red-700'
                        : item.prioridade === 'Média'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {item.prioridade} Prioridade
                  </span>
                </div>
              </div>
            ))}
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
              {[
                ['Nome', 'Cooperativa São João'],
                ['CNPJ', '12.345.678/0001-90'],
                ['Fundação', '1995'],
                ['Cooperados', '1.247'],
                ['Patrimônio Líquido', 'R$ 8.500.000'],
                ['Último Crédito', 'Jan/2024'],
              ].map(([label, value], i) => (
                <div key={i}>
                  <div className="text-xs uppercase text-gray-500 font-medium">
                    {label}
                  </div>
                  <div className="font-medium text-gray-700">{value}</div>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Risk Analysis */}
          <Card>
            <CardHeader className="font-bold text-lg flex items-center gap-2">
              ⚠️ Análise de Risco
            </CardHeader>
            <CardBody>
              <div className="text-center bg-gray-50 p-5 rounded mb-4">
                <div className="text-4xl font-bold text-amber-500">7.2</div>
                <div className="text-sm text-gray-500">Score de Risco</div>
              </div>
              <ul className="text-sm">
                <li className="flex justify-between border-b py-2">
                  <span>Histórico de Pagamento</span>
                  <span className="text-green-600">✓ Excelente</span>
                </li>
                <li className="flex justify-between border-b py-2">
                  <span>Capacidade Financeira</span>
                  <span className="text-green-600">✓ Boa</span>
                </li>
                <li className="flex justify-between border-b py-2">
                  <span>Garantias Oferecidas</span>
                  <span className="text-amber-500">⚠ Adequada</span>
                </li>
                <li className="flex justify-between border-b py-2">
                  <span>Setor de Atuação</span>
                  <span className="text-amber-500">⚠ Médio Risco</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Análise Documental</span>
                  <span className="text-green-600">✓ Completa</span>
                </li>
              </ul>
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
                  <a href="#" className="text-blue-600 text-sm font-medium">
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
              />
              <div className="flex gap-2">
                <Button color="success" className="flex-1">
                  ✅ Aprovar
                </Button>
                <Button color="danger" className="flex-1">
                  ❌ Rejeitar
                </Button>
                <Button color="secondary" className="flex-1">
                  ⏸️ Em Análise
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
