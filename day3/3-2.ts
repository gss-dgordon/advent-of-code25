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
        line = line.trim();
        console.log("Line: " + line);
        let highest: number = 0;
        let highestCombo = "";
        let start = 0;
        let startIndex = 0;
        let charsLeft = 12
        // get highest number to start with
        for(let i = 0; i <= line.length-charsLeft; i++) {
            if(parseInt(line.charAt(i)) > start) {
                start = parseInt(line.charAt(i));
                startIndex = i;
            }
        }
        charsLeft--;
        // short circuit if there's only 11 characters left
        if (line.length - startIndex === 12) {
            console.log("Short Circuit");
            highest = parseInt(line.substring(startIndex));
        } else {
            // this is kinda gross, find a better way
            highestCombo = line.charAt(startIndex);   
            let index = startIndex+1;   
            while(charsLeft > 0 && index <= line.length - charsLeft) {
                let tempHighest = highestCombo + line.charAt(index);
                const stIndex = index;
                const substring = line.substring(index + 1, line.length-charsLeft+1);
                for(let i = 0; i < substring.length; i++) {
                    const num = parseInt(highestCombo + substring.charAt(i));
                    if(num > parseInt(tempHighest)) {
                        tempHighest = num.toString();
                        index = stIndex + i + 1;
                    }
                }
                highestCombo = tempHighest;
                index++;
                charsLeft--;
            }
            highest = parseInt(highestCombo);
        }

        console.log("Jolts: ", highestCombo);
        sum += highest;
    });
    
    console.log("Total Jolts: " + sum);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}