import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const memo = new Map<string, number>();

function getCacheKey(sIndex: number, i: number): string {
    return `${sIndex},${i}`;
}

function recurse(grid: string[][], sIndex: number, i: number): number {
    if(i === grid.length) {
        return 1;
    }
    
    if(grid[i]?.[sIndex] === undefined) {
        return 0;
    }
    
    const cacheKey = getCacheKey(sIndex, i);
    if (memo.has(cacheKey)) {
        return memo.get(cacheKey)!;
    }
    
    let result: number;
    
    if(grid[i]?.[sIndex] === "^") {
        let sumBefore = 0;
        let sumAfter = 0;
        let before = grid[i]?.[sIndex-1];
        let after = grid[i]?.[sIndex+1];
        if(before === "."){
            sumBefore = recurse(grid, sIndex-1, i);
        }
        if(after === ".") {
            sumAfter = recurse(grid, sIndex+1, i);
        } 
        result = sumBefore + sumAfter;
    } else if(grid[i]?.[sIndex] === ".") {
        result = recurse(grid, sIndex, i+1);
    } else {
        result = 0;
    }
    
    memo.set(cacheKey, result);
    return result;
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
    if (sIndex !== undefined && sIndex !== -1) {
        sum = recurse(grid, sIndex, 1);
    }

    console.log("Sum: " + (sum));
  } catch (err) {
    console.error("Error reading file:", err);
  }
}