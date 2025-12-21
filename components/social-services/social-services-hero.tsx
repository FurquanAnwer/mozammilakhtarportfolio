"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function SocialServicesHero() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Social Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Community engagement, volunteer initiatives, and outreach programs dedicated to creating positive social
            impact through environmental education.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
