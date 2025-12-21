"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Mic,
  FlaskConical,
  Lightbulb,
  Brain,
  BookOpen,
  TrendingUp,
  Sun,
  Cpu,
  Bot,
  Factory,
  Globe,
  HeartPulse,
  GraduationCap,
  PenLine,
  Settings,
  ExternalLink,
} from "lucide-react"

const activities = [
  {
    title: "UPCON International Conference Volunteer",
    category: "Volunteering",
    description:
      "Volunteered at the international conference (UPCON) held at the Department of Electrical Engineering, Zakir Hussain College of Engineering and Technology, Aligarh Muslim University, Aligarh, India.",
    icon: Users,
    certificateUrl: "#",
  },
  {
    title: "Declamation Contest - Fundamental Duties",
    category: "Competition",
    description:
      "Participated in a fully funded declamation contest on 'Fundamental Duties of Citizens of India,' organized by the National Institute of Technical Teachers' Training and Research (NITTTR), Chandigarh, India.",
    icon: Mic,
    certificateUrl: "#",
  },
  {
    title: "Science Fest 2K19 Organizer",
    category: "Organizing",
    description:
      "Organized Science Fest 2K19 at Zakir Hussain College of Engineering and Technology, Aligarh Muslim University (AMU), Aligarh, India. Invited school students from Aligarh district to showcase their passion for science.",
    icon: FlaskConical,
    certificateUrl: "#",
  },
  {
    title: "IPR Workshop Organizer",
    category: "Organizing",
    description:
      "Organized a workshop on Intellectual Property Rights (IPR) under the Institution's Innovation Council at Zakir Hussain College of Engineering and Technology, Aligarh Muslim University (AMU), Aligarh.",
    icon: Lightbulb,
    certificateUrl: "#",
  },
  {
    title: "Cognitive Skills & Design Thinking Workshop",
    category: "Workshop",
    description:
      "Participated in a workshop on cognitive skills, design thinking, and critical thinking, organized by the Institution's Innovation Council at Zakir Hussain College of Engineering and Technology, AMU, Aligarh, India.",
    icon: Brain,
    certificateUrl: "#",
  },
  {
    title: "Making of Modern India Lecture",
    category: "Lecture",
    description:
      "Participated in a lecture on 'Making of Modern India,' organized by the Training and Placement Office, Zakir Hussain College of Engineering and Technology, Aligarh Muslim University (AMU), Aligarh, India.",
    icon: BookOpen,
    certificateUrl: "#",
  },
  {
    title: "Professional Growth & Development Workshop",
    category: "Workshop",
    description:
      "Participated in a workshop on 'Professional Growth and Development' during a summer internship at the National Institute of Technology (NIT), Hamirpur, India.",
    icon: TrendingUp,
    certificateUrl: "#",
  },
  {
    title: "Grid-Connected Solar PV Plants Seminar",
    category: "Seminar",
    description:
      "Participated in a national seminar on 'Grid-Connected Solar PV Plants' at Zakir Hussain College of Engineering and Technology, Aligarh Muslim University (AMU), Aligarh, India.",
    icon: Sun,
    certificateUrl: "#",
  },
  {
    title: "Embedded Systems & IoT Workshop",
    category: "Workshop",
    description:
      "Participated in a two-day workshop on 'Embedded Systems and IoT' at Zakir Hussain College of Engineering and Technology, Aligarh Muslim University (AMU), Aligarh, India.",
    icon: Cpu,
    certificateUrl: "#",
  },
  {
    title: "Autonomous Robotics & Embedded Systems Workshop",
    category: "Workshop",
    description:
      "Participated in a workshop on 'Autonomous Robotics and Embedded Systems' at University Polytechnic, Aligarh Muslim University (AMU), Aligarh, India.",
    icon: Bot,
    certificateUrl: "#",
  },
  {
    title: "Make in India Workshop",
    category: "Workshop",
    description:
      "Participated in a workshop on 'Make in India: Opportunities and Challenges for Engineers' at University Polytechnic, Aligarh Muslim University (AMU), Aligarh, India.",
    icon: Factory,
    certificateUrl: "#",
  },
  {
    title: "International Conference on Renewable Power",
    category: "Conference",
    description:
      "Participated in the International Conference on Renewable Power, organized by Baba Ghulam Shah Badshah University, Rajouri, J&K, India.",
    icon: Globe,
    certificateUrl: "#",
  },
  {
    title: "Robotics and Healthcare Webinar",
    category: "Webinar",
    description:
      "Participated in an international webinar on 'Robotics and Healthcare,' organized by St. Xavier's College, Nevta, affiliated with the University of Rajasthan, Jaipur, India.",
    icon: HeartPulse,
    certificateUrl: "#",
  },
  {
    title: "Research Literacy - Youth Skills Day",
    category: "Event",
    description:
      "Participated in Research Literacy activities on the occasion of Youth Skills Day, organized by exploreiT.",
    icon: GraduationCap,
    certificateUrl: "#",
  },
  {
    title: "Essay Writing Competition",
    category: "Competition",
    description:
      "Participated in an essay writing competition on 'The Pandemic and Public Policy,' organized by the Law Faculty, Aligarh Muslim University (AMU), Aligarh.",
    icon: PenLine,
    certificateUrl: "#",
  },
  {
    title: "Basics of ANSYS Workshop",
    category: "Workshop",
    description: "Participated in a three-day workshop on the basics of ANSYS, organized by MMANTC, Malegaon, India.",
    icon: Settings,
    certificateUrl: "#",
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

const categoryColors: Record<string, string> = {
  Volunteering: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Competition: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  Organizing: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  Workshop: "bg-primary/10 text-primary border-primary/30",
  Lecture: "bg-green-500/10 text-green-400 border-green-500/30",
  Seminar: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  Conference: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  Webinar: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Event: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
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
              <Card className="h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <Badge
                      variant="outline"
                      className={categoryColors[activity.category] || "border-primary/30 text-primary"}
                    >
                      {activity.category}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-foreground text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="mb-4 flex-1">{activity.description}</CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-auto border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                    asChild
                  >
                    <a href={activity.certificateUrl} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
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
