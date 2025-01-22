"use client"

import Image from "next/image"
import { Download, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

import { type Wallpaper, useStore } from "@/lib/store"

interface WallpaperGridProps {
  title?: string
  wallpapers: Wallpaper[]
}

export function WallpaperGrid({ title = "Latest Wallpapers", wallpapers }: WallpaperGridProps) {
  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold">Latest Wallpapers</h2>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {wallpapers.map((wallpaper) => (
          <motion.div
            key={wallpaper.id}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={wallpaper.image}
                alt={wallpaper.title}
                fill
                className="object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition group-hover:opacity-100">
                <div className="w-full text-white">
                  <h3 className="text-lg font-semibold">{wallpaper.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      onClick={() => useStore.getState().toggleFavorite(wallpaper.id)}
                      className="flex items-center gap-2"
                    >
                      <Heart 
                        className={cn(
                          "h-4 w-4 transition-colors",
                          useStore.getState().favorites.includes(wallpaper.id) && "fill-current text-red-500"
                        )} 
                      />
                    </button>
                    <button className="flex items-center gap-1 rounded-lg bg-white px-3 py-1 text-sm text-black">
                      <Download className="h-4 w-4" />
                      <span>{wallpaper.resolution}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
