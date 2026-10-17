
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { useState } from "react";

const TABS = [
  { id: "overview", label: "معرفی" },
  { id: "specs", label: "مشخصات" },
  { id: "materials", label: "متریال" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const TAB_CONTENT: Record<
  TabId,
  { title: string; body: string; items: string[] }
> = {
  overview: {
    title: "معماریِ نور",
    body: "نورا یک چراغ ایستاده مدولار است که با پنل‌های لولا شده، نور را حول حضور انسان شکل می‌دهد.",
    items: ["طراحی مدولار", "پنل‌های قابل تنظیم", "نور غیرمستقیم"],
  },
  specs: {
    title: "مشخصات فنی",
    body: "جزئیات مهندسی برای عملکرد بهینه در فضاهای معماری معاصر.",
    items: ["ارتفاع ۱۸۵۰ میلی‌متر", "ولتاژ ۲۲۰ ولت", "LED با عمر ۵۰٬۰۰۰ ساعت"],
  },
  materials: {
    title: "متریال و پرداخت",
    body: "آلیاژهای آنودایز شده و پلیمر نوری با پرداخت ساتن کبالت.",
    items: ["آلومینیوم آنودایز", "PMMA نوری", "پرداخت کبالت ساتن"],
  },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const active = TAB_CONTENT[activeTab];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-orange-600/[0.06] blur-[120px]" />
      </div>

      {/* Top meta bar */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
        <div className="flex items-center gap-4">
          <span className="text-zinc-100">[ NOURA ]</span>
          <span className="hidden sm:inline">KIVRA</span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <span>Industrial Design</span>
          <span className="text-zinc-400">MMXXV</span>
        </div>
      </header>

      {/* Main split layout */}
      <div className="relative grid min-h-screen grid-cols-1 pt-20 lg:grid-cols-[1.15fr_1fr] lg:pt-0">
        {/* Visual side */}
        <div className="relative h-[70vh] w-full overflow-hidden lg:h-screen">
          <Image
            src="/images/hero-bg.jpg"
            alt="NOURA architectural floor light"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          {/* Legibility overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950/80 to-transparent" />

          {/* Editorial overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute inset-x-6 bottom-16 z-10 max-w-lg"
          >
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-amber-300/80">
              Collection 01 / Featured
            </p>
            <h2 className="text-4xl font-light leading-[1.1] text-white md:text-5xl">
              نور،
              <br />
              <span className="text-zinc-300">به مثابه معماری.</span>
            </h2>
          </motion.div>

          {/* Bottom meta inside visual */}
          <div className="absolute inset-x-6 bottom-4 z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            <span>RIVET / ADJUSTABLE</span>
            <span className="hidden sm:inline">Anodised Aluminium</span>
          </div>
        </div>

        {/* Info side */}
        <div className="relative flex items-center justify-center px-6 py-16 lg:px-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full max-w-md"
          >
            {/* Brand label */}
            <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
              <span className="h-px w-8 bg-zinc-700" />
              <span>Origin / Design</span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-3xl font-light leading-tight text-zinc-100 md:text-4xl">
              روشنایی،
              <br />
              <span className="bg-gradient-to-l from-amber-200 via-amber-400 to-orange-500 bg-clip-text font-normal text-transparent">
                معماریِ نور
              </span>
            </h1>

            <p className="mb-8 max-w-sm text-sm leading-relaxed text-zinc-400">
              چراغ‌های ایستاده مدرن با پنل‌های لولا شده که نور را حول حضور انسان
              شکل می‌دهند.
            </p>

            {/* Glass panel */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl">
              <div className="flex gap-1 rounded-xl bg-black/20 p-1">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 rounded-lg px-3 py-2 text-xs transition-all ${
                      activeTab === tab.id
                        ? "bg-white/10 text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-sm font-medium text-zinc-100">
                  {active.title}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-zinc-400">
                  {active.body}
                </p>
                <ul className="space-y-2">
                  {active.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-zinc-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="group flex items-center gap-2 rounded-full bg-gradient-to-l from-amber-400 to-orange-500 px-6 py-3 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02]">
                پیش‌سفارش
                <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-300 backdrop-blur-md transition hover:bg-white/10">
                کاتالوگ
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
