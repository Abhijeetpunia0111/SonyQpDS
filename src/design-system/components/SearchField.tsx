import { Mic, SearchGlass } from "@/design-system/icons"

export default function SearchField({
  value,
  placeholder = "Search",
  hint,
  caret = false,
  /** Quoted example query shown after the placeholder, e.g. “Tarak Mehta”. */
}: {
  value?: string
  placeholder?: string
  hint?: string
  caret?: boolean
}) {
  return (
    <div className="flex h-12 items-center gap-3 rounded-full bg-surface-2 px-4">
      <SearchGlass size={21} className="shrink-0 text-text-tertiary" />
      <span className="flex-1 truncate text-[16px]">
        {value ? (
          <span className="font-medium text-text-primary italic">{value}</span>
        ) : (
          <>
            <span className="text-text-tertiary">{placeholder}</span>
            {hint && (
              <span className="ml-2 text-text-tertiary italic">{hint}</span>
            )}
          </>
        )}
        {caret && (
          <span className="ml-px inline-block h-4 w-0.5 translate-y-0.5 bg-white" />
        )}
      </span>
      <Mic size={21} className="shrink-0 text-text-tertiary" />
    </div>
  )
}
