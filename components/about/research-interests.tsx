"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Wifi, BatteryCharging, Cpu, Settings, Sun } from "lucide-react"

const interests = [
  {
    title: "Electric Vehicle",
    description: "Research on electric vehicle technologies, battery systems, and EV infrastructure development.",
    icon: Car,
  },
  {
    title: "Wireless Power Transfer Technology",
    description: "Developing advanced wireless charging systems for efficient contactless power delivery.",
    icon: Wifi,
  },
  {
    title: "Electric Vehicle Charging",
    description: "Designing static and dynamic wireless charging solutions for electric vehicles.",
    icon: BatteryCharging,
  },
  {
    title: "Power Electronics",
    description: "Research on power converters, inverters, and high-frequency power conversion systems.",
    icon: Cpu,
  },
  {
    title: "Control System",
    description: "Implementing advanced control strategies for power electronic converters and charging systems.",
    icon: Settings,
  },
  {
    title: "Renewable Energy",
    description: "Integration of renewable energy sources with EV charging infrastructure.",
    icon: Sun,
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
