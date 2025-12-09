import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function recurse(grid: string[][], sIndex: number, i: number, sum: number): number {
    if(grid[i]?.[sIndex] === undefined) return sum;
    if(grid[i]?.[sIndex] === "^") {
        sum++;
        let before = grid[i]?.[sIndex-1];
        let after = grid[i]?.[sIndex+1];
        if(before === ".") sum = recurse(grid, sIndex-1, i, sum);
        if(after === ".") sum = recurse(grid, sIndex+1, i, sum);
        return sum;
    };
    if(grid[i]?.[sIndex] === ".") {
        grid[i]![sIndex] = "|";
        sum = recurse(grid, sIndex, i+1, sum);
        console.log("cell set");
    }
    return sum;
}

export function main() {
  const filePath = path.join(__dirname, "1.txt");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").map((line: string) => line.trim()).filter((line: string) => line !== "");
    let sum = 0;
    let grid: string[][] = [];
    lines.forEach((line: string) => {
        grid.push(Array.from(line));
    });
    // find index of S on first line
    let sIndex = grid[0]?.indexOf("S");
    if (sIndex) {
        sum = recurse(grid, sIndex, 1, sum);
    }
    grid.forEach((row: string[]) => {
        console.log(row.join(""));
    });
    console.log("Sum: " + (sum));
  } catch (err) {
    console.error("Error reading file:", err);
  }
}