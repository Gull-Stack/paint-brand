'use client'

import { useState } from 'react'
import { Truck, Leaf, Shield, ArrowRight, Check, X, Plus, Minus } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function ShopPage() {
  const { cartItems, removeFromCart, clearCart, getCartTotal, cartCount, proceedToCheckout, isCheckingOut } = useCart()
  const [suppliesAdded, setSuppliesAdded] = useState(false)
  
  const suppliesPrice = 40
  const totalWithSupplies = getCartTotal() + (suppliesAdded ? suppliesPrice : 0)

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Premium Paint Made <span className="italic">Simple</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Everything you need to transform your space. Curated bundles, premium supplies, and color samples to help you create the home you love.
            </p>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      {cartCount > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-light text-text-primary">Your Paint Bundle</h2>
                <button
                  onClick={clearCart}
                  className="text-text-muted hover:text-text-secondary text-sm"
                >
                  Clear Cart
                </button>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.color.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                    <div 
                      className="w-16 h-16 rounded-lg border border-border"
                      style={{ backgroundColor: item.color.hex }}
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-text-primary">{item.color.name}</h3>
                      <p className="text-sm text-text-muted">{item.color.hex}</p>
                      <p className="text-sm text-text-muted">4 gallons • $125</p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.color.id)}
                      className="w-8 h-8 rounded-full bg-border hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-text-secondary">Subtotal:</span>
                  <span className="text-xl font-medium text-text-primary">${getCartTotal()}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-text-secondary">Shipping:</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                {suppliesAdded && (
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-text-secondary">Supplies Bundle:</span>
                    <span className="text-text-primary">$40</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-xl font-medium pt-4 border-t border-border">
                  <span>Total:</span>
                  <span>${totalWithSupplies}</span>
                </div>
              </div>

              {/* Supplies Upsell */}
              <div className={`mt-8 p-6 rounded-xl border transition-colors ${
                suppliesAdded 
                  ? 'bg-success/5 border-success/20' 
                  : 'bg-accent/5 border-accent/20'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-text-primary mb-2">
                      {suppliesAdded ? '✅ Complete Your Project' : '🎨 Complete Your Project'}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {suppliesAdded 
                        ? 'Professional supplies added to your order for the perfect finish.'
                        : 'Add professional supplies for the perfect finish. Save 15% when bundled with paint.'
                      }
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium text-text-primary">$40</div>
                    <div className="text-xs text-text-muted line-through">$47</div>
                    <div className="text-xs text-success font-medium">Save $7</div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 text-xs text-text-secondary mb-4">
                  <div>
                    <div className="font-medium text-text-primary mb-2">Brushes & Rollers</div>
                    <ul className="space-y-1">
                      <li>• Premium 2.5" angled brush</li>
                      <li>• 9" microfiber roller cover</li>
                      <li>• Roller frame & extension</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary mb-2">Prep & Protection</div>
                    <ul className="space-y-1">
                      <li>• Professional painter's tape</li>
                      <li>• Paint tray with liners</li>
                      <li>• Canvas drop cloth</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {suppliesAdded ? (
                    <button 
                      onClick={() => setSuppliesAdded(false)}
                      className="px-6 py-2 bg-border text-text-secondary font-medium rounded-full hover:bg-border-dark transition-colors text-sm flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Remove Supplies
                    </button>
                  ) : (
                    <button 
                      onClick={() => setSuppliesAdded(true)}
                      className="px-6 py-2 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition-colors text-sm"
                    >
                      Add Supplies Bundle - $40
                    </button>
                  )}
                  {suppliesAdded && (
                    <div className="px-4 py-2 bg-success/10 text-success text-sm font-medium rounded-full flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Added to Order
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => proceedToCheckout(undefined, suppliesAdded)}
                  disabled={isCheckingOut}
                  className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4" />
                      Secure Checkout
                    </>
                  )}
                </button>
                <Link href="/colors" className="px-8 py-4 bg-bg-white border border-border text-text-primary font-medium rounded-full hover:border-accent transition-colors text-center">
                  Add More Colors
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Categories */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Paint Bundles */}
            <Link href="/shop/bundles" className="bg-bg-white rounded-2xl p-8 hover:shadow-xl transition-all group">
              <div className="aspect-square bg-gradient-to-br from-accent-light to-accent rounded-xl mb-6 relative overflow-hidden">
                <div className="absolute inset-4 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="text-white text-lg font-medium">4 Gallons</div>
                </div>
              </div>
              <h2 className="text-2xl font-light text-text-primary mb-3 group-hover:text-accent transition-colors">
                Paint Bundles
              </h2>
              <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                Our signature 4-gallon bundles. Premium paint that covers ~1,200 sq ft with free shipping for just $125.
              </p>
              <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all">
                <span className="text-sm font-medium">Shop Bundles</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Paint Supplies */}
            <Link href="/shop/supplies" className="bg-bg-white rounded-2xl p-8 hover:shadow-xl transition-all group">
              <div className="aspect-square bg-gradient-to-br from-success/20 to-success/10 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-6xl">🎨</div>
              </div>
              <h2 className="text-2xl font-light text-text-primary mb-3 group-hover:text-accent transition-colors">
                Paint Supplies
              </h2>
              <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                Curated essentials for flawless application. Professional-grade brushes, rollers, and tools.
              </p>
              <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all">
                <span className="text-sm font-medium">Shop Supplies</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Swatches */}
            <Link href="/shop/swatches" className="bg-bg-white rounded-2xl p-8 hover:shadow-xl transition-all group">
              <div className="aspect-square bg-gradient-to-br from-border to-border-light rounded-xl mb-6 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1 w-20">
                  {Array.from({ length: 9 }, (_, i) => (
                    <div key={i} className="aspect-square rounded-sm bg-accent opacity-60" />
                  ))}
                </div>
              </div>
              <h2 className="text-2xl font-light text-text-primary mb-3 group-hover:text-accent transition-colors">
                Color Swatches
              </h2>
              <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                Try before you buy. Peel-and-stick swatches to test colors in your space.
              </p>
              <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all">
                <span className="text-sm font-medium">Coming Soon</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Shop with Dwell */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Why Shop with Dwell</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We make premium paint accessible with smart pricing and curated selections
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Premium Quality</h3>
              <p className="text-text-secondary text-sm">Same quality as leading brands like Sherwin-Williams and Behr</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Smart Pricing</h3>
              <p className="text-text-secondary text-sm">$125 for 4 gallons with free shipping nationwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Zero-VOC Formula</h3>
              <p className="text-text-secondary text-sm">Safe for your family and the environment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Curated Selection</h3>
              <p className="text-text-secondary text-sm">64 designer-selected colors perfect for modern homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Featured Products</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Our most popular items for creating beautiful spaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-gradient-to-br from-accent-light to-accent rounded-2xl mb-6"></div>
            </div>
            <div>
              <h3 className="text-3xl font-light text-text-primary mb-4">4-Gallon Paint Bundle</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Our signature offering. Four gallons of premium, zero-VOC paint in your choice of curated colors. 
                Perfect coverage for most rooms (~1,200 sq ft) with free nationwide shipping.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-text-secondary">Covers approximately 1,200 square feet</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-text-secondary">Zero-VOC, eco-friendly formula</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-text-secondary">Free shipping nationwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span className="text-text-secondary">Pantone color matching available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop/bundles" className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary text-center">
                  Shop Bundles - $125
                </Link>
                <Link href="/colors" className="px-8 py-4 bg-bg-white border border-border text-text-primary font-medium rounded-full hover:border-accent transition-colors text-center">
                  View All Colors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}