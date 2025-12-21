"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"

export function ContactPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">{"Let's Connect"}</h2>
              <p className="mb-6 text-muted-foreground">
                Interested in collaboration, research opportunities, or just want to say hello?
                {"I'd love to hear from you."}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>mozammilakhtar8171@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 8171258593</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>India</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="https://www.linkedin.com/in/mohammad-mozammil-akhtar-195407174/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://scholar.google.com/citations?user=sSIDe-cAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Google Scholar</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Send a Message
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
