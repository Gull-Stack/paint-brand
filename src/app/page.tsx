'use client'

import { useState } from 'react'
import { MessageCircle, Truck, Leaf, Shield, ChevronRight, Check, Sparkles, ArrowRight, Star, CheckCircle, Palette, Package } from 'lucide-react'
import { PAINT_COLORS, CATEGORIES, type PaintColor } from '@/lib/colors'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BuildYourBox from '@/components/BuildYourBox'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState<PaintColor>(PAINT_COLORS[2]) // Soft Linen default
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [modalColor, setModalColor] = useState<PaintColor | null>(null)
  const [justAdded, setJustAdded] = useState<string | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const { addDraftColor } = useCart()

  // Static designer color shown on the hero room wall (interactive painter lives on /design)
  const heroColor = PAINT_COLORS.find(c => c.id === 'sage') ?? PAINT_COLORS[0]

  const filteredColors = activeCategory
    ? PAINT_COLORS.filter(c => c.category === activeCategory)
    : PAINT_COLORS

  const categoryNames: { [key: string]: string } = {
    whites: 'Whites',
    neutrals: 'Neutrals', 
    warm: 'Warm Neutrals',
    blush: 'Blush & Pink',
    greens: 'Greens',
    blues: 'Blues',
    moody: 'Moody'
  }

  const toggleFavorite = (colorId: string) => {
    setFavorites(prev => 
      prev.includes(colorId) 
        ? prev.filter(id => id !== colorId)
        : [...prev, colorId]
    )
  }

  const handleAddToCart = (color: PaintColor) => {
    addDraftColor(color)
    setJustAdded(color.id)
    setToastMessage(`${color.name} added to your box`)
    setShowToast(true)
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
    
    // Reset "just added" state after 2 seconds
    setTimeout(() => {
      setJustAdded(null)
    }, 2000)
  }

  // Featured colors for the homepage
  const featuredColors = PAINT_COLORS.slice(0, 12)

  // Featured bestseller colors  
  const bestsellerColors = [
    PAINT_COLORS.find(c => c.id === 'soft-linen')!,
    PAINT_COLORS.find(c => c.id === 'driftwood')!,
    PAINT_COLORS.find(c => c.id === 'sage')!,
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Flat-rate announcement ribbon — sits right under the fixed header, always visible */}
      <div className="fixed top-16 left-0 right-0 z-30 bg-cta text-white text-center text-xs sm:text-sm font-medium py-2.5 px-4 tracking-wide">
        Four gallons in one box · one flat price · shipped to your door
      </div>

      {/* Hero — experience-first statement over a styled room */}
      <section className="min-h-[88vh] pt-28 relative overflow-hidden flex items-center">
        {/* Room Background Image with a default designer color on the wall */}
        <div className="absolute inset-0">
          <img
            src="/room-bg.jpg"
            alt="Modern living room painted in Dwell paint"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: heroColor.hex,
              mixBlendMode: 'multiply',
              opacity: 1,
              maskImage: 'url(/room-wall-mask.png)',
              WebkitMaskImage: 'url(/room-wall-mask.png)',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: heroColor.hex,
              mixBlendMode: 'color',
              opacity: 0.3,
              maskImage: 'url(/room-wall-mask.png)',
              WebkitMaskImage: 'url(/room-wall-mask.png)',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — message + process */}
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-text-secondary mb-6">
              Fill a box. We ship it.
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-[1.05] drop-shadow-lg">
              Paint Shopping.<br />
              <span className="font-medium">Reinvented.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
              Pick any four colors, we pack them in a box, and deliver them to your door. One flat price, free shipping—the whole thing takes minutes.
            </p>

            {/* 3-step process */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
              {['Fill your box', 'We pack it', 'Delivered'].map((step, i) => (
                <div key={step} className="flex items-center gap-2 text-white">
                  <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium drop-shadow">{step}</span>
                  {i < 2 && <ChevronRight className="w-4 h-4 text-white/50 hidden sm:block" />}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/colors" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-primary font-medium rounded-full hover:bg-bg-cream transition-colors shadow-lg">
                Browse the Colors
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/design" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/25 transition-colors border border-white/40">
                <Sparkles className="w-4 h-4" />
                See It On Your Wall
              </Link>
            </div>
          </div>

          {/* Right — interactive build-your-box */}
          <div className="relative z-10">
            <BuildYourBox />
          </div>
        </div>
      </section>

      {/* The Flat-Rate Box — how direct shipping works */}
      <section className="py-20 bg-bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent-light text-accent rounded-full text-xs font-medium mb-5">
              Direct to your door
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-text-primary mb-4">
              One box. Any four colors. <span className="font-medium">One flat price.</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Fill a box with any four colors—all one shade or four different ones—and we ship it straight to your door for one flat rate. Four gallons covers about 1,200 sq ft, no store run required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-4">
            {[
              { icon: Palette, step: '01', title: 'Fill your box', text: 'Add any four colors from the 64-color collection—all one shade or a mix of four. It\'s your box.' },
              { icon: Package, step: '02', title: 'We pack it up', text: 'Four sealed one-gallon cans, boxed and ready to ship. Enough to cover about 1,200 sq ft.' },
              { icon: Truck, step: '03', title: 'Flat-rate delivery', text: 'One flat price, shipped free to your front door. No trips, no surprises at checkout.' },
            ].map((s) => (
              <div key={s.step} className="relative bg-bg-cream rounded-2xl p-8 text-center">
                <div className="text-xs font-medium text-accent mb-4">STEP {s.step}</div>
                <div className="w-14 h-14 rounded-full bg-bg-white border border-border flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 text-center">
            <p className="text-text-primary text-lg">
              <span className="font-medium">4 gallons</span> · ~1,200 sq ft · <span className="font-medium">one flat rate, shipped free</span>
            </p>
            <Link href="/colors" className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-medium">
              Pick your color <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
            <h2 className="text-4xl font-light text-text-primary mb-4">Most Loved Colors</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The shades our customers reach for most. Tap any color to see it on a real room and get the details.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bestsellerColors.map((color, index) => (
              <Link
                key={color.id}
                href={`/colors/${color.id}`}
                className={`group block bg-bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow ${index === 0 ? 'ring-2 ring-accent' : ''}`}
              >
                {index === 0 && (
                  <div className="bg-accent text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                    Most Loved
                  </div>
                )}
                <div className="aspect-square rounded-xl mb-6 shadow-sm" style={{ backgroundColor: color.hex }}>
                  <div className="w-full h-full rounded-xl bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
                </div>
                <h3 className="text-lg font-medium text-text-primary mb-1">{color.name}</h3>
                <p className="text-sm text-text-muted mb-4">4 gallons · ~1,200 sq ft</p>
                <span className="inline-flex items-center gap-2 text-accent group-hover:text-accent-dark transition-colors font-medium text-sm">
                  See This Color <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/colors" className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-medium">
              Browse All 64 Colors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Transformations */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Rooms, transformed</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Real spaces our customers made over—color chosen online, delivered, and rolled on in a weekend.
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
            <h2 className="text-4xl font-light text-text-primary mb-4">A better way to buy paint</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              No fluorescent-lit aisle, no thousand confusing chips, no guessing how it'll look. Pick a color, see it on your wall, and have it on your doorstep—the whole thing takes minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Choose with confidence</h3>
              <p className="text-text-secondary text-sm">64 designer colors, each previewed on a real room. You see exactly what you're getting before you buy.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Order in minutes</h3>
              <p className="text-text-secondary text-sm">Tap your color, add the box to your cart, check out. No store trip, no waiting at the paint counter.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Delivered to your door</h3>
              <p className="text-text-secondary text-sm">Four gallons boxed and shipped straight to you. One flat rate, free shipping, no hauling cans home.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Ready to roll</h3>
              <p className="text-text-secondary text-sm">Professional-quality, zero-VOC paint that goes on beautifully and is safe to live with the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Colors Section */}
      <section id="colors" className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-4">
              Find <span className="font-medium">your color</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              64 designer shades, curated so you're not lost in a wall of chips. Tap any one to see it on a room and get the details.
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

          {/* Modern color grid — large tiles, name + family, link to detail */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-12">
            {filteredColors.map((color) => (
              <Link key={color.id} href={`/colors/${color.id}`} className="group">
                <div
                  className="aspect-square rounded-2xl mb-3 ring-1 ring-black/5 shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-sm font-medium text-text-primary truncate group-hover:text-accent transition-colors">{color.name}</p>
                <p className="text-xs text-text-muted">{categoryNames[color.category]}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/colors" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary">
              Browse All Colors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cta text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Find your color in <span className="font-medium">the next five minutes</span>
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Pick a shade, see it on your wall, and have professional-quality paint on its way to your door. That's the whole process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/design" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-text-primary font-medium rounded-full hover:bg-bg-cream transition-colors">
              Design Your Room
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/colors" className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/30 transition-colors border border-white/30">
              Browse Colors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Chat Button */}
      <Link href="/contact" aria-label="Contact us" className="fixed bottom-6 right-6 w-14 h-14 bg-cta text-white rounded-full shadow-lg flex items-center justify-center hover:bg-cta-hover transition-colors z-50">
        <MessageCircle className="w-6 h-6" />
      </Link>

      {/* Color Detail Modal */}
      {modalColor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-light text-text-primary mb-2">
                    {modalColor.name}
                  </h2>
                  <p className="text-text-secondary">
                    {categoryNames[modalColor.category]}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setModalColor(null)
                    setJustAdded(null)
                  }}
                  className="w-8 h-8 rounded-full bg-border flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div 
                    className="aspect-square rounded-xl mb-4"
                    style={{ backgroundColor: modalColor.hex }}
                  />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Hex Code:</span>
                      <span className="text-text-primary font-medium">{modalColor.hex}</span>
                    </div>
                    {modalColor.pantone && (
                      <div className="flex justify-between">
                        <span className="text-text-muted">Pantone:</span>
                        <span className="text-text-primary font-medium">{modalColor.pantone}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-text-muted">Category:</span>
                      <span className="text-text-primary font-medium">
                        {categoryNames[modalColor.category]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Quantity:</span>
                      <span className="text-text-primary font-medium">4 gallons</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-4">Perfect for</h3>
                  <div className="space-y-3 text-sm text-text-secondary mb-6">
                    {modalColor.category === 'whites' && (
                      <>
                        <p>• Bright, airy spaces that feel fresh and clean</p>
                        <p>• Creating a neutral backdrop for colorful decor</p>
                        <p>• Small rooms that need to feel larger</p>
                      </>
                    )}
                    {modalColor.category === 'neutrals' && (
                      <>
                        <p>• Cozy living rooms with a sophisticated feel</p>
                        <p>• Bedrooms that need warmth and comfort</p>
                        <p>• Spaces with lots of natural wood elements</p>
                      </>
                    )}
                    {modalColor.category === 'warm' && (
                      <>
                        <p>• Cozy living rooms with a sophisticated feel</p>
                        <p>• Bedrooms that need warmth and comfort</p>
                        <p>• Spaces with lots of natural wood elements</p>
                      </>
                    )}
                    {modalColor.category === 'blush' && (
                      <>
                        <p>• Nurseries and children's bedrooms</p>
                        <p>• Romantic, feminine spaces</p>
                        <p>• Accent walls in neutral rooms</p>
                      </>
                    )}
                    {(modalColor.category === 'greens' || modalColor.category === 'blues') && (
                      <>
                        <p>• Bathrooms and powder rooms</p>
                        <p>• Bedrooms for a calming atmosphere</p>
                        <p>• Home offices that need focus</p>
                      </>
                    )}
                    {modalColor.category === 'moody' && (
                      <>
                        <p>• Dining rooms for intimate gatherings</p>
                        <p>• Reading nooks and cozy corners</p>
                        <p>• Statement walls in modern spaces</p>
                      </>
                    )}
                  </div>

                  <div className="space-y-3">
                    <button 
                      onClick={() => handleAddToCart(modalColor)}
                      className={`w-full px-6 py-3 rounded-full font-medium btn-primary transition-colors ${
                        justAdded === modalColor.id
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-cta text-white'
                      }`}
                    >
                      {justAdded === modalColor.id ? (
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Added to your box ✓
                        </div>
                      ) : (
                        'Add to Your Box'
                      )}
                    </button>
                    <button 
                      onClick={() => toggleFavorite(modalColor.id)}
                      className={`w-full px-6 py-3 rounded-full font-medium border transition-colors ${
                        favorites.includes(modalColor.id)
                          ? 'bg-accent text-white border-accent'
                          : 'bg-bg-white text-text-primary border-border hover:border-accent'
                      }`}
                    >
                      {favorites.includes(modalColor.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-20 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all">
          {toastMessage}
        </div>
      )}
    </div>
  )
}