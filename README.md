# Advent of Code 2025

This repository contains my solutions to the [Advent of Code 2025](https://adventofcode.com/2025) programming challenges. These puzzles are solved **without the use of AI** to keep my problem-solving and programming skills sharp.

## What is Advent of Code?

[Advent of Code](https://adventofcode.com/2025/about) is an Advent calendar of small programming puzzles for a variety of skill levels that can be solved in any programming language you like. Created by Eric Wastl, it's used by people for:

- Interview preparation
- Company training
- University coursework
- Practice problems
- Speed contests
- Friendly challenges

You don't need a computer science background to participate - just a little programming knowledge and some problem-solving skills will get you pretty far. Every problem has a solution that completes in at most 15 seconds on ten-year-old hardware.

## Why Solve Without AI?

As stated on the Advent of Code website:

> **Should I use AI to solve Advent of Code puzzles?** No. If you send a friend to the gym on your behalf, would you expect to get stronger? Advent of Code puzzles are designed to be interesting for humans to solve - no consideration is made for whether AI can or cannot solve a puzzle.

Solving these puzzles manually helps you:

- **Sharpen problem-solving skills**: Work through complex logic and algorithms yourself
- **Improve coding proficiency**: Practice writing clean, efficient code
- **Learn new techniques**: Discover patterns and approaches you might not have considered
- **Build confidence**: Gain satisfaction from solving challenging problems independently
- **Prepare for interviews**: Many technical interviews test similar problem-solving abilities

## Project Setup

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd advent-of-code25
```

2. Install dependencies:
```bash
npm install
```

### Project Structure

```
advent-of-code25/
├── day1/              # Day 1 solutions
│   ├── 1-1.ts        # Day 1, Part 1 solution
│   ├── 1-2.ts        # Day 1, Part 2 solution
│   ├── 1-1.txt       # Day 1 input file
│   └── test.txt      # Test input (if applicable)
├── day2/              # Day 2 solutions (when created)
│   └── ...
├── index.ts           # Main runner script
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # This file
```

## Running Solutions

### Run a Specific Day and Part

To run a specific day and part, use:

```bash
npm start -- <day> [part]
```

**Examples:**
```bash
# Run Day 1, Part 1
npm start -- 1 1

# Run Day 1, Part 2
npm start -- 1 2

# Run Day 5, Part 1 (defaults to part 1 if not specified)
npm start -- 5
```

### Run All Solutions

To run all solutions defined in `index.ts`, simply run:

```bash
npm start
```

The runner will execute all days and parts listed in the `days` array in `index.ts`.

### Building the Project

To compile TypeScript to JavaScript:

```bash
npm run build
```

To watch for changes and rebuild automatically:

```bash
npm run build:watch
```

To clean the build output:

```bash
npm run clean
```

## Creating a New Solution

1. Create a new folder for the day (e.g., `day2/`)
2. Create solution files:
   - `{day}-{part}.ts` for each part (e.g., `2-1.ts`, `2-2.ts`)
3. Add your input file (e.g., `2-1.txt`)
4. Update `index.ts` to include your new day/part in the `days` array

### Solution File Template

Each solution file should:
- Read the input file from the same directory
- Process the input according to the puzzle requirements
- Output the result

Example structure:
```typescript
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
  const filePath = path.join(__dirname, "1-1.txt");
  
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").filter(line => line.trim() !== "");
    
    // Your solution logic here
    
    console.log("Result:", result);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

main();
```

## Getting Your Input

1. Visit [Advent of Code 2025](https://adventofcode.com/2025)
2. Log in (using OAuth through Reddit, GitHub, etc.)
3. Navigate to the specific day's puzzle
4. Copy your personalized input from the puzzle page
5. Save it as `{day}-{part}.txt` in the corresponding day folder

**Note:** Each person gets a unique input file, so make sure to use your own input!

## Tips for Solving

- **Start with the examples**: Test your solution against the examples given in the puzzle description
- **Read carefully**: Make sure you understand all the requirements before coding
- **Build test cases**: Create small test cases you can verify by hand
- **Debug systematically**: Use console.log to trace through your logic
- **Take breaks**: If stuck, step away and come back with fresh eyes
- **Ask for help**: Check the [Advent of Code subreddit](https://www.reddit.com/r/adventofcode/) for hints if needed

## Resources

- [Advent of Code 2025](https://adventofcode.com/2025) - Main website
- [About Advent of Code](https://adventofcode.com/2025/about) - More information about the event
- [Advent of Code Subreddit](https://www.reddit.com/r/adventofcode/) - Community discussions and hints

## License

This repository contains my personal solutions to Advent of Code puzzles. The puzzle content and design are the property of Advent of Code (Copyright 2015-2025 Advent of Code. All rights reserved).

---

**Remember**: The goal is to improve your skills through practice. Take your time, enjoy the puzzles, and celebrate each solution you complete on your own! 🎄

