"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Clock, Linkedin, Twitter, Github, BookOpen } from "lucide-react"
import Link from "next/link"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "mozammilakhtar8171@gmail.com",
    href: "mailto:mozammilakhtar8171@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+918171258593",
    href: "tel:+918171258593",
  }

]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-mozammil-akhtar-195407174/", color: "hover:text-[#0077B5]" },
  { icon: BookOpen, label: "Google Scholar", href: "https://scholar.google.com/citations?user=sSIDe-cAAAAJ&hl=en", color: "hover:text-[#4285F4]" },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <detail.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{detail.label}</p>
                {detail.href ? (
                  <Link
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {detail.value}
                  </Link>
                ) : (
                  <p className="text-sm text-muted-foreground">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Connect Online</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="lg"
                asChild
                className={`transition-colors ${social.color}`}
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="mr-2 h-5 w-5" />
                  {social.label}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

    </motion.div>
  )
}
