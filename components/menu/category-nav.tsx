
"use client"

import { motion } from "framer-motion"
import { categories, type CategoryId } from "@/lib/menu-data"

type Props = {
  active: CategoryId
  onChange: (id: CategoryId) => void
}

export function CategoryNav({ active, onChange }: Props) {
  return (
    <nav className="w-full overflow-x-auto py-4 scrollbar-hide" aria-label="دسته‌بندی‌ها">
      <ul className="flex items-center gap-6 px-4 min-w-max md:justify-center">
        {categories.map((cat) => {
          const isActive = active === cat.id
          return (
            <li key={cat.id} className="flex flex-col items-center">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(cat.id)}
                className="group relative flex flex-col items-center gap-2 outline-none"
              >
                {/* دایره */}
                <div
                  className={`relative flex size-20 items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-red-500 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                      : "border-white/10 bg-white/5 group-hover:border-white/20 group-hover:bg-white/10"
                  }`}
                >
                  {/* آیکون وسط‌چین */}
                  {cat.icon && (
                    <img
                      src={cat.icon}
                      alt={cat.title}
                      className={`size-12 object-contain transition-transform duration-300 ${
                        isActive ? "scale-110 drop-shadow-2xl" : "group-hover:scale-110"
                      }`}
                    />
                  )}
                  
                  {/* متن برای دسته بدون آیکون (همه) */}
                  {!cat.icon && (
                    <span className={`text-sm font-bold ${isActive ? "text-white" : "text-zinc-400"}`}>
                      {cat.title}
                    </span>
                  )}
                </div>

                {/* متن زیر دایره */}
                {cat.icon && (
                  <span
                    className={`text-xs font-bold transition-colors ${
                      isActive ? "text-red-500" : "text-zinc-400 group-hover:text-white"
                    }`}
                  >
                    {cat.title}
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
