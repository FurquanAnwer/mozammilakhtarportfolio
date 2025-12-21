"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Technical Skills",
    skills: ["GIS Mapping", "Remote Sensing", "Statistical Analysis", "Data Visualization", "Python", "R Programming"],
  },
  {
    category: "Research Methods",
    skills: ["Field Sampling", "Lab Analysis", "Survey Design", "Qualitative Research", "Meta-Analysis", "Modeling"],
  },
  {
    category: "Software & Tools",
    skills: ["ArcGIS", "QGIS", "MATLAB", "SPSS", "EndNote", "LaTeX"],
  },
  {
    category: "Languages",
    skills: ["English (Native)", "Mandarin (Fluent)", "Spanish (Intermediate)", "French (Basic)"],
  },
]

export function Skills() {
  return (
    <section className="py-20 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Skills & Expertise</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A comprehensive toolkit developed through years of research and professional experience.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
