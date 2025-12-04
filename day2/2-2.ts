import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { checkInvalidSequence as checkInvalidSequence2_1 } from "./2-1.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function checkInvalidSequence(str: string): boolean {
  // if string is even, do the same as 2-1
  if (str.length % 2 === 0) {
    if (checkInvalidSequence2_1(str)) return true;
  }

  // check for repeating patterns that repeat 1 to many times for the whole string
  // try different pattern lengths starting from position 0
  for (let i = 1; i <= Math.floor(str.length / 2); i++) {
    // string length must be divisible by pattern length for it to repeat evenly
    if (str.length % i !== 0) {
      continue;
    }
    
    const pattern = str.substring(0, i);
    // check if this pattern repeats throughout the entire string
    let isRepeating = true;
    for(let k = 0; k < str.length; k += i) {
      const check = str.substring(k, k + i);
      if(check !== pattern) {
        isRepeating = false;
        break;
      }
    }
    // if pattern repeats for the whole string, return true immediately
    if (isRepeating) {
      return true;
    }
  }
  
  return false;
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
        //console.log("Checking: " + i);
        const str = i.toString();
        if(checkInvalidSequence(str)) {
          numInvalid += parseInt(str);
        }
      }
    });
    
    console.log("NumInvalid:", numInvalid);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}
