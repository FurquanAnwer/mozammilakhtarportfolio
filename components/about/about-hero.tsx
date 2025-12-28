"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="items-center"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary text-4xl font-bold text-center">About Me</p>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl text-balance text-center">
              Passionate About Research & Sustainability
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-justify">
                I am a research enthusiast passionate about developing innovative solutions to overcome challenges in the commercialization of Electric Vehicles (EVs). I aspire to contribute to sustainable development by supporting “SDG 7: Affordable and Clean Energy” and “SDG 13: Climate Action” through the advancement of zero-carbon emission vehicles, helping create a cleaner and healthier environment. Moreover, with this passion, I have developed a strong, multidisciplinary engineering background  in computer, environmental and Electrical that enables me to tackle challenges from a wide range of perspectives. Below are the educational qualifications, skills, and experiences I possess that will enable me to fulfill my goal successfully, and I aim to continue in this field for the foreseeable future.
              </p>              
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
