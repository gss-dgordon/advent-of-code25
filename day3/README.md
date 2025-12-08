# Day 3: Maximum Jolts

## Problem Description

You have a string of digits. You need to find the maximum number that can be formed by selecting digits from the string.

## Part 1

Find the highest two-digit number that can be formed by selecting any two consecutive digits from the string. Sum these maximum values across all lines.

### Example
```
For the string "12345":
- Possible two-digit numbers: 12, 23, 34, 45
- Maximum: 45
```

## Part 2

Find the highest 12-digit number that can be formed by selecting digits from the string, where:
- You must select digits in order (left to right)
- You must use exactly 12 digits
- You want to maximize the resulting number

Sum these maximum values across all lines.

## Solution

- **File**: `3-1.ts` (Part 1), `3-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

Part 1 iterates through all pairs of consecutive digits and finds the maximum.
Part 2 uses a greedy approach to select the highest possible digits while maintaining order to form a 12-digit number.

