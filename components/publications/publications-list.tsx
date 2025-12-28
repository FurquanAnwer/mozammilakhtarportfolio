"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, BookOpen, Presentation } from "lucide-react"
import Link from "next/link"

const publications = [  
  {
    title:
      "Smart Home Energy Management System under Dynamic pricing for developing countries using Particle Swarm Optimization",
    journal: "2021 International Conference on Simulation, Automation & Smart Manufacturing (SASM)",
    year: "2021",
    authors: "Akhtar, Mansoor, Nusrat, Sarfraz, Afroz Alam",
    doi: "10.1109/SASM51857.2021.9841144",
    type: "Conference",
    icon: Presentation,
  },
]

export function PublicationsList() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Conference</h2>
          </div>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub, index) => {
            const Icon = pub.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground leading-tight">{pub.title}</CardTitle>
                        <CardDescription className="mt-2">
                          <span className="text-primary font-medium">{pub.journal}</span> · {pub.year}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        {pub.icon ? (
                          <Badge
                            variant="secondary"
                            className={pub.type === "Journal" ? "bg-primary/20 text-primary" : "bg-secondary"}
                          >
                            <Icon className="h-3 w-3 mr-1" />
                            {pub.type}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {pub.citations} citations
                          </Badge>
                        )}
                        <Badge variant="secondary">{pub.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{pub.authors}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        View Paper
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="https://scholar.google.com/citations?user=sSIDe-cAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              View All Publications on Google Scholar
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
