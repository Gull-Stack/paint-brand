'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { PAINT_COLORS, CATEGORIES, type PaintColor } from '@/lib/colors'

// Interactive "see it on your wall" room designer.
// Lives on its own /design page (moved off the homepage per client feedback).
export default function RoomDesigner() {
  const [selectedColor, setSelectedColor] = useState<PaintColor>(
    PAINT_COLORS.find((c) => c.id === 'sage') ?? PAINT_COLORS[0]
  )
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? PAINT_COLORS.filter((c) => c.category === activeCategory)
    : PAINT_COLORS

  const maskStyle = (opacity: number, blend: 'multiply' | 'color') => ({
    backgroundColor: selectedColor.hex,
    mixBlendMode: blend,
    opacity,
    maskImage: 'url(/room-wall-mask.png)',
    WebkitMaskImage: 'url(/room-wall-mask.png)',
    maskSize: 'cover' as const,
    WebkitMaskSize: 'cover' as const,
    maskPosition: 'center' as const,
    WebkitMaskPosition: 'center' as const,
  })

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
      {/* Room preview */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border aspect-[16/11] lg:sticky lg:top-28">
        <img src="/room-bg.jpg" alt="Living room preview" className="w-full h-full object-cover" />
        <div className="absolute inset-0 wall-transition" style={maskStyle(1, 'multiply')} />
        <div className="absolute inset-0 wall-transition" style={maskStyle(0.3, 'color')} />
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow">
          <span className="text-sm font-medium text-text-primary">{selectedColor.name}</span>
        </div>
      </div>

      {/* Controls */}
      <div>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Now previewing</p>
          <h2 className="text-2xl font-medium text-text-primary">{selectedColor.name}</h2>
          <p className="text-sm text-text-muted">
            {selectedColor.hex.toUpperCase()}
            {selectedColor.pantone ? ` · Pantone ${selectedColor.pantone}` : ''}
          </p>
          <Link
            href={`/colors/${selectedColor.id}`}
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-cta text-white font-medium rounded-full btn-primary"
          >
            See Details <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-5">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === null ? 'bg-cta text-white' : 'bg-border text-text-secondary hover:bg-accent hover:text-white'
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat.id ? 'bg-cta text-white' : 'bg-border text-text-secondary hover:bg-accent hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Modern swatch grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {filtered.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color)}
              className="group text-left"
              title={color.name}
            >
              <div
                className={`aspect-square rounded-xl transition-all group-hover:scale-105 ${
                  selectedColor.id === color.id ? 'ring-2 ring-accent ring-offset-2 ring-offset-bg-white' : 'ring-1 ring-black/5'
                }`}
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-[11px] text-text-secondary mt-1.5 truncate">{color.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
