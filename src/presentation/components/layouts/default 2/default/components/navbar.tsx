import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from '@heroui/navbar'

import { Button } from '@heroui/button'
import { LogOut } from 'lucide-react'
import { useCallback } from 'react'
import { useSidebar } from '../../../../hooks'

export const Navbar = () => {
  useSidebar()
  const handleLogout = useCallback(async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await fetch(`${apiUrl}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        localStorage.clear()
        window.location.reload()
      } else {
        console.error('Falha ao realizar logout')
      }
    } catch (error) {
      console.error('Erro ao realizar logout:', error)
    }
  }, [])
  return (
    <HeroUINavbar maxWidth="xl" isBordered>
      <NavbarContent
        className="basis-1/5 sm:basis-full"
        justify="start"
      ></NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Button
            onPress={handleLogout}
            isIconOnly
            aria-label="Terminar sessão"
            color="danger"
            variant="ghost"
            radius="full"
          >
            <LogOut />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  )
}
