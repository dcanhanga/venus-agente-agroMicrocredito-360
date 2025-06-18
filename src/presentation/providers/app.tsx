import type { NavigateOptions } from 'react-router-dom'

import { ToastProvider } from '@heroui/react'
import { HeroUIProvider } from '@heroui/system'
import { useHref, useNavigate } from 'react-router-dom'

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  )
}
