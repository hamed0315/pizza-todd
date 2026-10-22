
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"
import { products, formatToman } from "@/lib/menu-data"

export function FloatingCart({ onCartOpen }: { onCartOpen?: () => void }) {
  const { items } = useCart()

  const totalItems = Object.values(items).reduce((acc, qty) => acc + qty, 0)
  
  const totalPrice = Object.entries(items).reduce((acc, [id, qty]) => {
    const product = products.find((p) => p.id === id)
    return acc + (product ? product.price * qty : 0)
  }, 0)

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 inset-x-4 z-40 mx-auto max-w-md"
        >
          <button
            onClick={onCartOpen}
            className="flex w-full items-center justify-between rounded-2xl bg-red-600 p-4 text-white shadow-[0_10px_30px_rgba(220,38,38,0.5)] transition-transform active:scale-95"
          >
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-white/20">
                <span className="text-sm font-bold">{totalItems}</span>
              </div>
              <span className="font-bold">مشاهده سبد خرید</span>
            </div>
            <span className="font-bold">{formatToman(totalPrice)}</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
