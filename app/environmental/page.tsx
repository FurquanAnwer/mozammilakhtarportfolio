import { EnvironmentalHero } from "@/components/environmental/environmental-hero"
import { AdvocacyProjects } from "@/components/environmental/advocacy-projects"
import { ImpactSection } from "@/components/environmental/impact-section"
import { Footer } from "@/components/footer"

export default function EnvironmentalPage() {
  return (
    <main className="min-h-screen pt-16">
      <EnvironmentalHero />
      <ImpactSection />
      <AdvocacyProjects />
      <Footer />
    </main>
  )
}
