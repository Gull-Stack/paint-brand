import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import Header from '@/components/Header'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light text-text-primary mb-6">Get in Touch</h1>
            <p className="text-xl text-text-secondary mb-12 leading-relaxed">
              Have questions about colors, orders, or need help choosing the perfect paint for your space? 
              Our color experts are here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light text-text-primary mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-2">Live Chat</h3>
                    <p className="text-text-secondary text-sm mb-2">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </p>
                    <button className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                      Start chat now →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-2">Email</h3>
                    <p className="text-text-secondary text-sm mb-2">
                      We typically respond within 24 hours
                    </p>
                    <a href="mailto:hello@dwell.com" className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                      hello@dwell.com →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-2">Phone</h3>
                    <p className="text-text-secondary text-sm mb-2">
                      Monday - Friday: 9:00 AM - 5:00 PM EST
                    </p>
                    <a href="tel:1-800-DWELL-01" className="text-accent text-sm font-medium hover:text-accent-dark transition-colors">
                      1-800-DWELL-01 →
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-accent/5 rounded-xl">
                <h3 className="font-medium text-text-primary mb-3">Free Color Consultation</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Not sure which colors to choose? Schedule a 15-minute call with our color experts. 
                  They'll help you select the perfect palette for your space and style.
                </p>
                <button className="px-6 py-3 bg-cta text-white font-medium rounded-full btn-primary">
                  Schedule Consultation
                </button>
              </div>
            </div>

            <div className="bg-bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-light text-text-primary mb-6">Send us a message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent">
                    <option>Color consultation</option>
                    <option>Order question</option>
                    <option>Shipping inquiry</option>
                    <option>Product information</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-accent resize-none"
                    placeholder="Tell us about your project and how we can help..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-cta text-white font-medium rounded-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}