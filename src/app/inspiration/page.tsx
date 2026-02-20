import { Clock, User, ArrowRight, Sparkles, TrendingUp, Heart } from 'lucide-react'
import Header from '@/components/Header'
import Link from 'next/link'

export default function InspirationPage() {
  const featuredPosts = [
    {
      id: 'crate-barrel-style-paint',
      title: 'How to Choose Paint Colors for a Crate & Barrel-Style Home on a Budget',
      excerpt: 'Get the coastal, sophisticated look of Crate & Barrel without breaking the bank. Our color experts share the exact paint combinations that create this coveted aesthetic.',
      category: 'Style Guide',
      readTime: '8 min read',
      author: 'Sarah Chen, Color Expert',
      date: 'Feb 15, 2026',
      image: '/blog/crate-barrel-style.jpg',
      tags: ['Crate & Barrel', 'Coastal Style', 'Budget Decorating']
    },
    {
      id: 'nordstrom-paint-trends-2026',
      title: 'Top 2026 Paint Trends for Women Who Love Nordstrom Vibes',
      excerpt: 'Discover the sophisticated color palette that captures Nordstrom\'s elegant aesthetic. From warm neutrals to statement moody hues.',
      category: 'Trends',
      readTime: '6 min read',
      author: 'Jessica Rodriguez, Interior Designer',
      date: 'Feb 12, 2026',
      image: '/blog/nordstrom-trends.jpg',
      tags: ['2026 Trends', 'Nordstrom Style', 'Sophisticated Interiors']
    },
    {
      id: 'low-voc-paint-benefits',
      title: 'Why Low-VOC Paint is Essential for Stylish, Health-Conscious Homes',
      excerpt: 'Everything you need to know about zero-VOC paint and why it\'s the smart choice for modern women who prioritize both style and wellness.',
      category: 'Health & Wellness',
      readTime: '7 min read',
      author: 'Dr. Amanda Wilson, Environmental Health',
      date: 'Feb 10, 2026',
      image: '/blog/low-voc-benefits.jpg',
      tags: ['Zero-VOC', 'Healthy Home', 'Premium Paint']
    }
  ]

  const recentPosts = [
    {
      id: 'refresh-space-premium-paint',
      title: 'Affordable Ways to Refresh Your Space with Premium Paint',
      excerpt: 'Transform any room without a full renovation. These budget-friendly painting projects deliver maximum impact.',
      category: 'DIY Tips',
      readTime: '5 min read',
      date: 'Feb 8, 2026',
      image: '/blog/refresh-space.jpg'
    },
    {
      id: 'real-women-dwell-transformations',
      title: 'Real Women Share Their Dwell Transformations',
      excerpt: 'Before and after stories from customers who completely transformed their spaces with our curated colors.',
      category: 'Customer Stories',
      readTime: '10 min read',
      date: 'Feb 5, 2026',
      image: '/blog/real-transformations.jpg'
    },
    {
      id: 'small-room-paint-tricks',
      title: 'Paint Tricks That Make Small Rooms Feel Twice as Big',
      excerpt: 'Professional secrets for using color to create the illusion of space in compact homes.',
      category: 'Small Spaces',
      readTime: '6 min read',
      date: 'Feb 3, 2026',
      image: '/blog/small-room-tricks.jpg'
    },
    {
      id: 'choosing-paint-finish',
      title: 'Matte vs. Satin vs. Eggshell: Which Paint Finish is Right for You?',
      excerpt: 'A complete guide to paint finishes and how to choose the perfect one for each room in your home.',
      category: 'Paint Basics',
      readTime: '8 min read',
      date: 'Jan 30, 2026',
      image: '/blog/paint-finishes.jpg'
    }
  ]

  const categories = [
    { name: 'Style Guides', count: 12, icon: '🏡' },
    { name: 'Color Trends', count: 8, icon: '🎨' },
    { name: 'DIY Tips', count: 15, icon: '🛠️' },
    { name: 'Health & Wellness', count: 6, icon: '🌿' },
    { name: 'Customer Stories', count: 9, icon: '💕' },
    { name: 'Before & After', count: 11, icon: '✨' }
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
              <span className="text-sm font-medium text-accent">Design Inspiration</span>
            </div>
            
            <h1 className="text-5xl font-light text-text-primary mb-6">
              Color Inspiration & Style Guides
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Expert advice, trending colors, and real home transformations from women 
              who love creating beautiful spaces on a smart budget.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-accent-light to-accent"></div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1 w-fit mb-4">
                  <TrendingUp className="w-3 h-3 text-accent" />
                  <span className="text-xs font-medium text-accent">FEATURED</span>
                </div>
                
                <h2 className="text-3xl font-light text-text-primary mb-4 leading-tight">
                  {featuredPosts[0].title}
                </h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPosts[0].readTime}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/inspiration/${featuredPosts[0].id}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-medium"
                >
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-light text-text-primary mb-8 text-center">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-bg-white rounded-xl p-4 text-center hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="text-sm font-medium text-text-primary mb-1 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-text-muted">{category.count} articles</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-text-primary mb-4">Latest Articles</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Fresh ideas, practical tips, and inspiring transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...featuredPosts.slice(1), ...recentPosts.slice(0, 4)].map((post, index) => (
              <article key={post.id} className="bg-bg-cream rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="aspect-[4/3] bg-gradient-to-br from-border to-border-light"></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-medium text-text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/inspiration/${post.id}`}
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-accent-dark transition-colors"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-bg-white rounded-2xl p-8 lg:p-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            
            <h2 className="text-3xl font-light text-text-primary mb-4">
              Get Weekly Color Inspiration
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Join 15,000+ design-loving women who get our weekly newsletter with fresh color ideas, 
              style tips, and exclusive previews of new collections.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-full focus:outline-none focus:border-accent"
                required
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-cta text-white font-medium rounded-full btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-text-muted text-sm">
              No spam, unsubscribe anytime. See our <Link href="/privacy" className="text-accent">privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-light text-text-primary mb-8 text-center">Popular Topics</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Crate & Barrel Style', 'Target Home Decor', 'Nordstrom Vibes', 'Small Space Design',
              'Zero-VOC Paint', 'Budget Decorating', '2026 Color Trends', 'Before & After',
              'DIY Paint Projects', 'Healthy Home', 'Premium Paint Tips', 'Color Psychology',
              'Modern Neutrals', 'Coastal Style', 'Farmhouse Colors', 'Minimalist Design'
            ].map((tag, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-border text-text-secondary rounded-full text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Color of the Month */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bg-white rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1 w-fit mb-4">
                  <Sparkles className="w-3 h-3 text-accent" />
                  <span className="text-xs font-medium text-accent">COLOR OF THE MONTH</span>
                </div>
                
                <h2 className="text-3xl font-light text-text-primary mb-4">
                  Soft Linen
                </h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Our bestselling warm white creates the perfect backdrop for any style. 
                  See how real customers are using this versatile shade to transform their spaces.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/colors"
                    className="px-6 py-3 bg-cta text-white rounded-full font-medium btn-primary text-center"
                  >
                    Shop Soft Linen
                  </Link>
                  <Link 
                    href="/inspiration/soft-linen-inspiration"
                    className="px-6 py-3 bg-bg-cream text-text-primary rounded-full font-medium hover:bg-border transition-colors text-center"
                  >
                    See Inspiration
                  </Link>
                </div>
              </div>
              
              <div className="aspect-[4/3] lg:aspect-auto bg-[#F5F1EA] flex items-center justify-center">
                <div className="text-center text-text-primary">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 shadow-lg"></div>
                  <h3 className="text-xl font-medium">Soft Linen</h3>
                  <p className="text-text-muted">#F5F1EA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}