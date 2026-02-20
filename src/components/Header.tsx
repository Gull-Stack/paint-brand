'use client'

import { useState } from 'react'
import { MessageCircle, Menu, X, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tight text-text-primary">
          DWELL<span className="text-accent">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <Link href="/shop" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Shop
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-bg-white border border-border rounded-lg p-4 shadow-lg min-w-48">
                <Link href="/shop/bundles" className="block py-2 text-sm text-text-secondary hover:text-text-primary">
                  Paint Bundles
                </Link>
                <Link href="/shop/supplies" className="block py-2 text-sm text-text-secondary hover:text-text-primary">
                  Paint Supplies
                </Link>
                <Link href="/shop/swatches" className="block py-2 text-sm text-text-secondary hover:text-text-primary">
                  Swatches
                </Link>
              </div>
            </div>
          </div>
          <Link href="/colors" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Colors
          </Link>
          <Link href="/inspiration" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Inspiration
          </Link>
          <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            About
          </Link>
          <Link href="/gallery" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Gallery
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Chat with us</span>
          </button>
          <Link href="/shop" className="relative px-4 py-2 bg-cta text-white text-sm font-medium rounded-full btn-primary flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Cart ({cartCount})</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-white border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <Link href="/shop" className="block text-sm text-text-secondary hover:text-text-primary">
              Shop
            </Link>
            <Link href="/colors" className="block text-sm text-text-secondary hover:text-text-primary">
              Colors
            </Link>
            <Link href="/inspiration" className="block text-sm text-text-secondary hover:text-text-primary">
              Inspiration
            </Link>
            <Link href="/about" className="block text-sm text-text-secondary hover:text-text-primary">
              About
            </Link>
            <Link href="/gallery" className="block text-sm text-text-secondary hover:text-text-primary">
              Gallery
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}