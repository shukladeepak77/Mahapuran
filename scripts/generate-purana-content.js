// Reads ../Mahapuran/audio/puran/puranaN.txt (only Puranas that exist) and
// writes src/content/data/N.json with the body text (the file's own first
// line is the title, already captured in src/content/puranas.ts, so only
// the rest is kept here). Mirrors BhagwadGitaSite's own
// generate-chapter-content.js exactly, for the same reason: this repo
// never writes to the source .txt files, only reads them, so the content
// source stays reusable for a future audio/TTS pass the same way the Gita
// chapters' source files already are.
const fs = require("fs");
const path = require("path");

const SOURCE_DIR = path.join(__dirname, "..", "..", "..", "Mahapuran", "audio", "puran");
const DATA_DIR = path.join(__dirname, "..", "src", "content", "data");

fs.mkdirSync(DATA_DIR, { recursive: true });

let count = 0;
for (let id = 1; id <= 18; id++) {
  const srcFile = path.join(SOURCE_DIR, `purana${id}.txt`);
  if (!fs.existsSync(srcFile)) continue;

  const raw = fs.readFileSync(srcFile, "utf8").trim();
  const [, ...rest] = raw.split("\n");
  const body = rest.join("\n").trim();

  fs.writeFileSync(path.join(DATA_DIR, `${id}.json`), JSON.stringify({ id, body }, null, 2));
  count++;
}
console.log(`${count} purana(s) written to src/content/data/`);
