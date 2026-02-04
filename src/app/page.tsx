'use client'

import { useState } from 'react'
import { MessageCircle, Truck, Leaf, Shield, ChevronRight, Check, Sparkles } from 'lucide-react'
import { PAINT_COLORS, CATEGORIES, type PaintColor } from '@/lib/colors'

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState<PaintColor>(PAINT_COLORS[2]) // Soft Linen default
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  
  const filteredColors = activeCategory 
    ? PAINT_COLORS.filter(c => c.category === activeCategory)
    : PAINT_COLORS

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-cream/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-medium tracking-tight text-text-primary">
            BRAND<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#colors" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Shop Colors</a>
            <a href="#about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Our Story</a>
            <a href="#how-it-works" className="text-sm text-text-secondary hover:text-text-primary transition-colors">How It Works</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Chat with us</span>
            </button>
            <button className="px-4 py-2 bg-cta text-white text-sm font-medium rounded-full btn-primary">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      {/* Hero - Interactive Wall */}
      <section 
        className="min-h-screen pt-16 wall-transition relative overflow-hidden"
        style={{ backgroundColor: selectedColor.hex }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Copy */}
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-text-secondary mb-6">
                ✨ Founded by creators, for creators
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-text-primary mb-6 leading-tight"
                  style={{ 
                    color: isLightColor(selectedColor.hex) ? '#2D2A26' : '#FFFFFF',
                    mixBlendMode: 'normal'
                  }}>
                Paint that<br />
                <span className="font-medium">speaks to you</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg"
                 style={{ color: isLightColor(selectedColor.hex) ? '#6B6560' : 'rgba(255,255,255,0.85)' }}>
                64 designer-curated colors. Zero VOC. Premium quality.<br />
                <strong>4 gallons shipped anywhere for $125.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#colors" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary">
                  Shop Colors
                  <ChevronRight className="w-4 h-4" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-text-primary font-medium rounded-full hover:bg-white transition-colors">
                  <Sparkles className="w-4 h-4" />
                  Take the Color Quiz
                </button>
              </div>
            </div>

            {/* Right - Color Preview Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-soft max-w-md mx-auto lg:ml-auto">
                <div className="text-center mb-6">
                  <p className="text-sm text-text-muted mb-2">Currently viewing</p>
                  <h3 className="text-2xl font-medium text-text-primary">{selectedColor.name}</h3>
                  <p className="text-sm text-text-muted mt-1">{selectedColor.hex.toUpperCase()}</p>
                </div>
                
                {/* Color Swatch */}
                <div 
                  className="w-full aspect-square rounded-2xl mb-6 shadow-inner"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                
                {/* Quick Add */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">4 Gallon Box</span>
                    <span className="font-medium text-text-primary">$125</span>
                  </div>
                  <button className="w-full py-4 bg-cta text-white font-medium rounded-full btn-primary">
                    Add to Cart
                  </button>
                  <p className="text-xs text-center text-text-muted">
                    Free shipping • Pantone match guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Color Picker */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-3 shadow-lg flex items-center gap-2 max-w-[90vw] overflow-x-auto">
          {PAINT_COLORS.slice(0, 12).map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color)}
              className={`swatch w-8 h-8 rounded-full flex-shrink-0 ${selectedColor.id === color.id ? 'active' : ''}`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          <a href="#colors" className="text-xs text-text-muted whitespace-nowrap pl-2">
            +{PAINT_COLORS.length - 12} more
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-bg-white py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Leaf className="w-6 h-6 text-success" />
              <span className="text-sm text-text-secondary">Zero VOC Formula</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-accent" />
              <span className="text-sm text-text-secondary">Free Shipping on 4 Gal</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-sm text-text-secondary">Pantone Match Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MessageCircle className="w-6 h-6 text-accent" />
              <span className="text-sm text-text-secondary">Live Chat Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Colors */}
      <section id="colors" className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-4">
              Shop Our <span className="font-medium">64 Colors</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Every shade hand-picked by interior designers. Fewer choices, better results.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === null
                  ? 'bg-cta text-white'
                  : 'bg-white text-text-secondary hover:bg-border-light'
              }`}
            >
              All Colors
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cta text-white'
                    : 'bg-white text-text-secondary hover:bg-border-light'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Color Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {filteredColors.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color)}
                className="group"
              >
                <div
                  className={`swatch aspect-square rounded-xl mb-2 ${selectedColor.id === color.id ? 'active' : ''}`}
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-xs text-text-primary truncate">{color.name}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-4">
              Ready to Ship <span className="font-medium">Bundles</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Everything you need to transform your space. Premium paint, pro supplies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="product-card bg-bg-cream rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-[#9CAF88] to-[#7D9B76] flex items-center justify-center">
                <div className="w-32 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-4xl">🪣</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-text-primary mb-2">4 Gallon Box</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Covers ~1,200 sq ft. Perfect for a room refresh.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-medium text-text-primary">$125</span>
                  <button className="px-4 py-2 bg-cta text-white text-sm font-medium rounded-full btn-primary">
                    Choose Color
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card bg-bg-cream rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-[#E8C4B8] to-[#D4A5A5] flex items-center justify-center">
                <div className="flex gap-2">
                  <div className="w-24 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-3xl">🪣</span>
                  </div>
                  <div className="w-16 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center self-end">
                    <span className="text-xl">🖌️</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-text-primary mb-2">Starter Kit</h3>
                <p className="text-sm text-text-secondary mb-4">
                  4 gallons + premium brush set + roller kit. Save 15%.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-medium text-text-primary">$165</span>
                    <span className="text-sm text-text-muted line-through ml-2">$195</span>
                  </div>
                  <button className="px-4 py-2 bg-cta text-white text-sm font-medium rounded-full btn-primary">
                    Choose Color
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card bg-bg-cream rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-[#B5D4E8] to-[#8BA8BD] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2">
                  {['#FAF8F5', '#C5BAA8', '#9CAF88', '#E8C4B8', '#B5D4E8', '#3A3A3A'].map((hex, i) => (
                    <div key={i} className="w-10 h-10 rounded-lg shadow-md" style={{ backgroundColor: hex }} />
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-text-primary mb-2">Swatch Kit</h3>
                <p className="text-sm text-text-secondary mb-4">
                  6 peel-and-stick swatches. Test before you commit.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-medium text-text-primary">$15</span>
                  <button className="px-4 py-2 bg-cta text-white text-sm font-medium rounded-full btn-primary">
                    Build Kit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-4">
              Simple as <span className="font-medium">1, 2, 3</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-text-primary">1</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Pick Your Color</h3>
              <p className="text-sm text-text-secondary">
                Browse our curated palette or send us a Pantone code. We'll match it perfectly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-text-primary">2</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">We Ship It</h3>
              <p className="text-sm text-text-secondary">
                4 gallons in a beautiful box, shipped free anywhere in the country.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-text-primary">3</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Transform Your Space</h3>
              <p className="text-sm text-text-secondary">
                Premium coverage, zero VOC, stunning results. Questions? Chat with us anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'The color match was PERFECT. Sent them a Pantone and it arrived exactly right. So impressed.', color: 'Sage' },
              { name: 'Jessica L.', text: 'Finally, a paint brand that gets it. Beautiful colors, easy process, and the chat support is so helpful.', color: 'Blush' },
              { name: 'Amanda K.', text: '$125 for 4 gallons shipped?! And it\'s actually premium quality. Can\'t believe I used to overpay at the hardware store.', color: 'Greige' },
            ].map((review, i) => (
              <div key={i} className="bg-bg-cream rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-text-primary mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center text-sm font-medium text-accent-dark">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{review.name}</p>
                    <p className="text-xs text-text-muted">Purchased {review.color}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cta text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Ready to paint your <span className="font-medium">dream space</span>?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            64 colors. Premium quality. $125 shipped. No trips to the hardware store.
          </p>
          <a href="#colors" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-text-primary font-medium rounded-full hover:bg-bg-cream transition-colors">
            Shop Colors
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-cream py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-medium text-text-primary mb-4">BRAND<span className="text-accent">.</span></h4>
              <p className="text-sm text-text-secondary">
                Premium paint, curated colors, delivered to your door.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-medium text-text-primary mb-4">Shop</h5>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-text-primary">All Colors</a></li>
                <li><a href="#" className="hover:text-text-primary">Swatch Kits</a></li>
                <li><a href="#" className="hover:text-text-primary">Supplies</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium text-text-primary mb-4">Help</h5>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-text-primary">Chat with Us</a></li>
                <li><a href="#" className="hover:text-text-primary">FAQs</a></li>
                <li><a href="#" className="hover:text-text-primary">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium text-text-primary mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-text-primary">Our Story</a></li>
                <li><a href="#" className="hover:text-text-primary">Press</a></li>
                <li><a href="#" className="hover:text-text-primary">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">© 2026 Brand. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-text-muted">
              <a href="#" className="hover:text-text-primary">Privacy</a>
              <a href="#" className="hover:text-text-primary">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-cta text-white rounded-full shadow-lg flex items-center justify-center hover:bg-cta-hover transition-colors z-50">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}

// Helper function to determine if a color is light or dark
function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5
}
