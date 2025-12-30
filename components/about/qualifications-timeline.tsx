"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award } from "lucide-react"

const qualifications = [
  {
    year: "2022 - Present",
    title: "M.Eng.(s.c) (Research Mode) ,(Electrical Engineering)",
    institution: "Universiti Malaya, Malaysia (QS Rank-58)",
    research: "Wireless Power Transfer for Electric Vehicles (EVs)",
    supervisor: "Prof. Dr. Saad Mekhilef (Citation: 68,000+)",
    description: "(Thesis submitted and followed by viva and degree award)",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2017-2021",
    title: "B.E (Bachelor of Engineering), (Electrical Engineering)",
    institution: "Zakir Hussain College of Engineering and Technology, Aligarh Muslim University, Aligarh,India",
    description: "Thesis: Smart Home Energy Management Systems",
    icon: Award,
    type: "award",
  },
  {
    year: "2016 - 2017",
    title: "Advance Diploma in Environmental Engineering",
    institution: "Aligarh Muslim University, Aligarh,India",
    description: "",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2013 - 2016",
    title: "Diploma in Computer Engineering",
    institution: "Aligarh Muslim University, Aligarh,India",
    description: "",
    icon: GraduationCap,
    type: "education",
  },
]

export function QualificationsTimeline() {
  return (
    <section className="py-20 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Qualifications Timeline</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My academic and professional journey in computer, electrical and environmental engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-12">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-20 md:pl-0`}>
                  <div
                    className={`rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {qual.year}
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{qual.title}</h3>
                    <p className="mb-2 text-sm font-medium text-primary">{qual.institution}</p>
                    {qual.research && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Research:</span> {qual.research}
                      </p>
                    )}
                    {qual.supervisor && (
                      <p className="text-sm text-muted-foreground mt-1">
                        <span className="font-semibold text-foreground">Supervisor:</span> {qual.supervisor}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{qual.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2">
                  <qual.icon className="h-5 w-5 text-primary-foreground" />
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
