import { SocialServicesHero } from "@/components/social-services/social-services-hero"
import { ServicesList } from "@/components/social-services/services-list"
import { ImpactStats } from "@/components/social-services/impact-stats"
import { Footer } from "@/components/footer"

export default function SocialServicesPage() {
  return (
    <main className="min-h-screen pt-16">
      <SocialServicesHero />
      <ImpactStats />
      <ServicesList />
      <Footer />
    </main>
  )
}
