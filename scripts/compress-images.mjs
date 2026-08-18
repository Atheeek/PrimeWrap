import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join } from "path";

const assetsDir = join(process.cwd(), "src", "assets");
const IMAGE_EXT = /\.(jpe?g|png)$/i;
const MAX_WIDTH = 1600;

async function compressFile(filePath) {
  const before = (await stat(filePath)).size;
  const ext = filePath.split(".").pop().toLowerCase();
  const tmp = `${filePath}.tmp`;

  let pipeline = sharp(filePath).rotate();
  const meta = await sharp(filePath).metadata();

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  }

  if (ext === "png") {
    await pipeline.png({ quality: 82, compressionLevel: 9 }).toFile(tmp);
  } else {
    await pipeline
      .jpeg({ quality: 80, mozjpeg: true, progressive: true })
      .toFile(tmp);
  }

  const { rename, unlink } = await import("fs/promises");
  await unlink(filePath);
  await rename(tmp, filePath);

  const after = (await stat(filePath)).size;
  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(
    `${filePath.split(/[/\\]/).pop()}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${saved}% saved)`,
  );
}

const files = await readdir(assetsDir);
let total = 0;

for (const file of files) {
  if (!IMAGE_EXT.test(file) || file === "logo.png") continue;
  await compressFile(join(assetsDir, file));
  total++;
}

console.log(`\nCompressed ${total} images.`);
