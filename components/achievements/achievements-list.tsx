"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Medal, Star, Trophy, Globe, BookOpen } from "lucide-react"

const achievements = [
  {
    title: "Global Environmental Leadership Award",
    organization: "United Nations Environment Programme",
    year: "2023",
    category: "Leadership",
    description:
      "Recognized for outstanding contributions to global environmental policy and sustainable development initiatives affecting over 50 countries.",
    icon: Globe,
  },
  {
    title: "Excellence in Research Award",
    organization: "American Association for the Advancement of Science",
    year: "2022",
    category: "Research",
    description: "Honored for groundbreaking research in ecosystem restoration and carbon sequestration methodologies.",
    icon: Trophy,
  },
  {
    title: "Young Scientist Medal",
    organization: "International Union for Conservation of Nature",
    year: "2021",
    category: "Science",
    description: "Awarded for innovative approaches to biodiversity conservation and habitat preservation strategies.",
    icon: Medal,
  },
  {
    title: "Best Paper Award",
    organization: "Nature Climate Change",
    year: "2020",
    category: "Publication",
    description:
      "Recognized for the most impactful research paper on climate adaptation strategies in coastal communities.",
    icon: BookOpen,
  },
  {
    title: "Rising Star in Environmental Science",
    organization: "Environmental Science & Technology",
    year: "2019",
    category: "Recognition",
    description:
      "Named among the top 10 emerging scientists making significant contributions to environmental science.",
    icon: Star,
  },
  {
    title: "Presidential Early Career Award",
    organization: "National Science Foundation",
    year: "2018",
    category: "Career",
    description: "Received federal recognition for exceptional potential in scientific research and leadership.",
    icon: Award,
  },
  {
    title: "Conservation Hero Award",
    organization: "World Wildlife Fund",
    year: "2017",
    category: "Conservation",
    description: "Acknowledged for efforts in protecting endangered species and their natural habitats.",
    icon: Trophy,
  },
  {
    title: "Outstanding Dissertation Award",
    organization: "MIT School of Science",
    year: "2015",
    category: "Academic",
    description: "Recognized for exceptional doctoral research on climate change impacts on coastal ecosystems.",
    icon: BookOpen,
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

export function AchievementsList() {
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
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {achievement.year}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-foreground">{achievement.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{achievement.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{achievement.description}</p>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {achievement.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
