import { Heart, Shield, Leaf, Users, Award, Truck, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Designed for Women',
      description: 'Every color in our collection is curated specifically for design-savvy women who value both style and smart spending.'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Same high-quality formula as leading brands like Sherwin-Williams and Behr, but at a price that makes sense.'
    },
    {
      icon: Leaf,
      title: 'Health Conscious',
      description: 'Zero-VOC formula means beautiful colors without compromising your family\'s health or indoor air quality.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by women, for women. We listen to our community and curate colors based on real feedback and trends.'
    }
  ]

  const stats = [
    { number: '64', label: 'Curated Colors' },
    { number: '15K+', label: 'Happy Customers' },
    { number: '25K+', label: 'Rooms Transformed' },
    { number: '4.9', label: 'Average Rating' }
  ]

  const teamMembers = [
    {
      name: 'Sarah Chen',
      title: 'Founder & Color Expert',
      bio: 'Former Sherwin-Williams color consultant with 12 years of experience helping women find their perfect palette.',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Jessica Rodriguez',
      title: 'Interior Designer',
      bio: 'Certified interior designer specializing in affordable luxury and modern family homes.',
      image: '/team/jessica-rodriguez.jpg'
    },
    {
      name: 'Amanda Wilson',
      title: 'Product Development',
      bio: 'Chemical engineer ensuring every batch meets our premium standards while staying eco-friendly.',
      image: '/team/amanda-wilson.jpg'
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
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Story</span>
            </div>
            
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Paint for the Modern Woman
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Founded by women, for women who want premium results without the premium price. 
              We believe every woman deserves a beautifully painted home that reflects her style and values.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-text-primary mb-6">
                Why We Started Dwell
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  It started with a simple frustration: why was premium paint so expensive and complicated? 
                  As working women who love beautiful homes, we were tired of choosing between quality and affordability.
                </p>
                <p>
                  We spent two years working with manufacturers to create the same high-quality, 
                  zero-VOC paint as the big brands, but with a direct-to-consumer model that cuts out 
                  the markup. No middlemen, no fancy showrooms - just premium paint at a fair price.
                </p>
                <p>
                  Every color in our collection is hand-selected by our team of women who understand 
                  what it means to create a home that's both stylish and smart. We curate colors that 
                  work beautifully with the brands and styles modern women love - from Target's 
                  accessible chic to Nordstrom's sophisticated elegance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-accent-light to-accent rounded-xl"></div>
              <div className="aspect-square bg-gradient-to-br from-success/20 to-success/10 rounded-xl mt-8"></div>
              <div className="aspect-square bg-gradient-to-br from-border to-border-light rounded-xl -mt-8"></div>
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">What We Stand For</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-text-primary mb-3">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Growing Together</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The numbers that show the impact we're making in women's homes
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-bg-white rounded-xl p-8">
                <div className="text-4xl font-light text-accent mb-2">{stat.number}</div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Meet Our Team</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              The women behind Dwell who are passionate about color and design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square bg-gradient-to-br from-accent-light to-accent rounded-xl mb-6"></div>
                <h3 className="text-xl font-medium text-text-primary mb-2">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{member.title}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-text-primary mb-6">
                Our Quality Promise
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-2">Same Premium Formula</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      We use the exact same high-quality ingredients as brands costing 40% more. 
                      No compromises on coverage, durability, or finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                    <Leaf className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-2">Zero-VOC Certified</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Every batch is tested to ensure zero volatile organic compounds. 
                      Safe for nurseries, bedrooms, and every room in your home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-2">Satisfaction Guarantee</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Love your paint or return it within 30 days for a full refund. 
                      We're that confident in our quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                    <Truck className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-2">Direct to Your Door</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Free shipping on all 4-gallon bundles. Your paint arrives in 3-5 business days, 
                      ready to transform your space.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-light to-accent rounded-2xl p-12 text-center text-white">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-light mb-4">Premium Quality Guarantee</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                We stand behind every gallon with our 30-day satisfaction guarantee. 
                If you're not completely happy with your Dwell paint, we'll make it right.
              </p>
              <div className="text-3xl font-light">4.9/5</div>
              <div className="text-white/80 text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Committed to Sustainability</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Beautiful homes shouldn't come at the expense of our planet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Zero-VOC Formula</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our paint contains zero volatile organic compounds, making it safe for your family 
                and better for indoor air quality.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-success text-2xl">♻️</div>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Recyclable Packaging</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                All our paint containers and shipping materials are recyclable or made from 
                recycled content.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-success text-2xl">🌱</div>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-3">Carbon Neutral Shipping</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We offset 100% of shipping emissions through verified carbon offset programs 
                focused on reforestation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-text-primary mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of women who have discovered the perfect combination of premium quality, 
            smart pricing, and colors that truly reflect their style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/colors" 
              className="px-8 py-4 bg-cta text-white font-medium rounded-full btn-primary"
            >
              Browse Our Colors
            </Link>
            <Link 
              href="/inspiration" 
              className="px-8 py-4 bg-bg-white border border-border text-text-primary font-medium rounded-full hover:border-accent transition-colors"
            >
              Get Inspired
            </Link>
          </div>

          <p className="text-text-muted text-sm">
            30-day satisfaction guarantee • Free shipping on bundles • Zero-VOC formula
          </p>
        </div>
      </section>
    </div>
  )
}