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

The big cephalopods come back to check on how things are going. When they see that your grand total doesn't match the one expected by the worksheet, they realize they forgot to explain how to read cephalopod math.

Cephalopod math is written right-to-left in columns. Each number is given in its own column, with the most significant digit at the top and the least significant digit at the bottom. (Problems are still separated with a column consisting only of spaces, and the symbol at the bottom of the problem is still the operator to use.)

### Example
Here's the example worksheet again:
```
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +
```

Reading the problems right-to-left one column at a time, the problems are now quite different:

- **The rightmost problem** is `4 + 431 + 623 = 1058`
- **The second problem from the right** is `175 * 581 * 32 = 3253600`
- **The third problem from the right** is `8 + 248 + 369 = 625`
- **Finally, the leftmost problem** is `356 * 24 * 1 = 8544`

Now, the grand total is `1058 + 3253600 + 625 + 8544 = 3263827`.

**Key difference**: Numbers are read from bottom (least significant digit) to top (most significant digit) within each column, and columns are processed from right to left.

## Solution

- **File**: `6-1.ts` (Part 1), `6-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

The solution parses the grid, extracts operators from the last row, and processes each column by reading numbers and applying the corresponding operator.

