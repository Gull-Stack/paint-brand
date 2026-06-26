import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

interface BoxPayload {
  type: string
  label: string
  price: number
  colors: string[]
}
interface AccessoryPayload {
  id: string
  name: string
  price: number
  qty: number
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Checkout is not configured yet' }, { status: 503 })
    }
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-01-28.clover',
    })

    const { boxes, accessories, customerEmail } = (await request.json()) as {
      boxes: BoxPayload[]
      accessories: AccessoryPayload[]
      customerEmail?: string
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    for (const box of boxes ?? []) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: box.label,
            description: box.colors.length ? `Colors: ${box.colors.join(', ')}` : undefined,
            metadata: { type: box.type },
          },
          unit_amount: Math.round(box.price * 100),
        },
        quantity: 1,
      })
    }

    for (const acc of accessories ?? []) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: { name: acc.name, metadata: { type: 'accessory', id: acc.id } },
          unit_amount: Math.round(acc.price * 100),
        },
        quantity: acc.qty,
      })
    }

    if (lineItems.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dwellpaint.vercel.app'
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: customerEmail,
      line_items: lineItems,
      mode: 'payment',
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/shop?canceled=true`,
      shipping_address_collection: { allowed_countries: ['US', 'CA'] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: 'usd' },
            display_name: 'Free Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 5 },
              maximum: { unit: 'business_day', value: 7 },
            },
          },
        },
      ],
      automatic_tax: { enabled: true },
      metadata: { orderType: 'paint-box', source: 'dwellpaint.com' },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Checkout failed'
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
