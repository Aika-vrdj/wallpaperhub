"use client"

import { motion } from "framer-motion"

const TAGS = [
  "Nature",
  "Abstract",
  "Minimalist",
  "Dark",
  "Neon",
  "Space",
  "Architecture",
  "Animals",
  "Technology",
  "Art"
]

export function TagsSection() {
  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold">Popular Tags</h2>
      <div className="flex gap-3 overflow-x-auto pb-4">
        {TAGS.map((tag) => (
          <motion.button
            key={tag}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-secondary px-4 py-2 text-sm font-medium transition hover:bg-secondary/80"
          >
            {tag}
          </motion.button>
        ))}
      </div>
    </section>
  )
}
