import { PublicationsHero } from "@/components/publications/publications-hero"
import { KeyFindings } from "@/components/publications/key-findings"
import { PublicationsList } from "@/components/publications/publications-list"
import { Footer } from "@/components/footer"

export default function PublicationsPage() {
  return (
    <main className="min-h-screen pt-16">
      <PublicationsHero />
      <KeyFindings />
      <PublicationsList />
      <Footer />
    </main>
  )
}
