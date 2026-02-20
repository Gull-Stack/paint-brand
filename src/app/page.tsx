'use client'

import { useState } from 'react'
import { MessageCircle, Truck, Leaf, Shield, ChevronRight, Check, Sparkles, ArrowRight, Star } from 'lucide-react'
import { PAINT_COLORS, CATEGORIES, type PaintColor } from '@/lib/colors'
import Header from '@/components/Header'
import Link from 'next/link'

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState<PaintColor>(PAINT_COLORS[2]) // Soft Linen default
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  
  const filteredColors = activeCategory 
    ? PAINT_COLORS.filter(c => c.category === activeCategory)
    : PAINT_COLORS

  // Featured colors for the homepage
  const featuredColors = PAINT_COLORS.slice(0, 12)

  // Bestseller bundles
  const bestsellers = [
    { name: 'Soft Linen Bundle', price: '$125', colors: 4, coverage: '~1,200 sq ft', popular: true },
    { name: 'Greige Collection', price: '$125', colors: 4, coverage: '~1,200 sq ft' },
    { name: 'Blush & Pink Set', price: '$125', colors: 4, coverage: '~1,200 sq ft' },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero - Interactive Room with Color-Changing Wall */}
      <section className="min-h-screen pt-16 relative overflow-hidden">
        {/* Room Background Image */}
        <div className="absolute inset-0">
          {/* Base room photo - untouched */}
          <img 
            src="/room-bg.jpg" 
            alt="Stylish living room interior" 
            className="w-full h-full object-cover"
          />
          
          {/* Wall-only color layer - triple blend for rich color depth */}
          <div 
            className="absolute inset-0 wall-transition"
            style={{ 
              backgroundColor: selectedColor.hex,
              mixBlendMode: 'overlay',
              opacity: 0.85,
              maskImage: 'url(/room-wall-mask.png)',
              WebkitMaskImage: 'url(/room-wall-mask.png)',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          {/* Second layer - punchy color saturation */}
          <div 
            className="absolute inset-0 wall-transition"
            style={{ 
              backgroundColor: selectedColor.hex,
              mixBlendMode: 'color',
              opacity: 0.75,
              maskImage: 'url(/room-wall-mask.png)',
              WebkitMaskImage: 'url(/room-wall-mask.png)',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          {/* Third layer - multiply for depth/shadows */}
          <div 
            className="absolute inset-0 wall-transition"
            style={{ 
              backgroundColor: selectedColor.hex,
              mixBlendMode: 'multiply',
              opacity: 0.3,
              maskImage: 'url(/room-wall-mask.png)',
              WebkitMaskImage: 'url(/room-wall-mask.png)',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          
          {/* Gradient fade for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Hero Copy */}
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-text-secondary mb-6">
                ✨ Elevate Your Home with Designer-Curated Paint
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight drop-shadow-lg">
                Premium Paint,<br />
                <span className="font-medium">Smart Price</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg text-white/90 drop-shadow">
                Zero-VOC formula with Pantone matching. Transform your space with colors curated for design-savvy women who value style and smart spending.
              </p>
              
              {/* Key Value Props */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">Zero-VOC Formula</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">Pantone Matching</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">$125 for 4 Gallons</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/colors" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-primary font-medium rounded-full hover:bg-bg-cream transition-colors shadow-lg">
                  Shop Curated Colors
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/30 transition-colors border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  Take the Color Quiz
                </button>
              </div>
            </div>

            {/* Right - Color Preview Card */}
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-sm mx-auto lg:ml-auto">
                <div className="text-center mb-6">
                  <p className="text-sm text-text-muted mb-2">See this color in the room</p>
                  <h3 className="text-2xl font-medium text-text-primary">{selectedColor.name}</h3>
                  <p className="text-sm text-text-muted mt-1">{selectedColor.hex.toUpperCase()}</p>
                  {selectedColor.pantone && (
                    <p className="text-xs text-text-muted">Pantone {selectedColor.pantone}</p>
                  )}
                </div>
                
                {/* Color Swatch */}
                <div 
                  className="w-full aspect-square rounded-2xl mb-6 shadow-inner wall-transition"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                
                {/* Quick Add */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">4 Gallon Bundle</span>
                    <span className="font-medium text-text-primary">$125</span>
                  </div>
                  <Link 
                    href={`/colors/${selectedColor.id}`}
                    className="w-full py-4 bg-cta text-white font-medium rounded-full btn-primary inline-flex items-center justify-center gap-2"
                  >
                    Shop This Color
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <p className="text-xs text-center text-text-muted">
                    Free shipping • Pantone match guaranteed • ~1,200 sq ft coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Color Picker */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-3 shadow-xl flex items-center gap-2 max-w-[90vw] overflow-x-auto z-20">
          <p className="text-xs text-text-muted whitespace-nowrap pr-2">Shop colors:</p>
          {featuredColors.map((color) => (
            <Link
              key={color.id}
              href={`/colors/${color.id}`}
              className={`swatch w-8 h-8 rounded-full flex-shrink-0 transition-transform hover:scale-110 ${selectedColor.id === color.id ? 'active ring-2 ring-accent' : ''}`}
              style={{ backgroundColor: color.hex }}
              title={`Shop ${color.name}`}
              onMouseEnter={() => setSelectedColor(color)}
            />
          ))}
          <Link href="/colors" className="text-xs text-accent font-medium whitespace-nowrap pl-2 hover:text-accent-dark transition-colors">
            +{PAINT_COLORS.length - featuredColors.length} more →
          </Link>
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
              <span className="text-sm text-text-secondary">Free Shipping on Bundles</span>
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

      {/* Our Bestsellers */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Our Bestsellers</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Discover the paint bundles that design-loving women can't stop raving about
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bestsellers.map((bundle, index) => (
              <div key={index} className={`bg-bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow ${bundle.popular ? 'ring-2 ring-accent' : ''}`}>
                {bundle.popular && (
                  <div className="bg-accent text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <div className="aspect-square bg-gradient-to-br from-accent-light to-accent rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-4xl">🪣</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-text-primary mb-2">{bundle.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-light text-text-primary">{bundle.price}</span>
                  <div className="text-right text-sm text-text-secondary">
                    <div>{bundle.colors} gallons</div>
                    <div>{bundle.coverage}</div>
                  </div>
                </div>
                <button className="w-full py-3 bg-cta text-white rounded-full font-medium btn-primary">
                  Choose Colors
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-medium">
              Shop All Bundles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Transformations */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Customer Transformations</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Real women sharing their Dwell transformations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                location: 'Target-Inspired Living Room', 
                text: "I reached out to Dwell and transformed my living room with their Soft Linen bundle. The quality is amazing and it was so easy!",
                colors: 'Soft Linen'
              },
              {
                name: 'Jessica L.',
                location: 'Modern Nursery',
                text: "Zero-VOC paint was essential for my daughter's nursery. The soft pink accent wall is exactly what I envisioned.",
                colors: 'Cloud Nine, Whisper Pink'
              },
              {
                name: 'Amanda K.',
                location: 'Coastal Kitchen',
                text: "Much more affordable than what I was quoted at Sherwin-Williams, but the same beautiful finish. Love my sage green island!",
                colors: 'Pearl, Sage Whisper'
              }
            ].map((review, index) => (
              <div key={index} className="bg-bg-cream rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-border to-border-light"></div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <div className="text-sm">
                    <div className="font-medium text-text-primary">{review.name}</div>
                    <div className="text-text-muted">{review.location}</div>
                    <div className="text-accent text-xs mt-1">Colors: {review.colors}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-medium">
              View All Transformations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Dwell? */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Why Dwell?</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Premium like Clare, but more affordable. Quality like Sherwin-Williams, but curated for your style.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Zero-VOC Formula</h3>
              <p className="text-text-secondary text-sm">Safe for your family and the environment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Curated Colors</h3>
              <p className="text-text-secondary text-sm">64 designer-selected colors for modern homes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Smart Pricing</h3>
              <p className="text-text-secondary text-sm">$125 for 4 gallons with free shipping</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Premium Quality</h3>
              <p className="text-text-secondary text-sm">Same quality as leading brands, better price</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Colors Section */}
      <section id="colors" className="py-20 bg-bg-white">
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
                  : 'bg-border text-text-secondary hover:bg-accent hover:text-white'
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
                    : 'bg-border text-text-secondary hover:bg-accent hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Color Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 mb-12">
            {filteredColors.slice(0, 40).map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color)}
                className="group"
              >
                <div
                  className={`swatch aspect-square rounded-xl mb-2 transition-all hover:scale-105 ${selectedColor.id === color.id ? 'active ring-2 ring-accent' : ''}`}
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-xs text-text-primary truncate group-hover:text-accent transition-colors">{color.name}</p>
              </button>
            ))}
          </div>

          <div className="text-center">
            <Link href="/colors" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary">
              View All 64 Colors <ArrowRight className="w-4 h-4" />
            </Link>
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
            64 designer colors. Premium quality. $125 shipped. Transform your home with colors that speak to your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/colors" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-text-primary font-medium rounded-full hover:bg-bg-cream transition-colors">
              Shop Colors
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/inspiration" className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/30 transition-colors border border-white/30">
              Get Inspired
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-medium tracking-tight mb-4">
                DWELL<span className="text-accent">.</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Premium paint for design-savvy women who value style and smart spending.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <div className="space-y-2 text-sm">
                <Link href="/shop/bundles" className="block text-white/70 hover:text-white">Paint Bundles</Link>
                <Link href="/shop/supplies" className="block text-white/70 hover:text-white">Supplies</Link>
                <Link href="/colors" className="block text-white/70 hover:text-white">All Colors</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Inspiration</h4>
              <div className="space-y-2 text-sm">
                <Link href="/inspiration" className="block text-white/70 hover:text-white">Blog</Link>
                <Link href="/gallery" className="block text-white/70 hover:text-white">Gallery</Link>
                <Link href="/about" className="block text-white/70 hover:text-white">Our Story</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="/faq" className="block text-white/70 hover:text-white">FAQ</Link>
                <Link href="/contact" className="block text-white/70 hover:text-white">Contact</Link>
                <button className="text-white/70 hover:text-white">Chat with us</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">© 2026 Dwell. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-white/70">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
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