import { useSidebar } from '@/presentation/hooks/use-sidebar'
import { cn } from '@/presentation/lib'
type SideBarProps = Omit<React.ComponentProps<'aside'>, 'children'>
export function Sidebar(props: SideBarProps) {
  const { className, ...rest } = props
  const { isCollapsed } = useSidebar()

  return (
    <aside
      className={cn(
        'border-r border-r-divider',
        isCollapsed
          ? 'w-64 overflow-y-auto transition-all duration-300'
          : 'w-16 overflow-y-auto transition-all duration-300 overflow-hidden',
        className,
      )}
      {...rest}
    >
      Domingos
    </aside>
  )
}
