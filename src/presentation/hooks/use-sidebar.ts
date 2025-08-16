import { useContext } from 'react'

import { SidebarContext } from '@/presentation/providers/sidebar'

export function useSidebar() {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebar deve ser usado dentro de um SidebarProvider')
  }

  return context
}
