"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Users, GraduationCap, TreePine, Camera, ArrowRight } from "lucide-react"

const links = [
  {
    title: "Achievements",
    description: "Awards, honors, and recognitions received throughout my career",
    href: "/achievements",
    icon: Award,
  },
  {
    title: "Publications",
    description: "Research papers, articles, and key findings in environmental science",
    href: "/publications",
    icon: BookOpen,
  },
  {
    title: "Social Services",
    description: "Community engagement and volunteer work initiatives",
    href: "/social-services",
    icon: Users,
  },
  {
    title: "MOOCs",
    description: "Online courses and certifications completed",
    href: "/moocs",
    icon: GraduationCap,
  },
  {
    title: "Environmental",
    description: "Advocacy and sustainability projects",
    href: "/environmental",
    icon: TreePine,
  },
  {
    title: "Gallery",
    description: "Photos from research programs and university experiences",
    href: "/gallery",
    icon: Camera,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function QuickLinks() {
  return (
    <section className="py-20 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Explore My Work</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover different aspects of my academic journey, research contributions, and commitment to environmental
            sustainability.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {links.map((link) => (
            <motion.div key={link.title} variants={item}>
              <Link href={link.href}>
                <Card className="group h-full transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <link.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      {link.title}
                      <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    </CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
