"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Medal, GraduationCap, Trophy, Globe, FileText, ExternalLink } from "lucide-react"

const achievements = [
  {
    title: "MTCP (Malaysian Technical Cooperation Programme) Scholarship",
    organization: "Ministry of Foreign Affairs, Malaysia",
    year: "2022",
    category: "Scholarship",
    description:
      "Fully funded scholarship for Master's degree at Universiti Malaya, Malaysia. Sole recipient from India in 2022, selected among 14 scholars worldwide. Scholarship awarded based on academic merit and international competitiveness.",
    icon: Globe,
    certificateUrl: "https://drive.google.com/file/d/1i9eZZjjy58KMtzCo4um9e8NZK_wNT0Ll/view?usp=sharing",
  },
  {
    title: "Türkiye Bursları Scholarship",
    organization: "Presidency for Turks Abroad and Related Communities",
    year: "2022",
    category: "Scholarship",
    description:
      "Selected to pursue a Master's degree in Electrical Engineering at Gaziantep University, Türkiye. Chosen among lakhs of applicants based on academic excellence.",
    icon: GraduationCap,
    certificateUrl: "https://drive.google.com/file/d/1rdbhaZ0Y83OeqnCZXerf6xFAup4l27rD/view?usp=sharing",
  },
  {
    title: "Ministry of Education (MOE) Scholarship, Taiwan",
    organization: "Ministry of Education, Taiwan",
    year: "2022",
    category: "Scholarship",
    description:
      "Received to pursue a Master's degree (IMEPE) at NSYSU, Taiwan in 2022. Selected among 100 applicants for this prestigious scholarship.",
    icon: GraduationCap,
    certificateUrl: "https://drive.google.com/file/d/1sHyRbIycCSEmMlR-kMf8EcC-HnJHxlZa/view?usp=sharing",
  },
  {
    title: "Best Paper Award",
    organization: "International Conference at IEM, Kolkata, India",
    year: "2022",
    category: "Research",
    description:
      "Received the Best Paper Award at an International Conference held at IEM, Kolkata, India. Presented the research paper at the international conference.",
    icon: FileText,
    certificateUrl: "https://drive.google.com/file/d/1E1QhT9gN23Rp3YkenrKHfEZ5BoYPioEb/view?usp=sharing",
  },
  {
    title: "Best Project Award",
    organization: "Department of Electrical Engineering, NIT Hamirpur",
    year: "2021",
    category: "Academic",
    description:
      "Awarded the Best Project Award by the Department of Electrical Engineering, NIT Hamirpur. Received a cash prize of INR 5,100 along with an internship completion certificate.",
    icon: Trophy,
    certificateUrl: "https://drive.google.com/file/d/1nWKlGhhoHXybnqrflUqiDfVEl5k6d9ts/view?usp=sharing",
  },
  {
    title: "AMU Alumni Scholarship (Young Inspiration Award)",
    organization: "Aligarh Muslim University Alumni Association, USA",
    year: "2020",
    category: "Scholarship",
    description:
      "Awarded the Aligarh Muslim University Alumni Scholarship (Young Inspiration Award), USA. Received the scholarship based on outstanding academic performance.",
    icon: Award,
    certificateUrl: "https://drive.google.com/file/d/1uCacVhTtliOQT-nJY0qk6sE-j2yVrkUa/view?usp=sharing",
  },
  {
    title: "AMU Alumni Scholarship, Canada",
    organization: "Sana Rural Urban Welfare Society, Canada",
    year: "2019",
    category: "Scholarship",
    description:
      "Awarded the Aligarh Muslim University Alumni Scholarship, Canada by Sana Rural Urban Welfare Society. Received based on academic excellence and dedication to studies.",
    icon: Medal,
    certificateUrl: "https://drive.google.com/file/d/1cOwnqgzL1Zo-kp5C5QU3Z1D-0DprqWLk/view?usp=sharing",
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
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {achievement.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                      <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
                        View Certificate
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
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
