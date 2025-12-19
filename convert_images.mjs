
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const files = [
    { name: 'drone_shot.jpg', quality: 80 },
    { name: 'profile.jpg', quality: 80 },
    { name: 'signature.png', quality: 90, options: { nearLossless: true } }
];
const dir = './public';

async function convert() {
    console.log("Starting optimization...");
    for (const f of files) {
        const input = path.join(dir, f.name);
        const outputName = f.name.substring(0, f.name.lastIndexOf('.')) + '.webp';
        const output = path.join(dir, outputName);

        if (fs.existsSync(input)) {
            try {
                let s = sharp(input);
                if (f.name.endsWith('.png')) {
                    await s.webp({ quality: f.quality, nearLossless: true }).toFile(output);
                } else {
                    await s.webp({ quality: f.quality }).toFile(output);
                }
                console.log(`✅ Converted ${f.name} -> ${outputName}`);
            } catch (e) {
                console.error(`❌ Error converting ${f.name}:`, e);
            }
        } else {
            console.log(`⚠️ File not found: ${f.name}`);
        }
    }
}

convert();
