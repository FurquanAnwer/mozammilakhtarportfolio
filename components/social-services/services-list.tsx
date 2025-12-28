"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Heart, ExternalLink } from "lucide-react"

const services = [
  {
    title: "Blanket Distribution Drive",
    organization: "NGO Partnership",
    period: "2 Weeks",
    description:
      "Participated in a 2-week blanket distribution drive for people living in slum areas. Contributed to winter relief efforts for underprivileged communities.",
    impact: "Winter Relief Initiative",
    icon: Heart,
    certificateUrl: "https://drive.google.com/file/d/1n9AedvsqNu986eFEH8_3lVRopR67I1uy/view?usp=sharing",
  },
  {
    title: "District Youth Parliament Festival",
    organization: "National Service Scheme (NSS), AMU",
    period: "AMU, Aligarh",
    description:
      "Participated in the District Youth Parliament Festival at AMU, Aligarh. Assisted with attendee registration and technical management during the event.",
    impact: "Event Management",
    icon: Users,
    certificateUrl: "https://drive.google.com/file/d/1NOBPa4VkrGktymyxkIhfPo0JSvSJGLJJ/view?usp=sharing",
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
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{service.impact}</Badge>
                    {service.certificateUrl && (
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                        <a href={service.certificateUrl} target="_blank" rel="noopener noreferrer">
                          View Certificate
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
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
