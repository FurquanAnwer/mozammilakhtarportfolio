"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Field Research", "Conferences", "University Life", "Expeditions", "Awards"]

const galleryImages = [
  {
    src: "/gallery-field-research-wetland-sampling.jpg",
    title: "Wetland Ecosystem Sampling",
    category: "Field Research",
    location: "Everglades, Florida",
    year: "2023",
  },
  {
    src: "/gallery-conference-presentation-climate.jpg",
    title: "Climate Summit Presentation",
    category: "Conferences",
    location: "Geneva, Switzerland",
    year: "2023",
  },
  {
    src: "/gallery-university-lab-research-team.jpg",
    title: "Research Team at Stanford Lab",
    category: "University Life",
    location: "Stanford University",
    year: "2023",
  },
  {
    src: "/gallery-expedition-arctic-research.jpg",
    title: "Arctic Ice Core Sampling",
    category: "Expeditions",
    location: "Svalbard, Norway",
    year: "2022",
  },
  {
    src: "/gallery-award-ceremony-environmental.jpg",
    title: "UN Environment Award Ceremony",
    category: "Awards",
    location: "New York City",
    year: "2023",
  },
  {
    src: "/gallery-field-research-coral-reef.jpg",
    title: "Coral Reef Documentation",
    category: "Field Research",
    location: "Great Barrier Reef",
    year: "2022",
  },
  {
    src: "/gallery-conference-panel-discussion.jpg",
    title: "Panel Discussion on Sustainability",
    category: "Conferences",
    location: "Copenhagen, Denmark",
    year: "2022",
  },
  {
    src: "/gallery-university-graduation-phd.jpg",
    title: "PhD Graduation Ceremony",
    category: "University Life",
    location: "MIT, Boston",
    year: "2015",
  },
  {
    src: "/gallery-expedition-amazon-rainforest.jpg",
    title: "Amazon Biodiversity Survey",
    category: "Expeditions",
    location: "Amazon Basin, Brazil",
    year: "2021",
  },
  {
    src: "/gallery-field-research-mountain-ecosystem.jpg",
    title: "Alpine Vegetation Study",
    category: "Field Research",
    location: "Swiss Alps",
    year: "2021",
  },
  {
    src: "/gallery-conference-networking-event.jpg",
    title: "AAAS Annual Meeting",
    category: "Conferences",
    location: "Seattle, Washington",
    year: "2022",
  },
  {
    src: "/gallery-university-teaching-students.jpg",
    title: "Teaching Environmental Science",
    category: "University Life",
    location: "Stanford University",
    year: "2023",
  },
  {
    src: "/gallery-expedition-antarctica-research.jpg",
    title: "Antarctic Research Station",
    category: "Expeditions",
    location: "McMurdo Station, Antarctica",
    year: "2020",
  },
  {
    src: "/gallery-award-research-excellence.jpg",
    title: "Research Excellence Award",
    category: "Awards",
    location: "Washington DC",
    year: "2022",
  },
  {
    src: "/gallery-field-research-ocean-sampling.jpg",
    title: "Ocean Water Quality Analysis",
    category: "Field Research",
    location: "Pacific Ocean",
    year: "2021",
  },
  {
    src: "/gallery-university-lab-equipment.jpg",
    title: "State-of-the-Art Lab Equipment",
    category: "University Life",
    location: "Sustainable Futures Lab",
    year: "2023",
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
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-foreground">{image.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {image.location} · {image.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-xl p-0 border-border">
            <DialogHeader className="sr-only">
              <DialogTitle>Gallery Image</DialogTitle>
              <DialogDescription>View gallery image in full size</DialogDescription>
            </DialogHeader>
            {selectedImage !== null && (
              <div className="relative">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={filteredImages[selectedImage].src || "/placeholder.svg"}
                    alt={filteredImages[selectedImage].title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{filteredImages[selectedImage].title}</h3>
                      <p className="mt-1 text-muted-foreground">
                        {filteredImages[selectedImage].location} · {filteredImages[selectedImage].year}
                      </p>
                    </div>
                    <Badge variant="secondary">{filteredImages[selectedImage].category}</Badge>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
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
                  className="absolute right-2 top-2 bg-background/50 hover:bg-background/80"
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
