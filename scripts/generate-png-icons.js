import sharp from 'sharp';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');

const sizes = [48, 72, 96, 128, 192, 256, 384, 512, 1024];

async function generate() {
  const iconSvgPath = path.join(PUBLIC_DIR, 'icon.svg');
  const iconMaskableSvgPath = path.join(PUBLIC_DIR, 'icon-maskable.svg');

  console.log('Generating PWA standard and maskable PNG icons...');

  // Generate standard icons (including 1024x1024 master icon)
  for (const size of sizes) {
    const dest = path.join(PUBLIC_DIR, `icon-${size}.png`);
    await sharp(iconSvgPath)
      .resize(size, size)
      .png()
      .toFile(dest);
    console.log(`✓ Generated standard icon: icon-${size}.png`);
  }

  // Generate maskable icons
  const maskableSizes = [192, 512];
  for (const size of maskableSizes) {
    const dest = path.join(PUBLIC_DIR, `icon-${size}-maskable.png`);
    await sharp(iconMaskableSvgPath)
      .resize(size, size)
      .png()
      .toFile(dest);
    console.log(`✓ Generated maskable icon: icon-${size}-maskable.png`);
  }

  console.log('All icons generated successfully!');
}

generate().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
