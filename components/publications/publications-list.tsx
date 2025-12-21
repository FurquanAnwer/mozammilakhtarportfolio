"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, BookOpen, Presentation } from "lucide-react"
import Link from "next/link"

const publications = [
  {
    title: "Climate-Driven Migration Patterns in Coastal Bird Populations",
    journal: "Nature Climate Change",
    year: "2023",
    authors: "Chen, S., Martinez, J., Williams, R., et al.",
    doi: "10.1038/s41558-023-01234",
    citations: 127,
    type: "Research Article",
  },
  {
    title: "Mangrove Restoration as a Nature-Based Solution for Coastal Protection",
    journal: "Science",
    year: "2023",
    authors: "Chen, S., Liu, H., Patel, A.",
    doi: "10.1126/science.abm5678",
    citations: 245,
    type: "Research Article",
  },
  {
    title: "Global Assessment of Soil Carbon Sequestration Potential",
    journal: "Nature Communications",
    year: "2022",
    authors: "Chen, S., Thompson, K., Yamamoto, T., et al.",
    doi: "10.1038/s41467-022-29876",
    citations: 312,
    type: "Research Article",
  },
  {
    title: "Biodiversity Hotspots Under Climate Change: A Global Review",
    journal: "Annual Review of Environment and Resources",
    year: "2022",
    authors: "Chen, S., Brown, M.",
    doi: "10.1146/annurev-environ-012345",
    citations: 189,
    type: "Review",
  },
  {
    title: "Ecosystem Services Valuation for Conservation Decision-Making",
    journal: "Proceedings of the National Academy of Sciences",
    year: "2021",
    authors: "Chen, S., Garcia, L., Kim, J., et al.",
    doi: "10.1073/pnas.2109876543",
    citations: 156,
    type: "Research Article",
  },
  {
    title: "Urban Green Infrastructure and Heat Island Mitigation",
    journal: "Environmental Research Letters",
    year: "2021",
    authors: "Chen, S., Anderson, P.",
    doi: "10.1088/1748-9326/abc123",
    citations: 98,
    type: "Research Article",
  },
  {
    title: "Marine Protected Areas: Effectiveness in a Changing Climate",
    journal: "Conservation Biology",
    year: "2020",
    authors: "Chen, S., Wilson, E., Santos, M., et al.",
    doi: "10.1111/cobi.13456",
    citations: 234,
    type: "Research Article",
  },
  {
    title: "The Future of Food Security Under Climate Change",
    journal: "Nature Food",
    year: "2020",
    authors: "Chen, S., Kumar, V.",
    doi: "10.1038/s43016-020-0078-x",
    citations: 178,
    type: "Perspective",
  },
  {
    title:
      "Prediction of diffused solar radiation using machine learning model based on sun shine period and sky clearness index for the humid sub-tropical climate of India",
    journal: "Environmental Progress and Sustainable Energy",
    year: "2023",
    authors: "Mustafa, Husain, Ali Khan, Akhtar",
    doi: "10.1002/ep.13973",
    type: "Journal",
    icon: BookOpen,
  },
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
            <h2 className="text-3xl font-bold text-foreground">Selected Publications</h2>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            A selection of peer-reviewed papers from leading environmental science journals.
          </p>
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
            <Link href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
              View All Publications on Google Scholar
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
