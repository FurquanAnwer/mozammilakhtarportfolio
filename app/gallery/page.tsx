import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-16">
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </main>
  )
}
