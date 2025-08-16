import {
  Button,
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenuItem,
  Tooltip,
} from '@heroui/react'
import { PanelRight } from 'lucide-react'

import { useSidebar } from '../../../../hooks/use-sidebar'

import { ThemeSwitch } from './theme-switch'
import { useAuth } from '@/presentation/providers/authContext'

export const Navbar = () => {
  const { toggleSidebar, isCollapsed } = useSidebar()
  const { user } = useAuth()

  return (
    <HeroUINavbar isBordered={true} maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <Tooltip
          showArrow
          color="primary"
          content={
            isCollapsed ? 'Expandir barra lateral' : 'Recolher barra lateral'
          }
          placement="right-end"
        >
          <Button
            isIconOnly
            aria-label={
              isCollapsed ? 'Expandir barra lateral' : 'Recolher barra lateral'
            }
            color="primary"
            variant="shadow"
            onPress={toggleSidebar}
          >
            <PanelRight />
          </Button>
        </Tooltip>
      </NavbarContent>
      <NavbarContent className="flex gap-4" justify="end">
        <NavbarMenuItem>
          <ThemeSwitch />
        </NavbarMenuItem>
        <NavbarMenuItem>
          {user != null && (
            <span>
              {user.tipo_utilizador} - {user.email}
            </span>
          )}
        </NavbarMenuItem>
      </NavbarContent>
    </HeroUINavbar>
  )
}
