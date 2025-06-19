import { Card, CardBody, CardHeader } from '@heroui/react'

type QuickActionItemProps = {
  title: string
  description: string
  icon?: string
}

export function QuickActionItem(props: QuickActionItemProps) {
  const { title, description, icon } = props

  return (
    <Card isPressable as="article" className="border border-divider">
      <CardHeader>
        <h4 className="text-lg font-semibold text-foreground-400">
          {icon} {title}
        </h4>
      </CardHeader>
      <CardBody className="text-sm text-foreground-400">{description}</CardBody>
    </Card>
  )
}
