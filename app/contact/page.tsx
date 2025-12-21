import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <ContactHero />
      <div className="py-12 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
