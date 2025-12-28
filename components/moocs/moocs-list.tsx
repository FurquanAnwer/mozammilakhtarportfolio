"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const moocs = [
  {
    title: "Incorporating Renewable Energy with Electricity Grids",
    provider: "Imperial College London",
    platform: "Coursera",
    status: "completed",
    description:
      "Gained an understanding of the overview, challenges, and solutions for integrating renewable energy sources into electricity grids.",
    logo: "/imperial-college-london-logo.jpg",
    credential: "https://drive.google.com/file/d/19llMMfD9Z5M4H6Fb6tOdwlFVxpm1leLF/view?usp=sharing",
  },
  {
    title: "Photovoltaic Solar Energy",
    provider: "École Polytechnique, France",
    platform: "Coursera",
    status: "completed",
    description:
      "Gained knowledge of the overview, challenges, recent advancements, and applications of solar PV for energy generation.",
    logo: "/ecole-polytechnique-logo.jpg",
    credential: "https://drive.google.com/file/d/1VeGvfgtNLVBlZTpRavTpl9A1JTqhTFyo/view?usp=sharing",
  },
  {
    title: "Programming for Everybody",
    provider: "University of Michigan",
    platform: "Coursera",
    status: "completed",
    description:
      "Gained foundational computer programming skills, including problem-solving and basic coding concepts.",
    logo: "/university-of-michigan-logo.jpg",
    credential: "https://drive.google.com/file/d/1XW16xJ-XWNB-BiaRDLTijj8XSMURe6-h/view?usp=sharing",
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
          className="grid gap-6 md:grid-cols-1 lg:grid-cols-3"
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
                        <Badge className="bg-primary/10 text-primary border-0">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Completed
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-foreground">{mooc.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {mooc.provider} · {mooc.platform}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{mooc.description}</p>
                  <div className="flex items-center justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={mooc.credential} target="_blank" rel="noopener noreferrer">
                        View Certificate
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
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
