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

Iteratively remove all `@` symbols that have fewer than 4 adjacent `@` symbols. After each removal pass, check again (since removing symbols changes adjacency). Continue until no more symbols can be removed. Count the total number of symbols removed.

## Solution

- **File**: `4-1.ts` (Part 1), `4-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

Part 1 scans the grid once and counts `@` symbols with fewer than 4 adjacent `@` symbols.
Part 2 uses a while loop to repeatedly remove symbols until no more can be removed, marking them as removed (e.g., with 'x') and counting the total removed.

