"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Droplets, Wind, Mountain, Fish, TreePine } from "lucide-react"

const interests = [
  {
    title: "Climate Change",
    description: "Studying long-term climate patterns and their impact on global ecosystems.",
    icon: Wind,
  },
  {
    title: "Conservation Biology",
    description: "Developing strategies for biodiversity protection and habitat preservation.",
    icon: Fish,
  },
  {
    title: "Ecosystem Restoration",
    description: "Pioneering techniques for rehabilitating degraded natural environments.",
    icon: TreePine,
  },
  {
    title: "Sustainable Agriculture",
    description: "Researching eco-friendly farming practices and food security solutions.",
    icon: Leaf,
  },
  {
    title: "Water Resources",
    description: "Analyzing freshwater systems and developing conservation methods.",
    icon: Droplets,
  },
  {
    title: "Land Management",
    description: "Creating sustainable approaches to land use and urban planning.",
    icon: Mountain,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ResearchInterests() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Research Interests</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My research focuses on understanding and solving complex environmental challenges.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {interests.map((interest) => (
            <motion.div key={interest.title} variants={item}>
              <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <interest.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-foreground">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
