import { Check, Truck, Leaf, Star, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Link from 'next/link'

export default function BundlesPage() {
  const bundles = [
    {
      name: '4-Gallon Bundle',
      contents: '4 gallons of premium paint',
      price: '$125',
      coverage: '~1,200 sq ft',
      savings: 'Free shipping',
      popular: true
    },
    {
      name: 'Starter Kit',
      contents: '4 gallons + brushes/rollers',
      price: '$165',
      coverage: '~1,200 sq ft',
      savings: '15% off supplies'
    }
  ]

  const features = [
    'Zero-VOC, eco-friendly formula',
    'Premium matte finish for elegant look',
    'Pantone color matching available',
    'Free nationwide shipping',
    'Coverage for most standard rooms',
    'Same quality as Sherwin-Williams & Behr'
  ]

  const reviews = [
    {
      name: 'Sarah M.',
      location: 'Target-Inspired Living Room',
      rating: 5,
      text: "The Soft Linen bundle transformed my entire living room. The quality is incredible and the shipping was so fast!"
    },
    {
      name: 'Jessica L.',
      location: 'Modern Bedroom Makeover',
      rating: 5,
      text: "I love that it's zero-VOC - perfect for my daughter's nursery. The Greige color is exactly what I wanted."
    },
    {
      name: 'Amanda K.',
      location: 'Kitchen Refresh',
      rating: 5,
      text: "Much more affordable than what I was quoted at Sherwin-Williams, but the same beautiful finish."
    }
  ]

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-4 py-2 mb-6">
              <Truck className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Free Shipping on All Bundles</span>
            </div>
            
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Premium Paint Bundles
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Everything you need to transform your space. Four gallons of premium, zero-VOC paint 
              that covers approximately 1,200 square feet - perfect for most rooms.
            </p>
          </div>
        </div>
      </section>

      {/* Bundle Comparison Table */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent-light">
                  <tr>
                    <th className="text-left p-6 font-medium text-text-primary">Bundle</th>
                    <th className="text-left p-6 font-medium text-text-primary">Contents</th>
                    <th className="text-left p-6 font-medium text-text-primary">Price</th>
                    <th className="text-left p-6 font-medium text-text-primary">Coverage</th>
                    <th className="text-left p-6 font-medium text-text-primary">Savings</th>
                    <th className="p-6"></th>
                  </tr>
                </thead>
                <tbody>
                  {bundles.map((bundle, index) => (
                    <tr key={index} className={`border-t border-border ${bundle.popular ? 'bg-accent/5' : ''}`}>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-text-primary">{bundle.name}</span>
                          {bundle.popular && (
                            <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">Most Popular</span>
                          )}
                        </div>
                      </td>
                      <td className="p-6 text-text-secondary text-sm">{bundle.contents}</td>
                      <td className="p-6">
                        <span className="text-2xl font-light text-text-primary">{bundle.price}</span>
                      </td>
                      <td className="p-6 text-text-secondary text-sm">{bundle.coverage}</td>
                      <td className="p-6 text-success text-sm font-medium">{bundle.savings}</td>
                      <td className="p-6">
                        <Link href="/colors" className="inline-flex items-center gap-2 px-6 py-2 bg-cta text-white rounded-full text-sm font-medium btn-primary">
                          Choose Colors
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/colors" className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors">
              Choose Your Colors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bundle Features */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-text-primary mb-6">
                Why Our Bundles Are <span className="italic">Perfect</span>
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                We've carefully calculated the perfect amount of paint for most standard rooms. 
                Four gallons typically covers 1,200 square feet - enough for a living room, 
                bedroom, or kitchen with room to spare for touch-ups.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/5 rounded-xl">
                <h3 className="font-medium text-text-primary mb-2">Coverage Calculator</h3>
                <p className="text-text-secondary text-sm mb-3">
                  Standard room (12' x 12' with 8' ceilings) = ~400 sq ft of wall space
                </p>
                <p className="text-accent text-sm font-medium">
                  One 4-gallon bundle covers 3 standard rooms with paint left over!
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent-light to-accent rounded-2xl"></div>
              <div className="absolute inset-6 bg-white/20 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-light mb-2">4</div>
                  <div className="text-sm">Gallons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">What Our Customers Say</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Real women sharing their bundle experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="text-sm">
                  <div className="font-medium text-text-primary">{review.name}</div>
                  <div className="text-text-muted">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">How to Order Your Bundle</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Three simple steps to transform your space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-light">1</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Choose Your Colors</h3>
              <p className="text-text-secondary text-sm">
                Browse our 64 curated colors and select your favorites. Use our room visualizer to see them in your space.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-light">2</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Select Your Bundle</h3>
              <p className="text-text-secondary text-sm">
                Choose between our 4-gallon bundle or starter kit with supplies. Both include free shipping.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-light">3</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Get Painting!</h3>
              <p className="text-text-secondary text-sm">
                Your premium paint arrives in 3-5 business days. Start your transformation and share your results!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/colors" className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary">
              Start with Colors
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}