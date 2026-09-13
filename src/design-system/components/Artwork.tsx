import { artworkFor } from "@/data/artwork"

type ArtworkProps = {
  title: string
  className?: string
}

/**
 * Title art. Renders the real image when a matching file exists in
 * src/assets/artwork, and a flat art-placeholder block otherwise — deliberately
 * blank, so an unsupplied asset reads as a wireframe rather than as a design
 * decision. The scrim applies only over a real image, where it is what keeps
 * overlaid text legible.
 */
export default function Artwork({ title, className = "" }: ArtworkProps) {
  const src = artworkFor(title)

  return (
    <div className={`relative overflow-hidden bg-art-placeholder ${className}`}>
      {src && (
        <>
          <img
            src={src}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        </>
      )}
    </div>
  )
}
