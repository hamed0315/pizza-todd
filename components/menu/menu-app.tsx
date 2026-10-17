"use client"

import { useState } from "react"
import { AnimatePresence, LayoutGroup } from "framer-motion"
import { CartProvider } from "./cart-context"
import { SiteHeader } from "./site-header"
import { Hero } from "./hero"
import { CategoryNav } from "./category-nav"
import { ProductCard } from "./product-card"
import { CartDrawer, FloatingCart } from "./floating-cart"
import { categories, products, type CategoryId } from "@/lib/menu-data"

export function MenuApp() {
  const [active, setActive] = useState<CategoryId>("all")
  const visible = active === "all" ? products : products.filter((p) => p.category === active)
  const activeLabel = categories.find((c) => c.id === active)?.label

  return (
    <CartProvider>
      <SiteHeader />
      <main className="pb-28 md:pb-12">
        <Hero />
        <CategoryNav active={active} onChange={setActive} />

        <section aria-labelledby="menu-heading" className="mx-auto max-w-6xl px-4 pt-6">
          <div className="mb-4 flex items-end justify-between">
            <h2 id="menu-heading" className="font-display text-3xl text-white">
              {active === "all" ? "منوی تاد" : activeLabel}
            </h2>
            <span className="text-xs text-zinc-500">{`${new Intl.NumberFormat("fa-IR").format(visible.length)} آیتم`}</span>
          </div>

          <LayoutGroup>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {visible.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </AnimatePresence>
            </div>
          </LayoutGroup>
        </section>
      </main>
      <FloatingCart />
      <CartDrawer />
    </CartProvider>
  )
}
