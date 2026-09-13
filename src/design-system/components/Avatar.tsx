import { avatarFor } from "@/data/avatars"

type AvatarProps = {
  name: string
  size?: number
  selected?: boolean
  square?: boolean
  className?: string
}

/**
 * Profile photo. Renders the real image when a matching file exists in
 * src/assets/avatars, otherwise a flat surface-4 block — light enough to stay
 * visible against both the page and the bottom navigation.
 */
export default function Avatar({
  name,
  size = 56,
  selected = false,
  square = false,
  className = "",
}: AvatarProps) {
  const src = avatarFor(name)

  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden bg-surface-4 ${
        square ? "rounded-xl" : "rounded-full"
      } ${
        selected ? "ring-2 ring-white ring-offset-2 ring-offset-bg" : ""
      } ${className}`}
      style={{ width: size, height: size }}
    >
      {src && (
        <img
          src={src}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </span>
  )
}
