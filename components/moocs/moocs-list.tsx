"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle2, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const moocs = [
  {
    title: "Machine Learning for Climate Science",
    provider: "Stanford Online",
    platform: "Coursera",
    status: "completed",
    year: "2023",
    duration: "12 weeks",
    logo: "/stanford-university-logo.jpg",
    credential: "https://coursera.org/verify/abc123",
  },
  {
    title: "Data Science for Environmental Impact",
    provider: "MIT",
    platform: "edX",
    status: "completed",
    year: "2023",
    duration: "10 weeks",
    logo: "/mit-logo-generic.png",
    credential: "https://edx.org/verify/def456",
  },
  {
    title: "Sustainable Business Strategy",
    provider: "Harvard Business School",
    platform: "HBX",
    status: "completed",
    year: "2022",
    duration: "8 weeks",
    logo: "/harvard-university-logo.png",
    credential: "https://hbx.org/verify/ghi789",
  },
  {
    title: "GIS for Environmental Analysis",
    provider: "UC Davis",
    platform: "Coursera",
    status: "completed",
    year: "2022",
    duration: "6 weeks",
    logo: "/uc-davis-logo.png",
    credential: "https://coursera.org/verify/jkl012",
  },
  {
    title: "Climate Change Policy & Economics",
    provider: "Yale University",
    platform: "Coursera",
    status: "completed",
    year: "2021",
    duration: "8 weeks",
    logo: "/yale-university-logo.png",
    credential: "https://coursera.org/verify/mno345",
  },
  {
    title: "Advanced Python for Data Science",
    provider: "IBM",
    platform: "Coursera",
    status: "in-progress",
    year: "2024",
    duration: "10 weeks",
    logo: "/ibm-logo.png",
  },
  {
    title: "Remote Sensing & Earth Observation",
    provider: "ESA",
    platform: "FutureLearn",
    status: "completed",
    year: "2021",
    duration: "6 weeks",
    logo: "/european-space-agency-logo.jpg",
    credential: "https://futurelearn.org/verify/pqr678",
  },
  {
    title: "Oceanography: Exploring Earth's Ocean",
    provider: "University of Barcelona",
    platform: "Coursera",
    status: "completed",
    year: "2020",
    duration: "8 weeks",
    logo: "/university-of-barcelona-logo.jpg",
    credential: "https://coursera.org/verify/stu901",
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

export function MoocsList() {
  return (
    <section className="py-12 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {moocs.map((mooc, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                      <Image
                        src={mooc.logo || "/placeholder.svg"}
                        alt={mooc.provider}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {mooc.status === "completed" ? (
                          <Badge className="bg-primary/10 text-primary border-0">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Completed
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            <Clock className="mr-1 h-3 w-3" />
                            In Progress
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{mooc.year}</span>
                      </div>
                      <CardTitle className="text-lg text-foreground">{mooc.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {mooc.provider} · {mooc.platform}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{mooc.duration}</Badge>
                    {mooc.credential && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={mooc.credential} target="_blank" rel="noopener noreferrer">
                          View Certificate
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
