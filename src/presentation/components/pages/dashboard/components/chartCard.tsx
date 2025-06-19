import { Card, CardBody, CardHeader } from '@heroui/react'
import React from 'react'

type ChartCardProps = {
  title: string
  children: React.ReactNode
}

export function ChartCard(props: ChartCardProps) {
  const { title, children } = props

  return (
    <Card
      isHoverable
      as="article"
      className="border border-divider shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <CardHeader>
        <h3 className="text-lg font-semibold  text-foreground-400">{title}</h3>
      </CardHeader>
      <CardBody className="h-80">{children}</CardBody>
    </Card>
  )
}
