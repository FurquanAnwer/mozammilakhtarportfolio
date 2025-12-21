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
    value: "sarah.chen@stanford.edu",
    href: "mailto:sarah.chen@stanford.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Room 304, Green Earth Building, Stanford University",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon-Fri, 9:00 AM - 5:00 PM PST",
    href: null,
  },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-[#0077B5]" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-[#1DA1F2]" },
  { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-foreground" },
  { icon: BookOpen, label: "Google Scholar", href: "https://scholar.google.com", color: "hover:text-[#4285F4]" },
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

      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="p-6">
          <h3 className="mb-2 font-semibold text-foreground">Research Collaboration</h3>
          <p className="text-sm text-muted-foreground">
            {"I'm actively seeking collaborations in climate research, ecosystem restoration, and sustainable"}
            development. If {"you're"} working on similar projects, {"I'd"} love to hear from you.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
