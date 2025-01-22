"use client"

import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedCollections } from "@/components/featured-collections"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroCarousel />
        <FeaturedCollections />
      </main>
      <Footer />
    </div>
  )
}
