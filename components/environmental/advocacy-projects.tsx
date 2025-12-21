"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, TreePine, Fish, Mountain, Waves, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Coastal Resilience Initiative",
    organization: "Bay Area Conservation Alliance",
    status: "Active",
    description:
      "Leading efforts to protect and restore coastal wetlands, providing natural barriers against sea-level rise and storm surge.",
    image: "/coastal-wetland-conservation-project.jpg",
    link: "#",
    icon: Waves,
  },
  {
    title: "Urban Reforestation Project",
    organization: "City Green Initiative",
    status: "Active",
    description:
      "Coordinating city-wide tree planting campaigns to increase urban canopy cover and reduce heat island effects.",
    image: "/urban-tree-planting-reforestation.jpg",
    link: "#",
    icon: TreePine,
  },
  {
    title: "Marine Conservation Advocacy",
    organization: "Ocean Alliance Foundation",
    status: "Active",
    description:
      "Advocating for expanded marine protected areas and sustainable fishing practices to protect ocean biodiversity.",
    image: "/marine-ocean-conservation-coral-reef.jpg",
    link: "#",
    icon: Fish,
  },
  {
    title: "Climate Policy Task Force",
    organization: "State Environmental Agency",
    status: "Completed",
    description:
      "Served on a task force developing state-level climate adaptation policies and emission reduction targets.",
    image: "/climate-policy-meeting-discussion.jpg",
    link: "#",
    icon: Globe,
  },
  {
    title: "Mountain Ecosystem Preservation",
    organization: "Alpine Conservation Trust",
    status: "Active",
    description:
      "Protecting vulnerable alpine ecosystems from climate change impacts through research and policy advocacy.",
    image: "/alpine-mountain-ecosystem-conservation.jpg",
    link: "#",
    icon: Mountain,
  },
  {
    title: "Renewable Energy Advocacy",
    organization: "Clean Energy Coalition",
    status: "Active",
    description: "Promoting transition to renewable energy sources through community outreach and policy engagement.",
    image: "/renewable-energy-solar-wind-advocacy.jpg",
    link: "#",
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
          <h2 className="mb-4 text-3xl font-bold text-foreground">Advocacy Projects</h2>
          <p className="max-w-2xl text-muted-foreground">
            Current and past environmental advocacy initiatives focused on conservation, policy, and sustainability.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge
                      className={
                        project.status === "Active"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <project.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-primary font-medium">{project.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.link}>
                      Learn More
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
