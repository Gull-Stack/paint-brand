'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { PaintColor } from '@/lib/colors'

// ---- Product model ---------------------------------------------------------
// The cart holds BOXES (each box = a set of cans/pails you fill with any colors)
// plus optional ACCESSORIES. Pricing is placeholder pending the client's numbers.

export type BoxType = 'interior' | 'exterior' | 'pail'

export const BOX_TYPES: Record<BoxType, {
  label: string
  slots: number
  size: string
  price: number
  blurb: string
}> = {
  interior: { label: 'Interior Box', slots: 4, size: '4 × 1 gal', price: 100, blurb: 'Four one-gallon cans, any colors. Covers ~1,200 sq ft.' },
  exterior: { label: 'Exterior Box', slots: 4, size: '4 × 1 gal', price: 120, blurb: 'Four one-gallon cans of exterior paint, any colors.' },
  pail: { label: '5-Gallon Pail', slots: 1, size: '1 × 5 gal', price: 160, blurb: 'A single five-gallon pail. Best for big exterior jobs.' },
}

export const ACCESSORIES: { id: string; name: string; price: number; blurb: string }[] = [
  { id: 'brush-set', name: 'Premium Angled Brush Set', price: 24, blurb: '2.5" angled sash + trim brush' },
  { id: 'roller-kit', name: 'Microfiber Roller + Frame', price: 18, blurb: '9" cover, frame & extension' },
  { id: 'tape', name: "Painter's Tape (3-pack)", price: 12, blurb: 'Clean edges, no bleed' },
  { id: 'drop-cloth', name: 'Canvas Drop Cloth', price: 20, blurb: '9 × 12 ft, reusable' },
  { id: 'tray', name: 'Paint Tray Kit', price: 15, blurb: 'Tray + 3 liners' },
]

export interface Box {
  id: string
  type: BoxType
  colors: PaintColor[]
}

export interface AccessoryLine {
  id: string
  name: string
  price: number
  qty: number
}

interface CartContextType {
  boxes: Box[]
  accessories: AccessoryLine[]
  // draft box (being built on /shop or via color pages)
  draftType: BoxType
  draftColors: PaintColor[]
  setDraftType: (t: BoxType) => void
  addDraftColor: (c: PaintColor) => void
  removeDraftColor: (i: number) => void
  clearDraft: () => void
  commitDraft: () => void
  // committed boxes
  addBox: (type: BoxType, colors: PaintColor[]) => void
  removeBox: (id: string) => void
  // accessories
  setAccessoryQty: (id: string, qty: number) => void
  // misc
  clearCart: () => void
  cartCount: number
  boxesSubtotal: () => number
  accessoriesSubtotal: () => number
  getCartTotal: () => number
  proceedToCheckout: (customerEmail?: string) => Promise<void>
  isCheckingOut: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

let idCounter = 0
const newId = () => `b${Date.now()}_${idCounter++}`

export function CartProvider({ children }: { children: ReactNode }) {
  const [boxes, setBoxes] = useState<Box[]>([])
  const [accessories, setAccessories] = useState<AccessoryLine[]>([])
  const [draftType, setDraftType] = useState<BoxType>('interior')
  const [draftColors, setDraftColors] = useState<PaintColor[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const saved = localStorage.getItem('dwell-cart-v2')
      if (saved) {
        const parsed = JSON.parse(saved)
        setBoxes(parsed.boxes ?? [])
        setAccessories(parsed.accessories ?? [])
      }
    } catch (e) {
      console.error('cart load error', e)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem('dwell-cart-v2', JSON.stringify({ boxes, accessories }))
    }
  }, [boxes, accessories, isLoaded])

  const setDraftTypeSafe = (t: BoxType) => {
    setDraftType(t)
    setDraftColors((prev) => prev.slice(0, BOX_TYPES[t].slots))
  }

  const addDraftColor = (c: PaintColor) =>
    setDraftColors((prev) => (prev.length >= BOX_TYPES[draftType].slots ? prev : [...prev, c]))

  const removeDraftColor = (i: number) =>
    setDraftColors((prev) => prev.filter((_, idx) => idx !== i))

  const clearDraft = () => setDraftColors([])

  const addBox = (type: BoxType, colors: PaintColor[]) =>
    setBoxes((prev) => [...prev, { id: newId(), type, colors }])

  const commitDraft = () => {
    if (draftColors.length === 0) return
    addBox(draftType, draftColors)
    setDraftColors([])
  }

  const removeBox = (id: string) => setBoxes((prev) => prev.filter((b) => b.id !== id))

  const setAccessoryQty = (id: string, qty: number) => {
    const def = ACCESSORIES.find((a) => a.id === id)
    if (!def) return
    setAccessories((prev) => {
      const existing = prev.find((a) => a.id === id)
      if (qty <= 0) return prev.filter((a) => a.id !== id)
      if (existing) return prev.map((a) => (a.id === id ? { ...a, qty } : a))
      return [...prev, { id, name: def.name, price: def.price, qty }]
    })
  }

  const clearCart = () => {
    setBoxes([])
    setAccessories([])
    setDraftColors([])
  }

  const cartCount = boxes.length + accessories.reduce((t, a) => t + a.qty, 0)
  const boxesSubtotal = () => boxes.reduce((t, b) => t + BOX_TYPES[b.type].price, 0)
  const accessoriesSubtotal = () => accessories.reduce((t, a) => t + a.price * a.qty, 0)
  const getCartTotal = () => boxesSubtotal() + accessoriesSubtotal()

  const proceedToCheckout = async (customerEmail?: string) => {
    if (boxes.length === 0 && accessories.length === 0) return
    setIsCheckingOut(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          boxes: boxes.map((b) => ({
            type: b.type,
            label: BOX_TYPES[b.type].label,
            price: BOX_TYPES[b.type].price,
            colors: b.colors.map((c) => c.name),
          })),
          accessories,
          customerEmail,
        }),
      })
      const { url, error } = await response.json()
      if (error) throw new Error(error)
      if (url) window.location.href = url
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsCheckingOut(false)
    }
  }

  const value: CartContextType = {
    boxes,
    accessories,
    draftType,
    draftColors,
    setDraftType: setDraftTypeSafe,
    addDraftColor,
    removeDraftColor,
    clearDraft,
    commitDraft,
    addBox,
    removeBox,
    setAccessoryQty,
    clearCart,
    cartCount,
    boxesSubtotal,
    accessoriesSubtotal,
    getCartTotal,
    proceedToCheckout,
    isCheckingOut,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
