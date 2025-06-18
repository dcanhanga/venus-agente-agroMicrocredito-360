import {
  Button,
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenuItem,
  Tooltip,
} from '@heroui/react'
import { PanelRight } from 'lucide-react'

import { useSidebar } from '../hooks/use-sidebar'

import { ThemeSwitch } from './theme-switch'

export const Navbar = () => {
  const { toggleSidebar, isCollapsed } = useSidebar()

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
          <span>dropdown account</span>
        </NavbarMenuItem>
      </NavbarContent>
    </HeroUINavbar>
  )
}
