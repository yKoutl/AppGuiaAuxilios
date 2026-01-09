// ============================================
// SCRIPT PARA CREAR PLACEHOLDERS DE IMÁGENES
// ============================================
// Este script crea imágenes placeholder temporales usando Canvas
// Ejecutar: node create-placeholders.js

const fs = require('fs');
const path = require('path');

// Nota: Este script requiere canvas node package
// Instalar con: npm install canvas --save-dev

console.log('📸 Generador de Imágenes Placeholder');
console.log('=====================================\n');

// Lista de imágenes necesarias con emojis
const imagenes = [
  { nombre: 'quemadura.png', emoji: '🔥', color: '#FF6B35' },
  { nombre: 'corte.png', emoji: '🔪', color: '#DC2626' },
  { nombre: 'atragantamiento.png', emoji: '😵', color: '#7C3AED' },
  { nombre: 'desmayo.png', emoji: '😴', color: '#2563EB' },
  { nombre: 'fractura.png', emoji: '🦴', color: '#EA580C' },
  { nombre: 'sangrado.png', emoji: '💉', color: '#DC2626' },
  { nombre: 'picadura.png', emoji: '🐝', color: '#FBBF24' },
  { nombre: 'alergia.png', emoji: '😷', color: '#10B981' },
  { nombre: 'golpecalor.png', emoji: '☀️', color: '#F59E0B' },
  { nombre: 'convulsion.png', emoji: '⚡', color: '#8B5CF6' },
  { nombre: 'intoxicacion.png', emoji: '☠️', color: '#059669' },
  { nombre: 'electro.png', emoji: '⚡', color: '#FBBF24' },
];

console.log('⚠️  INSTRUCCIONES:');
console.log('------------------');
console.log('Para generar imágenes placeholder automáticamente:');
console.log('1. Instala canvas: npm install canvas --save-dev');
console.log('2. Ejecuta este script: node create-placeholders.js\n');

console.log('📋 Imágenes que necesitas agregar manualmente en assets/:');
console.log('--------------------------------------------------------\n');

imagenes.forEach((img, index) => {
  console.log(`${index + 1}. ${img.emoji}  ${img.nombre}`);
});

console.log('\n💡 Mientras tanto, puedes:');
console.log('- Descargar iconos de flaticon.com');
console.log('- Usar emojis como placeholders visuales');
console.log('- Generar con IA (DALL-E, Midjourney)');
console.log('\n✅ Todos los demás archivos de código están listos!');

// Intentar crear placeholders si canvas está disponible
try {
  const { createCanvas } = require('canvas');
  
  const assetsDir = path.join(__dirname, 'assets');
  
  // Crear carpeta assets si no existe
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir);
  }
  
  console.log('\n🎨 Generando placeholders...\n');
  
  imagenes.forEach((img) => {
    const canvas = createCanvas(512, 512);
    const ctx = canvas.getContext('2d');
    
    // Fondo de color
    ctx.fillStyle = img.color;
    ctx.fillRect(0, 0, 512, 512);
    
    // Emoji/texto grande
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 200px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(img.emoji, 256, 256);
    
    // Guardar imagen
    const buffer = canvas.toBuffer('image/png');
    const filePath = path.join(assetsDir, img.nombre);
    fs.writeFileSync(filePath, buffer);
    
    console.log(`✅ Creado: ${img.nombre}`);
  });
  
  console.log('\n🎉 ¡Placeholders generados exitosamente!');
  console.log('📁 Ubicación: assets/');
  console.log('\n⚠️  Recuerda: Estos son placeholders. Reemplázalos con iconos profesionales.');
  
} catch (error) {
  console.log('\n⚠️  No se pudo generar placeholders automáticamente.');
  console.log('Instala canvas con: npm install canvas --save-dev');
  console.log('O agrega las imágenes manualmente en la carpeta assets/');
}
