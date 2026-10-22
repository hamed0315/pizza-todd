
"use client"

import { motion } from "framer-motion"
import { Clock, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-6 pb-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full bg-red-600/30 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-[320px] md:order-2 md:max-w-[440px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              scale: { type: "spring", stiffness: 90, damping: 14 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative size-full flex items-center justify-center"
          >
            <img
              src="/images/chef-hero.png"
              alt="آشپز پیتزا پاز"
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(220,38,38,0.5)]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center md:order-1 md:text-right"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-500">
            <Star className="size-3.5 fill-amber-500" aria-hidden="true" />
            {"داغ‌ترین پیتزای شهر"}
          </span>
          <h1 className="mt-4 font-display text-5xl leading-[1.15] text-balance text-white md:text-7xl">
            {"پیتزا سوخاری "}
            <span className="text-red-600">پاز</span>
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-pretty text-zinc-400 md:mx-0 md:text-base">
            {"خمیر تازه هر روز، پنیر واقعی و سوخاری کرانچی. همین الان از سر میز سفارش بده."}
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 text-xs text-zinc-300 md:justify-start">
            <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2">
              <Clock className="size-4 text-green-500" aria-hidden="true" />
              {"آماده در ۱۵ دقیقه"}
            </span>
            <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2">
              <Star className="size-4 fill-amber-500 text-amber-500" aria-hidden="true" />
              {"۴٫۹ امتیاز"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
