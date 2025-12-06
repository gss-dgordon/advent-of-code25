import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  const filePath = path.join(__dirname, "1.txt");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n");
    let sum = 0;
    let fresh: { start: number, end: number }[] = [];
    lines.forEach((line) => {
      if (line.trim() === "") {
        return;
      } else {
        const [start, end] = line.split("-");
        if (start && end)
          fresh.push({ start: parseInt(start), end: parseInt(end) });
      }
    });
    // count the number of ids that are considered fresh
    fresh.sort((a, b) => a.start - b.start);
    let merged = [fresh[0]];
    for (let i = 0; i < fresh.length; i++) {
      const last = merged[merged.length - 1];
      const curr = fresh[i];
      if (!curr || !last) continue;
      if (curr.start <= last.end + 1) {
        last.end = Math.max(last.end, curr.end);
      }
      else {
        merged.push(curr);
      }
    }
    console.log("Count: " + merged.reduce((sum, range) => sum + ((range?.end ?? 0) - (range?.start ?? 0) + 1), 0));
  } catch (err) {
    console.error("Error reading file:", err);
  }
}