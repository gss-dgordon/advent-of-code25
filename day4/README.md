# Day 4: Grid of Symbols

## Problem Description

You have a grid containing `@` symbols and other characters. You need to count or process these symbols based on their adjacent neighbors.

## Part 1

Count how many `@` symbols have fewer than 4 adjacent `@` symbols (including diagonals). Adjacent means the 8 surrounding cells (up, down, left, right, and the 4 diagonals).

### Example
```
@ . @
. @ .
@ . @
```

The center `@` has 4 adjacent `@` symbols, so it wouldn't be counted. Corner `@` symbols have fewer adjacent `@` symbols.

## Part 2

Now, the Elves just need help accessing as much of the paper as they can.

Once a roll of paper can be accessed by a forklift, it can be removed. Once a roll of paper is removed, the forklifts might be able to access more rolls of paper, which they might also be able to remove. How many total rolls of paper could the Elves remove if they keep repeating this process?

The process works as follows:
1. Remove all `@` symbols that have fewer than 4 adjacent `@` symbols (these are accessible by forklifts)
2. After removal, check again (since removing symbols changes adjacency)
3. Continue iteratively until no more symbols can be removed
4. Count the total number of symbols removed across all iterations

### Example
Starting with the same example as Part 1, the process iteratively removes rolls of paper:
- **Remove 13 rolls of paper** (first pass)
- **Remove 12 rolls of paper** (second pass)
- **Remove 7 rolls of paper** (third pass)
- **Remove 5 rolls of paper** (fourth pass)
- **Remove 2 rolls of paper** (fifth pass)
- **Remove 1 roll of paper** (sixth pass)
- **Remove 1 roll of paper** (seventh pass)
- **Remove 1 roll of paper** (eighth pass)
- **Remove 1 roll of paper** (ninth pass)

Stop once no more rolls of paper are accessible by a forklift. In this example, a total of **43 rolls of paper** can be removed.

## Solution

- **File**: `4-1.ts` (Part 1), `4-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

Part 1 scans the grid once and counts `@` symbols with fewer than 4 adjacent `@` symbols.
Part 2 uses a while loop to repeatedly remove symbols until no more can be removed, marking them as removed (e.g., with 'x') and counting the total removed.

