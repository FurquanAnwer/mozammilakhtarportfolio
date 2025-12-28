"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, ExternalLink, User, Users } from "lucide-react"
import Link from "next/link"

const firstAuthorPaper = {
  title: "Dynamic Inductive Wireless Charging System for EVs with Zero Phase Angle Operation",
  journal: "IEEE Transactions on Transportation Electrification",
  doi: "10.1109/TTE.2025.3567627",
  findings: [
    "Achieves zero phase angle (ZPA) operation for both single and multiple Tx coil activation without overlapping or additional spacing between Tx coils.",
    "Reduces voltage and power fluctuation (within ±1.7%), improves coupling coefficient, increases charging length, and uses less Tx coil wire.",
    "Experimental validation using a 1-kW prototype confirms high performance, achieving a maximum dc–dc efficiency of 93.59%.",
  ],
  images: ["/Project_First_author.png"]
}

const coAuthorPapers = [
  {
    title: "Decoupling Method for Multi Transmitter Multi Receiver WPT Systems",
    journal: "IEEE Transactions on Transportation Electrification",
    doi: "10.1109/TTE.2024.3482351",
    findings: [
      "Effectively suppresses same-side mutual inductance while enhancing Tx–Rx mutual inductance, leading to improved overall system performance.",
      "Integration of an optimally designed decoupling coil reduces mutual inductance variation under misalignment, thereby increasing misalignment tolerance and minimizing output power pulsation.",
      "Experimental validation demonstrates high efficiency of 93.03%, delivering 1.64 kW at a 120-mm air gap, outperforming conventional MTMR WPT solutions.",
    ],
    images: ["/Project_Co-author_1.png"]
  },
  {
    title: "Dual-Receiver Inductive Power Transfer System with 360° Power Reception",
    journal: "IEEE Transactions on Transportation Electrification",
    doi: "10.1109/TTE.2023.3330638",
    findings: [
      "Eliminates same-side cross-coupling while using fewer components than conventional capacitive decoupling methods, resulting in improved system efficiency.",
      "Enables 360° power reception with excellent rotational misalignment tolerance, delivering full power at 90° misalignment, where conventional dual DD receivers deliver zero power.",
      "Experimental results confirm higher efficiency, improved lateral and rotational misalignment tolerance, and better power delivery across varying loads.",
    ],
    images: ["Project_Co-author_2.jpeg", "Project_Co-author_2.png"],
  },

]

const thirdPaper =   {
    title:
      "Prediction of diffused solar radiation using machine learning model based on sun shine period and sky clearness index for the humid sub-tropical climate of India",
    journal: "Environmental Progress and Sustainable Energy",
    doi: "10.1002/ep.13973",
}

export function KeyFindings() {
  return (
    <section className="py-12 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Journals</h2>
          </div>
        </motion.div>

        {/* First Author Paper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <User className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">First Author Paper</h3>
            <Badge className="bg-primary/20 text-primary border-primary/30">Lead Author</Badge>
          </div>

          <Card className="overflow-hidden border-primary/30">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">{firstAuthorPaper.title}</h4>
              <p className="text-primary font-medium mb-4">{firstAuthorPaper.journal}</p>

              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mb-6">
                {firstAuthorPaper.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full overflow-hidden rounded-lg bg-muted"
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`Research figure ${idx + 1}`}
                      width={1200}
                      height={675} // 16:9 ratio
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  Key Findings
                </h5>
                <ul className="space-y-2">
                  {firstAuthorPaper.findings.map((finding, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" size="sm" asChild>
                <Link href={`https://doi.org/${firstAuthorPaper.doi}`} target="_blank" rel="noopener noreferrer">
                  View Paper (DOI: {firstAuthorPaper.doi})
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

{/* Co-Author Papers */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div className="flex items-center gap-2 mb-6">
    <Users className="h-5 w-5 text-primary" />
    <h3 className="text-xl font-semibold text-foreground">
      Co-Author Papers
    </h3>
  </div>

  <div className="space-y-6">
    {coAuthorPapers.map((paper, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="overflow-hidden hover:border-primary/50 transition-colors">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              {paper.title}
            </h4>
            <p className="text-primary font-medium mb-4">
              {paper.journal}
            </p>

            {/* ✅ FIXED IMAGE GRID */}
            <div
              className={`grid gap-4 mb-6 ${
                paper.images.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
              }`}
            >
              {paper.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full overflow-hidden rounded-lg bg-muted"
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Figure ${idx + 1} from ${paper.title}`}
                    width={1200}
                    height={675} // correct 16:9
                    className="w-full h-auto object-contain"
                    sizes={
                      paper.images.length === 3
                        ? "(max-width: 768px) 100vw, 33vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    priority={index === 0 && idx === 0}
                  />
                </div>
              ))}
            </div>

            <div className="mb-4">
              <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                Key Findings
              </h5>
              <ul className="space-y-2">
                {paper.findings.map((finding, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground text-sm flex gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="outline" size="sm" asChild>
              <Link
                href={`https://doi.org/${paper.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper (DOI: {paper.doi})
                <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</motion.div>

        <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 * 0.1 }}
              >
                <Card className="overflow-hidden hover:border-primary/50 transition-colors mt-6">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{thirdPaper.title}</h4>
                    <p className="text-primary font-medium mb-4">{thirdPaper.journal}</p>
                            
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`https://doi.org/${thirdPaper.doi}`} target="_blank" rel="noopener noreferrer">
                        View Paper (DOI: {thirdPaper.doi})
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
      </div>
    </section>
  )
}
