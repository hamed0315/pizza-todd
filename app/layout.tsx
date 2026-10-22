
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll'

export const metadata: Metadata = {
  title: 'PIZZA PAZ | منوی دیجیتال',
  description: 'منوی دیجیتال پیتزا سوخاری پاز',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className="bg-zinc-950 font-sans text-zinc-100 antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
