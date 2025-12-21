import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <ContactHero />
      <div className="py-12 bg-card/50">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  )
}
