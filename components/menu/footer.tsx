
"use client"

import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 pb-24 pt-12 text-center text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4">
        
        {/* لوگوی شفاف هیرو */}
        <img 
          src="/images/chef-hero.png" 
          alt="Pizza Paz" 
          className="h-28 w-auto object-contain mb-2 drop-shadow-[0_10px_20px_rgba(220,38,38,0.2)]" 
        />
        
        <p className="text-sm max-w-md leading-relaxed text-zinc-300">
          تجربه‌ای متفاوت از پیتزا و سوخاری با بهترین مواد اولیه. تازه، داغ و آماده برای شما.
        </p>
        
        {/* آیکون‌ها (شماره تلفن دقیقاً روی آیکون تلفن لینک شده) */}
        <div className="flex items-center justify-center gap-4 mt-6" dir="ltr">
          <a href="https://instagram.com/_pizzapazz" target="_blank" rel="noreferrer" className="flex size-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Instagram className="size-5" />
          </a>
          <a href="https://x.com/your_page" target="_blank" rel="noreferrer" className="flex size-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="tel:+989134927300" className="flex size-12 items-center justify-center rounded-full bg-red-600/10 border border-red-600/20 text-red-500 transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            <Phone className="size-5" />
          </a>
        </div>

        {/* آدرس (بدون متن شماره تلفن) */}
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-400 mt-4">
          <MapPin className="size-4 text-red-500" />
          <span>خیابان اصلی گوهردشت، ۱۲ شرقی، جنب خشکشویی</span>
        </div>

        <div className="mt-8 text-xs text-zinc-600">
          © {new Date().getFullYear()} تمامی حقوق برای پیتزا پاز محفوظ است.
        </div>
      </div>
    </footer>
  )
}
