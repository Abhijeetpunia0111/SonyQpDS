import { Check, Copy } from "lucide-react"
import { useState } from "react"

export default function CopyButton({
  value,
  label = "Copy",
}: {
  value: string
  label?: string
}) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(value).then(() => {
          setCopied(true)
          window.setTimeout(() => setCopied(false), 1400)
        })
      }}
      className="focus-ring inline-flex h-8 items-center gap-1.5 rounded-lg bg-surface-3 px-3 text-[12px] font-medium text-text-secondary transition-colors hover:text-white"
    >
      {copied ? <Check size={13} className="text-gold" /> : <Copy size={13} />}
      {copied ? "Copied" : label}
    </button>
  )
}
