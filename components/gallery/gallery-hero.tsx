"use client"

import { motion } from "framer-motion"
import { Camera, ImageIcon, MapPin } from "lucide-react"

export function GalleryHero() {
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
            <Camera className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Photo Gallery</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Capturing memorable moments from my academic journey, scholarship programs, and international experiences
            across Malaysia and Taiwan.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl bg-card/50 border border-border p-4"
            >
              <ImageIcon className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">28</p>
              <p className="text-sm text-muted-foreground">Total Photos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl bg-card/50 border border-border p-4"
            >
              <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="col-span-2 md:col-span-1 rounded-xl bg-card/50 border border-border p-4"
            >
              <Camera className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground">Collections</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
