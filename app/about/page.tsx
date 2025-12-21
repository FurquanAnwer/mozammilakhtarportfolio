import { AboutHero } from "@/components/about/about-hero"
import { QualificationsTimeline } from "@/components/about/qualifications-timeline"
import { ResearchInterests } from "@/components/about/research-interests"
import { Skills } from "@/components/about/skills"
import { Experience } from "@/components/about/experience"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <AboutHero />
      <QualificationsTimeline />
      <ResearchInterests />
      <Skills />
      <Experience />
      <Footer />
    </main>
  )
}
