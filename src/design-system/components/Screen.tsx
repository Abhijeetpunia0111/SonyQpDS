import type { ReactNode } from "react"
import BottomNav from "./BottomNav"
import type { NavKey } from "./BottomNav"
import StatusBar from "./StatusBar"

export default function Screen({
  children,
  nav,
  header,
  statusBar = true,
  statusTime,
  network,
}: {
  children: ReactNode
  nav?: NavKey
  header?: ReactNode
  statusBar?: boolean
  statusTime?: string
  network?: string
}) {
  return (
    <div className="absolute inset-0 flex flex-col bg-bg text-text-primary">
      {(statusBar || header) && (
        <div className="relative z-20 shrink-0 bg-bg">
          {statusBar && <StatusBar time={statusTime} network={network} />}
          {header}
        </div>
      )}
      <div className="no-scrollbar relative flex-1 overflow-y-auto">
        {children}
        {nav && <div className="h-24" />}
      </div>
      {nav && <BottomNav active={nav} />}
    </div>
  )
}
