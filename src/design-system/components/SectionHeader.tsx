import { ChevronRight } from "@/design-system/icons"

export default function SectionHeader({
  title,
  action = true,
}: {
  title: string
  action?: boolean
}) {
  return (
    <div className="flex items-center justify-between px-4">
      <h2 className="text-[17px] leading-6 font-medium text-text-primary">
        {title}
      </h2>
      {action && <ChevronRight size={22} className="text-text-primary" />}
    </div>
  )
}
