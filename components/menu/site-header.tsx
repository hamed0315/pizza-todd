
"use client"

import { Menu, ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"

export function SiteHeader({ onCartOpen }: { onCartOpen?: () => void }) {
  const { items } = useCart()
  
  const totalItems = Object.values(items).reduce((acc, qty) => acc + qty, 0)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-zinc-950/60 backdrop-blur-md bg-zinc-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Hamburger Menu */}
        <button className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10">
          <Menu className="size-5" />
        </button>

        {/* Text Logo */}
        <div className="flex items-center justify-center" dir="ltr">
          <span className="font-black text-2xl sm:text-3xl text-white tracking-[0.2em]">
            PIZZA<span className="text-amber-500">PAZ</span>
          </span>
        </div>

        {/* Cart Button */}
        <button onClick={onCartOpen} className="relative flex size-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10">
          <ShoppingBag className="size-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
