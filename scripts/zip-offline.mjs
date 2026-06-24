import { createWriteStream, existsSync, unlinkSync } from "fs";
import { join } from "path";
import { ZipArchive } from "archiver";

const ROOT = new URL("..", import.meta.url).pathname;
const DIST = join(ROOT, "dist");
const ZIP = join(DIST, "ielts-student-resources-offline.zip");

if (existsSync(ZIP)) unlinkSync(ZIP);

const output = createWriteStream(ZIP);
const archive = new ZipArchive({ zlib: { level: 9 } });

archive.pipe(output);
archive.on("error", (err) => { throw err; });

output.on("close", () => {
  const mb = (archive.pointer() / 1024 / 1024).toFixed(1);
  console.log(`\n✅ Offline zip: ${ZIP} (${mb} MB)`);
});

archive.directory(DIST, false, (entry) => {
  if (entry.name.startsWith("audio/") || entry.name.endsWith(".zip")) {
    return false;
  }
  return entry;
});

archive.finalize();
