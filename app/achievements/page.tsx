import { AchievementsHero } from "@/components/achievements/achievements-hero"
import { AchievementsList } from "@/components/achievements/achievements-list"
import { Footer } from "@/components/footer"

export default function AchievementsPage() {
  return (
    <main className="min-h-screen pt-16">
      <AchievementsHero />
      <AchievementsList />
      <Footer />
    </main>
  )
}
