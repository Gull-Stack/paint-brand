'use client'

import { useState } from 'react'
import { Mail, Bell, Check } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PAINT_COLORS } from '@/lib/colors'

export default function SwatchesPage() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  const previewColors = PAINT_COLORS.slice(0, 12)

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Bell className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Coming Soon</span>
            </div>
            
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Color Swatches
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Try before you buy with our peel-and-stick color swatches. 
              Test Dwell colors in your space to find the perfect match.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Colors */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-text-primary mb-4">Preview: Swatch Collection</h2>
            <p className="text-text-secondary">Each swatch is 4" x 6" - perfect for testing in different lighting</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {previewColors.map((color) => (
              <div key={color.id} className="group">
                <div 
                  className="aspect-[4/6] rounded-lg border border-border shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-white text-xs font-medium drop-shadow">{color.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-text-muted text-sm">
            + 52 more curated colors available as swatches
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">What to Expect</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              When swatches launch, you'll get the perfect way to test our premium colors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-10 bg-accent rounded-sm"></div>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Peel & Stick</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Removable swatches that stick to your wall without damage. 
                See how colors look in different lighting throughout the day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-accent text-2xl">📦</div>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Sample Packs</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Order individual swatches for $3 each, or get 6-packs for $15 with free shipping on orders of 5+ packs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-accent text-2xl">🎨</div>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">True Colors</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Made with the same premium, zero-VOC paint formula as our full gallons. 
                What you see is exactly what you'll get.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-text-primary mb-4">Swatch Pricing</h2>
            <p className="text-text-secondary">Simple, transparent pricing when swatches launch</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bg-white rounded-xl p-6 text-center">
              <h3 className="font-medium text-text-primary mb-2">Single Swatch</h3>
              <div className="text-2xl font-light text-text-primary mb-3">$3</div>
              <p className="text-text-secondary text-sm">Perfect for testing one specific color</p>
            </div>

            <div className="bg-bg-white rounded-xl p-6 text-center border-2 border-accent">
              <div className="bg-accent text-white text-xs px-2 py-1 rounded-full w-fit mx-auto mb-2">Most Popular</div>
              <h3 className="font-medium text-text-primary mb-2">6-Pack Bundle</h3>
              <div className="text-2xl font-light text-text-primary mb-3">$15</div>
              <p className="text-text-secondary text-sm">Compare colors side by side</p>
            </div>

            <div className="bg-bg-white rounded-xl p-6 text-center">
              <h3 className="font-medium text-text-primary mb-2">Free Shipping</h3>
              <div className="text-2xl font-light text-text-primary mb-3">5+ Packs</div>
              <p className="text-text-secondary text-sm">No shipping costs on larger orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {!isSubscribed ? (
            <>
              <h2 className="text-4xl font-light text-text-primary mb-4">Be the First to Know</h2>
              <p className="text-text-secondary text-lg mb-8">
                Get notified when swatches launch and receive an exclusive early-access discount
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-full focus:outline-none focus:border-accent"
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-3 bg-cta text-white font-medium rounded-full btn-primary whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>

              <p className="text-text-muted text-sm mt-4">
                We'll only email you about swatches - no spam, unsubscribe anytime
              </p>
            </>
          ) : (
            <div className="bg-success/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-light text-text-primary mb-4">You're on the list!</h2>
              <p className="text-text-secondary text-lg mb-6">
                We'll email you as soon as swatches are available, plus you'll get early-access pricing.
              </p>
              <p className="text-success font-medium">
                Expected launch: Spring 2026
              </p>
            </div>
          )}
        </div>
      </section>

      {/* In the Meantime */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-text-primary mb-4">In the Meantime</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Explore our full color collection and use our room visualizer to preview colors
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary">
              Browse All Colors
            </button>
            <button className="px-8 py-4 bg-bg-white border border-border text-text-primary font-medium rounded-full hover:border-accent transition-colors">
              Try Color Quiz
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}