"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, TreePine, Mic, BookOpen, Globe } from "lucide-react"

const services = [
  {
    title: "Environmental Education Workshops",
    organization: "Local Schools Partnership",
    period: "2020 - Present",
    description:
      "Leading monthly workshops for K-12 students on climate science, conservation, and sustainable living practices.",
    impact: "Reached 5,000+ students",
    icon: GraduationCap,
  },
  {
    title: "Community Cleanup Initiatives",
    organization: "Clean Bay Foundation",
    period: "2019 - Present",
    description: "Organizing and leading quarterly beach and wetland cleanup events with community volunteers.",
    impact: "Removed 15 tons of waste",
    icon: TreePine,
  },
  {
    title: "Science Communication Mentorship",
    organization: "Stanford Science Writers",
    period: "2018 - Present",
    description: "Mentoring graduate students and early-career researchers in effective science communication skills.",
    impact: "Mentored 50+ scientists",
    icon: Users,
  },
  {
    title: "Public Lecture Series",
    organization: "City Library System",
    period: "2017 - Present",
    description:
      "Delivering free public lectures on environmental issues, climate change, and sustainability solutions.",
    impact: "300+ attendees annually",
    icon: Mic,
  },
  {
    title: "Science Fair Judging",
    organization: "Regional Science Olympiad",
    period: "2016 - Present",
    description: "Serving as a judge for regional and state science fairs, encouraging young scientists.",
    impact: "Judged 200+ projects",
    icon: BookOpen,
  },
  {
    title: "International Volunteer Program",
    organization: "Green Globe Initiative",
    period: "2015 - 2018",
    description: "Coordinated international volunteer programs for ecosystem restoration in developing countries.",
    impact: "50+ countries involved",
    icon: Globe,
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

export function ServicesList() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground">Service Activities</h2>
          <p className="max-w-2xl text-muted-foreground">
            A commitment to giving back to the community through education, mentorship, and environmental stewardship.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {service.period}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{service.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{service.description}</p>
                  <Badge variant="secondary">{service.impact}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
