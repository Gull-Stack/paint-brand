'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Check, Truck, Palette, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      // In a real app, you'd fetch order details from your backend
      // For now, we'll show a generic success message
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <>
        <Header />
        <div className="pt-32 flex items-center justify-center min-h-screen bg-bg-cream">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-text-muted">Processing your order...</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <section className="pt-32 pb-20 min-h-screen bg-bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-white" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-light text-text-primary mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Thank you for your paint bundle order. We're preparing your premium colors for shipment.
          </p>

          {/* Order Info */}
          <div className="bg-bg-white rounded-3xl p-8 mb-8 border border-border">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-text-primary mb-1">Free Shipping</h3>
                <p className="text-sm text-text-muted">5-7 business days</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-text-primary mb-1">Pantone Matched</h3>
                <p className="text-sm text-text-muted">Color guaranteed</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-text-primary mb-1">Zero-VOC</h3>
                <p className="text-sm text-text-muted">Safe for your family</p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="text-left bg-bg-white rounded-3xl p-8 mb-8 border border-border">
            <h2 className="text-2xl font-light text-text-primary mb-6">What happens next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Order Confirmation</h3>
                  <p className="text-text-muted text-sm">You'll receive an email confirmation within a few minutes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Color Mixing</h3>
                  <p className="text-text-muted text-sm">Our team will mix your colors using Pantone-matched formulas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Shipping</h3>
                  <p className="text-text-muted text-sm">Your paint will be carefully packaged and shipped within 2-3 business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-medium">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Transform Your Space</h3>
                  <p className="text-text-muted text-sm">Enjoy your beautifully painted room!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/colors"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-primary font-medium rounded-full border border-border hover:border-accent transition-colors"
            >
              Shop More Colors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/inspiration"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition-colors"
            >
              Get Inspired
              <Palette className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-bg-cream">
      <Suspense fallback={
        <div className="min-h-screen bg-bg-cream">
          <Header />
          <div className="pt-32 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
              <p className="text-text-muted">Loading...</p>
            </div>
          </div>
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </div>
  )
}