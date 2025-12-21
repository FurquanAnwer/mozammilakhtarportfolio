"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Mountain, BookHeart, Music, Utensils, Plane } from "lucide-react"

const activities = [
  {
    title: "Nature Photography",
    category: "Creative",
    description:
      "Capturing the beauty of ecosystems and wildlife through photography. Work featured in National Geographic and various environmental publications.",
    highlights: ["Published in Nat Geo", "Solo exhibition 2022", "500+ nature shots"],
    icon: Camera,
  },
  {
    title: "Mountain Hiking",
    category: "Adventure",
    description:
      "Exploring mountain ecosystems while maintaining physical fitness. Completed trails across 5 continents with focus on studying alpine environments.",
    highlights: ["50+ peaks summited", "Alpine research", "Trail guide certified"],
    icon: Mountain,
  },
  {
    title: "Science Fiction Writing",
    category: "Creative",
    description:
      "Writing short stories exploring environmental themes and climate futures. Published in multiple science fiction magazines.",
    highlights: ["5 published stories", "Hugo nomination", "Writing workshop leader"],
    icon: BookHeart,
  },
  {
    title: "Classical Piano",
    category: "Arts",
    description:
      "Playing piano for relaxation and performing at charity events. Studied at the Royal Conservatory of Music.",
    highlights: ["Grade 10 RCM", "Charity performances", "20+ years playing"],
    icon: Music,
  },
  {
    title: "Sustainable Cooking",
    category: "Lifestyle",
    description: "Exploring plant-based cuisine and sustainable food practices. Advocate for local, seasonal eating.",
    highlights: ["Recipe blog author", "Zero-waste advocate", "Community workshops"],
    icon: Utensils,
  },
  {
    title: "Field Expedition Travel",
    category: "Adventure",
    description: "Traveling to remote locations for field research and experiencing diverse ecosystems firsthand.",
    highlights: ["60+ countries", "Antarctica expedition", "Amazon research"],
    icon: Plane,
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

export function ActivitiesList() {
  return (
    <section className="py-12 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {activities.map((activity, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {activity.category}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-foreground">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{activity.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
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
