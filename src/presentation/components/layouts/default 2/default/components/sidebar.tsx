import { useSidebar } from '@/presentation/hooks'
import { cn } from '@/presentation/lib'
import { Button } from '@heroui/button'

import { NavLink, useLocation } from 'react-router-dom'
import { AccordionMenu } from './accordion-menu'
import { links } from './links'

export function Sidebar() {
  const location = useLocation()
  const { isCollapsed } = useSidebar()
  return (
    <aside
      className={cn(
        'h-screen sticky bottom-0 top-0  left-0 border-r  flex-col transition-all duration-300 flex z-40 w-full items-center  border-b border-divider ',
        isCollapsed ? 'w-20' : 'w-72',
      )}
    >
      <div
        className={cn(
          'px-6 py-4 mt-8 text-base font-bold uppercase text-center',
          'transition-all duration-500 ease-in-out',
          'overflow-hidden relative',
          isCollapsed
            ? 'opacity-0 scale-90 translate-x-[-10px] w-0'
            : 'opacity-100 scale-100 translate-x-0 w-full',
        )}
      >
        <span
          className={cn(
            'block opacity-0 animate-fadeIn transition-opacity duration-700 ease-in-out',
            !isCollapsed && 'opacity-100',
          )}
        >
          <img src="/minint.jpeg" alt="" />
        </span>
      </div>
      <nav className="flex-1 mt-6">
        <ul className="space-y-3">
          {links.map((item) => {
            const activePaths = [item.href, ...(item?.subRoutes || [])] // Se não existir subRoutes, usa array vazio

            const isActive = activePaths.some((path) =>
              location.pathname.startsWith(path),
            )
            if (item.href === '/configuracao-administracao') {
              return (
                <li key={item.label}>
                  <AccordionMenu
                    Icon={item.Icon}
                    label={item.label}
                    isActive={false}
                  />
                </li>
              )
            }
            return (
              <li key={item.label}>
                <Button
                  color="primary"
                  variant={isActive ? 'solid' : 'light'}
                  startContent={<item.Icon />}
                  to={item.href}
                  as={NavLink}
                  fullWidth={!isCollapsed}
                  className={cn( 'justify-start')}
                >

                    <span className="text-base font-medium">{item.label}</span>

                </Button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
