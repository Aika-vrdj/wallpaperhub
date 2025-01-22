"use client"

import { useStore } from "@/lib/store"
import { WallpaperGrid } from "@/components/wallpaper-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CosmicWondersPage() {
  const { collections, wallpapers } = useStore()
  const collection = collections.find(c => c.slug === "cosmic-wonders")

  if (!collection) {
    return null
  }

  const collectionWallpapers = wallpapers.filter(w => w.collectionId === collection.id)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">{collection.title}</h1>
          <p className="text-lg text-muted-foreground">{collection.description}</p>
        </div>
        <WallpaperGrid wallpapers={collectionWallpapers} title={`${collection.title} Wallpapers`} />
      </main>
      <Footer />
    </div>
  )
}
