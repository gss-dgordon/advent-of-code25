import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
  const filePath = path.join(__dirname, "1-1.txt");
  let password = 0;
  let curIndex = 50;
  
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    
    lines.forEach((line) => {
      const direction = line[0];
      const count = parseInt(line.slice(1) || "0", 10);
      
      switch (direction) {
        case "R":
          curIndex = (curIndex + count) % 100;
          break;
        case "L":
          curIndex = (curIndex - count + 100) % 100;
          break;
      }
      
      if (curIndex === 0) {
        password++;
      }
    });
    
    console.log("Password:", password);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

main();