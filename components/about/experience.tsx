"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2018 — Present",
    title: "Director, Sustainable Futures Lab",
    company: "Stanford University",
    companyUrl: "https://stanford.edu",
    description:
      "Lead a team of 15 researchers focused on developing innovative solutions for climate change mitigation and adaptation. Secured over $5M in research funding.",
    skills: ["Leadership", "Grant Writing", "Climate Research", "Team Management"],
  },
  {
    period: "2015 — 2018",
    title: "Research Fellow",
    company: "Stanford University",
    companyUrl: "https://stanford.edu",
    description:
      "Conducted pioneering research on ecosystem restoration techniques. Published 12 peer-reviewed papers in top environmental science journals.",
    skills: ["Ecosystem Restoration", "Publication", "Data Analysis", "Field Research"],
  },
  {
    period: "2013 — 2015",
    title: "Graduate Research Assistant",
    company: "MIT",
    companyUrl: "https://mit.edu",
    description:
      "Assisted in large-scale climate modeling projects. Developed novel algorithms for predicting coastal ecosystem changes.",
    skills: ["Climate Modeling", "Algorithm Development", "Python", "Research"],
  },
]

export function Experience() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Experience</h2>
          <p className="max-w-2xl text-muted-foreground">
            Professional positions and research roles throughout my career.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid gap-4 rounded-xl border border-transparent p-6 transition-all duration-300 hover:border-border hover:bg-card/50 md:grid-cols-[200px_1fr]"
            >
              <div className="text-sm text-muted-foreground">{exp.period}</div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.title} ·{" "}
                  <Link
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    {exp.company}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </h3>
                <p className="mb-4 text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
