'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, X, Check, ArrowRight } from 'lucide-react'
import { PAINT_COLORS, type PaintColor } from '@/lib/colors'
import { useCart } from '@/context/CartContext'

const BOX_SIZE = 4
const BOX_PRICE = 100 // flat per box — pricing TBD with client

// Interactive "fill your box with any 4 colors" — conveys the whole ordering
// model in one glance: pick colors → box fills → ship it.
export default function BuildYourBox() {
  const [slots, setSlots] = useState<(PaintColor | null)[]>([null, null, null, null])
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()
  const router = useRouter()

  const filled = slots.filter(Boolean) as PaintColor[]
  const isFull = filled.length === BOX_SIZE
  const nextSlot = slots.findIndex((s) => !s)

  const addColor = (c: PaintColor) => {
    if (isFull) return
    setSlots((prev) => {
      const i = prev.findIndex((s) => !s)
      if (i === -1) return prev
      const next = [...prev]
      next[i] = c
      return next
    })
  }

  const removeSlot = (i: number) =>
    setSlots((prev) => {
      const next = [...prev]
      next[i] = null
      return next
    })

  const addBoxToCart = () => {
    filled.forEach((c) => addToCart(c, 1))
    setAdded(true)
    setTimeout(() => router.push('/shop'), 700)
  }

  return (
    <div className="bg-bg-white rounded-3xl shadow-xl border border-border p-6 sm:p-8 w-full max-w-md mx-auto">
      {/* The box */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-accent font-medium">Your Box</p>
          <p className="text-sm text-text-muted">{filled.length} of {BOX_SIZE} gallons</p>
        </div>
        {filled.length > 0 && (
          <button onClick={() => setSlots([null, null, null, null])} className="text-xs text-text-muted hover:text-text-primary underline">
            Clear
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {slots.map((color, i) => (
          <button
            key={i}
            onClick={() => color && removeSlot(i)}
            className={`group relative aspect-square rounded-2xl flex items-center justify-center transition-all ${
              color ? 'shadow-inner' : 'border-2 border-dashed border-border'
            } ${!color && i === nextSlot ? 'border-accent/60 bg-accent-light/30' : ''}`}
            style={color ? { backgroundColor: color.hex } : undefined}
            title={color ? `Remove ${color.name}` : 'Empty slot'}
          >
            {color ? (
              <>
                <span className="absolute bottom-2 left-2 right-2 text-[11px] font-medium text-black/55 truncate text-left">
                  {color.name}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-full p-1">
                  <X className="w-4 h-4 text-white" />
                </span>
              </>
            ) : (
              <Plus className={`w-6 h-6 ${i === nextSlot ? 'text-accent' : 'text-border'}`} />
            )}
          </button>
        ))}
      </div>

      {/* Add to cart / price */}
      {isFull ? (
        <button
          onClick={addBoxToCart}
          disabled={added}
          className="w-full py-4 rounded-full bg-cta text-white font-medium btn-primary inline-flex items-center justify-center gap-2 mb-5"
        >
          {added ? (
            <><Check className="w-4 h-4" /> Box added!</>
          ) : (
            <>Add Box to Cart · ${BOX_PRICE} <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      ) : (
        <div className="w-full py-4 rounded-full bg-bg-cream text-text-muted text-center text-sm font-medium mb-5">
          Pick {BOX_SIZE - filled.length} more {BOX_SIZE - filled.length === 1 ? 'color' : 'colors'} to fill your box
        </div>
      )}

      {/* Color palette */}
      <p className="text-xs uppercase tracking-wider text-text-muted mb-3">Tap colors to add</p>
      <div className="grid grid-cols-8 gap-2 max-h-44 overflow-y-auto scrollbar-hide pr-1">
        {PAINT_COLORS.map((color) => (
          <button
            key={color.id}
            onClick={() => addColor(color)}
            disabled={isFull}
            className="aspect-square rounded-lg ring-1 ring-black/5 transition-transform hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: color.hex }}
            title={color.name}
            aria-label={`Add ${color.name}`}
          />
        ))}
      </div>
    </div>
  )
}
