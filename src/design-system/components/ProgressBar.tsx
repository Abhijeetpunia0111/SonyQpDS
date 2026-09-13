export default function ProgressBar({
  value,
  tone = "primary",
}: {
  value: number
  tone?: "primary" | "gold"
}) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-sm bg-white/30">
      <div
        className={`h-full rounded-sm ${
          tone === "gold" ? "bg-gold" : "bg-action-primary"
        }`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
