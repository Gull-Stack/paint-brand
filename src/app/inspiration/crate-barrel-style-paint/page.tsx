import { Clock, User, Tag, ArrowLeft, ArrowRight, Heart } from 'lucide-react'
import Header from '@/components/Header'
import Link from 'next/link'

export default function CrateBarrelStylePost() {
  const relatedColors = [
    { name: 'Cloud Nine', hex: '#F9F7F4', id: 'cloud-nine' },
    { name: 'Pearl', hex: '#EAE6DF', id: 'pearl' },
    { name: 'Sage Whisper', hex: '#D6E5E3', id: 'sage-whisper' },
    { name: 'Coastal Mist', hex: '#A8C1BC', id: 'coastal-mist' }
  ]

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/inspiration" className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Inspiration
          </Link>

          <article>
            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">Style Guide</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Sarah Chen, Color Expert</span>
                </div>
              </div>
              
              <h1 className="text-5xl font-light text-text-primary mb-6 leading-tight">
                How to Choose Paint Colors for a Crate & Barrel-Style Home on a Budget
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Get the coastal, sophisticated look of Crate & Barrel without breaking the bank. 
                Our color experts share the exact paint combinations that create this coveted aesthetic.
              </p>
            </header>

            <div className="aspect-[16/9] bg-gradient-to-br from-accent-light to-accent rounded-2xl mb-12"></div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed mb-6">
                Crate & Barrel has mastered the art of sophisticated coastal living—clean lines, natural textures, 
                and a color palette that feels both timeless and fresh. The good news? You don't need to spend thousands 
                on furniture to achieve this look. With the right paint colors, you can transform any space into 
                a Crate & Barrel-inspired haven for a fraction of the cost.
              </p>

              <h2 className="text-3xl font-light text-text-primary mb-4 mt-12">The Crate & Barrel Color Philosophy</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                Crate & Barrel's signature style revolves around a carefully curated palette of soft whites, warm grays, 
                and muted coastal tones. These aren't stark, cold colors—they're nuanced shades that create depth and 
                sophistication while maintaining that effortless, lived-in feel that modern women love.
              </p>

              <p className="text-text-secondary leading-relaxed mb-8">
                The key is layering different tones within the same color family. Think warm whites paired with soft grays, 
                or gentle sage greens combined with creamy neutrals. This creates visual interest without overwhelming the space.
              </p>

              <h2 className="text-3xl font-light text-text-primary mb-4">Essential Crate & Barrel Paint Colors</h2>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                {relatedColors.map((color, index) => (
                  <div key={index} className="bg-bg-white rounded-lg p-4 flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg border border-border"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <h4 className="font-medium text-text-primary">{color.name}</h4>
                      <p className="text-text-muted text-sm">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-medium text-text-primary mb-4">1. Cloud Nine - The Perfect White</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                This isn't your basic contractor white. Cloud Nine has subtle warm undertones that prevent that sterile, 
                cold feeling you get with pure white. It's the color you see on Crate & Barrel's signature white furniture 
                and creates that effortless, fresh backdrop that makes everything else pop.
              </p>

              <h3 className="text-xl font-medium text-text-primary mb-4">2. Pearl - Sophisticated Neutral</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Pearl bridges the gap between white and beige, offering warmth without looking yellow or dated. 
                It's perfect for main living areas where you want sophistication but not drama. This is the color 
                that makes Target furniture look like it came from Crate & Barrel.
              </p>

              <h2 className="text-3xl font-light text-text-primary mb-4 mt-12">Room-by-Room Application</h2>

              <h3 className="text-xl font-medium text-text-primary mb-4">Living Room</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Start with Pearl on the main walls and use Cloud Nine on trim and ceilings. This creates subtle 
                contrast without harsh lines. If you want to add interest, consider Sage Whisper on one accent wall—
                it's that perfect muted green you see in Crate & Barrel's seasonal collections.
              </p>

              <h3 className="text-xl font-medium text-text-primary mb-4">Kitchen</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Cloud Nine on cabinets with Pearl on walls creates that clean, coastal kitchen feel. If you have 
                an island, consider Coastal Mist for a subtle pop of color that still feels sophisticated and timeless.
              </p>

              <h3 className="text-xl font-medium text-text-primary mb-4">Bedroom</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                For bedrooms, stick with the warmer end of the palette. Pearl creates a cozy retreat, while Cloud Nine 
                keeps things fresh and clean. These colors photograph beautifully too—perfect for those Instagram-worthy 
                bedroom shots.
              </p>

              <h2 className="text-3xl font-light text-text-primary mb-4">The Budget-Friendly Advantage</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                Here's the secret: Crate & Barrel's $2,000 sofa looks expensive because of the colors surrounding it, 
                not just the furniture itself. When you nail the paint palette, even affordable pieces from Target or 
                IKEA start looking like high-end design.
              </p>

              <p className="text-text-secondary leading-relaxed mb-8">
                Our 4-gallon paint bundles cost just $125—that's less than what you'd spend on a single throw pillow 
                at Crate & Barrel, but the paint will have a bigger impact on your space than any accessory.
              </p>

              <h2 className="text-3xl font-light text-text-primary mb-4">Pro Tips for Success</h2>

              <div className="bg-accent/5 rounded-xl p-6 mb-8">
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-medium">•</span>
                    <span><strong>Test in different lights:</strong> These subtle colors look different in morning vs. evening light</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-medium">•</span>
                    <span><strong>Layer your neutrals:</strong> Use 2-3 colors from the same family for depth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-medium">•</span>
                    <span><strong>Don't forget texture:</strong> Matte finish mimics the sophisticated look of high-end spaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-medium">•</span>
                    <span><strong>Start with whites:</strong> Cloud Nine and Pearl form the foundation—add color accents gradually</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-light text-text-primary mb-4">Ready to Start Your Transformation?</h2>
              
              <p className="text-text-secondary leading-relaxed mb-8">
                The Crate & Barrel look is all about sophisticated simplicity. With the right paint colors as your 
                foundation, you can create a space that feels expensive, curated, and effortlessly chic—all while 
                staying within your budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 mb-12">
              <Link 
                href="/colors" 
                className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary text-center"
              >
                Shop These Colors
              </Link>
              <button className="px-8 py-4 bg-bg-white border border-border text-text-primary font-medium rounded-full hover:border-accent transition-colors">
                Save to Favorites
              </button>
            </div>

            <div className="border-t border-border pt-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-text-muted">Tags:</span>
                {['Crate & Barrel Style', 'Coastal Decor', 'Budget Decorating', 'Neutral Paint Colors', 'Home Styling'].map((tag, index) => (
                  <span key={index} className="bg-border text-text-secondary px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">About the Author</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    <strong>Sarah Chen</strong> is a color expert with over 12 years of experience helping women 
                    create beautiful, budget-friendly homes. She specializes in translating high-end design 
                    aesthetics into achievable color palettes.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Related Articles</h4>
                  <div className="space-y-2 text-sm">
                    <Link href="/inspiration/nordstrom-paint-trends-2026" className="block text-accent hover:text-accent-dark transition-colors">
                      Top 2026 Paint Trends for Nordstrom Vibes →
                    </Link>
                    <Link href="/inspiration/target-modern-style" className="block text-accent hover:text-accent-dark transition-colors">
                      Achieving Target's Modern Aesthetic with Paint →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}