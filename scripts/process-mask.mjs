import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputPath = '/Users/brycemorgan/.openclaw/media/inbound/file_317---2694640d-95aa-4cd9-bd1f-0625e6b96d56.jpg';
const outputPath = path.join(__dirname, '../public/room-wall-mask.png');

async function processMask() {
  // Load the image
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();
  
  // Get raw pixel data
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  // Create RGBA buffer (add alpha channel)
  const rgbaData = Buffer.alloc(info.width * info.height * 4);
  
  for (let i = 0; i < info.width * info.height; i++) {
    const srcIdx = i * 3; // RGB
    const dstIdx = i * 4; // RGBA
    
    // Get original RGB values
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];
    
    // Calculate luminance (how bright the pixel is)
    const luminance = (r + g + b) / 3;
    
    // Invert: dark becomes light, light becomes dark
    // Original: wall is gray (~200), furniture is white (~255)
    // After invert: wall is light (~55), furniture is dark (~0)
    // We want: wall = white opaque, furniture = transparent
    
    // Actually we need: wall visible (white in mask), furniture hidden (transparent)
    // The original has wall=gray, furniture=white
    // So we invert, then use the brightness as alpha
    
    const inverted = 255 - luminance;
    
    // If original was white (furniture) -> inverted is black -> make transparent
    // If original was gray (wall) -> inverted is dark gray -> we want this white and opaque
    
    // Threshold approach: 
    // - Original white (>240) = furniture = should be transparent
    // - Original gray (<240) = wall = should be opaque white
    
    if (luminance > 245) {
      // This was white (furniture/cutout) - make transparent
      rgbaData[dstIdx] = 255;     // R
      rgbaData[dstIdx + 1] = 255; // G
      rgbaData[dstIdx + 2] = 255; // B
      rgbaData[dstIdx + 3] = 0;   // A = transparent
    } else {
      // This was the wall (gray area) - make opaque white
      // Use the inverted luminance to preserve some shadow detail
      const alpha = Math.min(255, (255 - luminance) * 2);
      rgbaData[dstIdx] = 255;     // R = white
      rgbaData[dstIdx + 1] = 255; // G = white
      rgbaData[dstIdx + 2] = 255; // B = white
      rgbaData[dstIdx + 3] = Math.max(alpha, 100); // A = mostly opaque, preserve shadows
    }
  }
  
  // Save as PNG with alpha
  await sharp(rgbaData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .png()
    .toFile(outputPath);
  
  console.log(`✅ Mask saved to ${outputPath}`);
  console.log(`   Dimensions: ${info.width}x${info.height}`);
}

processMask().catch(console.error);
