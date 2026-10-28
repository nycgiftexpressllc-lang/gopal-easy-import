import { rm, mkdir, copyFile } from 'node:fs/promises';
const publicFiles = ['index.html', 'styles.css', 'app.js', 'practice-config.js', 'favicon.svg', 'doctor-photo.jpg'];
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of publicFiles) await copyFile(file, `dist/${file}`);
console.log(`Build complete: ${publicFiles.length} public files in dist/`);
