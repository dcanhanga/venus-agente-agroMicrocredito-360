import { Outlet } from 'react-router-dom'
import React from 'react'

import { Sidebar } from './components'

import { Navbar } from '@/presentation/components/navbar'
import { SidebarProvider } from '@/presentation/providers'

export function DefaultLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

/*
 Visão Geral das Telas do Dashboard (Instituição Financeira)
1. Dashboard Principal
Resumo de tudo que importa na primeira tela.

Informações:
Total de solicitações recebidas no mês

Créditos concedidos (R$)

Solicitações pendentes

Gráfico de aprovações/rejeições por período

Atalhos para:

Solicitações pendentes

Relatórios gerenciais

Histórico de decisões

Componentes sugeridos:

<StatCard />, <Chart />, <Button />, <ShortcutGrid />

2. Solicitações Pendentes
Lista detalhada para facilitar triagem e decisão rápida.

Funcionalidades:
Tabela com filtros (por cooperativa, valor, data)

Colunas:

ID | Data | Cooperativa | Valor Solicitado | Status

Ações por linha:

"Visualizar detalhes"

"Aprovar" / "Rejeitar"

UX Tip: Agrupar por prioridade (ex: risco alto em destaque)

3. Detalhes da Solicitação
Tela completa para tomada de decisão informada.

Dados exibidos:
Informações da cooperativa (nome, histórico, pontuação)

Detalhes da solicitação (valor, finalidade, prazo)

Indicadores financeiros da cooperativa

Decisão:

✅ Aprovar / ❌ Rejeitar

Campo para observações

Botão para enviar notificação automática à cooperativa

4. Histórico de Solicitações
Visão completa de todas as decisões tomadas.

Filtros:
Período, status, cooperativa, valor

Ações:
Exportar como Excel / PDF

Visualizar justificativas

5. Relatórios Gerenciais
Dados para apoiar decisões estratégicas e reuniões.

Tipos de relatórios:
Crédito concedido por cooperativa

Risco médio por região ou setor

Percentual de rejeição

Comparação mês a mês

Visualização:
Gráficos de barras, linhas, pizza

Download em PDF

Agrupamento por filtros avançados

6. Notificações
Histórico de comunicações enviadas às cooperativas.

Campos:
Tipo (aprovado/rejeitado)

Cooperativa destinatária

Data de envio

Conteúdo da notificação

7. Login e Gestão de Usuários (Admin)
Controle de acesso ao sistema.

Login com autenticação segura

Gestão de permissões:

Admins, Analistas, Gerentes

Criação de novos usuários internos

🔁 Fluxo de Navegação Proposto
scss
Copiar
Editar
Login
  ↓
Dashboard Principal
  ├─> Solicitações Pendentes
  │     └─> Detalhes da Solicitação (com Aprovar/Rejeitar)
  ├─> Histórico de Solicitações
  ├─> Relatórios Gerenciais
  └─> Notificações Enviadas
📌 Próximos passos que posso te ajudar:
🎨 Wireframe visual dessas telas

⚛️ Componentes React reutilizáveis para essas funcionalidades

🔐 Fluxo de autenticação e controle de acesso

🧪 Mock de dados e testes automáticos

📊 Ajuda com geração de relatórios (PDF, gráficos)

Quer que comecemos desenhando o wireframe visual das telas com foco em "Solicitações Pendentes"? Ou preferes já partir para a implementação em código?
*/
