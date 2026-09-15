export default function TabBar({
  tabs,

  active,

  onChange,
}: {
  tabs: string[]

  active: string

  onChange?: (tab: string) => void
}) {
  return (
    <div className="flex border-b border-border-subtle px-4">
      {tabs.map((tab) => {
        const isActive = tab === active

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange?.(tab)}
            aria-current={isActive ? "true" : undefined}
            className={`focus-ring flex-1 border-b-2 px-1 pb-3 text-[16px] transition-colors ${
              isActive
                ? "border-action-primary font-medium text-text-primary"
                : "border-transparent font-normal text-text-secondary"
            }`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
