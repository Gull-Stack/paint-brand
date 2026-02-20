import { Check, ArrowRight, Sparkles } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function SuppliesPage() {
  const supplies = [
    {
      category: 'Essential Brushes',
      items: [
        { name: 'Premium Angled Brush - 2.5"', price: '$24', description: 'Perfect for cutting in and detail work' },
        { name: 'Flat Wall Brush - 4"', price: '$32', description: 'Smooth finish for walls and large surfaces' },
        { name: 'Detail Brush Set (3-pack)', price: '$28', description: 'Small brushes for trim and corners' }
      ]
    },
    {
      category: 'Professional Rollers',
      items: [
        { name: 'Microfiber Roller Cover - 9"', price: '$18', description: 'Lint-free finish, perfect for premium paint' },
        { name: 'Roller Frame & Extension', price: '$35', description: 'Adjustable handle for walls and ceilings' },
        { name: 'Mini Roller Kit', price: '$22', description: 'Great for doors, cabinets, and tight spaces' }
      ]
    },
    {
      category: 'Prep & Protection',
      items: [
        { name: 'Painter\'s Tape - Professional', price: '$16', description: 'Clean lines, no paint bleed' },
        { name: 'Drop Cloths (Canvas)', price: '$28', description: 'Reusable, heavy-duty floor protection' },
        { name: 'Paint Tray & Liners', price: '$20', description: 'Easy cleanup with disposable liners' }
      ]
    }
  ]

  const bundles = [
    {
      name: 'Complete Starter Kit',
      items: ['2.5" Angled Brush', '4" Wall Brush', '9" Roller Cover', 'Roller Frame', 'Paint Tray', 'Painter\'s Tape'],
      price: '$128',
      savings: '$24 savings',
      popular: true
    },
    {
      name: 'Professional Kit',
      items: ['All Starter Kit items', 'Detail Brush Set', 'Mini Roller Kit', 'Canvas Drop Cloth', 'Extension Handle'],
      price: '$185',
      savings: '$35 savings'
    }
  ]

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Curated Essentials</span>
            </div>
            
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Professional Paint Supplies
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Curated essentials for flawless application. We've selected the best brushes, rollers, 
              and tools to ensure your premium paint looks perfect on your walls.
            </p>
          </div>
        </div>
      </section>

      {/* Bundle Offers */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-text-primary mb-4">Supply Bundles</h2>
            <p className="text-text-secondary">Everything you need, bundled for savings</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bundles.map((bundle, index) => (
              <div key={index} className="bg-bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-light text-text-primary mb-3">{bundle.name}</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-light text-text-primary">{bundle.price}</span>
                  <span className="text-success text-sm font-medium">{bundle.savings}</span>
                </div>
                
                <div className="space-y-2 mb-6">
                  {bundle.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-cta text-white rounded-full font-medium btn-primary">
                  Add Bundle to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Supplies */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Individual Supplies</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Build your own custom kit with our professionally selected tools
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {supplies.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium text-text-primary mb-6 border-b border-border pb-3">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="border-b border-border-light pb-6 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-text-primary text-sm">{item.name}</h4>
                        <span className="text-text-primary font-light">{item.price}</span>
                      </div>
                      <p className="text-text-secondary text-sm mb-3">{item.description}</p>
                      <button className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quality Tools Matter */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-text-primary mb-6">
                Why Quality Tools <span className="italic">Matter</span>
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                You've invested in premium paint - don't let cheap tools ruin the finish. 
                Our curated supplies ensure your Dwell paint goes on smoothly and looks 
                professional for years to come.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-text-primary font-medium">No brush strokes or lint</span>
                    <p className="text-text-secondary text-sm">Premium synthetic bristles leave a perfect finish</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-text-primary font-medium">Even coverage</span>
                    <p className="text-text-secondary text-sm">Professional-grade rollers distribute paint uniformly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-text-primary font-medium">Clean, sharp lines</span>
                    <p className="text-text-secondary text-sm">Quality painter's tape prevents bleed and peeling</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-text-primary font-medium">Long-lasting tools</span>
                    <p className="text-text-secondary text-sm">Invest once, use for multiple projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-light to-accent rounded-2xl p-12 text-center text-white">
              <div className="text-6xl mb-6">🎨</div>
              <h3 className="text-2xl font-light mb-4">Professional Results</h3>
              <p className="text-white/90 leading-relaxed">
                The difference between DIY and professional-looking results often comes down to the tools. 
                Our supplies help you achieve the finish you see in design magazines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One-Click Upsells */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-text-primary mb-4">Complete Your Order</h2>
            <p className="text-text-secondary">Add supplies to your paint bundle for the perfect painting experience</p>
          </div>

          <div className="bg-accent/5 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-medium text-text-primary mb-3">
                  Paint Bundle + Starter Kit
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Get your 4-gallon paint bundle plus all essential supplies. Everything you need for a complete room makeover.
                </p>
                
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-light text-text-primary">$165</span>
                  <span className="text-text-muted line-through">$185</span>
                  <span className="text-success text-sm font-medium">Save $20</span>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <button className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary">
                  Add Complete Kit to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}