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

          
        </motion.div>
      </div>
    </section>
  )
}
