import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function checkInvalidSequence(str: string): boolean {
  // string must be even and not start with 0
  if (str.length % 2 !== 0) {
    return false;
  }
  if(str[0] === "0") return false;
  
  const halfLength = str.length / 2;
  const firstHalf = str.substring(0, halfLength);
  const lastHalf = str.substring(halfLength);
  
  // Check if first half matches last half
  return firstHalf === lastHalf;
}
export function main() {
  const filePath = path.join(__dirname, "2.txt");
  
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const productIds = data.split(",").filter(line => line.trim() !== "");
    let numInvalid = 0;
    productIds.forEach((id) => {
      const start = parseInt(id.split("-")[0] ?? "0");
      const end = parseInt(id.split("-")[1] ?? "0");
      for (let i = start; i <= end; i++) {
        const str = i.toString();
        if(checkInvalidSequence(str)) {
          console.log("Invalid: " + str);
          numInvalid += parseInt(str);
        }
      }
    });
    
    console.log("NumInvalid:", numInvalid);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}