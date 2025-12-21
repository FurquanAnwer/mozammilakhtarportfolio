"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Leaf, TreePine, PenLine, HeartHandshake } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Energy, Environment & Sustainable Development Symposium",
    organization: "ECO Club, Aligarh Muslim University (AMU), Aligarh, India",
    type: "Symposium",
    description:
      "Participated in a one-day symposium focused on energy conservation, environmental protection, and sustainable development practices.",
    certificateLink: "#",
    icon: Leaf,
  },
  {
    title: "Climate Change Essay Writing Competition",
    organization: "ECO Club, Aligarh Muslim University (AMU), Aligarh, India",
    type: "Competition",
    description:
      "Participated in an online essay writing competition on 'Climate Change and the Threat to Mankind', exploring the impacts of climate change on human civilization.",
    certificateLink: "#",
    icon: PenLine,
  },
  {
    title: "ECO Fox Run",
    organization: "ECO Club, Aligarh Muslim University (AMU), Aligarh, India",
    type: "Event",
    description:
      "Participated in the ECO Fox Run to promote a healthy lifestyle and raise awareness about environmental conservation through physical activity.",
    certificateLink: "#",
    icon: HeartHandshake,
  },
  {
    title: "ECO Fiesta - Organizer",
    organization: "ECO Club, Aligarh Muslim University (AMU), Aligarh, India",
    type: "Organizing",
    description:
      "Organized 'ECO Fiesta' to promote environmental awareness among students in the university, featuring various activities and educational sessions on sustainability.",
    certificateLink: "#",
    icon: TreePine,
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

export function AdvocacyProjects() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground">Environmental Activities</h2>
          <p className="max-w-2xl text-muted-foreground">
            Contributions to environmental awareness and sustainability through the ECO Club at Aligarh Muslim
            University.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                        <CardDescription className="text-primary font-medium text-sm">
                          {project.organization}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge
                      className={
                        project.type === "Organizing"
                          ? "bg-primary text-primary-foreground"
                          : project.type === "Competition"
                            ? "bg-amber-500/20 text-amber-400"
                            : project.type === "Symposium"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-green-500/20 text-green-400"
                      }
                    >
                      {project.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.certificateLink} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
