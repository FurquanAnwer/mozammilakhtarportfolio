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
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">About Me</p>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl text-balance">
              Passionate About Research & Sustainability
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a designer and developer at the intersection of environmental science and technology. My interests
                span a broad spectrum of subjects, encompassing sustainable development, climate research, conservation
                biology, and human-environment interaction.
              </p>
              <p>
                Since graduate school, I have spent years on field research, data analysis, and policy development. In
                2015, I earned my Ph.D. in Environmental Science from MIT, and joined as a research fellow at Stanford
                University. In 2018, I established the Sustainable Futures Lab to help build the next generation of
                environmental solutions.
              </p>
              <p>
                You can gain further insights into my background and interests through my publications, projects, or
                find me on LinkedIn, Twitter, and ResearchGate.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/professional-woman-researcher-in-lab-coat-environm.jpg"
              alt="Dr. Sarah Chen in her research lab"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
