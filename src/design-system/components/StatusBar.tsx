import { StatusBattery, StatusSignal, StatusWifi } from "@/design-system/icons"

export default function StatusBar({
  time = "9:30",
  network,
}: {
  time?: string
  network?: string
}) {
  return (
    <div className="flex h-11 items-center justify-between px-5 text-text-primary">
      <span className="text-[15px] font-normal">{time}</span>
      <span className="flex items-center gap-1.5">
        <StatusWifi size={17} />
        <span className="relative flex items-start">
          {network && (
            <span className="mr-px text-[8px] leading-none font-medium">
              {network}
            </span>
          )}
          <StatusSignal size={17} />
        </span>
        <StatusBattery size={24} />
      </span>
    </div>
  )
}
