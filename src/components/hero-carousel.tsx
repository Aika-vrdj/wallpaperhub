"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Download, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const SLIDES = [
  {
    id: 1,
    title: "Dystopia",
    image: "https://965bkw5uht.ufs.sh/f/mhyKJVqR3EseN9cI1iszXMYqOhN7ygJx64BmSLR59Z3DVbCj",
    tags: ["city", "dystopia", "cyberpunk"],
    author: "John Smith"
  },
  {
    id: 2,
    title: "Abstract Patterns",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3",
    tags: ["Abstract", "Art", "Pattern"],
    author: "Emma Davis"
  },
  {
    id: 3,
    title: "Coastal Waves",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    tags: ["Ocean", "Waves", "Coast"],
    author: "Michael Chen"
  },
  {
    id: 4,
    title: "Northern Lights",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    tags: ["Night", "Aurora", "Nature"],
    author: "Sarah Wilson"
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
    setIsAutoPlaying(false)
  }

  const slideIndex = currentSlide % SLIDES.length
  const slide = SLIDES[slideIndex]

  if (!slide) return null

  return (
    <div 
      className="group relative h-[600px] overflow-hidden rounded-xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="relative h-full"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-12 text-white">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-3 text-5xl font-bold"
            >
              {slide.title}
            </motion.h2>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 flex gap-2"
            >
              {slide.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                <Download className="h-4 w-4" />
                Download
              </button>
              <p className="text-sm text-white/80">
                By <span className="font-medium text-white">{slide.author}</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white opacity-0 transition hover:bg-black/40 group-hover:opacity-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white opacity-0 transition hover:bg-black/40 group-hover:opacity-100"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-8 rounded-full transition ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
