"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

const findings = [
  {
    title: "Coastal Ecosystem Resilience",
    description:
      "Discovered that mangrove restoration can increase coastal resilience by up to 70%, providing natural barriers against storm surge and sea-level rise.",
    image: "/mangrove-coastal-ecosystem-research.jpg",
  },
  {
    title: "Carbon Sequestration Potential",
    description:
      "Identified novel approaches to enhance soil carbon storage in agricultural lands, with potential to offset 15% of annual agricultural emissions.",
    image: "/carbon-sequestration-soil-research.jpg",
  },
  {
    title: "Biodiversity-Climate Nexus",
    description:
      "Established critical links between biodiversity loss and climate vulnerability, informing conservation priorities for 200+ endangered species.",
    image: "/biodiversity-wildlife-conservation-research.jpg",
  },
]

export function KeyFindings() {
  return (
    <section className="py-12 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Key Research Findings</h2>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Breakthrough discoveries that have shaped environmental policy and conservation practices worldwide.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {findings.map((finding, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={finding.image || "/placeholder.svg"}
                    alt={finding.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{finding.title}</h3>
                  <p className="text-muted-foreground">{finding.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
