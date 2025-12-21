"use client"

import { motion } from "framer-motion"
import { Leaf, Droplets, Wind, Recycle } from "lucide-react"

const impacts = [
  {
    label: "Carbon Offset",
    value: "500",
    unit: "tons CO₂",
    description: "Annual carbon footprint offset through conservation projects",
    icon: Wind,
  },
  {
    label: "Water Saved",
    value: "2M",
    unit: "gallons",
    description: "Water conservation through watershed protection programs",
    icon: Droplets,
  },
  {
    label: "Trees Planted",
    value: "25K",
    unit: "trees",
    description: "Reforestation efforts across degraded landscapes",
    icon: Leaf,
  },
  {
    label: "Waste Diverted",
    value: "50",
    unit: "tons",
    description: "Waste diverted from landfills through recycling programs",
    icon: Recycle,
  },
]

export function ImpactSection() {
  return (
    <section className="py-12 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground">Environmental Impact</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Measurable outcomes from advocacy work and sustainability initiatives.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <impact.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">
                {impact.value}
                <span className="text-lg font-normal text-muted-foreground"> {impact.unit}</span>
              </p>
              <p className="mt-1 font-medium text-foreground">{impact.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
