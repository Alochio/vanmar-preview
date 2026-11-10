// Converte as fotos de fotos-originais/ para WebP (até 2400 px de largura) em public/images/.
// Use os nomes: hero, valvulas, truck-de-moagem, cadeira-laminacao, rolo-de-apoio.
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import path from 'node:path';
const src = 'fotos-originais', out = 'public/images';
for (const f of readdirSync(src).filter(f => /\.(jpe?g|png|webp|tiff?)$/i.test(f))) {
  const n = path.parse(f).name;
  await sharp(path.join(src, f)).rotate().resize({ width: 2400, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${out}/${n}.webp`);
  console.log('ok', n);
}
