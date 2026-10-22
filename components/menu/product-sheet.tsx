
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Heart, Plus } from "lucide-react"
import { useCart } from "./cart-context"
import { formatToman, type Product } from "@/lib/menu-data"

type Props = {
  product: Product | null
  onClose: () => void
}

export function ProductSheet({ product, onClose }: Props) {
  const { add } = useCart()
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)

  useEffect(() => {
    setSelectedSizeIndex(0)
  }, [product])

  if (!product) return null

  const hasSizes = product.sizes && product.sizes.length > 0
  const currentPrice = hasSizes ? product.sizes![selectedSizeIndex].price : product.price

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }} // پس‌زمینه سریع fade میشه
        className="fixed inset-0 z-50 bg-zinc-950/90 transform-gpu"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          // 🚨 تغییر از Spring به Tween برای روانی فوق‌العاده
          transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
          // 🚨 اضافه کردن transform-gpu برای استفاده از پردازنده گرافیکی
          className="absolute bottom-0 inset-x-0 mx-auto max-w-2xl rounded-t-[2.5rem] border-t border-white/10 bg-zinc-900 p-6 pb-12 shadow-2xl transform-gpu will-change-transform"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-white/20" />

          <div className="flex items-center justify-between mb-6">
            <button onClick={onClose} className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10">
              <X className="size-5" />
            </button>
            <button className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-red-500/20 hover:text-red-500">
              <Heart className="size-5" />
            </button>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-6 bg-zinc-800">
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
          </div>

          <div className="text-right">
            <h2 className="text-2xl font-bold text-white mb-2">{product.title}</h2>
            <p className="text-sm leading-relaxed text-zinc-400 mb-6">{product.description}</p>

            {hasSizes && (
              <div className="mb-6">
                <span className="text-sm font-semibold text-white mb-3 block">انتخاب سایز:</span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes!.map((size, idx) => (
                    <button
                      key={size.label}
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                        selectedSizeIndex === idx
                          ? "bg-amber-500 text-zinc-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                          : "bg-white/5 text-zinc-400 hover:bg-white/10"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div>
                <span className="text-xs text-zinc-500 block mb-1">قیمت نهایی:</span>
                <span className="text-2xl font-bold text-amber-500">{formatToman(currentPrice)}</span>
              </div>
              <button
                onClick={() => {
                  add(product.id)
                  onClose()
                }}
                className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-transform hover:scale-105 active:scale-95"
              >
                <Plus className="size-5" />
                افزودن به سبد
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
