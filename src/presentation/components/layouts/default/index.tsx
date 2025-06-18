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
          <div className="overflow-y-auto flex-grow">
            <div className="max-w-screen-2xl mx-auto w-full px-6  pt-16">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
