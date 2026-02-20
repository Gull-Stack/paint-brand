'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { PaintColor } from '@/lib/colors'
import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export interface CartItem {
  color: PaintColor
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (color: PaintColor, quantity?: number) => void
  removeFromCart: (colorId: string) => void
  clearCart: () => void
  cartCount: number
  isInCart: (colorId: string) => boolean
  getCartTotal: () => number
  proceedToCheckout: (customerEmail?: string) => Promise<void>
  isCheckingOut: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('dwell-cart')
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart))
        } catch (error) {
          console.error('Error loading cart from localStorage:', error)
        }
      }
      setIsLoaded(true)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem('dwell-cart', JSON.stringify(cartItems))
    }
  }, [cartItems, isLoaded])

  const addToCart = (color: PaintColor, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.color.id === color.id)
      
      if (existingItem) {
        // Update quantity if item already exists
        return prev.map(item => 
          item.color.id === color.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // Add new item
        return [...prev, { color, quantity }]
      }
    })
  }

  const removeFromCart = (colorId: string) => {
    setCartItems(prev => prev.filter(item => item.color.id !== colorId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const isInCart = (colorId: string) => {
    return cartItems.some(item => item.color.id === colorId)
  }

  const getCartTotal = () => {
    // Each paint bundle is $125, multiply by quantity
    return cartItems.reduce((total, item) => total + (item.quantity * 125), 0)
  }

  const proceedToCheckout = async (customerEmail?: string) => {
    if (cartItems.length === 0) return
    
    setIsCheckingOut(true)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          customerEmail,
        }),
      })

      const { url, error } = await response.json()

      if (error) {
        throw new Error(error)
      }

      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsCheckingOut(false)
    }
  }

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
    isInCart,
    getCartTotal,
    proceedToCheckout,
    isCheckingOut,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}