type QuickActionItemProps = {
  title: string
  description: string
  icon?: string
}

export function QuickActionItem(props: QuickActionItemProps) {
  const { title, description, icon } = props

  return (
    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="text-lg font-semibold text-gray-800">
        {icon} {title}
      </div>
      <div className="text-sm text-gray-500 mt-1">{description}</div>
    </div>
  )
}
