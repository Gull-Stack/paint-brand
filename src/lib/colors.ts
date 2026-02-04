// 64 curated paint colors - feminine, on-trend palette
export interface PaintColor {
  id: string
  name: string
  hex: string
  category: 'whites' | 'neutrals' | 'blush' | 'greens' | 'blues' | 'warm' | 'moody'
  pantone?: string
}

export const PAINT_COLORS: PaintColor[] = [
  // Whites (10)
  { id: 'pure-white', name: 'Pure White', hex: '#FFFFFF', category: 'whites', pantone: '11-0601' },
  { id: 'cloud-nine', name: 'Cloud Nine', hex: '#F9F7F4', category: 'whites', pantone: '11-0602' },
  { id: 'soft-linen', name: 'Soft Linen', hex: '#F5F1EA', category: 'whites', pantone: '11-0105' },
  { id: 'swiss-coffee', name: 'Swiss Coffee', hex: '#F0EBE3', category: 'whites', pantone: '11-0107' },
  { id: 'pearl', name: 'Pearl', hex: '#EAE6DF', category: 'whites', pantone: '11-0604' },
  { id: 'whisper', name: 'Whisper', hex: '#F7F5F0', category: 'whites', pantone: '11-4800' },
  { id: 'moonlight', name: 'Moonlight', hex: '#F2EFE9', category: 'whites', pantone: '11-4301' },
  { id: 'snow-drift', name: 'Snow Drift', hex: '#FAFAFA', category: 'whites', pantone: '11-4201' },
  { id: 'ivory-tower', name: 'Ivory Tower', hex: '#FFFEF9', category: 'whites', pantone: '11-0103' },
  { id: 'cotton', name: 'Cotton', hex: '#FAF9F6', category: 'whites', pantone: '11-0701' },

  // Neutrals (12)
  { id: 'greige', name: 'Greige', hex: '#C5BAA8', category: 'neutrals', pantone: '15-1306' },
  { id: 'latte', name: 'Latte', hex: '#C4A882', category: 'neutrals', pantone: '15-1220' },
  { id: 'mushroom', name: 'Mushroom', hex: '#B5A99A', category: 'neutrals', pantone: '16-1105' },
  { id: 'pebble', name: 'Pebble', hex: '#A69E91', category: 'neutrals', pantone: '16-1107' },
  { id: 'driftwood', name: 'Driftwood', hex: '#9C8E7C', category: 'neutrals', pantone: '16-1310' },
  { id: 'cashmere', name: 'Cashmere', hex: '#D4C8B8', category: 'neutrals', pantone: '14-1108' },
  { id: 'almond', name: 'Almond', hex: '#E8DED1', category: 'neutrals', pantone: '13-1008' },
  { id: 'oat-milk', name: 'Oat Milk', hex: '#E5D9C9', category: 'neutrals', pantone: '13-1009' },
  { id: 'taupe', name: 'Taupe', hex: '#ADA091', category: 'neutrals', pantone: '16-1108' },
  { id: 'stone', name: 'Stone', hex: '#8E8478', category: 'neutrals', pantone: '17-1310' },
  { id: 'clay', name: 'Clay', hex: '#B4A394', category: 'neutrals', pantone: '15-1308' },
  { id: 'sandstone', name: 'Sandstone', hex: '#C9BBA7', category: 'neutrals', pantone: '14-1210' },

  // Blush & Pink (10)
  { id: 'blush', name: 'Blush', hex: '#E8C4B8', category: 'blush', pantone: '14-1318' },
  { id: 'rose-water', name: 'Rose Water', hex: '#F2D9D5', category: 'blush', pantone: '13-1520' },
  { id: 'ballet', name: 'Ballet', hex: '#F5E1DC', category: 'blush', pantone: '12-1212' },
  { id: 'petal', name: 'Petal', hex: '#F8E8E4', category: 'blush', pantone: '11-1408' },
  { id: 'dusty-rose', name: 'Dusty Rose', hex: '#D4A5A5', category: 'blush', pantone: '15-1512' },
  { id: 'terracotta-blush', name: 'Terracotta Blush', hex: '#D9A792', category: 'blush', pantone: '15-1322' },
  { id: 'coral-kiss', name: 'Coral Kiss', hex: '#E5B5A0', category: 'blush', pantone: '14-1219' },
  { id: 'mauve', name: 'Mauve', hex: '#C9A9A6', category: 'blush', pantone: '15-1607' },
  { id: 'rosewood', name: 'Rosewood', hex: '#B5838D', category: 'blush', pantone: '16-1610' },
  { id: 'nude', name: 'Nude', hex: '#E0C8BE', category: 'blush', pantone: '13-1407' },

  // Greens (10)
  { id: 'sage', name: 'Sage', hex: '#9CAF88', category: 'greens', pantone: '15-6317' },
  { id: 'eucalyptus', name: 'Eucalyptus', hex: '#A3B899', category: 'greens', pantone: '15-6315' },
  { id: 'olive-branch', name: 'Olive Branch', hex: '#8B9A6F', category: 'greens', pantone: '16-0220' },
  { id: 'fern', name: 'Fern', hex: '#7D9B76', category: 'greens', pantone: '16-6318' },
  { id: 'moss', name: 'Moss', hex: '#6B7F5E', category: 'greens', pantone: '17-0220' },
  { id: 'mint', name: 'Mint', hex: '#C5DDD1', category: 'greens', pantone: '12-5808' },
  { id: 'seafoam', name: 'Seafoam', hex: '#A8D4C4', category: 'greens', pantone: '13-5409' },
  { id: 'hunter', name: 'Hunter', hex: '#4A6151', category: 'greens', pantone: '18-5616' },
  { id: 'forest', name: 'Forest', hex: '#3D5245', category: 'greens', pantone: '19-5511' },
  { id: 'botanical', name: 'Botanical', hex: '#7BA05B', category: 'greens', pantone: '15-6432' },

  // Blues (10)
  { id: 'sky', name: 'Sky', hex: '#B5D4E8', category: 'blues', pantone: '13-4411' },
  { id: 'powder-blue', name: 'Powder Blue', hex: '#C9DEE8', category: 'blues', pantone: '12-4609' },
  { id: 'chambray', name: 'Chambray', hex: '#8BA8BD', category: 'blues', pantone: '15-4312' },
  { id: 'denim', name: 'Denim', hex: '#6E8CA0', category: 'blues', pantone: '16-4120' },
  { id: 'slate', name: 'Slate', hex: '#6B818C', category: 'blues', pantone: '17-4111' },
  { id: 'navy', name: 'Navy', hex: '#2C3E50', category: 'blues', pantone: '19-4024' },
  { id: 'indigo', name: 'Indigo', hex: '#3D5A80', category: 'blues', pantone: '18-4027' },
  { id: 'coastal', name: 'Coastal', hex: '#7BA3B8', category: 'blues', pantone: '15-4415' },
  { id: 'teal', name: 'Teal', hex: '#5C8A8A', category: 'blues', pantone: '17-4919' },
  { id: 'ocean', name: 'Ocean', hex: '#4A7C8A', category: 'blues', pantone: '17-4421' },

  // Warm (6)
  { id: 'terracotta', name: 'Terracotta', hex: '#C67D5E', category: 'warm', pantone: '16-1429' },
  { id: 'rust', name: 'Rust', hex: '#B55A3A', category: 'warm', pantone: '17-1446' },
  { id: 'amber', name: 'Amber', hex: '#D4A24E', category: 'warm', pantone: '14-1041' },
  { id: 'honey', name: 'Honey', hex: '#E0B870', category: 'warm', pantone: '13-0941' },
  { id: 'caramel', name: 'Caramel', hex: '#C68B59', category: 'warm', pantone: '15-1234' },
  { id: 'spice', name: 'Spice', hex: '#A65E3F', category: 'warm', pantone: '17-1340' },

  // Moody (6)
  { id: 'charcoal', name: 'Charcoal', hex: '#3A3A3A', category: 'moody', pantone: '19-3906' },
  { id: 'midnight', name: 'Midnight', hex: '#2C2C3A', category: 'moody', pantone: '19-3920' },
  { id: 'espresso', name: 'Espresso', hex: '#3C2F2F', category: 'moody', pantone: '19-1118' },
  { id: 'ink', name: 'Ink', hex: '#1E1E2E', category: 'moody', pantone: '19-4010' },
  { id: 'plum', name: 'Plum', hex: '#5E4955', category: 'moody', pantone: '18-1710' },
  { id: 'aubergine', name: 'Aubergine', hex: '#4A3548', category: 'moody', pantone: '19-2311' },
]

export const CATEGORIES = [
  { id: 'whites', name: 'Whites', description: 'Clean, bright, timeless' },
  { id: 'neutrals', name: 'Neutrals', description: 'Warm, grounding, versatile' },
  { id: 'blush', name: 'Blush & Pink', description: 'Soft, romantic, feminine' },
  { id: 'greens', name: 'Greens', description: 'Natural, calming, fresh' },
  { id: 'blues', name: 'Blues', description: 'Serene, sophisticated, cool' },
  { id: 'warm', name: 'Warm Tones', description: 'Earthy, cozy, inviting' },
  { id: 'moody', name: 'Moody', description: 'Bold, dramatic, luxe' },
]
