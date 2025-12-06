import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  const filePath = path.join(__dirname, "1.txt");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").map(line => line.trim()).filter(line => line !== "");
    let sum = 0;
    let grid: string[][] = [];
    lines.forEach((line) => {
      grid.push(Array.from(line.split(" ").filter(Boolean)));
    });
    for (let c = 0; c < (grid[0]?.length ?? 0); c++) {
      let operator = "";
      let operands: number[] = [];
      // go downwards 
      for (let i = 0; i < grid.length; i++) {
        if (i === grid.length - 1) {
          const firstChar = grid[i]?.[c];
          if (firstChar !== undefined) {
            operator = firstChar;
            let tempResult = operands[0];
            if (tempResult !== undefined) {
              for (let j = 1; j < operands.length; j++) {
                const operand = operands[j];
                if (operand === undefined) break;
                if (operator === "+") {
                  tempResult += operand;
                } else if (operator === "*") {
                  tempResult *= operand;
                }
              }
              sum += tempResult;
              break;
            }
          }
        } else {
          const operand = parseInt(grid[i]?.[c] ?? "0");
          if (operand !== undefined) {
            operands.push(operand);
          }
        }
      }
    }

    console.log("Sum: " + sum);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}