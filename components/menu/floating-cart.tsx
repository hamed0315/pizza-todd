"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import { useCart } from "./cart-context"
import { formatToman, toPersianDigits } from "@/lib/menu-data"

export function FloatingCart() {
  const { count, total, setOpen } = useCart()

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden"
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-between gap-3 rounded-2xl bg-red-600 px-4 py-3.5 text-white shadow-[0_12px_40px_-8px] shadow-red-600/80 focus-visible:outline-2 focus-visible:outline-amber-500"
          >
            <span className="flex items-center gap-3">
              <span className="relative grid size-9 place-items-center rounded-xl bg-white/15">
                <ShoppingBag className="size-5" aria-hidden="true" />
                <span className="absolute -top-1.5 -left-1.5 grid min-w-5 place-items-center rounded-full bg-amber-500 px-1 text-[11px] font-bold text-zinc-950">
                  {toPersianDigits(count)}
                </span>
              </span>
              <span className="font-bold">مشاهده سبد خرید</span>
            </span>
            <motion.span key={total} initial={{ scale: 1.15 }} animate={{ scale: 1 }} className="text-sm font-bold">
              {formatToman(total)}
            </motion.span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function CartDrawer() {
  const { isOpen, setOpen, lines, total, add, remove } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="سبد خرید"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[85dvh] max-w-lg flex-col rounded-t-3xl border-t border-white/10 bg-zinc-900 pb-[env(safe-area-inset-bottom)]"
          >
            <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-white/15" aria-hidden="true" />
            <div className="flex items-center justify-between px-5 py-4">
              <h2 className="font-display text-2xl text-white">سبد خرید</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="بستن"
                className="grid size-9 place-items-center rounded-xl bg-white/5 text-zinc-300 hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5">
              {lines.length === 0 ? (
                <div className="py-14 text-center">
                  <p className="text-4xl" aria-hidden="true">🍕</p>
                  <p className="mt-3 text-sm text-zinc-400">{"سبدت خالیه! یه چیز خوشمزه انتخاب کن."}</p>
                </div>
              ) : (
                <ul className="flex flex-col gap-3">
                  {lines.map(({ product, quantity }) => (
                    <li key={product.id} className="flex items-center gap-3 rounded-2xl bg-white/5 p-2">
                      <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <Image src={product.image} alt="" fill sizes="64px" className="object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-white">{product.title}</p>
                        <p className="mt-1 text-xs text-amber-500">{formatToman(product.price * quantity)}</p>
                      </div>
                      <div className="flex items-center gap-1 rounded-xl bg-zinc-950 p-1">
                        <button
                          type="button"
                          onClick={() => add(product.id)}
                          aria-label={`افزایش ${product.title}`}
                          className="grid size-7 place-items-center rounded-lg bg-red-600 text-white"
                        >
                          <Plus className="size-3.5" />
                        </button>
                        <span className="min-w-5 text-center text-sm font-bold text-white">
                          {toPersianDigits(quantity)}
                        </span>
                        <button
                          type="button"
                          onClick={() => remove(product.id)}
                          aria-label={`کاهش ${product.title}`}
                          className="grid size-7 place-items-center rounded-lg bg-white/10 text-white"
                        >
                          <Minus className="size-3.5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4 border-t border-white/10 px-5 py-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-zinc-400">جمع کل</span>
                <span className="text-lg font-bold text-white">{formatToman(total)}</span>
              </div>
              <button
                type="button"
                disabled={lines.length === 0}
                className="w-full rounded-2xl bg-red-600 py-3.5 font-bold text-white shadow-[0_10px_30px_-10px] shadow-red-600 transition-colors hover:bg-red-500 disabled:opacity-40"
              >
                {`ثبت سفارش برای میز ${toPersianDigits(4)}`}
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
