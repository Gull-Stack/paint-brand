import { Calendar, Clock, ArrowLeft, ArrowRight, Palette, Home, Target, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'How to Choose Paint Colors for a Crate & Barrel-Style Home on a Budget | Dwell',
  description: 'Create that coveted modern, sophisticated Crate & Barrel look without breaking the bank. Expert color palette guide with budget-friendly premium paint.',
  keywords: 'Crate Barrel style paint, modern home paint colors, budget decorating, sophisticated neutrals, premium paint on budget, interior design paint',
}

export default function CrateBarrelStylePost() {
  const recommendedColors = [
    { id: 'cloud-nine', name: 'Cloud Nine', hex: '#F9F7F4', category: 'whites' },
    { id: 'mushroom', name: 'Mushroom', hex: '#B5A99A', category: 'neutrals' },
    { id: 'eucalyptus', name: 'Eucalyptus', hex: '#A3B899', category: 'greens' },
    { id: 'stone', name: 'Stone', hex: '#8E8478', category: 'neutrals' },
  ]

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Article Header */}
      <article className="pt-32">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Breadcrumb & Back */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/inspiration" className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Inspiration</span>
            </Link>
            <span className="text-sm text-text-muted">•</span>
            <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">Style Guide</span>
          </div>

          {/* Article Meta */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-light text-text-primary mb-4">
              How to Choose Paint Colors for a Crate & Barrel-Style Home on a Budget
            </h1>
            <p className="text-xl text-text-secondary mb-6 leading-relaxed">
              Create that coveted modern, sophisticated look without breaking the bank. We break down the exact color palette and techniques used in Crate & Barrel showrooms.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>February 15, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 minute read</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                <span>Style Guide</span>
              </div>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-accent-light to-accent rounded-2xl mb-12 relative">
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <Home className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-lg font-medium">Crate & Barrel-Inspired Living Room</p>
                <p className="text-sm opacity-90">Modern, sophisticated, attainable</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            
            <p className="lead text-xl text-text-secondary mb-8 leading-relaxed">
              Walk into any Crate & Barrel showroom and you'll immediately notice their signature aesthetic: clean lines, sophisticated neutrals, and that effortlessly curated look that somehow feels both modern and timeless. The good news? You can recreate this exact vibe in your own home with the right paint colors—and without spending a fortune.
            </p>

            <h2 className="text-3xl font-light text-text-primary mt-12 mb-6">The Crate & Barrel Color Philosophy</h2>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Crate & Barrel's design team follows a specific color philosophy that creates their signature sophisticated look. They rely heavily on what designers call "complex neutrals"—colors that appear neutral at first glance but reveal subtle undertones when you look closer.
            </p>

            <div className="bg-bg-white rounded-xl p-6 my-8 border border-border">
              <h3 className="text-lg font-medium text-text-primary mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                The 3-Color Rule
              </h3>
              <p className="text-text-secondary">
                Crate & Barrel rooms typically use exactly 3 paint colors: one dominant neutral (60% of the space), one supporting tone (30%), and one accent color (10%). This creates visual interest without overwhelming the eye.
              </p>
            </div>

            <h2 className="text-3xl font-light text-text-primary mt-12 mb-6">Our Recommended Crate & Barrel-Style Color Palette</h2>
            
            <p className="text-text-secondary leading-relaxed mb-8">
              After studying dozens of Crate & Barrel showrooms and catalogs, we've identified the core colors that appear again and again in their most popular room designs. Here are our top picks from the Dwell collection that perfectly capture this aesthetic:
            </p>

            {/* Color Showcase */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              {recommendedColors.map((color) => (
                <div key={color.id} className="bg-bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-16 h-16 rounded-xl shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <h4 className="font-medium text-text-primary">{color.name}</h4>
                      <p className="text-sm text-text-muted">{color.hex}</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {color.name === 'Cloud Nine' && 'Perfect as your dominant neutral (60%). This warm white has subtle gray undertones that prevent it from feeling stark or cold.'}
                    {color.name === 'Mushroom' && 'Ideal for accent walls or built-ins (30%). This sophisticated greige adds depth without competing with furniture.'}
                    {color.name === 'Eucalyptus' && 'Use sparingly as your accent color (10%). This muted sage green brings natural warmth to the palette.'}
                    {color.name === 'Stone' && 'Perfect for trim and architectural details. This rich neutral grounds the lighter colors in the palette.'}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-light text-text-primary mt-12 mb-6">Room-by-Room Application</h2>
            
            <h3 className="text-2xl font-light text-text-primary mt-8 mb-4">Living Room: The Foundation</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Start with Cloud Nine on your main walls—this creates the perfect backdrop for both dark and light furniture. Use Mushroom on your fireplace wall or TV wall to create a subtle focal point. Add Stone to window trim and built-ins for definition.
            </p>

            <div className="bg-accent/5 rounded-xl p-6 my-8">
              <h4 className="font-medium text-text-primary mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Pro Tip: Test Before You Commit
              </h4>
              <p className="text-text-secondary text-sm">
                Paint large swatches (at least 2x2 feet) on different walls and observe them at various times of day. Crate & Barrel's colors look different in morning vs. evening light, and you want to make sure you love them in all conditions.
              </p>
            </div>

            <h3 className="text-2xl font-light text-text-primary mt-8 mb-4">Kitchen: Clean and Sophisticated</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              For kitchens, use Cloud Nine on walls and pair with Stone on the island for a classic two-tone look. If you have open shelving, consider Eucalyptus on the back wall of the shelving unit for a pop of color that feels intentional, not overwhelming.
            </p>

            <h3 className="text-2xl font-light text-text-primary mt-8 mb-4">Bedroom: Calm and Restful</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Mushroom works beautifully as an all-over bedroom color, creating a cocoon-like feeling that's both sophisticated and restful. Use Cloud Nine for trim and Stone for any built-in wardrobes or reading nooks.
            </p>

            <h2 className="text-3xl font-light text-text-primary mt-12 mb-6">The Budget-Friendly Approach</h2>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Here's where Dwell really shines compared to traditional paint shopping. Instead of buying multiple gallons of different colors at $60+ each, our 4-gallon bundles let you test this entire palette for just $125 per color—less than you'd pay for a single gallon at Sherwin-Williams.
            </p>

            <div className="bg-bg-white rounded-xl p-6 my-8 border border-border">
              <h3 className="text-lg font-medium text-text-primary mb-4">Cost Comparison</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Traditional retail (4 colors, 1 gallon each):</span>
                  <span className="font-semibold text-text-primary">$240-300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Dwell bundles (4 colors, 4 gallons each):</span>
                  <span className="font-semibold text-success">$500 ($125 x 4)</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2">
                  <span className="text-text-secondary font-medium">You get 4x more paint for 2x the cost:</span>
                  <span className="font-bold text-success">50% savings per gallon</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-light text-text-primary mt-12 mb-6">Styling Tips for the Complete Look</h2>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Paint is just the foundation. To really nail the Crate & Barrel aesthetic, consider these styling elements:
            </p>

            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span><strong>Natural textures:</strong> Jute rugs, linen curtains, and wood furniture complement these paint colors perfectly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span><strong>Mixed metals:</strong> Combine brass and black metal accents for that curated, not-too-matchy look</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span><strong>Layered lighting:</strong> Table lamps, floor lamps, and pendant lights create the warm ambiance these colors are designed for</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span><strong>Minimal artwork:</strong> Choose 1-2 statement pieces rather than gallery walls to let the sophisticated paint colors shine</span>
              </li>
            </ul>

            <h2 className="text-3xl font-light text-text-primary mt-12 mb-6">Ready to Start Your Transformation?</h2>
            
            <p className="text-text-secondary leading-relaxed mb-8">
              The best part about recreating the Crate & Barrel look is that it's timeless. These colors won't go out of style next year, which means your paint investment will continue looking fresh and current for years to come. Plus, because they're sophisticated neutrals, you can easily update your decor seasonally without needing to repaint.
            </p>

          </div>

          {/* Recommended Colors CTA */}
          <div className="bg-gradient-to-r from-accent to-accent-dark rounded-2xl p-8 text-white my-12">
            <h3 className="text-2xl font-light mb-4">Shop These Crate & Barrel-Inspired Colors</h3>
            <p className="mb-6 text-white/90">
              Get all four colors delivered to your door. Each 4-gallon bundle covers ~1,200 sq ft and includes free shipping.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {recommendedColors.map((color) => (
                <div key={color.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div 
                    className="w-12 h-12 rounded-full mx-auto mb-3 ring-2 ring-white/30"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <h4 className="font-medium text-sm">{color.name}</h4>
                  <p className="text-xs text-white/80">$125 bundle</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/colors" className="flex-1 px-6 py-3 bg-white text-accent font-medium rounded-full text-center hover:bg-accent hover:text-white transition-colors">
                Shop All Colors
              </Link>
              <Link href="/shop" className="flex-1 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full text-center hover:bg-white hover:text-accent transition-colors">
                View Cart
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-border pt-12 mt-12">
            <h3 className="text-2xl font-light text-text-primary mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/inspiration/top-2026-paint-trends" className="group">
                <article className="bg-bg-white rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-secondary text-white text-xs font-medium px-2 py-1 rounded">Trends</span>
                    <span className="text-xs text-text-muted">6 min read</span>
                  </div>
                  <h4 className="font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">
                    Top 2026 Paint Trends for Women Who Love Nordstrom Vibes
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Discover this year's most sophisticated color trends inspired by high-end fashion.
                  </p>
                </article>
              </Link>
              
              <Link href="/inspiration/affordable-premium-paint" className="group">
                <article className="bg-bg-white rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-secondary text-white text-xs font-medium px-2 py-1 rounded">How-To</span>
                    <span className="text-xs text-text-muted">5 min read</span>
                  </div>
                  <h4 className="font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">
                    Affordable Ways to Refresh Your Space with Premium Paint
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Transform your home with professional-quality paint on any budget.
                  </p>
                </article>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 mt-12 border-t border-border">
            <Link href="/inspiration" className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Inspiration</span>
            </Link>
            <Link href="/inspiration/top-2026-paint-trends" className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors">
              <span>Next Article</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  )
}