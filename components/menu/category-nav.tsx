"use client"

import { motion } from "framer-motion"
import { categories, type CategoryId } from "@/lib/menu-data"

type Props = {
  active: CategoryId
  onChange: (id: CategoryId) => void
}

export function CategoryNav({ active, onChange }: Props) {
  return (
    <nav
      aria-label="دسته‌بندی منو"
      className="sticky top-16 z-30 border-b border-white/5 bg-zinc-950/85 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl">
        <ul className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3" role="tablist">
          {categories.map((cat) => {
            const isActive = cat.id === active
            return (
              <li key={cat.id} className="shrink-0">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onChange(cat.id)}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-amber-500 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="category-pill"
                      className="absolute inset-0 rounded-full bg-red-600 shadow-[0_0_20px_-4px] shadow-red-600/80"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full border border-white/10 bg-white/5" />
                  )}
                  <span className="relative">{cat.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
