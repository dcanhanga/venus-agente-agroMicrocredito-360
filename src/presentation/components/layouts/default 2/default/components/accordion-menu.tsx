import { Accordion, AccordionItem } from '@heroui/accordion'
import { Button } from '@heroui/button'
import { List, LucideProps, SquarePen } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { cn } from '@/presentation/lib'

type AccordionMenuProps = {
  isActive: boolean
  label: string
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
}

export function AccordionMenu({
  isActive,
  Icon,
  label,
}: Readonly<AccordionMenuProps>) {
  const buttonVariant = isActive ? 'solid' : 'light'
  const triggerClassName = cn(
    'z-0 group relative inline-flex items-center box-border appearance-none select-none whitespace-nowrap',
    'font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent',
    'data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10',
    'data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus',
    'data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2',
    'rounded-medium w-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity',
    'motion-reduce:transition-none bg-transparent text-primary data-[hover=true]:bg-primary/20 justify-start',
    isActive ? 'bg-primary text-white' : 'bg-transparent hover:bg-primary-100',
  )

  return (
    <Accordion className="p-0" selectionMode="single">
      <AccordionItem
        key="1"
        classNames={{
          base: 'w-full',
          trigger: triggerClassName,
          title: 'text-base font-medium',
          indicator: 'text-current',
        }}
        startContent={<Icon />}
        title={<span className="text-primary">{label}</span>}
      >
        <div className="flex flex-col gap-2">
          <Button
            fullWidth
            as={NavLink}
            className="justify-start"
            color="primary"
            startContent={<SquarePen />}
            to="cadastro/tecnico"
            variant={buttonVariant}
          >
            <span className="text-base font-medium">Cadastro</span>
          </Button>
          <Button
            fullWidth
            as={NavLink}
            className="justify-start"
            color="primary"
            startContent={<List />}
            to="listagem-geral/tecnico"
            variant={buttonVariant}
          >
            <span className="text-base font-medium">Listagem</span>
          </Button>
        </div>
      </AccordionItem>
    </Accordion>
  )
}
