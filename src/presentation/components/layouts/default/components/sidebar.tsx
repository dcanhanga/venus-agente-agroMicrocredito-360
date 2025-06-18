import React from 'react'
import { Button, Navbar, NavbarBrand } from '@heroui/react'
import { Icon } from '@iconify/react'

import { Logo } from './logo'
import { SidebarItem } from './sidebarItem'

import { useSidebar } from '@/presentation/hooks/use-sidebar'
import { cn } from '@/presentation/lib'

type SideBarProps = Omit<React.ComponentProps<'aside'>, 'children'>

const menuItems = [
  { icon: 'lucide:home', label: 'Dashboard', href: '/' },
  { icon: 'lucide:clipboard-check', label: 'Avaliações', href: '/avaliacoes' },
  { icon: 'lucide:history', label: 'Históricos', href: '/historicos' },
  { icon: 'lucide:bar-chart-3', label: 'Relatórios', href: '/relatorios' },
  { icon: 'lucide:building', label: 'Cooperativas', href: '/cooperativas' },
]

export function Sidebar(props: SideBarProps) {
  const { className, ...rest } = props
  const { isCollapsed } = useSidebar()

  return (
    <aside
      className={cn(
        'flex flex-col h-screen bg-content1 border-r border-r-divider transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64',
        className,
      )}
      {...rest}
    >
      <Navbar isBordered={true} maxWidth="full" position="sticky">
        <NavbarBrand className="gap-2">
          <Logo />
          <h1
            className={cn(
              isCollapsed ? 'hidden' : 'block text-xl font-semibold',
            )}
          >
            VENUS A.A.M-360
          </h1>
        </NavbarBrand>
      </Navbar>
      <nav aria-label="Main Navigation" className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.href}>
              <SidebarItem {...item} />
            </li>
          ))}
        </ul>
      </nav>
      <div className={cn('border-t p-2 border-divider')}>
        <Button
          aria-label="Sair"
          className={cn(!isCollapsed && 'justify-start')}
          color="danger"
          fullWidth={!isCollapsed}
          isIconOnly={isCollapsed}
          startContent={
            <Icon
              aria-hidden="true"
              className="w-5 h-5"
              icon="lucide:log-out"
            />
          }
          variant="shadow"
        >
          {!isCollapsed && 'Sair'}
        </Button>
      </div>
    </aside>
  )
}
