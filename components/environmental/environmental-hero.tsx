"use client"

import { motion } from "framer-motion"
import { TreePine } from "lucide-react"

export function EnvironmentalHero() {
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
            <TreePine className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Environmental Advocacy</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Active involvement in environmental protection, climate advocacy, and sustainability initiatives to create a
            better future for our planet.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
