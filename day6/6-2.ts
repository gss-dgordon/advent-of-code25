import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  const filePath = path.join(__dirname, "1.txt");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").map(line => line.replace(/\r$/, ""));
    let sum = 0;
    let grid: string[][] = [];
    lines.forEach((line) => {
      grid.push(Array.from(line));
    });
    //console.log(grid);
    // grab last row and build operators array
    let operators = [];
    let temp = grid[grid.length - 1];
    if (temp === undefined) return;
    for (let i = 0; i < temp.length; i++) {
      const operator = temp[i];
      if (operator === undefined) continue;
      if (operator === "+" || operator === "*") {
        operators.push(operator);
      }
    }
    // remove operators from grid
    grid.pop();

    // build column from top to bottom
    let column = grid[grid.length - 1];
    if (column === undefined) return;
    let colIndex = column.length - 1;
    let curResult = 0;
    let operator = operators.pop();
    for (let j = colIndex; j >= 0; j--) {
      let cell: string | undefined = "";
      for (let i = 0; i < column.length; i++) {
        const tempCell = grid[i]?.[j];
        if (tempCell === undefined || tempCell === " ") continue;
        cell += tempCell;
      }
      if (cell === "" || cell === undefined) {
        sum += curResult;
        curResult = 0;
        operator = operators.pop();
        continue;
      }
      if (curResult === 0 && cell !== undefined) {
        curResult = parseInt(cell);
      } else if (operator === "+" && cell !== undefined) {
        curResult += parseInt(cell);
      } else if (operator === "*" && cell !== undefined) {
        curResult *= parseInt(cell);
      }
    }
    sum += curResult;

    console.log("Sum: " + sum);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}