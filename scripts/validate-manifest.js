import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const manifestPath = path.join(PUBLIC_DIR, 'manifest.json');

console.log('Validating manifest.json...');

if (!fs.existsSync(manifestPath)) {
  console.error('❌ manifest.json does not exist!');
  process.exit(1);
}

try {
  const content = fs.readFileSync(manifestPath, 'utf8');
  const manifest = JSON.parse(content);

  const errors = [];
  const warnings = [];

  // Required PWA fields
  const required = ['name', 'short_name', 'start_url', 'display', 'icons'];
  required.forEach(field => {
    if (!manifest[field]) {
      errors.push(`Missing required PWA field: "${field}"`);
    }
  });

  if (manifest.display !== 'standalone' && manifest.display !== 'fullscreen' && manifest.display !== 'minimal-ui') {
    warnings.push(`Recommended "display" is "standalone", currently: "${manifest.display}"`);
  }

  if (!manifest.theme_color) {
    warnings.push('Missing recommended field: "theme_color"');
  }

  if (manifest.icons) {
    if (!Array.isArray(manifest.icons) || manifest.icons.length === 0) {
      errors.push('"icons" must be a non-empty array');
    } else {
      let has192 = false;
      let has512 = false;
      let hasMaskable = false;

      manifest.icons.forEach((icon, index) => {
        if (!icon.src) errors.push(`Icon at index ${index} is missing "src"`);
        if (!icon.sizes) errors.push(`Icon at index ${index} (${icon.src || 'unknown'}) is missing "sizes"`);
        if (!icon.type) errors.push(`Icon at index ${index} (${icon.src || 'unknown'}) is missing "type"`);

        if (icon.src) {
          const iconPath = path.join(PUBLIC_DIR, icon.src);
          if (!fs.existsSync(iconPath)) {
            errors.push(`Icon file does not exist: "${icon.src}"`);
          } else {
            // Check sizes
            if (icon.sizes === '192x192') has192 = true;
            if (icon.sizes === '512x512') has512 = true;
            if (icon.purpose && icon.purpose.includes('maskable')) hasMaskable = true;
          }
        }
      });

      if (!has192) warnings.push('Recommended to have a 192x192 icon');
      if (!has512) warnings.push('Recommended to have a 512x512 icon');
      if (!hasMaskable) warnings.push('Recommended to have at least one maskable icon');
    }
  }

  console.log('\n--- MANIFEST VALIDATION RESULTS ---');
  if (errors.length > 0) {
    console.log(`❌ FAILED: Found ${errors.length} error(s):`);
    errors.forEach(err => console.log(`   - ${err}`));
  } else {
    console.log('✅ PASS: manifest.json structure is valid.');
  }

  if (warnings.length > 0) {
    console.log(`⚠️ Warnings (${warnings.length}):`);
    warnings.forEach(warn => console.log(`   - ${warn}`));
  }

  if (errors.length > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
} catch (err) {
  console.error('❌ Failed to parse manifest.json as JSON:', err.message);
  process.exit(1);
}
