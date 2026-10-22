
"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { CartProvider } from "./cart-context"
import { CategoryNav } from "./category-nav"
import { ProductCard } from "./product-card"
import { Hero } from "./hero"
import { SiteHeader } from "./site-header"
import { FloatingCart } from "./floating-cart"
import { Footer } from "./footer"
import { ProductSheet } from "./product-sheet"
import { CartSheet } from "./cart-sheet"
import { LoadingScreen } from "./loading-screen"
import { categories, products, type CategoryId, type Product } from "@/lib/menu-data"

export function MenuApp() {
  const [active, setActive] = useState<CategoryId>("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const visible = active === "all" ? products : products.filter((p) => p.category === active)
  const activeLabel = categories.find((c) => c.id === active)?.title

  return (
    <CartProvider>
      <LoadingScreen />
      {/* دکمه باز کردن سبد خرید به هدر پاس داده میشه */}
      <SiteHeader onCartOpen={() => setIsCartOpen(true)} />
      
      <main className="mx-auto max-w-6xl pb-24">
        <Hero />
        
        <div className="sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-md bg-zinc-950/90 border-y border-white/5">
          <CategoryNav active={active} onChange={setActive} />
        </div>

        <section className="px-4 pt-6">
          <h2 className="mb-4 text-xl font-bold text-white">
            {active === "all" ? "همه محصولات" : activeLabel}
          </h2>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            
              {visible.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                  onOpen={setSelectedProduct} 
                />
              ))}
            
          </div>
          
          {visible.length === 0 && (
            <p className="py-20 text-center text-zinc-500">محصولی در این دسته‌بندی یافت نشد.</p>
          )}
        </section>
      </main>
      
      <Footer />
      
      {/* دکمه شناور سبد خرید هم بهش پاس داده میشه */}
      <FloatingCart onCartOpen={() => setIsCartOpen(true)} />
      
      {/* مودال‌های پایین صفحه */}
      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <ProductSheet product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </CartProvider>
  )
}
