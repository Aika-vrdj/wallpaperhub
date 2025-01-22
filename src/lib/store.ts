"use client"

import { create } from "zustand"

export type Wallpaper = {
  id: number
  title: string
  image: string
  likes: number
  resolution: string
  collectionId: number
}

export type Collection = {
  id: number
  title: string
  description: string
  image: string
  slug: string
}

type WallpaperStore = {
  collections: Collection[]
  wallpapers: Wallpaper[]
  favorites: number[]
  toggleFavorite: (id: number) => void
}

export const collections: Collection[] = [
  {
    id: 1,
    title: "Nature Escapes",
    description: "Breathtaking landscapes and natural wonders",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    slug: "nature-escapes"
  },
  {
    id: 2,
    title: "Urban Photography",
    description: "City life and architecture from around the world",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    slug: "urban-photography"
  },
  {
    id: 3,
    title: "Abstract Art",
    description: "Creative and unique abstract wallpapers",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
    slug: "abstract-art"
  },
  {
    id: 4,
    title: "Dark Minimalism",
    description: "Elegant and moody minimalist designs",
    image: "https://images.unsplash.com/photo-1518655048521-f130df041f66",
    slug: "dark-minimalism"
  },
  {
    id: 5,
    title: "Cosmic Wonders",
    description: "Space, galaxies, and celestial phenomena",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
    slug: "cosmic-wonders"
  },
  {
    id: 6,
    title: "Neon Dreams",
    description: "Vibrant neon and cyberpunk aesthetics",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    slug: "neon-dreams"
  }
]

export const wallpapers: Wallpaper[] = [
  // Nature Escapes
  {
    id: 1,
    title: "Mountain Vista",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    likes: 245,
    resolution: "3840x2160",
    collectionId: 1
  },
  {
    id: 2,
    title: "Ocean Waves",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    likes: 189,
    resolution: "2560x1440",
    collectionId: 1
  },
  {
    id: 3,
    title: "Desert Sunset",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    likes: 324,
    resolution: "3840x2160",
    collectionId: 1
  },
  {
    id: 4,
    title: "Misty Forest",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
    likes: 412,
    resolution: "3840x2160",
    collectionId: 1
  },
  // Urban Photography
  {
    id: 5,
    title: "City Lights",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
    likes: 278,
    resolution: "3840x2160",
    collectionId: 2
  },
  {
    id: 6,
    title: "Urban Architecture",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
    likes: 156,
    resolution: "2560x1440",
    collectionId: 2
  },
  {
    id: 7,
    title: "Night Streets",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    likes: 534,
    resolution: "3840x2160",
    collectionId: 2
  },
  // Abstract Art
  {
    id: 8,
    title: "Abstract Patterns",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3",
    likes: 198,
    resolution: "2560x1440",
    collectionId: 3
  },
  {
    id: 9,
    title: "Fluid Colors",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
    likes: 445,
    resolution: "3840x2160",
    collectionId: 3
  },
  {
    id: 10,
    title: "Geometric Dreams",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d",
    likes: 367,
    resolution: "3840x2160",
    collectionId: 3
  },
  // Dark Minimalism
  {
    id: 11,
    title: "Dark Elegance",
    image: "https://images.unsplash.com/photo-1518655048521-f130df041f66",
    likes: 289,
    resolution: "3840x2160",
    collectionId: 4
  },
  {
    id: 12,
    title: "Minimal Shadows",
    image: "https://images.unsplash.com/photo-1557683311-eac922347aa1",
    likes: 234,
    resolution: "2560x1440",
    collectionId: 4
  },
  {
    id: 13,
    title: "Monochrome Lines",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926",
    likes: 198,
    resolution: "3840x2160",
    collectionId: 4
  },
  // Cosmic Wonders
  {
    id: 14,
    title: "Galaxy Swirl",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
    likes: 567,
    resolution: "3840x2160",
    collectionId: 5
  },
  {
    id: 15,
    title: "Nebula Dreams",
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    likes: 432,
    resolution: "3840x2160",
    collectionId: 5
  },
  {
    id: 16,
    title: "Northern Lights",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    likes: 621,
    resolution: "3840x2160",
    collectionId: 5
  },
  // Neon Dreams
  {
    id: 17,
    title: "Neon City",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    likes: 445,
    resolution: "3840x2160",
    collectionId: 6
  },
  {
    id: 18,
    title: "Cyberpunk Streets",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    likes: 389,
    resolution: "3840x2160",
    collectionId: 6
  },
  {
    id: 19,
    title: "Neon Lights",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1",
    likes: 476,
    resolution: "3840x2160",
    collectionId: 6
  }
]

export const useStore = create<WallpaperStore>((set) => ({
  collections,
  wallpapers,
  favorites: typeof window !== 'undefined' ? JSON.parse(window.localStorage?.getItem('favorites') || '[]') : [],
  toggleFavorite: (id: number) => {
    set((state) => {
      const newFavorites = state.favorites.includes(id)
        ? state.favorites.filter((fid) => fid !== id)
        : [...state.favorites, id]
      if (typeof window !== 'undefined') {
        window.localStorage?.setItem('favorites', JSON.stringify(newFavorites))
      }
      return { favorites: newFavorites }
    })
  }
}))
