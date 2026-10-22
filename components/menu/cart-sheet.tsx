
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"
import { products, formatToman } from "@/lib/menu-data"

type Props = {
  isOpen: boolean
  onClose: () => void
}

export function CartSheet({ isOpen, onClose }: Props) {
  const { items, add, remove } = useCart()

  const cartItems = Object.entries(items).map(([id, qty]) => {
    const product = products.find((p) => p.id === id)
    return { product, qty }
  }).filter(item => item.product !== undefined)

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.product!.price * item.qty), 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-zinc-950/90 transform-gpu"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            className="absolute bottom-0 inset-x-0 mx-auto max-w-2xl rounded-t-[2.5rem] border-t border-white/10 bg-zinc-900 p-6 pb-12 shadow-2xl h-[80vh] flex flex-col transform-gpu will-change-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-white/20 shrink-0" />

            <div className="flex items-center justify-between mb-6 shrink-0">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShoppingBag className="size-5 text-red-500" /> سبد خرید شما
              </h2>
              <button onClick={onClose} className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10">
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto mb-6 scrollbar-hide">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
                  <ShoppingBag className="size-16 opacity-20" />
                  <p>سبد خرید شما خالی است.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cartItems.map(({ product, qty }) => (
                    <div key={product!.id} className="flex items-center gap-4 bg-white/5 rounded-2xl p-3 border border-white/5">
                      <img src={product!.image} alt={product!.title} className="size-16 rounded-xl object-cover" />
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-white">{product!.title}</h3>
                        <p className="text-xs text-amber-500 font-bold mt-1">{formatToman(product!.price * qty)}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-zinc-950 p-1.5 rounded-xl border border-white/10">
                        <button onClick={() => add(product!.id)} className="size-7 flex items-center justify-center rounded-lg bg-red-600 text-white"><Plus className="size-3" /></button>
                        <span className="text-sm font-bold text-white w-4 text-center">{qty}</span>
                        <button onClick={() => remove(product!.id)} className="size-7 flex items-center justify-center rounded-lg bg-white/10 text-white"><Minus className="size-3" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="shrink-0 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-zinc-400">مبلغ کل:</span>
                <span className="text-xl font-bold text-amber-500">{formatToman(totalPrice)}</span>
              </div>
              <button className="w-full rounded-xl bg-red-600 py-4 font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-50" disabled={cartItems.length === 0}>
                ثبت سفارش و پرداخت
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
