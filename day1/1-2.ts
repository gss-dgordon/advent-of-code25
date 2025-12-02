import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
  const filePath = path.join(__dirname, "1-1.txt");
  const tumbler: number[] = Array.from({ length: 100 }, (_, i) => i);
  let password = 0;
  let numPassed = 0;
  let curIndex = 50;
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    
    lines.forEach((line) => {
      const direction = line[0];
      const count = parseInt(line.slice(1) || "0", 10);
      console.log(line);
      let div = 0;
      div = Math.floor(count / 100);
      numPassed += div;
      console.log("Div: ",div);
      console.log("Remainder: ", count % 100);

      if (direction === "R") {
        // Increase numbers and loop around at max (100)
        curIndex = curIndex + (count % 100);
        if(curIndex >= 100) {
            console.log("Passed 100");
            numPassed++;
            curIndex -= 100;
        }
      } else if (direction === "L") {
        // Decrease numbers and loop around
        curIndex === 0 ? curIndex = 100 : curIndex;
        curIndex = curIndex - (count % 100);
        if(curIndex < 0) {
            console.log("Passed 0");
            numPassed++;
            curIndex += 100;
        } else if(curIndex === 0)
            numPassed++;
      }
      if(curIndex === 0) {
        numPassed--;
        password++;
      }
      console.log("Current Index: ",curIndex);
      console.log("Loops: ", numPassed);
      console.log("Current Password: ",password );
    });
    console.log("Password: ",password + numPassed);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

main();