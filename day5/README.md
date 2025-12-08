# Day 5: Fresh ID Ranges

## Problem Description

You have a list of ID ranges that are considered "fresh", followed by a list of individual IDs. You need to determine which IDs are fresh.

## Part 1

The input contains:
1. A list of fresh ranges in the format `start-end` (one per line)
2. A blank line
3. A list of individual IDs (one per line)

Count how many individual IDs fall within any of the fresh ranges.

### Example
```
10-20
30-40

15
25
35
```

- ID 15 is in range 10-20 → Fresh
- ID 25 is not in any range → Not fresh
- ID 35 is in range 30-40 → Fresh

Result: 2 fresh IDs

## Part 2

Instead of counting individual IDs, count the total number of IDs that are considered fresh. This means:
1. Merge overlapping or adjacent ranges
2. Count the total number of IDs in all merged ranges

### Example
```
10-20
15-25
30-40
```

Merged ranges: 10-25, 30-40
Total fresh IDs: (25-10+1) + (40-30+1) = 16 + 11 = 27

## Solution

- **File**: `5-1.ts` (Part 1), `5-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

Part 1 checks each ID against all ranges to see if it falls within any range.
Part 2 merges overlapping/adjacent ranges and calculates the total count of IDs in all ranges.

