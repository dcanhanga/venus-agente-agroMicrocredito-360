import { Button, Link, Tooltip } from '@heroui/react'
import { Icon } from '@iconify/react'
import { useLocation } from 'react-router-dom'

import { useSidebar } from '@/presentation/hooks/use-sidebar'
type SideBarItemProps = {
  icon: string
  label: string
  href: string
}
export function SidebarItem({ icon, label, href }: SideBarItemProps) {
  const { isCollapsed } = useSidebar()
  const location = useLocation()
  const active = location.pathname.startsWith(href)

  if (isCollapsed) {
    return (
      <Tooltip showArrow color="primary" content={label} placement="right-end">
        <Button
          isIconOnly
          as={Link}
          color="primary"
          href={href}
          startContent={<Icon className="w-5 h-5" icon={icon} />}
          variant={active ? 'shadow' : 'light'}
        />
      </Tooltip>
    )
  }

  return (
    <Button
      fullWidth
      as={Link}
      className="justify-start"
      color="primary"
      href={href}
      startContent={<Icon className="w-5 h-5" icon={icon} />}
      variant={active ? 'shadow' : 'light'}
    >
      {label}
    </Button>
  )
}
