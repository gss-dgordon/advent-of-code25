import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
  const filePath = path.join(__dirname, "1-1.txt");
  const tumbler: number[] = Array.from({ length: 100 }, (_, i) => i);
  let password = 0;
  let curIndex = 50;
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    
    lines.forEach((line) => {
      const direction = line[0];
      const count = parseInt(line.slice(1) || "0", 10);
      console.log(line);
      
      if (direction === "R") {
        // Increase numbers and loop around at max (100)
        const num = curIndex + (count % 100);
        curIndex = num >= 100 ? num - 100 : num;
      } else if (direction === "L") {
        // Decrease numbers and loop around
        const num = curIndex - (count % 100);
        curIndex = num < 0 ? 100 + num : num;
      }
      if(curIndex === 0) {
        password++;
      }
      console.log("Current Index: ",curIndex);
      console.log("Current Value: ",tumbler[curIndex]);
    });
    console.log("Password: ",password);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

main();