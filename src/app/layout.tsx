import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Premium Interior Paint | Curated Colors, Delivered',
  description: 'Designer-curated paint colors for the modern home. Zero VOC, premium quality. 4 gallons shipped anywhere for $125. Pantone color matching guaranteed.',
  keywords: 'interior paint, wall paint, premium paint, designer colors, eco-friendly paint, zero VOC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
