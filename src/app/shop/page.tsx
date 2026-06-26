'use client'

import { useState } from 'react'
import { Truck, ArrowRight, Check, X, Plus, Minus, Trash2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { PAINT_COLORS, CATEGORIES, type PaintColor } from '@/lib/colors'
import { useCart, BOX_TYPES, ACCESSORIES, type BoxType } from '@/context/CartContext'

export default function ShopPage() {
  const {
    boxes, accessories, draftType, draftColors,
    setDraftType, addDraftColor, removeDraftColor, clearDraft, commitDraft,
    removeBox, setAccessoryQty, boxesSubtotal, accessoriesSubtotal, getCartTotal,
    proceedToCheckout, isCheckingOut,
  } = useCart()

  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const slots = BOX_TYPES[draftType].slots
  const draftFull = draftColors.length >= slots
  const filtered = activeCategory ? PAINT_COLORS.filter((c) => c.category === activeCategory) : PAINT_COLORS
  const accQty = (id: string) => accessories.find((a) => a.id === id)?.qty ?? 0
  const hasOrder = boxes.length > 0 || accessories.length > 0

  return (
    <div className="min-h-screen bg-bg-cream">
      <Header />

      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-wider text-accent mb-2">Build your box</p>
            <h1 className="text-4xl md:text-5xl font-light text-text-primary mb-3">
              Fill a box, <span className="font-medium">we ship it.</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Choose a box, add the colors you want, and check out. One flat price per box, free shipping.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            {/* ---- Builder ---- */}
            <div>
              {/* Box type selector */}
              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {(Object.keys(BOX_TYPES) as BoxType[]).map((t) => {
                  const bt = BOX_TYPES[t]
                  const active = draftType === t
                  return (
                    <button
                      key={t}
                      onClick={() => setDraftType(t)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        active ? 'border-accent ring-2 ring-accent bg-bg-white' : 'border-border bg-bg-white hover:border-accent'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-text-primary">{bt.label}</span>
                        <span className="text-sm text-text-muted">${bt.price}</span>
                      </div>
                      <p className="text-xs text-text-muted">{bt.size} · {bt.blurb}</p>
                    </button>
                  )
                })}
              </div>

              {/* Colors first */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-text-primary">Pick your colors</h2>
                <span className="text-sm text-text-muted">{draftColors.length} of {slots} added</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${activeCategory === null ? 'bg-cta text-white' : 'bg-border text-text-secondary hover:bg-accent hover:text-white'}`}
                >All</button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${activeCategory === cat.id ? 'bg-cta text-white' : 'bg-border text-text-secondary hover:bg-accent hover:text-white'}`}
                  >{cat.name}</button>
                ))}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-4">
                {filtered.map((color: PaintColor) => (
                  <button
                    key={color.id}
                    onClick={() => addDraftColor(color)}
                    disabled={draftFull}
                    className="group text-left disabled:opacity-40 disabled:cursor-not-allowed"
                    title={draftFull ? 'Box is full' : `Add ${color.name}`}
                  >
                    <div
                      className="aspect-square rounded-2xl mb-2 ring-1 ring-black/5 shadow-sm transition-all group-enabled:group-hover:-translate-y-1 group-enabled:group-hover:shadow-lg"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="text-xs font-medium text-text-primary truncate">{color.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* ---- Sticky box + order ---- */}
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Current box being filled */}
              <div className="bg-bg-white rounded-2xl border border-border p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent font-medium">{BOX_TYPES[draftType].label}</p>
                    <p className="text-sm text-text-muted">{draftColors.length} of {slots} · ${BOX_TYPES[draftType].price}</p>
                  </div>
                  {draftColors.length > 0 && (
                    <button onClick={clearDraft} className="text-xs text-text-muted hover:text-text-primary underline">Clear</button>
                  )}
                </div>

                <div className={`grid ${slots === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-3 mb-4`}>
                  {Array.from({ length: slots }).map((_, i) => {
                    const color = draftColors[i]
                    return (
                      <button
                        key={i}
                        onClick={() => color && removeDraftColor(i)}
                        className={`group relative ${slots === 1 ? 'aspect-[2/1]' : 'aspect-square'} rounded-xl flex items-center justify-center ${color ? '' : 'border-2 border-dashed border-border'}`}
                        style={color ? { backgroundColor: color.hex } : undefined}
                        title={color ? `Remove ${color.name}` : 'Empty'}
                      >
                        {color ? (
                          <>
                            <span className="absolute bottom-1.5 left-2 right-2 text-[11px] font-medium text-black/55 truncate text-left">{color.name}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-full p-1"><X className="w-3.5 h-3.5 text-white" /></span>
                          </>
                        ) : (
                          <Plus className="w-5 h-5 text-border" />
                        )}
                      </button>
                    )
                  })}
                </div>

                <button
                  onClick={commitDraft}
                  disabled={draftColors.length === 0}
                  className="w-full py-3 rounded-full bg-cta text-white font-medium btn-primary disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  Add Box to Order · ${BOX_TYPES[draftType].price}
                </button>
              </div>

              {/* Order summary */}
              {hasOrder && (
                <div className="bg-bg-white rounded-2xl border border-border p-5 shadow-sm">
                  <h3 className="font-medium text-text-primary mb-4">Your order</h3>

                  <div className="space-y-3 mb-4">
                    {boxes.map((box) => (
                      <div key={box.id} className="flex items-start gap-3">
                        <div className="flex -space-x-1.5 shrink-0">
                          {box.colors.slice(0, 4).map((c, i) => (
                            <span key={i} className="w-6 h-6 rounded-full ring-2 ring-bg-white" style={{ backgroundColor: c.hex }} />
                          ))}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-text-primary">{BOX_TYPES[box.type].label}</p>
                          <p className="text-xs text-text-muted truncate">{box.colors.map((c) => c.name).join(', ')}</p>
                        </div>
                        <span className="text-sm text-text-primary">${BOX_TYPES[box.type].price}</span>
                        <button onClick={() => removeBox(box.id)} className="text-text-muted hover:text-text-primary"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-3 space-y-1.5 text-sm">
                    <div className="flex justify-between text-text-secondary"><span>Paint</span><span>${boxesSubtotal()}</span></div>
                    {accessoriesSubtotal() > 0 && (
                      <div className="flex justify-between text-text-secondary"><span>Supplies</span><span>${accessoriesSubtotal()}</span></div>
                    )}
                    <div className="flex justify-between text-text-secondary"><span>Shipping</span><span className="text-success font-medium">FREE</span></div>
                    <div className="flex justify-between font-medium text-text-primary text-base pt-1"><span>Total</span><span>${getCartTotal()}</span></div>
                  </div>

                  <button
                    onClick={() => proceedToCheckout()}
                    disabled={isCheckingOut}
                    className="w-full mt-4 py-3.5 rounded-full bg-cta text-white font-medium btn-primary disabled:opacity-50 inline-flex items-center justify-center gap-2"
                  >
                    {isCheckingOut ? 'Processing…' : <>Checkout <ArrowRight className="w-4 h-4" /></>}
                  </button>
                </div>
              )}

              {/* Accessories upsell */}
              <div className="bg-bg-white rounded-2xl border border-border p-5 shadow-sm">
                <h3 className="font-medium text-text-primary mb-1">Complete your project</h3>
                <p className="text-xs text-text-muted mb-4">Add the supplies to get it done right.</p>
                <div className="space-y-3">
                  {ACCESSORIES.map((acc) => {
                    const qty = accQty(acc.id)
                    return (
                      <div key={acc.id} className="flex items-center gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-text-primary">{acc.name}</p>
                          <p className="text-xs text-text-muted">${acc.price} · {acc.blurb}</p>
                        </div>
                        {qty > 0 ? (
                          <div className="flex items-center gap-2">
                            <button onClick={() => setAccessoryQty(acc.id, qty - 1)} className="w-7 h-7 rounded-full bg-border flex items-center justify-center hover:bg-accent hover:text-white"><Minus className="w-3.5 h-3.5" /></button>
                            <span className="w-5 text-center text-sm font-medium">{qty}</span>
                            <button onClick={() => setAccessoryQty(acc.id, qty + 1)} className="w-7 h-7 rounded-full bg-border flex items-center justify-center hover:bg-accent hover:text-white"><Plus className="w-3.5 h-3.5" /></button>
                          </div>
                        ) : (
                          <button onClick={() => setAccessoryQty(acc.id, 1)} className="px-3 py-1.5 rounded-full bg-accent-light text-accent text-xs font-medium hover:bg-accent hover:text-white transition-colors">Add</button>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trust strip */}
      <section className="bg-bg-white py-8 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-2 text-text-secondary text-sm"><Truck className="w-5 h-5 text-accent" /> Free shipping on every box</div>
          <div className="flex items-center justify-center gap-2 text-text-secondary text-sm"><Check className="w-5 h-5 text-success" /> Zero-VOC, ready to roll</div>
          <div className="flex items-center justify-center gap-2 text-text-secondary text-sm"><Link href="/design" className="text-accent hover:text-accent-dark font-medium">Not sure? See it on your wall →</Link></div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
