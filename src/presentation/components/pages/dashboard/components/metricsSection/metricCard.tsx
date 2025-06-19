import { Card, CardBody } from '@heroui/react'

import { cn } from '@/presentation/lib'

type MetricCardProps = {
  label: string
  value: string | number
  colorClass:
    | 'text-primary'
    | 'text-danger'
    | 'text-secondary'
    | 'text-warning'
    | 'text-success'
  ariaLabel?: string
}

export function MetricCard(props: MetricCardProps) {
  const { colorClass, label, value } = props

  return (
    <Card
      isHoverable
      className="border border-divider shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <CardBody className="flex flex-col-reverse items-center justify-center gap-1 p-4">
        <h4 className="text-sm text-default-900 font-medium">{label}</h4>
        <p className={cn('font-bold text-3xl', colorClass)}>{value}</p>
      </CardBody>
    </Card>
  )
}
