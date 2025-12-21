import { MoocsHero } from "@/components/moocs/moocs-hero"
import { MoocsList } from "@/components/moocs/moocs-list"
import { Footer } from "@/components/footer"

export default function MoocsPage() {
  return (
    <main className="min-h-screen pt-16">
      <MoocsHero />
      <MoocsList />
      <Footer />
    </main>
  )
}
