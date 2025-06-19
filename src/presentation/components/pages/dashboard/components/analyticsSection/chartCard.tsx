import { Card, CardBody, CardHeader } from '@heroui/react'
import React from 'react'

type ChartCardProps = {
  title: string
  children: React.ReactNode
  role?: string
  ariaLabelledby?: string
}

export function ChartCard(props: ChartCardProps) {
  const { title, children, ariaLabelledby, role } = props

  return (
    <Card
      isHoverable
      aria-labelledby={ariaLabelledby}
      as="article"
      className="border border-divider shadow-sm hover:shadow-md transition-shadow duration-300"
      role={role}
    >
      <CardHeader>
        <h3 className="text-lg font-semibold  text-foreground-400">{title}</h3>
      </CardHeader>
      <CardBody className="h-80">{children}</CardBody>
    </Card>
  )
}
