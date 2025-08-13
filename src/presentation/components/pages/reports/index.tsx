import {
  Button,
  Select,
  SelectItem,
  Input,
  Card,
  CardBody,
} from '@heroui/react'
export function ReportsPage() {
  return (
    <div className="max-w-[1200px] mx-auto p-5 bg-gray-50 text-gray-800">
      {/* Filters Section */}
      <Card className="mb-8">
        <CardBody>
          <h2 className="text-lg font-bold text-gray-800 mb-5">
            Filtros de Pesquisa
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            <Select label="Período" placeholder="Selecione">
              <SelectItem key="30d">Últimos 30 dias</SelectItem>
              <SelectItem key="3m">Últimos 3 meses</SelectItem>
              <SelectItem key="1y">Último ano</SelectItem>
              <SelectItem key="custom">Personalizado</SelectItem>
            </Select>

            <Input type="date" label="Data Inicial" />
            <Input type="date" label="Data Final" />

            <Select label="Categoria" placeholder="Selecione">
              <SelectItem key="all">Todas as categorias</SelectItem>
              <SelectItem key="sales">Vendas</SelectItem>
              <SelectItem key="finance">Financeiro</SelectItem>
              <SelectItem key="ops">Operacional</SelectItem>
              <SelectItem key="mkt">Marketing</SelectItem>
            </Select>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="flat" color="default">
              Limpar Filtros
            </Button>
            <Button color="primary">Aplicar Filtros</Button>
          </div>
        </CardBody>
      </Card>

      {/* Reports Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-5">
          Relatórios Disponíveis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: '📊',
              title: 'Relatório de Vendas',
              desc: 'Análise completa das vendas por período, produto e região com métricas de performance.',
            },
            {
              icon: '💰',
              title: 'Relatório Financeiro',
              desc: 'Demonstrativo financeiro com receitas, despesas e fluxo de caixa detalhado.',
            },
            {
              icon: '👥',
              title: 'Relatório de Usuários',
              desc: 'Estatísticas de usuários ativos, cadastros e comportamento na plataforma.',
            },
            {
              icon: '📦',
              title: 'Relatório de Estoque',
              desc: 'Controle de estoque, produtos em falta e relatório de movimentação.',
            },
            {
              icon: '📈',
              title: 'Relatório de Performance',
              desc: 'KPIs e métricas de performance do sistema e processos operacionais.',
            },
            {
              icon: '🎯',
              title: 'Relatório de Marketing',
              desc: 'Análise de campanhas, conversões e ROI das estratégias de marketing.',
            },
          ].map((report, idx) => (
            <Card
              key={idx}
              className="hover:translate-y-[-4px] transition-transform shadow-md"
            >
              <CardBody>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl mb-3">
                  {report.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{report.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{report.desc}</p>
                <div className="flex gap-3">
                  <Button size="sm" color="success">
                    Visualizar
                  </Button>
                  <Button size="sm" color="warning">
                    Exportar
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <Card className="mb-8">
        <CardBody>
          <h2 className="text-xl font-bold text-gray-800 mb-5">
            Visualizações Gráficas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📊',
                title: 'Gráfico de Vendas',
                subtitle: 'Vendas mensais - Últimos 12 meses',
              },
              {
                icon: '📈',
                title: 'Gráfico de Crescimento',
                subtitle: 'Taxa de crescimento por trimestre',
              },
              {
                icon: '🥧',
                title: 'Distribuição por Categoria',
                subtitle: 'Produtos mais vendidos por categoria',
              },
              {
                icon: '📉',
                title: 'Análise de Tendências',
                subtitle: 'Tendências de mercado e sazonalidade',
              },
            ].map((chart, idx) => (
              <div
                key={idx}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-400 flex flex-col items-center justify-center min-h-[250px]"
              >
                <div className="text-5xl mb-3">{chart.icon}</div>
                <h3 className="font-bold text-gray-700 mb-1">{chart.title}</h3>
                <p className="text-sm text-gray-500">{chart.subtitle}</p>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Export Section */}
      <Card>
        <CardBody>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Opções de Exportação
          </h2>
          <p className="text-gray-500 mb-4">
            Exporte seus relatórios nos formatos disponíveis:
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: '📄', text: 'Exportar PDF' },
              { icon: '📊', text: 'Exportar Excel' },
              { icon: '📋', text: 'Exportar CSV' },
              { icon: '📧', text: 'Enviar por Email' },
            ].map((opt, idx) => (
              <Button
                key={idx}
                variant="bordered"
                startContent={opt.icon}
                className="font-bold"
              >
                {opt.text}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
