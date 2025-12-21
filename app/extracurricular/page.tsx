import { ExtracurricularHero } from "@/components/extracurricular/extracurricular-hero"
import { ActivitiesList } from "@/components/extracurricular/activities-list"
import { Footer } from "@/components/footer"

export default function ExtracurricularPage() {
  return (
    <main className="min-h-screen pt-16">
      <ExtracurricularHero />
      <ActivitiesList />
      <Footer />
    </main>
  )
}
