
import type { Metadata, Viewport } from 'next'
import { Vazirmatn, Lalezar } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll'

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

const lalezar = Lalezar({
  subsets: ['arabic', 'latin'],
  weight: '400',
  variable: '--font-lalezar',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'پیتزا تاد | منوی دیجیتال',
  description: 'منوی دیجیتال پیتزا سوخاری تاد — پیتزا، سوخاری، پیش‌غذا و نوشیدنی. از سر میز سفارش دهید.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
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
    <html lang="fa" dir="rtl" className={`dark ${vazirmatn.variable} ${lalezar.variable}`}>
      <body className="bg-zinc-950 font-sans text-zinc-100 antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
