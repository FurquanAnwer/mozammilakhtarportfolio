import { HeroSection } from "@/components/home/hero-section"
import { QuickLinks } from "@/components/home/quick-links"
import { ContactPreview } from "@/components/home/contact-preview"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <QuickLinks />
      <ContactPreview />
      <Footer />
    </main>
  )
}
