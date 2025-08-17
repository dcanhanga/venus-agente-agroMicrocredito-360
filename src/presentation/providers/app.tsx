import type { NavigateOptions } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastProvider } from '@heroui/react'
import { HeroUIProvider } from '@heroui/system'
import { useHref, useNavigate } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/queryClient'

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <QueryClientProvider client={queryClient}>
    <ToastProvider />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

    </HeroUIProvider>
  )
}
