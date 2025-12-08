# Day 6: Grid Operations

## Problem Description

You have a grid where each column contains numbers and operators. You need to process each column to perform mathematical operations.

## Part 1

The grid contains:
- Numbers in the upper rows
- Operators (`+` or `*`) in the bottom row

For each column:
1. Read numbers from top to bottom
2. Apply the operator from the bottom row to combine the numbers
3. Sum all column results

### Example
```
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +
```

Column 1: 123 * 45 * 6 = 33210
Column 2: 328 + 64 + 98 = 490
Column 3: 51 * 387 * 215 = 4247955
Column 4: 64 + 23 + 314 = 401

Total: 33210 + 490 + 4247955 + 401 = 4282056

## Part 2

Process columns from bottom to top instead of top to bottom. The operators are still in the bottom row, but you read numbers from bottom to top.

### Example
```
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +
```

Column 1: 6 * 45 * 123 = 33210 (same in this case)
Column 2: 98 + 64 + 328 = 490 (same in this case)
Column 3: 215 * 387 * 51 = 4247955 (same in this case)
Column 4: 314 + 23 + 64 = 401 (same in this case)

Note: The order matters for non-commutative operations or if the grid structure differs.

## Solution

- **File**: `6-1.ts` (Part 1), `6-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

The solution parses the grid, extracts operators from the last row, and processes each column by reading numbers and applying the corresponding operator.

