'use client'

import { useState } from 'react'
import { Star, Filter, Heart, ArrowRight, Camera, MapPin } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  
  const transformations = [
    {
      id: 'sarah-living-room',
      customer: 'Sarah M.',
      location: 'Denver, CO',
      room: 'Living Room',
      style: 'Target Modern',
      colors: ['Soft Linen', 'Greige'],
      rating: 5,
      story: "I was inspired by Target's home collection and wanted that same clean, affordable luxury feel. Soft Linen was perfect for the walls with Greige accents.",
      beforeImage: '/gallery/sarah-before.jpg',
      afterImage: '/gallery/sarah-after.jpg',
      tags: ['living-room', 'target-style', 'neutrals']
    },
    {
      id: 'jessica-nursery',
      customer: 'Jessica L.',
      location: 'Austin, TX',
      room: 'Nursery',
      style: 'Soft & Sweet',
      colors: ['Cloud Nine', 'Whisper Pink'],
      rating: 5,
      story: "Zero-VOC paint was essential for my daughter's nursery. The soft pink accent wall is exactly what I envisioned - feminine but not overwhelming.",
      beforeImage: '/gallery/jessica-before.jpg',
      afterImage: '/gallery/jessica-after.jpg',
      tags: ['nursery', 'pink', 'zero-voc']
    },
    {
      id: 'amanda-kitchen',
      customer: 'Amanda K.',
      location: 'Seattle, WA',
      room: 'Kitchen',
      style: 'Coastal Chic',
      colors: ['Pearl', 'Sage Whisper'],
      rating: 5,
      story: "I wanted a Crate & Barrel coastal vibe without the coastal price tag. The sage green island with pearl cabinets is my dream kitchen now.",
      beforeImage: '/gallery/amanda-before.jpg',
      afterImage: '/gallery/amanda-after.jpg',
      tags: ['kitchen', 'coastal', 'green']
    },
    {
      id: 'maria-bedroom',
      customer: 'Maria R.',
      location: 'Phoenix, AZ',
      room: 'Master Bedroom',
      style: 'Nordstrom Chic',
      colors: ['Latte', 'Mushroom'],
      rating: 5,
      story: "I love the sophisticated neutrals you see in Nordstrom stores. These warm tones create such a cozy, expensive-looking retreat.",
      beforeImage: '/gallery/maria-before.jpg',
      afterImage: '/gallery/maria-after.jpg',
      tags: ['bedroom', 'nordstrom-style', 'neutrals']
    },
    {
      id: 'lauren-bathroom',
      customer: 'Lauren H.',
      location: 'Miami, FL',
      room: 'Powder Room',
      style: 'Moody Glam',
      colors: ['Navy Depth', 'Cloud Nine'],
      rating: 5,
      story: "I wanted to make a statement in our small powder room. The navy walls with white trim feel so luxe and unexpected.",
      beforeImage: '/gallery/lauren-before.jpg',
      afterImage: '/gallery/lauren-after.jpg',
      tags: ['bathroom', 'moody', 'statement-wall']
    },
    {
      id: 'rachel-office',
      customer: 'Rachel T.',
      location: 'Chicago, IL',
      room: 'Home Office',
      style: 'Modern Focus',
      colors: ['Driftwood', 'Pearl'],
      rating: 5,
      story: "Working from home needed a space that felt both professional and welcoming. The warm gray is perfect for video calls but still cozy.",
      beforeImage: '/gallery/rachel-before.jpg',
      afterImage: '/gallery/rachel-after.jpg',
      tags: ['office', 'gray', 'work-from-home']
    }
  ]

  const filterOptions = [
    { key: null, label: 'All Rooms', count: transformations.length },
    { key: 'living-room', label: 'Living Rooms', count: 8 },
    { key: 'bedroom', label: 'Bedrooms', count: 12 },
    { key: 'kitchen', label: 'Kitchens', count: 6 },
    { key: 'bathroom', label: 'Bathrooms', count: 4 },
    { key: 'nursery', label: 'Nurseries', count: 5 },
    { key: 'office', label: 'Home Offices', count: 3 }
  ]

  const styleCategories = [
    { name: 'Target Modern', description: 'Clean, affordable luxury', count: 15 },
    { name: 'Nordstrom Chic', description: 'Sophisticated elegance', count: 12 },
    { name: 'Crate & Barrel Coastal', description: 'Relaxed, seaside vibes', count: 10 },
    { name: 'Cozy Neutrals', description: 'Warm, inviting tones', count: 18 }
  ]

  const filteredTransformations = transformations.filter(item => {
    if (!activeFilter) return true
    return item.tags.includes(activeFilter)
  })

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Camera className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Real Transformations</span>
            </div>
            
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Customer Transformations
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Real women, real homes, real results. See how Dwell paint has transformed spaces 
              from coast to coast, creating the stylish homes our customers love.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-text-muted" />
              <span className="text-sm font-medium text-text-primary">Filter by Room</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.key
                      ? 'bg-accent text-white'
                      : 'bg-border text-text-secondary hover:bg-accent hover:text-white'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTransformations.map((transformation) => (
              <div key={transformation.id} className="bg-bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                {/* Before/After Images */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-border to-border-light">
                  {/* Placeholder for before/after slider */}
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="bg-gradient-to-br from-text-muted/20 to-text-muted/10 flex items-center justify-center">
                      <span className="text-text-muted text-sm font-medium">BEFORE</span>
                    </div>
                    <div className="bg-gradient-to-br from-accent-light to-accent flex items-center justify-center">
                      <span className="text-white text-sm font-medium">AFTER</span>
                    </div>
                  </div>
                  
                  {/* Overlay info */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-text-primary">
                    {transformation.room}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-text-primary">{transformation.customer}</h3>
                      <div className="flex items-center gap-1 text-xs text-text-muted">
                        <MapPin className="w-3 h-3" />
                        <span>{transformation.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: transformation.rating }, (_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    "{transformation.story}"
                  </p>

                  <div className="flex items-center justify-between text-xs text-text-muted mb-4">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                      {transformation.style}
                    </span>
                    <span>Colors: {transformation.colors.join(', ')}</span>
                  </div>

                  <button className="w-full py-2 bg-accent/5 text-accent rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-colors">
                    View Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredTransformations.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-border rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-text-muted" />
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-2">No transformations found</h3>
              <p className="text-text-secondary mb-4">Try a different filter to see more results</p>
              <button
                onClick={() => setActiveFilter(null)}
                className="text-accent hover:text-accent-dark transition-colors"
              >
                Show all transformations
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Style Categories */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Popular Styles</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Discover the looks our customers love most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styleCategories.map((style, index) => (
              <div key={index} className="bg-bg-cream rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium text-text-primary mb-2">{style.name}</h3>
                <p className="text-text-secondary text-sm mb-3">{style.description}</p>
                <div className="text-accent text-sm font-medium mb-4">{style.count} transformations</div>
                <button className="text-accent text-xs hover:text-accent-dark transition-colors">
                  View Style Guide →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Own */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-bg-white rounded-2xl p-8 lg:p-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-accent" />
            </div>
            
            <h2 className="text-3xl font-light text-text-primary mb-4">
              Share Your Transformation
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              We'd love to feature your Dwell transformation! Submit your before and after photos 
              for a chance to be featured in our gallery and earn a $50 credit toward your next order.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary">
                Submit Photos
              </button>
              <button className="px-8 py-4 bg-bg-cream border border-border text-text-primary font-medium rounded-full hover:border-accent transition-colors">
                Photo Guidelines
              </button>
            </div>
            
            <p className="text-text-muted text-sm">
              By submitting, you agree to let us feature your photos on our website and social media
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-text-primary mb-12">
            Join Thousands of Happy Customers
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-light text-accent mb-2">25K+</div>
              <div className="text-text-muted text-sm">Rooms Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-light text-accent mb-2">15K+</div>
              <div className="text-text-muted text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-light text-accent mb-2">4.9</div>
              <div className="text-text-muted text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-light text-accent mb-2">98%</div>
              <div className="text-text-muted text-sm">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-text-primary mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Browse our curated colors and start planning your dream space today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/colors" 
              className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary"
            >
              Browse Colors
            </Link>
            <Link 
              href="/inspiration" 
              className="px-8 py-4 bg-bg-white border border-border text-text-primary font-medium rounded-full hover:border-accent transition-colors"
            >
              Get Inspired
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}