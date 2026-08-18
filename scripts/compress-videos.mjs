import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readdir, stat, unlink, rename } from "node:fs/promises";
import { join } from "node:path";
import ffmpegPath from "ffmpeg-static";

const execFileAsync = promisify(execFile);
const assetsDir = join(process.cwd(), "src", "assets");

async function compressVideo(filePath) {
  const before = (await stat(filePath)).size;
  const tmp = `${filePath}.tmp.mp4`;

  await execFileAsync(ffmpegPath, [
    "-y",
    "-i",
    filePath,
    "-vcodec",
    "libx264",
    "-crf",
    "28",
    "-preset",
    "slow",
    "-vf",
    "scale='min(1280,iw)':-2",
    "-movflags",
    "+faststart",
    "-an",
    tmp,
  ]);

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
  if (!/^video\d+\.mp4$/i.test(file)) continue;
  await compressVideo(join(assetsDir, file));
  total++;
}

console.log(`\nCompressed ${total} videos.`);
