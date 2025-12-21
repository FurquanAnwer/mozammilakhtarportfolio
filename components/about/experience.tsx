"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award, GraduationCap, Briefcase, Users, FileText } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "Sep 2022 — May 2025",
    title: "Graduate Research Assistant",
    company: "Power Electronics and Renewable Energy Research Laboratory (PEARL), Universiti Malaya",
    companyUrl: "https://um.edu.my",
    description:
      "Designed multiple magnetic coil structures and implemented a control strategy to charge EVs in both static and dynamic wireless charging conditions.",
    skills: ["Wireless Charging", "Magnetic Coil Design", "Control Systems", "EV Technology"],
    icon: GraduationCap,
  },
  {
    period: "Summer Internship",
    title: "Research Intern - Best Project Award",
    company: "NIT Hamirpur, India",
    companyUrl: "https://nith.ac.in",
    description:
      "Completed a 5-week summer internship working on fault diagnosis of substation apparatus. Supervised by Prof. Dr. Raj Kumar Jariyal. Received the Best Project Award.",
    skills: ["Fault Diagnosis", "Substation Apparatus", "Power Systems"],
    icon: Award,
  },
  {
    period: "3-Week Training",
    title: "Solar Water Pumping Systems Training",
    company: "National Institute of Solar Energy (NISE), India",
    companyUrl: "https://nise.res.in",
    description:
      "Completed training on Solar Water Pumping Systems. Gained knowledge of innovative and eco-friendly agricultural irrigation methods.",
    skills: ["Solar Energy", "Water Pumping", "Agricultural Irrigation", "Renewable Energy"],
    icon: Briefcase,
  },
  {
    period: "4-Week Training",
    title: "Vocational Training",
    company: "Harduaganj Thermal Power Station",
    companyUrl: "#",
    description:
      "Studied thermal power plant layout and operating principles. Gained hands-on exposure to boilers, turbines, generators, and condensers. Learned the electricity generation, transmission, and distribution process as well as safety protocols.",
    skills: ["Thermal Power", "Boilers", "Turbines", "Power Generation"],
    icon: Briefcase,
  },
  {
    period: "2-Month Internship",
    title: "IoT & Machine Learning Intern",
    company: "BOLT",
    companyUrl: "#",
    description:
      "Worked on popularizing concepts of Internet of Things (IoT) and Machine Learning. Gained exposure to IoT platforms, sensors, and data acquisition. Learned basic machine learning concepts and real-world applications.",
    skills: ["IoT", "Machine Learning", "Sensors", "Data Acquisition"],
    icon: Briefcase,
  },
  {
    period: "Leadership Training",
    title: "Climate Reality Leadership Corps",
    company: "Led by Nobel Laureate Al Gore",
    companyUrl: "https://www.climaterealityproject.org",
    description:
      "Completed training under the Climate Reality Leadership Corps led by Nobel Laureate Al Gore. Developed skills in climate awareness and leadership advocacy.",
    skills: ["Climate Awareness", "Leadership", "Advocacy", "Sustainability"],
    icon: Award,
  },
]

const leadershipExperiences = [
  {
    title: "Web Coordinator",
    organization: "Entrepreneurship Development Cell (EDC)",
    institution: "Zakir Hussain College of Engineering and Technology, AMU, Aligarh",
    certificateUrl: "#", // Replace with actual certificate URL
  },
  {
    title: "Secretary, Land and Garden",
    organization: "RM Hall",
    institution: "Aligarh Muslim University (AMU), Aligarh",
    description: "Responsible for maintaining and promoting greenery within the hostel premises.",
    certificateUrl: "#", // Replace with actual certificate URL
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
            Professional positions, research roles, and training throughout my career.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid gap-4 rounded-xl border border-transparent p-6 transition-all duration-300 hover:border-border hover:bg-card/50 md:grid-cols-[200px_1fr]"
            >
              <div className="flex flex-col gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <exp.icon className="h-5 w-5" />
                </div>
                <div className="text-sm text-muted-foreground">{exp.period}</div>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <Link
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  {exp.company}
                  {exp.companyUrl !== "#" && <ExternalLink className="h-3 w-3" />}
                </Link>
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

        {/* Leadership Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mb-8"
        >
          <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-foreground">
            <Users className="h-6 w-6 text-primary" />
            Leadership Experience
          </h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {leadershipExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
            >
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">{exp.title}</Badge>
              <h4 className="mb-1 font-semibold text-foreground">{exp.organization}</h4>
              <p className="text-sm text-muted-foreground">{exp.institution}</p>
              {exp.description && <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>}
              {exp.certificateUrl && (
                <Link
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <FileText className="h-4 w-4" />
                  View Certificate
                  <ExternalLink className="h-3 w-3" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
