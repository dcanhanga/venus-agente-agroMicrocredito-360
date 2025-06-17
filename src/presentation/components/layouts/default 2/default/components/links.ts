import {
  BarChart3,
  FileSearch,
  HandHelping,
  LayoutDashboard,
  Settings,
  SquarePen,
} from 'lucide-react'

export const links = [
  {
    label: 'Dashboard',
    Icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Recadastramento',
    Icon: SquarePen,
    href: '/recadastramento',
    subRoutes: [],
  },
  // {
  //   label: 'Cadastro',
  //   Icon: SquarePen,
  //   href: '/cadastro',
  //   subRoutes: ['/cadastro/novo', '/cadastro/editar'],
  // },
  {
    label: 'Relatório e Estatística',
    Icon: BarChart3,
    href: '/restauracao-estatistica',
  },
  {
    label: 'Config e Administração',
    Icon: Settings,
    href: '/configuracao-administracao',
  },
  // {
  //   label: 'Listagem Geral',
  //   Icon: List,
  //   href: '/listagem-geral',
  // },
  {
    label: 'Ajuda',
    Icon: HandHelping,
    href: '/ajuda',
  },
  {
    label: 'Contato',
    Icon: FileSearch,
    href: '/contato',
  },
  // {
  //   label: 'Auditoria e Logs',
  //   Icon: ShieldCheck,
  //   href: '/auditoria-logs',
  // },
  // {
  //   label: 'Backup e Restauro',
  //   Icon: RefreshCcw,
  //   href: '/backup-restauro',
  // },
]
