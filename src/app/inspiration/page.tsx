import { Calendar, Clock, User, ArrowRight, Palette, Home, Sparkles, Target } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
export const metadata = {
  title: 'Paint Inspiration & Ideas for Modern Homes | Dwell Blog',
  description: 'Expert paint tips, color trends, and home makeover ideas for design-savvy women. Get inspired with budget-friendly decorating ideas and premium paint techniques.',
  keywords: 'paint ideas, home decorating, paint trends 2026, interior design tips, Crate Barrel style, Nordstrom home decor, budget decorating, modern paint colors',
}

export default function InspirationPage() {
  const featuredPosts = [
    {
      id: 'crate-barrel-style-paint',
      title: 'How to Choose Paint Colors for a Crate & Barrel-Style Home on a Budget',
      excerpt: 'Create that coveted modern, sophisticated look without breaking the bank. We break down the exact color palette and techniques used in Crate & Barrel showrooms.',
      image: '/blog/crate-barrel-style.jpg',
      category: 'Style Guide',
      readTime: '8 min',
      date: '2026-02-15',
      featured: true,
      tags: ['Crate & Barrel', 'Budget Decorating', 'Neutral Colors', 'Modern Style']
    },
    {
      id: 'top-2026-paint-trends',
      title: 'Top 2026 Paint Trends for Women Who Love Nordstrom Vibes',
      excerpt: 'Discover this year\'s most sophisticated color trends inspired by high-end fashion and luxury retail spaces. Perfect for the modern, style-conscious woman.',
      image: '/blog/2026-paint-trends.jpg',
      category: 'Trends',
      readTime: '6 min',
      date: '2026-02-10',
      featured: true,
      tags: ['2026 Trends', 'Nordstrom Style', 'Luxury Colors', 'Fashion-Forward']
    },
    {
      id: 'affordable-premium-paint',
      title: 'Affordable Ways to Refresh Your Space with Premium Paint',
      excerpt: 'Transform your home with professional-quality paint on any budget. Learn insider tricks for getting luxury results without the luxury price tag.',
      image: '/blog/affordable-premium.jpg',
      category: 'How-To',
      readTime: '5 min',
      date: '2026-02-05',
      featured: true,
      tags: ['Budget Friendly', 'Premium Quality', 'DIY Tips', 'Home Makeover']
    }
  ]

  const recentPosts = [
    {
      id: 'low-voc-paint-guide',
      title: 'Why Low-VOC Paint is Essential for Stylish, Health-Conscious Homes',
      excerpt: 'Everything you need to know about zero-VOC paint and why it\'s the smart choice for modern families who prioritize both style and wellness.',
      category: 'Health & Home',
      readTime: '7 min',
      date: '2026-01-30'
    },
    {
      id: 'target-inspired-nursery',
      title: 'Real Women Share: Target-Inspired Nursery Transformation',
      excerpt: 'Sarah transformed her nursery with our soft pink collection, creating a space that\'s both Instagram-worthy and budget-friendly.',
      category: 'User Stories',
      readTime: '4 min',
      date: '2026-01-25'
    },
    {
      id: 'small-space-paint-tricks',
      title: 'Paint Tricks That Make Small Spaces Feel Luxurious',
      excerpt: 'Professional techniques for using color to maximize space and create an expensive look in apartments and small homes.',
      category: 'Small Spaces',
      readTime: '6 min',
      date: '2026-01-20'
    },
    {
      id: 'seasonal-color-refresh',
      title: 'Seasonal Color Refresh: Winter to Spring Transition',
      excerpt: 'How to update your home\'s color palette for spring without a complete repaint. Simple accent techniques that make a big impact.',
      category: 'Seasonal',
      readTime: '5 min',
      date: '2026-01-15'
    }
  ]

  const categories = [
    { name: 'Style Guide', count: 8, icon: Sparkles },
    { name: 'How-To', count: 12, icon: Home },
    { name: 'Trends', count: 6, icon: Palette },
    { name: 'User Stories', count: 9, icon: User },
    { name: 'Budget Tips', count: 7, icon: Target },
  ]

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Palette className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Inspiration & Ideas</span>
            </div>
            
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Paint Inspiration for the Modern Home
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Expert tips, trend forecasts, and real transformations from design-savvy women who choose premium paint on a smart budget.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/inspiration/${post.id}`}
                className={`group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <article className="bg-bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full">
                  <div className={`bg-gradient-to-br from-accent-light to-accent ${index === 0 ? 'aspect-[2/1]' : 'aspect-video'} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className={`font-medium text-text-primary mb-3 group-hover:text-accent transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      {post.title}
                    </h2>
                    <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-text-muted">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Recent Posts */}
      <section className="py-16 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-medium text-text-primary mb-6">Browse by Category</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/inspiration?category=${category.name.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center justify-between p-3 bg-bg-cream rounded-lg hover:bg-accent hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="w-4 h-4" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm opacity-70">({category.count})</span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/5 rounded-xl">
                <h4 className="font-medium text-text-primary mb-3">Get Paint Inspiration</h4>
                <p className="text-sm text-text-secondary mb-4">
                  Join our community of design-loving women for weekly color tips and exclusive previews.
                </p>
                <Link href="/contact" className="text-sm text-accent font-medium hover:text-accent-dark">
                  Subscribe to Newsletter →
                </Link>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-medium text-text-primary mb-6">Recent Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/inspiration/${post.id}`}
                    className="group"
                  >
                    <article className="bg-bg-cream rounded-xl p-6 h-full hover:shadow-md transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-secondary text-white text-xs font-medium px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-text-muted">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-medium text-text-primary mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {post.excerpt}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/inspiration?page=2" className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-medium rounded-full btn-primary">
                  View More Articles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}