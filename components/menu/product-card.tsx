
"use client"

import { motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import { useCart } from "./cart-context"
import { formatToman, toPersianDigits, type Badge, type Product } from "@/lib/menu-data"

const badgeTone: Record<Badge["tone"], string> = {
  spicy: "bg-red-600/90 text-white",
  hot: "bg-amber-500 text-zinc-950",
  new: "bg-zinc-950/80 text-amber-500 border border-amber-500/40",
  veggie: "bg-green-500 text-zinc-950",
}

export function ProductCard({ product, index, onOpen }: { product: Product; index: number; onOpen: (p: Product) => void }) {
  const { items, add, remove } = useCart()
  const quantity = items[product.id] ?? 0
  const featured = product.featured
  const imageUrl = product.image;

  return (
    <motion.article 
      onClick={() => onOpen(product)}
      whileTap={{ scale: 0.98 }}
      className={`transform-gpu content-auto group relative flex flex-col overflow-hidden cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm ${
        featured ? "col-span-2 sm:flex-row" : ""
      }`}
    >
      <div className={`relative overflow-hidden rounded-2xl bg-zinc-900 ${featured ? "aspect-[16/10] sm:aspect-auto sm:w-1/2" : "aspect-square"}`}>
        <img
          src={imageUrl}
          alt={product.title}
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />

        {product.badges && (
          <div className="absolute top-2 right-2 flex flex-col items-start gap-1.5">
            {product.badges.map((badge) => (
              <span key={badge.label} className={`rounded-full px-2.5 py-1 text-[11px] font-bold shadow-lg backdrop-blur-sm ${badgeTone[badge.tone]}`}>
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col gap-1 px-1.5 pt-3 pb-1.5 ${featured ? "sm:justify-center sm:px-5" : ""}`}>
        {featured && <span className="mb-1 text-xs font-semibold text-amber-500">{"⭐ پیشنهاد سرآشپز"}</span>}
        <h3 className={`font-bold text-white text-balance ${featured ? "font-display text-2xl md:text-3xl" : "text-sm md:text-base"}`}>
          {product.title}
        </h3>
        <p className={`leading-relaxed text-zinc-400 ${featured ? "text-sm" : "line-clamp-2 text-xs"}`}>
          {product.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
          <p className={`whitespace-nowrap font-bold text-amber-500 ${featured ? "text-lg" : "text-sm"}`}>
            {formatToman(product.price)}
          </p>

          {quantity === 0 ? (
            <button
              onClick={(e) => { e.stopPropagation(); add(product.id); }}
              className={`flex items-center gap-1 rounded-xl bg-red-600 font-semibold text-white transition-colors hover:bg-red-500 ${featured ? "px-4 py-2.5 text-sm" : "size-9 justify-center"}`}
            >
              <Plus className="size-4" />
              {featured && <span>افزودن</span>}
            </button>
          ) : (
            <div className="flex items-center gap-1 rounded-xl bg-zinc-900 p-1 ring-1 ring-white/10">
              <button onClick={(e) => { e.stopPropagation(); add(product.id); }} className="grid size-7 place-items-center rounded-lg bg-red-600 text-white">
                <Plus className="size-3.5" />
              </button>
              <span className="min-w-5 text-center text-sm font-bold text-white">
                {toPersianDigits(quantity)}
              </span>
              <button onClick={(e) => { e.stopPropagation(); remove(product.id); }} className="grid size-7 place-items-center rounded-lg bg-white/10 text-white">
                <Minus className="size-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}
