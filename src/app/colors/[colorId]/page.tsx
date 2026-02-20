'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Heart, Share, Check, Plus, Minus, ShoppingBag, Palette, Eye, ArrowRight, Shield } from 'lucide-react'
import Header from '@/components/Header'
import Link from 'next/link'
import { PAINT_COLORS, type PaintColor } from '@/lib/colors'
import { useCart } from '@/context/CartContext'
import { useParams } from 'next/navigation'

export default function ColorProductPage() {
  const params = useParams()
  const colorId = params.colorId as string
  const [color, setColor] = useState<PaintColor | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [showToast, setShowToast] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  
  const { addToCart, isInCart, proceedToCheckout, isCheckingOut } = useCart()

  useEffect(() => {
    const foundColor = PAINT_COLORS.find(c => c.id === colorId)
    setColor(foundColor || null)
  }, [colorId])

  if (!color) {
    return (
      <div className="min-h-screen bg-bg-cream">
        <Header />
        <div className="pt-32 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-light text-text-primary mb-4">Color not found</h1>
            <Link href="/colors" className="text-accent hover:text-accent-dark">
              ← Back to Colors
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(color)
    }
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const relatedColors = PAINT_COLORS
    .filter(c => c.category === color.category && c.id !== color.id)
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-6 z-50 bg-success text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <Check className="w-4 h-4" />
          Added {quantity} bundle{quantity > 1 ? 's' : ''} of {color.name} to cart!
        </div>
      )}

      {/* Product Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Navigation */}
          <Link href="/colors" className="inline-flex items-center gap-2 text-text-muted hover:text-text-secondary mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Colors
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Color Visualization */}
            <div className="space-y-6">
              {/* Main Color Swatch */}
              <div className="relative">
                <div 
                  className="w-full aspect-square rounded-3xl shadow-xl border border-border"
                  style={{ backgroundColor: color.hex }}
                />
                
                {/* Room Preview (Interactive) */}
                <div className="mt-6 relative rounded-3xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] relative">
                    {/* Base room photo */}
                    <img 
                      src="/room-bg.jpg" 
                      alt="Room preview" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Wall color overlay - triple blend for rich color depth */}
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        backgroundColor: color.hex,
                        mixBlendMode: 'overlay',
                        opacity: 0.85,
                        maskImage: 'url(/room-wall-mask.png)',
                        WebkitMaskImage: 'url(/room-wall-mask.png)',
                        maskSize: 'cover',
                        WebkitMaskSize: 'cover',
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        backgroundColor: color.hex,
                        mixBlendMode: 'color',
                        opacity: 0.75,
                        maskImage: 'url(/room-wall-mask.png)',
                        WebkitMaskImage: 'url(/room-wall-mask.png)',
                        maskSize: 'cover',
                        WebkitMaskSize: 'cover',
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        backgroundColor: color.hex,
                        mixBlendMode: 'multiply',
                        opacity: 0.3,
                        maskImage: 'url(/room-wall-mask.png)',
                        WebkitMaskImage: 'url(/room-wall-mask.png)',
                        maskSize: 'cover',
                        WebkitMaskSize: 'cover',
                      }}
                    />
                    
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <p className="text-xs text-text-secondary flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        Room preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Product Details */}
            <div className="space-y-8">
              {/* Color Info */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-light text-text-primary mb-2">{color.name}</h1>
                    <p className="text-text-muted text-lg">{color.hex.toUpperCase()}</p>
                    {color.pantone && (
                      <p className="text-text-muted">Pantone {color.pantone}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setIsFavorited(!isFavorited)}
                      className={`p-3 rounded-full transition-colors ${
                        isFavorited ? 'bg-red-50 text-red-500' : 'bg-bg-white text-text-muted hover:text-text-secondary'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-3 bg-bg-white text-text-muted hover:text-text-secondary rounded-full transition-colors">
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-white rounded-full text-sm text-text-secondary border border-border">
                  <Palette className="w-4 h-4" />
                  {color.category.charAt(0).toUpperCase() + color.category.slice(1)}
                </div>
              </div>

              {/* 4-Gallon Bundle Info */}
              <div className="bg-bg-white rounded-3xl p-8 border border-border">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-light text-text-primary mb-2">4-Gallon Bundle</h2>
                    <p className="text-text-muted">Perfect for most rooms (~1,200 sq ft coverage)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-light text-text-primary">$125</span>
                    <p className="text-text-muted text-sm">$31.25 per gallon</p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-text-secondary">Zero-VOC Formula</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-text-secondary">Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-text-secondary">Pantone Matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-text-secondary">Satisfaction Guaranteed</span>
                  </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-text-secondary">Quantity:</label>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-full bg-bg-cream flex items-center justify-center hover:bg-border transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-full bg-bg-cream flex items-center justify-center hover:bg-border transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button 
                      onClick={async () => {
                        // Add to cart temporarily for checkout
                        for (let i = 0; i < quantity; i++) {
                          addToCart(color)
                        }
                        // Immediately proceed to checkout
                        await proceedToCheckout()
                      }}
                      disabled={isCheckingOut}
                      className="w-full py-4 bg-cta text-white font-medium rounded-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isCheckingOut ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Shield className="w-5 h-5" />
                          Buy Now - ${125 * quantity}
                        </>
                      )}
                    </button>
                    
                    <button 
                      onClick={handleAddToCart}
                      className="w-full py-3 bg-bg-white border border-border text-text-primary font-medium rounded-full hover:border-accent transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>

                  <p className="text-xs text-center text-text-muted">
                    Each bundle covers ~1,200 sq ft • Free shipping on all orders
                  </p>
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-4">
                <Link 
                  href="/shop/swatches"
                  className="block p-4 bg-bg-white rounded-2xl border border-border hover:border-accent transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-text-primary">Order Color Sample</h3>
                      <p className="text-sm text-text-muted">Try before you buy - $3</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted" />
                  </div>
                </Link>

                <Link 
                  href="/shop/supplies"
                  className="block p-4 bg-bg-white rounded-2xl border border-border hover:border-accent transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-text-primary">Add Paint Supplies</h3>
                      <p className="text-sm text-text-muted">Brushes, rollers, drop cloths</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Colors */}
          {relatedColors.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-light text-text-primary mb-8 text-center">
                More {color.category.charAt(0).toUpperCase() + color.category.slice(1)} Shades
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {relatedColors.map((relatedColor) => (
                  <Link 
                    key={relatedColor.id}
                    href={`/colors/${relatedColor.id}`}
                    className="group block"
                  >
                    <div 
                      className="aspect-square rounded-2xl mb-3 shadow-sm group-hover:shadow-md transition-shadow border border-border"
                      style={{ backgroundColor: relatedColor.hex }}
                    />
                    <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">
                      {relatedColor.name}
                    </h3>
                    <p className="text-sm text-text-muted">{relatedColor.hex.toUpperCase()}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}