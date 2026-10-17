"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"
import { toPersianDigits } from "@/lib/menu-data"

export function SiteHeader() {
  const { count, setOpen } = useCart()

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#top" className="flex items-center gap-2" aria-label="پیتزا تاد - صفحه اصلی">
          <span className="grid size-9 place-items-center rounded-xl bg-red-600 text-lg shadow-[0_0_24px_-4px] shadow-red-600/70">
            <span aria-hidden="true">🍕</span>
          </span>
          <span dir="ltr" className="font-display text-xl leading-none tracking-wide text-white">
            PIZZA <span className="text-amber-500">TODD</span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300">
            <span className="size-1.5 rounded-full bg-green-500" aria-hidden="true" />
            {`میز ${toPersianDigits(4)}`}
          </span>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-amber-500"
            aria-label={`سبد خرید، ${toPersianDigits(count)} مورد`}
          >
            <ShoppingBag className="size-5" />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                  className="absolute -top-1.5 -left-1.5 grid min-w-5 place-items-center rounded-full bg-amber-500 px-1 text-[11px] font-bold text-zinc-950"
                >
                  {toPersianDigits(count)}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>
  )
}
