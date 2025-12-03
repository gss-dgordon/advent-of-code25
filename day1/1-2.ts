import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function main() {
  const filePath = path.join(__dirname, "1.txt");
  let password = 0;
  let numPassed = 0;
  let curIndex = 50;
  
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    
    lines.forEach((line) => {
      const direction = line[0];
      const count = parseInt(line.slice(1));
      
      // Count full rotations
      numPassed += Math.floor(count / 100);
            
      switch (direction) {
        case "R":
          curIndex = curIndex + (count % 100);
          // If we wrapped around but didn't end at 0, we passed through 0
          if (curIndex >= 100) {
            numPassed++;
            curIndex -= 100;
          }
          break;
        case "L":
          curIndex === 0 ? curIndex = 100 : curIndex;
          curIndex = curIndex - (count % 100);
          // If we wrapped around but didn't end at 0, we passed through 0
          if (curIndex < 0) {
            numPassed++;
            curIndex += 100;
          } else if (curIndex === 0) {
            numPassed++;
          }
          break;
      }
      
      // If we end at 0, count it as a password
      if (curIndex === 0) {
        numPassed--;
        password++;
      }
    });
    
    console.log("Password:", password + numPassed);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}
