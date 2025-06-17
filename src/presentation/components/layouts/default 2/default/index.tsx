import { Outlet } from 'react-router-dom'

import { Footer } from './components/footer'
import { Sidebar } from './components/sidebar'

import { SidebarProvider } from '@/presentation/providers/sidebar'
import { Navbar } from '@/presentation/components/layouts/default/components/navbar'

export function DefaultLayout() {
  return (
    <div className="flex relative min-h-[100dvh] max-w-[120rem]  border-divider mx-auto">
      <SidebarProvider>
        <Sidebar />
        <div className="flex  relative flex-1 flex-col transition-all duration-300">
          <Navbar />
          <div className="px-6 flex-grow py-8 md:py-10 max-w-7xl w-full mx-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
      </SidebarProvider>
    </div>
  )
}
