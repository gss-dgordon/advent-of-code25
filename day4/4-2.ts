import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  const filePath = path.join(__dirname, "1.txt");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    let sum = 0;
    let grid: string[][] = [[]];
    let removed: boolean = true;
    lines.forEach((line) => {
      grid.push(Array.from(line));
    });
    while (removed) {
      removed = false;
      // rows
      for (let i = 0; i < grid.length; i++) {
        // columns
        const row = grid[i];
        if (!row) continue;
        for (let j = 0; j < row.length; j++) {
          // check adjacent cells for < 4 @s
          if (row[j] === "@") {
            let numAdjacent = 0;
            if (row[j - 1] === "@") numAdjacent++;
            if (row[j + 1] === "@") numAdjacent++;
            if (grid[i - 1]?.[j] === "@") numAdjacent++;
            if (grid[i + 1]?.[j] === "@") numAdjacent++;
            if (grid[i - 1]?.[j - 1] === "@") numAdjacent++;
            if (grid[i - 1]?.[j + 1] === "@") numAdjacent++;
            if (grid[i + 1]?.[j - 1] === "@") numAdjacent++;
            if (grid[i + 1]?.[j + 1] === "@") numAdjacent++;
            if (numAdjacent < 4) {
              row[j] = "x";
              removed = true;
              sum++;
            }
          }
        }
      }

    }
    console.log("Sum: " + sum);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}