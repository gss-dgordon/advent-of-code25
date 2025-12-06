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
    let freshFinished = false;
    lines.forEach((line) => {
      if (!freshFinished) {
        if (line.trim() === "") {
          freshFinished = true;
        } else {
          const [start, end] = line.split("-");
          if (start && end)
            fresh.push({ start: parseInt(start), end: parseInt(end) });
        }
      }
      else {
        const id = parseInt(line);
        if (fresh.some(range => id >= range.start && id <= range.end)) {
          sum++;
        }
      }
    });
    console.log("Sum: " + sum);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}