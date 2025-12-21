"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const categories = ["All", "MTCP Scholarship - Malaysia", "NXT Fresh Program - Taiwan"]

const galleryImages = [
  // MTCP Scholarship - Malaysia (12 photos)
  {
    src: "/mtcp-scholarship-recipients-group-photo-kuala-lump.jpg",
    title: "MTCP Scholarship Recipients Group Photo",
    category: "MTCP Scholarship - Malaysia",
    location: "Kuala Lumpur, Malaysia",
    year: "2022",
  },
  {
    src: "/universiti-malaya-campus-mtcp-scholars-internation.jpg",
    title: "At Universiti Malaya Campus",
    category: "MTCP Scholarship - Malaysia",
    location: "Kuala Lumpur, Malaysia",
    year: "2022",
  },
  {
    src: "/mtcp-scholarship-ceremony-award-malaysia-internati.jpg",
    title: "MTCP Scholarship Ceremony",
    category: "MTCP Scholarship - Malaysia",
    location: "Kuala Lumpur, Malaysia",
    year: "2022",
  },
  {
    src: "/petronas-twin-towers-visit-mtcp-scholars-kuala-lum.jpg",
    title: "Visit to Petronas Twin Towers",
    category: "MTCP Scholarship - Malaysia",
    location: "Kuala Lumpur, Malaysia",
    year: "2022",
  },
  {
    src: "/mtcp-international-scholars-cultural-exchange-mala.jpg",
    title: "Cultural Exchange with Fellow Scholars",
    category: "MTCP Scholarship - Malaysia",
    location: "Kuala Lumpur, Malaysia",
    year: "2023",
  },
  {
    src: "/research-laboratory-pearl-universiti-malaya-power-.jpg",
    title: "At PEARL Research Laboratory",
    category: "MTCP Scholarship - Malaysia",
    location: "Universiti Malaya, Malaysia",
    year: "2023",
  },
  {
    src: "/mtcp-scholars-networking-event-malaysia-internatio.jpg",
    title: "MTCP Scholars Networking Event",
    category: "MTCP Scholarship - Malaysia",
    location: "Kuala Lumpur, Malaysia",
    year: "2023",
  },
  {
    src: "/kuala-lumpur-city-tour-mtcp-scholars-sightseeing-m.jpg",
    title: "City Tour with Fellow Scholars",
    category: "MTCP Scholarship - Malaysia",
    location: "Kuala Lumpur, Malaysia",
    year: "2022",
  },
  {
    src: "/mtcp-scholarship-graduation-ceremony-malaysia-inte.jpg",
    title: "MTCP Program Celebration",
    category: "MTCP Scholarship - Malaysia",
    location: "Kuala Lumpur, Malaysia",
    year: "2024",
  },
  {
    src: "/malaysian-cultural-event-mtcp-scholars-traditional.jpg",
    title: "Malaysian Cultural Event",
    category: "MTCP Scholarship - Malaysia",
    location: "Kuala Lumpur, Malaysia",
    year: "2023",
  },
  {
    src: "/mtcp-scholars-team-building-outdoor-activity-malay.jpg",
    title: "Team Building with MTCP Scholars",
    category: "MTCP Scholarship - Malaysia",
    location: "Malaysia",
    year: "2023",
  },
  {
    src: "/universiti-malaya-research-presentation-mtcp-schol.jpg",
    title: "Research Presentation at UM",
    category: "MTCP Scholarship - Malaysia",
    location: "Universiti Malaya, Malaysia",
    year: "2024",
  },

  // NXT Fresh Program - Taiwan (16 photos)
  {
    src: "/nxt-fresh-program-taiwan-participants-group-photo-.jpg",
    title: "NXT Fresh Program Participants",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/nsysu-national-sun-yat-sen-university-campus-taiwa.jpg",
    title: "At NSYSU Campus",
    category: "NXT Fresh Program - Taiwan",
    location: "Kaohsiung, Taiwan",
    year: "2022",
  },
  {
    src: "/taiwan-cultural-tour-nxt-fresh-international-stude.jpg",
    title: "Cultural Tour in Taiwan",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Innovation Workshop",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Visit to Taipei 101",
    category: "NXT Fresh Program - Taiwan",
    location: "Taipei, Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Networking Dinner with Participants",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Exploring Taiwan Night Markets",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "NXT Fresh Opening Ceremony",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Scenic Taiwan Landscape",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Team Activities with NXT Fresh Cohort",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "University Campus Tour",
    category: "NXT Fresh Program - Taiwan",
    location: "Kaohsiung, Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Certificate Ceremony",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Sunset at Kaohsiung Beach",
    category: "NXT Fresh Program - Taiwan",
    location: "Kaohsiung, Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Cultural Exchange Experience",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Industry Visit",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    title: "Farewell with NXT Fresh Friends",
    category: "NXT Fresh Program - Taiwan",
    location: "Taiwan",
    year: "2022",
  },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section className="py-12 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const count =
                category === "All"
                  ? galleryImages.length
                  : galleryImages.filter((img) => img.category === category).length

              return (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-300 gap-2"
                >
                  {category === "MTCP Scholarship - Malaysia" && <span>🇲🇾</span>}
                  {category === "NXT Fresh Program - Taiwan" && <span>🇹🇼</span>}
                  {category}
                  <Badge variant={activeCategory === category ? "secondary" : "outline"} className="ml-1">
                    {count}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </motion.div>

        {activeCategory !== "All" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {activeCategory === "MTCP Scholarship - Malaysia"
                ? "Pictures with the MTCP Scholarship recipients in Kuala Lumpur, Malaysia!!"
                : "Photos from Taiwan and with fellow participants of the NXT Fresh Program, Taiwan!!"}
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{activeCategory === "MTCP Scholarship - Malaysia" ? "Kuala Lumpur, Malaysia" : "Taiwan"}</span>
            </div>
          </motion.div>
        )}

        <motion.div layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.category}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className={`group relative cursor-pointer overflow-hidden rounded-xl border border-border/50 
                  ${index % 7 === 0 ? "aspect-[4/5]" : index % 5 === 0 ? "aspect-square" : "aspect-[4/3]"}
                  hover:border-primary/50 transition-colors duration-300`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Hover info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-foreground line-clamp-2">{image.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-primary" />
                    <p className="text-xs text-muted-foreground">{image.location}</p>
                  </div>
                </div>

                {/* Image number badge */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="text-xs">
                    {index + 1}/{filteredImages.length}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl bg-background/98 backdrop-blur-xl p-0 border-border">
            <DialogHeader className="sr-only">
              <DialogTitle>Gallery Image</DialogTitle>
              <DialogDescription>View gallery image in full size</DialogDescription>
            </DialogHeader>
            {selectedImage !== null && (
              <div className="relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-muted">
                  <Image
                    src={filteredImages[selectedImage].src || "/placeholder.svg"}
                    alt={filteredImages[selectedImage].title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6 bg-card">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{filteredImages[selectedImage].title}</h3>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{filteredImages[selectedImage].location}</span>
                        <span>·</span>
                        <span>{filteredImages[selectedImage].year}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary" className="whitespace-nowrap">
                        {filteredImages[selectedImage].category === "MTCP Scholarship - Malaysia" ? "🇲🇾 " : "🇹🇼 "}
                        {filteredImages[selectedImage].category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {selectedImage + 1} of {filteredImages.length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/3 -translate-y-1/2 h-12 w-12 rounded-full shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/3 -translate-y-1/2 h-12 w-12 rounded-full shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 bg-background/80 hover:bg-background rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
