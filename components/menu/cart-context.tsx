"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import { products, type Product } from "@/lib/menu-data"

type CartContextValue = {
  items: Record<string, number>
  count: number
  total: number
  isOpen: boolean
  setOpen: (open: boolean) => void
  add: (id: string) => void
  remove: (id: string) => void
  lines: { product: Product; quantity: number }[]
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({})
  const [isOpen, setOpen] = useState(false)

  const value = useMemo<CartContextValue>(() => {
    const lines = products
      .filter((p) => items[p.id])
      .map((product) => ({ product, quantity: items[product.id] }))
    return {
      items,
      lines,
      count: lines.reduce((sum, l) => sum + l.quantity, 0),
      total: lines.reduce((sum, l) => sum + l.quantity * l.product.price, 0),
      isOpen,
      setOpen,
      add: (id) => setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 })),
      remove: (id) =>
        setItems((prev) => {
          const next = { ...prev }
          if ((next[id] ?? 0) <= 1) delete next[id]
          else next[id] -= 1
          return next
        }),
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
