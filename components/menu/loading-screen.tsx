
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { products } from "@/lib/menu-data"

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // فقط ۶ محصول اول و عکس آشپز رو پیش‌لود میکنیم تا کاربر سریع وارد بشه
    const criticalProducts = products.slice(0, 6)
    const imageUrls = [
      "/images/chef-hero.png",
      ...criticalProducts.map((p) => p.image)
    ]
    
    const totalImages = imageUrls.length
    let loadedImages = 0

    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url
      img.onload = () => {
        loadedImages++
        setProgress(Math.round((loadedImages / totalImages) * 100))
        if (loadedImages === totalImages) finishLoading()
      }
      img.onerror = () => {
        loadedImages++
        if (loadedImages === totalImages) finishLoading()
      }
    })

    // تایمر ایمنی: حتی اگر عکس‌ها لود نشدن، بعد از ۲ ثانیه صفحه باز شود
    const safetyTimeout = setTimeout(() => {
      finishLoading()
    }, 2000)

    function finishLoading() {
      setTimeout(() => setIsVisible(false), 200)
    }

    return () => clearTimeout(safetyTimeout)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950"
        >
          <div className="flex flex-col items-center gap-6" dir="ltr">
            <div className="flex text-3xl sm:text-4xl font-black tracking-[0.3em] text-white">
              {"PIZZA".split("").map((char, index) => (
                <motion.span key={`p-${index}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                  {char}
                </motion.span>
              ))}
              <span className="w-4" />
              {"PAZ".split("").map((char, index) => (
                <motion.span key={`z-${index}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.08 }} className="text-amber-500">
                  {char}
                </motion.span>
              ))}
            </div>

            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
