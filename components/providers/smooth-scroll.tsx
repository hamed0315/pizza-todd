
"use client"

import { ReactLenis } from "lenis/react"
import { ReactNode } from "react"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.2, 
        smoothWheel: true, 
        // حذف syncTouch برای اینکه روی موبایل، اسکرول نیتیو و روان گوشی اجرا بشه
      }}
    >
      {children}
    </ReactLenis>
  )
}
