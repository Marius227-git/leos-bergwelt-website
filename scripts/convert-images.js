const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/images');

// Funktion zum rekursiven Durchsuchen von Verzeichnissen
async function convertImages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await convertImages(filePath);
    } else if (/\.(jpg|jpeg|JPG|JPEG)$/i.test(file)) {
      const outputPath = filePath.replace(/\.(jpg|jpeg|JPG|JPEG)$/i, '.webp');
      
      // Überspringe, wenn WebP bereits existiert
      if (fs.existsSync(outputPath)) {
        console.log(`⏭️  Überspringe (existiert): ${file}`);
        continue;
      }
      
      try {
        await sharp(filePath)
          .webp({ quality: 85, effort: 6 }) // Gute Balance zwischen Qualität und Größe
          .toFile(outputPath);
        
        const originalSize = fs.statSync(filePath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
        
        console.log(`✅ ${file} → ${path.basename(outputPath)} (${savings}% kleiner)`);
      } catch (error) {
        console.error(`❌ Fehler bei ${file}:`, error.message);
      }
    }
  }
}

console.log('🚀 Starte Bildkonvertierung zu WebP...\n');
convertImages(imageDir)
  .then(() => console.log('\n✨ Konvertierung abgeschlossen!'))
  .catch(err => console.error('Fehler:', err));
