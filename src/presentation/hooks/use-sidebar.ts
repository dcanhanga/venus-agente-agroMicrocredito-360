import { SidebarContext } from '@/presentation/providers/sidebar'
import { useContext } from 'react'

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar deve ser usado dentro de um SidebarProvider')
  }
  return context
}
