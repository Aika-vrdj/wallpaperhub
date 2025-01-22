"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { useStore } from "@/lib/store"

export function FeaturedCollections() {
  const { collections, wallpapers } = useStore()

  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold">Featured Collections</h2>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.slug}`}
            className="block"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="group cursor-pointer overflow-hidden rounded-xl"
            >
            <div className="relative h-48">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{collection.title}</h3>
                <p className="text-sm text-white/80">
                  {wallpapers.filter(w => w.collectionId === collection.id).length} wallpapers
                </p>
              </div>
            </div>
          </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}
