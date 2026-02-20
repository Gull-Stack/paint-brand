'use client'

import { useState } from 'react'
import { ChevronDown, Search, MessageCircle, Truck, Shield, Leaf, Calculator } from 'lucide-react'
import Header from '@/components/Header'

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const faqCategories = [
    {
      title: 'Paint Quality & Formula',
      icon: Shield,
      questions: [
        {
          question: 'How much does premium paint cost?',
          answer: 'Our premium paint bundles cost $125 for 4 gallons, which covers approximately 1,200 square feet. This includes free nationwide shipping and is 30-40% less expensive than comparable premium brands like Sherwin-Williams or Benjamin Moore.'
        },
        {
          question: 'Is your paint really the same quality as Sherwin-Williams and Behr?',
          answer: 'Yes! We use the same high-quality ingredients and manufacturing standards as leading premium brands. The difference is our direct-to-consumer model eliminates retail markups, allowing us to offer the same quality at a better price.'
        },
        {
          question: 'What makes zero-VOC paint better?',
          answer: 'Zero-VOC (Volatile Organic Compounds) paint means no harmful chemicals are released into your home\'s air. This makes it safer for children, pregnant women, and anyone with respiratory sensitivities. It also has no paint odor, so you can sleep in a newly painted room the same night.'
        },
        {
          question: 'What paint finish do you offer?',
          answer: 'We offer premium matte finish, which provides excellent coverage and a sophisticated, non-reflective appearance that hides wall imperfections better than satin or semi-gloss finishes.'
        },
        {
          question: 'How long does your paint last?',
          answer: 'Our paint is formulated for durability and typically lasts 7-10 years in interior applications with normal wear. The zero-VOC formula doesn\'t compromise on longevity or fade resistance.'
        }
      ]
    },
    {
      title: 'Ordering & Shipping',
      icon: Truck,
      questions: [
        {
          question: 'How much paint do I need for my room?',
          answer: 'One gallon typically covers 350-400 square feet. Our 4-gallon bundles cover approximately 1,200 square feet, which is perfect for most standard rooms (12\' x 12\' with 8\' ceilings). Use this formula: (Length + Width) x 2 x Height = Total square footage.'
        },
        {
          question: 'How long does shipping take?',
          answer: 'Free shipping is included on all 4-gallon bundles and takes 3-5 business days via FedEx or UPS. You\'ll receive tracking information once your order ships.'
        },
        {
          question: 'Do you ship to all 50 states?',
          answer: 'Yes! We ship to all 50 states with free shipping on 4-gallon bundles. Additional shipping charges may apply for Hawaii and Alaska on smaller orders.'
        },
        {
          question: 'Can I return paint if I don\'t like the color?',
          answer: 'Yes! We offer a 30-day satisfaction guarantee. If you\'re not completely happy with your paint, return it for a full refund. Opened containers are accepted as long as less than 25% has been used.'
        },
        {
          question: 'How is the paint packaged for shipping?',
          answer: 'Paint is carefully packaged in sturdy boxes with protective padding. We use recyclable materials whenever possible and include detailed application instructions with every order.'
        }
      ]
    },
    {
      title: 'Colors & Customization',
      icon: Calculator,
      questions: [
        {
          question: 'How do I choose the right paint color?',
          answer: 'Start with our color quiz or browse by style (Target Modern, Nordstrom Chic, Crate & Barrel Coastal). Consider your room\'s lighting, existing furniture, and the mood you want to create. Our upcoming swatch program will let you test colors before committing.'
        },
        {
          question: 'Can you match a specific color I have?',
          answer: 'Yes! We offer Pantone color matching for custom colors. Simply provide the Pantone number or send us a physical sample, and we can create a custom match for an additional $25 per gallon.'
        },
        {
          question: 'What\'s the difference between your color categories?',
          answer: 'Whites & Creams are perfect for bright, airy spaces. Warm Neutrals work well in cozy living areas. Blush & Pink are ideal for nurseries and feminine spaces. Sage & Green create calming environments. Coastal Blues work in bathrooms and bedrooms. Warm Tones are great for dining rooms. Moody & Dark colors make dramatic statement walls.'
        },
        {
          question: 'Will the color look the same in my room as online?',
          answer: 'Colors can appear different under various lighting conditions. We recommend viewing our colors in both natural and artificial light. Our upcoming swatch program will help you test colors in your actual space before ordering full gallons.'
        }
      ]
    },
    {
      title: 'Application & Coverage',
      icon: MessageCircle,
      questions: [
        {
          question: 'Do I need primer with your paint?',
          answer: 'Our paint has excellent coverage, but primer is recommended when painting over dark colors, stained surfaces, or new drywall. For most applications over existing paint in similar colors, our paint provides sufficient coverage in two coats.'
        },
        {
          question: 'What supplies do I need to paint my room?',
          answer: 'You\'ll need brushes (2.5" angled for cutting in, 4" for larger areas), rollers (9" with microfiber covers), a paint tray, painter\'s tape, and drop cloths. Our supply bundles include everything you need for flawless application.'
        },
        {
          question: 'How many coats do I need?',
          answer: 'Most rooms require two coats for optimal coverage and color depth. Our premium formula provides excellent coverage, so two coats typically achieve the rich, even finish you see in our photos.'
        },
        {
          question: 'Can I use your paint in bathrooms and kitchens?',
          answer: 'Absolutely! Our zero-VOC formula is perfect for bathrooms and kitchens. The premium quality provides moisture resistance suitable for these higher-humidity areas.'
        }
      ]
    },
    {
      title: 'Health & Safety',
      icon: Leaf,
      questions: [
        {
          question: 'Is zero-VOC paint safe for nurseries?',
          answer: 'Yes! Zero-VOC paint is the safest choice for nurseries and children\'s rooms. It contains no volatile organic compounds that could affect air quality or cause respiratory irritation. You can paint a nursery and have your baby sleep in it the same night.'
        },
        {
          question: 'Is your paint safe for people with allergies?',
          answer: 'Our zero-VOC formula is much safer for people with allergies, asthma, or chemical sensitivities compared to traditional paints. However, we always recommend consulting with your doctor if you have severe sensitivities.'
        },
        {
          question: 'Does zero-VOC paint have any odor?',
          answer: 'Zero-VOC paint has minimal to no odor during application and dries without the typical paint smell. This means better indoor air quality and no need to ventilate rooms extensively during painting.'
        },
        {
          question: 'How do I dispose of leftover paint?',
          answer: 'Check with your local waste management facility for paint disposal guidelines. Many areas have special collection days for paint. Because our paint is zero-VOC, it\'s safer than traditional paints, but should still be disposed of responsibly.'
        }
      ]
    }
  ]

  const toggleFaq = (categoryIndex: number, questionIndex: number) => {
    const faqId = categoryIndex * 100 + questionIndex
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

  // Filter FAQs based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Everything you need to know about Dwell paint, from ordering to application. 
              Can't find what you're looking for? Chat with our color experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-12 pr-4 py-4 bg-bg-white border border-border rounded-2xl text-text-primary focus:outline-none focus:border-accent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-light text-accent mb-2">$125</div>
              <div className="text-text-muted text-sm">4 gallons + free shipping</div>
            </div>
            <div className="bg-bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-light text-accent mb-2">3-5</div>
              <div className="text-text-muted text-sm">Business days shipping</div>
            </div>
            <div className="bg-bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-light text-accent mb-2">30</div>
              <div className="text-text-muted text-sm">Day satisfaction guarantee</div>
            </div>
            <div className="bg-bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-light text-accent mb-2">0</div>
              <div className="text-text-muted text-sm">VOCs for healthy homes</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl font-light text-text-primary">{category.title}</h2>
                <span className="text-text-muted text-sm">({category.questions.length})</span>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqId = categoryIndex * 100 + questionIndex
                  const isOpen = openFaq === faqId

                  return (
                    <div key={questionIndex} className="bg-bg-white rounded-xl border border-border overflow-hidden">
                      <button
                        onClick={() => toggleFaq(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-bg-cream/50 transition-colors"
                      >
                        <h3 className="font-medium text-text-primary pr-4">{faq.question}</h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-text-muted transition-transform flex-shrink-0 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-border-light">
                            <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && searchQuery && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-border rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-text-muted" />
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-2">No results found</h3>
              <p className="text-text-secondary mb-4">Try searching with different keywords</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-accent hover:text-accent-dark transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-text-primary mb-4">
            Still Need Help?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Our color experts are here to help you choose the perfect paint for your space
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Live Chat</h3>
              <p className="text-text-secondary text-sm mb-4">
                Chat with our color experts Monday-Friday, 9am-6pm EST
              </p>
              <button className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                Start Chat →
              </button>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-accent text-xl">📧</div>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Email Support</h3>
              <p className="text-text-secondary text-sm mb-4">
                Send us your questions and we'll respond within 24 hours
              </p>
              <a href="mailto:hello@dwell.com" className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                hello@dwell.com →
              </a>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-accent text-xl">📞</div>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Phone Support</h3>
              <p className="text-text-secondary text-sm mb-4">
                Speak directly with our team for personalized color advice
              </p>
              <a href="tel:1-800-DWELL-01" className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                1-800-DWELL-01 →
              </a>
            </div>
          </div>

          <div className="bg-accent/5 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-text-primary mb-3">
              Color Consultation Available
            </h3>
            <p className="text-text-secondary mb-6">
              Not sure which colors to choose? Schedule a 15-minute consultation with our color experts. 
              They'll help you select the perfect palette for your space and style.
            </p>
            <button className="px-8 py-3 bg-cta text-white font-medium rounded-full btn-primary">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}