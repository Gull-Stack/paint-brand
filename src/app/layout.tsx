import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Premium Interior Paint for Stylish Homes | Dwell',
  description: 'Designer-curated, zero-VOC paint delivered to your door. 64 premium colors for modern homes. $125 for 4 gallons covering 1,200 sq ft. Free shipping, guaranteed Pantone matching.',
  keywords: 'premium interior paint, designer paint colors, zero VOC paint, low odor paint, modern home decor, affordable designer paint, premium paint bundles, stylish home paint',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
