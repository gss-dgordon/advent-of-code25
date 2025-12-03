import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runDay(dayNumber: number, partNumber: number) {
  const dayFolder = `day${dayNumber}`;
  
  try {
    console.log(`\n${"=".repeat(50)}`);
    console.log(`Day ${dayNumber}, Part ${partNumber}`);
    console.log(`${"=".repeat(50)}\n`);
    
    // Import the day file (use .js extension for ES modules, TypeScript will resolve to .ts)
    const dayModule = await import(`./${dayFolder}/${dayNumber}-${partNumber}.js`);
    
    // Call the exported main function if it exists
    if (dayModule.main && typeof dayModule.main === 'function') {
      dayModule.main();
    }
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ERR_MODULE_NOT_FOUND" || err.code === "MODULE_NOT_FOUND") {
      console.log(`Day ${dayNumber}, Part ${partNumber} not yet implemented.`);
    } else {
      console.error(`Error running Day ${dayNumber}, Part ${partNumber}:`, error);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  // If specific day/part provided, run only that
  if (args.length >= 1) {
    const dayArg = args[0];
    if (!dayArg) {
      console.error("Day number is required");
      process.exit(1);
    }
    const day = parseInt(dayArg, 10);
    const part = args[1] ? parseInt(args[1], 10) : 1;
    
    if (isNaN(day) || day < 1 || day > 25) {
      console.error("Day must be between 1 and 25");
      process.exit(1);
    }
    
    await runDay(day, part);
    return;
  }
  
  // Otherwise, run all days
  const days: Array<{ day: number; part: number }> = [
    { day: 1, part: 1 },
    { day: 1, part: 2 },
    { day: 2, part: 1 },
    { day: 2, part: 2 },
    // ... etc
  ];
  
  for (const { day, part } of days) {
    await runDay(day, part);
  }
}

main().catch(console.error);

