// Generates public/room-wall-mask.png from public/room-bg.jpg.
// Flood-fills the paintable wall from seed points; furniture, frames,
// plants, floor, and window stay transparent. Edges get a small feather.
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '../public/room-bg.jpg')
const OUT = path.join(__dirname, '../public/room-wall-mask.png')

const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true })
const { width: W, height: H } = info

const lum = new Float32Array(W * H)
const sat = new Float32Array(W * H)
for (let i = 0; i < W * H; i++) {
  const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2]
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b)
  lum[i] = 0.299 * r + 0.587 * g + 0.114 * b
  sat[i] = mx === 0 ? 0 : (mx - mn) / mx
}

// Tunables
const SAT_MAX = 0.09      // wall is neutral; plants/wood/gold exceed this
const LUM_MIN = 82        // darker = doorway shadow, frame borders
const LUM_MAX = 253       // bright sunlit wall must qualify; objects are geo-excluded
const STEP_TOL = 10        // max luminance jump between neighbors (smooth wall gradient)
const X_MAX = 0.935        // hard stop before window/curtain zone

// Furniture/floor zones the fill must never enter (normalized x0,x1,y0,y1)
const EXCLUDE = [
  [0.29, 0.795, 0.66, 1],  // sofa body (unambiguous)
  [0.81, 0.91, 0.70, 1],   // white planter pot
  [0.0, 0.30, 0.625, 1],   // chaise/armchair + throw
  [0.0, 1.0, 0.84, 1],     // floor
]
// Hand-traced sofa top contour: [x0, x1, sofa top y]. Everything below the
// contour within the sofa's x-range is sofa, not wall.
const SOFA_TOP = [
  [0.29, 0.335, 0.648],  // left armrest
  [0.335, 0.685, 0.595], // back cushions
  [0.685, 0.75, 0.602],  // above right tan pillow
  [0.75, 0.81, 0.645],   // right armrest
]
const inExcluded = (i) => {
  const x = (i % W) / W, y = ((i / W) | 0) / H
  if (EXCLUDE.some(([x0, x1, y0, y1]) => x >= x0 && x <= x1 && y >= y0 && y <= y1)) return true
  return SOFA_TOP.some(([x0, x1, top]) => x >= x0 && x <= x1 && y >= top)
}

const wallLike = (i) => sat[i] <= SAT_MAX && lum[i] >= LUM_MIN && lum[i] <= LUM_MAX && !inExcluded(i)

// Seeds: known wall locations (normalized x,y)
const seeds = [
  [0.50, 0.18], [0.25, 0.30], [0.10, 0.20], [0.75, 0.30], [0.88, 0.25],
  [0.46, 0.35], [0.54, 0.50], [0.27, 0.30], // between frames + inside mirror hoop
  [0.62, 0.55], [0.80, 0.55], [0.35, 0.52], // strip above sofa
  [0.82, 0.64], [0.805, 0.78], [0.10, 0.55], // pockets: right of sofa, left wall
  [0.085, 0.40], [0.22, 0.50], [0.30, 0.58], // corner column + shadow under mirror
]

const mask = new Uint8Array(W * H)
const queue = []
for (const [nx, ny] of seeds) {
  const i = Math.floor(ny * H) * W + Math.floor(nx * W)
  if (wallLike(i) && !mask[i]) { mask[i] = 1; queue.push(i) }
}
while (queue.length) {
  const i = queue.pop()
  const x = i % W, y = (i / W) | 0
  const neighbors = [
    x > 0 ? i - 1 : -1,
    x < W - 1 ? i + 1 : -1,
    y > 0 ? i - W : -1,
    y < H - 1 ? i + W : -1,
  ]
  for (const n of neighbors) {
    if (n < 0 || mask[n]) continue
    if ((n % W) / W > X_MAX) continue
    if (!wallLike(n)) continue
    if (Math.abs(lum[n] - lum[i]) > STEP_TOL) continue
    mask[n] = 1
    queue.push(n)
  }
}

// Fill small enclosed holes (e.g. nail heads, texture noise) via inverse BFS from borders:
// anything NOT wall and NOT reachable from the image border through non-wall pixels is a hole.
const outside = new Uint8Array(W * H)
const q2 = []
for (let x = 0; x < W; x++) {
  for (const y of [0, H - 1]) { const i = y * W + x; if (!mask[i] && !outside[i]) { outside[i] = 1; q2.push(i) } }
}
for (let y = 0; y < H; y++) {
  for (const x of [0, W - 1]) { const i = y * W + x; if (!mask[i] && !outside[i]) { outside[i] = 1; q2.push(i) } }
}
while (q2.length) {
  const i = q2.pop()
  const x = i % W, y = (i / W) | 0
  for (const n of [x > 0 ? i - 1 : -1, x < W - 1 ? i + 1 : -1, y > 0 ? i - W : -1, y < H - 1 ? i + W : -1]) {
    if (n < 0 || mask[n] || outside[n]) continue
    outside[n] = 1
    q2.push(n)
  }
}
// Only fill SMALL enclosed holes — big enclosed regions (frame mats, mirror glass)
// must stay unpainted.
const HOLE_MAX = 1200
const seen = new Uint8Array(W * H)
let holesFilled = 0
for (let s = 0; s < W * H; s++) {
  if (mask[s] || outside[s] || seen[s]) continue
  const comp = [s]
  seen[s] = 1
  for (let k = 0; k < comp.length; k++) {
    const i = comp[k]
    const x = i % W, y = (i / W) | 0
    for (const n of [x > 0 ? i - 1 : -1, x < W - 1 ? i + 1 : -1, y > 0 ? i - W : -1, y < H - 1 ? i + W : -1]) {
      if (n < 0 || mask[n] || outside[n] || seen[n]) continue
      seen[n] = 1
      comp.push(n)
    }
  }
  if (comp.length <= HOLE_MAX) {
    for (const i of comp) mask[i] = 1
    holesFilled += comp.length
  }
}

// Write RGBA: white + alpha where wall
const rgba = Buffer.alloc(W * H * 4)
for (let i = 0; i < W * H; i++) {
  rgba[i * 4] = 255; rgba[i * 4 + 1] = 255; rgba[i * 4 + 2] = 255
  rgba[i * 4 + 3] = mask[i] ? 255 : 0
}

// Feather: 1px blur on alpha for soft edges
await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
  .blur(0.7)
  .png()
  .toFile(OUT)

const coverage = mask.reduce((a, b) => a + b, 0) / (W * H)
console.log(`mask written: ${W}x${H}, wall coverage ${(coverage * 100).toFixed(1)}%, holes filled ${holesFilled}`)
