import { Outlet } from 'react-router-dom'

import { Sidebar, Navbar } from './components'

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
