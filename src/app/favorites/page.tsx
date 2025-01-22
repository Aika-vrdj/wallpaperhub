"use client"

import { useStore } from "@/lib/store"
import { WallpaperGrid } from "@/components/wallpaper-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FavoritesPage() {
  const { wallpapers, favorites } = useStore()
  const favoriteWallpapers = wallpapers.filter(w => favorites.includes(w.id))

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">Your Favorites</h1>
          <p className="text-lg text-muted-foreground">Your collection of favorite wallpapers</p>
        </div>
        <WallpaperGrid wallpapers={favoriteWallpapers} title="Favorite Wallpapers" />
      </main>
      <Footer />
    </div>
  )
}
