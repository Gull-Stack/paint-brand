'use client'

import { useState } from 'react'
import { Search, Filter, Heart, ArrowRight, Palette, Eye, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import { PAINT_COLORS, CATEGORIES, type PaintColor } from '@/lib/colors'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function ColorsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedColor, setSelectedColor] = useState<PaintColor | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [justAdded, setJustAdded] = useState<string | null>(null)

  const { addToCart, isInCart } = useCart()

  const filteredColors = PAINT_COLORS.filter(color => {
    const matchesCategory = !activeCategory || color.category === activeCategory
    const matchesSearch = !searchQuery || 
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (color.pantone && color.pantone.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const toggleFavorite = (colorId: string) => {
    setFavorites(prev => 
      prev.includes(colorId) 
        ? prev.filter(id => id !== colorId)
        : [...prev, colorId]
    )
  }

  const handleAddToCart = (color: PaintColor) => {
    addToCart(color)
    setJustAdded(color.id)
    setToastMessage(`${color.name} added to cart!`)
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

  const showToastNotification = () => {
    if (showToast) {
      setTimeout(() => setShowToast(false), 100)
    }
  }

  const categoryNames = {
    whites: 'Whites & Creams',
    neutrals: 'Warm Neutrals',
    blush: 'Blush & Pink',
    greens: 'Sage & Green',
    blues: 'Coastal Blues',
    warm: 'Warm Tones',
    moody: 'Moody & Dark'
  }

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Palette className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">64 Curated Colors</span>
            </div>
            
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Designer-Curated Paint Colors
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Discover 64 carefully selected colors perfect for modern, design-savvy women. 
              Each shade is crafted to complement today's most popular home decor styles.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search colors, hex codes, or Pantone..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-sm focus:outline-none focus:border-accent"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    !activeCategory 
                      ? 'bg-accent text-white' 
                      : 'bg-border text-text-secondary hover:bg-accent hover:text-white'
                  }`}
                >
                  All Colors
                </button>
                
                {Object.entries(categoryNames).map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(activeCategory === key ? null : key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === key
                        ? 'bg-accent text-white'
                        : 'bg-border text-text-secondary hover:bg-accent hover:text-white'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-text-muted">
              Showing {filteredColors.length} of {PAINT_COLORS.length} colors
              {activeCategory && ` in ${categoryNames[activeCategory as keyof typeof categoryNames]}`}
            </div>
          </div>
        </div>
      </section>

      {/* Colors Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredColors.map((color) => (
              <div key={color.id} className="group">
                <div 
                  className="aspect-square rounded-xl cursor-pointer relative overflow-hidden shadow-sm group-hover:shadow-lg transition-all border border-border"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => {
                    setSelectedColor(color)
                    setJustAdded(null)
                  }}
                >
                  {/* Color overlay for light colors */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
                  
                  {/* Favorite button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(color.id)
                    }}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart 
                      className={`w-3 h-3 ${
                        favorites.includes(color.id) 
                          ? 'fill-white text-white' 
                          : 'text-white'
                      }`} 
                    />
                  </button>

                  {/* Preview button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedColor(color)
                      setJustAdded(null)
                    }}
                    className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Eye className="w-3 h-3 text-white" />
                  </button>

                  {/* Color info */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="text-white text-sm font-medium drop-shadow mb-1">
                      {color.name}
                    </h3>
                    <p className="text-white/80 text-xs drop-shadow">
                      {color.hex}
                    </p>
                    {color.pantone && (
                      <p className="text-white/60 text-xs drop-shadow">
                        Pantone {color.pantone}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {filteredColors.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-border rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-text-muted" />
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-2">No colors found</h3>
              <p className="text-text-secondary mb-4">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory(null)
                }}
                className="text-accent hover:text-accent-dark transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Color Detail Modal */}
      {selectedColor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-light text-text-primary mb-2">
                    {selectedColor.name}
                  </h2>
                  <p className="text-text-secondary">
                    {categoryNames[selectedColor.category]}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedColor(null)
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
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Hex Code:</span>
                      <span className="text-text-primary font-medium">{selectedColor.hex}</span>
                    </div>
                    {selectedColor.pantone && (
                      <div className="flex justify-between">
                        <span className="text-text-muted">Pantone:</span>
                        <span className="text-text-primary font-medium">{selectedColor.pantone}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-text-muted">Category:</span>
                      <span className="text-text-primary font-medium">
                        {categoryNames[selectedColor.category]}
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
                    {selectedColor.category === 'whites' && (
                      <>
                        <p>• Bright, airy spaces that feel fresh and clean</p>
                        <p>• Creating a neutral backdrop for colorful decor</p>
                        <p>• Small rooms that need to feel larger</p>
                      </>
                    )}
                    {selectedColor.category === 'neutrals' && (
                      <>
                        <p>• Cozy living rooms with a sophisticated feel</p>
                        <p>• Bedrooms that need warmth and comfort</p>
                        <p>• Spaces with lots of natural wood elements</p>
                      </>
                    )}
                    {selectedColor.category === 'blush' && (
                      <>
                        <p>• Nurseries and children's bedrooms</p>
                        <p>• Romantic, feminine spaces</p>
                        <p>• Accent walls in neutral rooms</p>
                      </>
                    )}
                    {(selectedColor.category === 'greens' || selectedColor.category === 'blues') && (
                      <>
                        <p>• Bathrooms and powder rooms</p>
                        <p>• Bedrooms for a calming atmosphere</p>
                        <p>• Home offices that need focus</p>
                      </>
                    )}
                    {(selectedColor.category === 'warm' || selectedColor.category === 'moody') && (
                      <>
                        <p>• Dining rooms for intimate gatherings</p>
                        <p>• Reading nooks and cozy corners</p>
                        <p>• Statement walls in modern spaces</p>
                      </>
                    )}
                  </div>

                  <div className="space-y-3">
                    <button 
                      onClick={() => handleAddToCart(selectedColor)}
                      className={`w-full px-6 py-3 rounded-full font-medium btn-primary transition-colors ${
                        justAdded === selectedColor.id
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-cta text-white'
                      }`}
                    >
                      {justAdded === selectedColor.id ? (
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Added ✓
                        </div>
                      ) : (
                        'Add Bundle - $125'
                      )}
                    </button>
                    <button 
                      onClick={() => toggleFavorite(selectedColor.id)}
                      className={`w-full px-6 py-3 rounded-full font-medium border transition-colors ${
                        favorites.includes(selectedColor.id)
                          ? 'bg-accent text-white border-accent'
                          : 'bg-bg-white text-text-primary border-border hover:border-accent'
                      }`}
                    >
                      {favorites.includes(selectedColor.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Color Tools */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Color Tools & Features</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Make confident color choices with our professional tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Room Visualizer</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Upload a photo of your space and see how colors look in your actual room with different lighting.
              </p>
              <button className="text-accent text-sm font-medium mt-3 hover:text-accent-dark transition-colors">
                Try Visualizer →
              </button>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Pantone Matching</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Professional color matching ensures your paint perfectly matches your inspiration or existing decor.
              </p>
              <button className="text-accent text-sm font-medium mt-3 hover:text-accent-dark transition-colors">
                Learn More →
              </button>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Save Favorites</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Create your personal color palette and easily compare your favorite shades side by side.
              </p>
              <div className="text-accent text-sm font-medium mt-3">
                {favorites.length} colors saved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Colors by Style */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Popular Color Combinations</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Curated palettes inspired by your favorite home decor brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bg-white rounded-xl p-6">
              <h3 className="text-lg font-medium text-text-primary mb-3">Target Modern</h3>
              <p className="text-text-secondary text-sm mb-4">Clean, affordable luxury with warm neutrals</p>
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#F5F1EA' }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#C5BAA8' }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#A69E91' }}></div>
              </div>
              <button className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                Shop This Look →
              </button>
            </div>

            <div className="bg-bg-white rounded-xl p-6">
              <h3 className="text-lg font-medium text-text-primary mb-3">Nordstrom Chic</h3>
              <p className="text-text-secondary text-sm mb-4">Sophisticated tones for elegant spaces</p>
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#D8C4B6' }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#B4A394' }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#8B7D6B' }}></div>
              </div>
              <button className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                Shop This Look →
              </button>
            </div>

            <div className="bg-bg-white rounded-xl p-6">
              <h3 className="text-lg font-medium text-text-primary mb-3">Crate & Barrel</h3>
              <p className="text-text-secondary text-sm mb-4">Coastal vibes with soft blues and whites</p>
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#F9F7F4' }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#D6E5E3' }}></div>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#A8C1BC' }}></div>
              </div>
              <button className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                Shop This Look →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-text-primary mb-4">Ready to Transform Your Space?</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Choose your favorite colors and get premium paint delivered to your door for just $125
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop/bundles" className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary">
              Build Your Bundle
            </Link>
            <button className="px-8 py-4 bg-bg-white border border-border text-text-primary font-medium rounded-full hover:border-accent transition-colors">
              Take Color Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span className="font-medium">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  )
}