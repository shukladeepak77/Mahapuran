import fs from "fs";
import path from "path";
import type { PuranaContent } from "./types";

const DATA_DIR = path.join(process.cwd(), "src", "content", "data");

export function getPuranaContent(id: number): PuranaContent | undefined {
  const file = path.join(DATA_DIR, `${id}.json`);
  if (!fs.existsSync(file)) return undefined;
  return JSON.parse(fs.readFileSync(file, "utf8")) as PuranaContent;
}
