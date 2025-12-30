"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

export function PublicationsHero() {
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
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Publications</h1>

          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Publications</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">32+</p>
              <p className="text-sm text-muted-foreground">Citations</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">h-index</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
