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
    lines.forEach((line) => {
      let highest: number = 0;

      for(let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
          const num = parseInt(line.charAt(i) + line.charAt(j));
          if(num > highest)
            highest = num;
        }
      };
      console.log("Jolts: ", highest);
      sum += highest;
    });
    
    console.log("Total Jolts: " + sum);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}