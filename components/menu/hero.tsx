"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Star } from "lucide-react"

const floaters = [
  { emoji: "🌶️", className: "top-[8%] right-[4%]", delay: 0, size: "text-3xl" },
  { emoji: "🔥", className: "bottom-[12%] right-[0%]", delay: 0.6, size: "text-4xl" },
  { emoji: "⭐", className: "top-[2%] left-[10%]", delay: 1.1, size: "text-2xl" },
  { emoji: "🧀", className: "bottom-[4%] left-[6%]", delay: 0.3, size: "text-3xl" },
]

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
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="relative size-full"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
              className="relative size-full"
            >
              <Image
                src="/images/hero-pizza.png"
                alt="پیتزا پپرونی داغ با پنیر کش‌دار"
                fill
                priority
                sizes="(min-width: 768px) 440px, 320px"
                className="rounded-full object-cover drop-shadow-[0_30px_60px_rgba(220,38,38,0.45)]"
              />
            </motion.div>
          </motion.div>

          {floaters.map((f) => (
            <motion.span
              key={f.emoji}
              aria-hidden="true"
              className={`absolute ${f.className} ${f.size} select-none drop-shadow-lg`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -14, 0], rotate: [0, 8, -6, 0] }}
              transition={{
                opacity: { delay: 0.4 + f.delay, duration: 0.4 },
                scale: { delay: 0.4 + f.delay, type: "spring" },
                y: { delay: f.delay, duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                rotate: { delay: f.delay, duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {f.emoji}
            </motion.span>
          ))}
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
            <span className="text-red-600">تاد</span>
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
