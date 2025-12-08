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

The Elves start bringing their spoiled inventory to the trash chute at the back of the kitchen.

So that they can stop bugging you when they get new inventory, the Elves would like to know all of the IDs that the fresh ingredient ID ranges consider to be fresh. An ingredient ID is still considered fresh if it is in any range.

Now, the second section of the database (the available ingredient IDs) is irrelevant. You only need to process the fresh ingredient ID ranges.

### Example
Here are the fresh ingredient ID ranges from the example:
```
3-5
10-14
16-20
12-18
```

The ingredient IDs that these ranges consider to be fresh are: 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, and 20.

After merging overlapping ranges (12-18 overlaps with both 10-14 and 16-20), we get: 3-5, 10-20.

So, in this example, the fresh ingredient ID ranges consider a total of **14 ingredient IDs** to be fresh.

## Solution

- **File**: `5-1.ts` (Part 1), `5-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

Part 1 checks each ID against all ranges to see if it falls within any range.
Part 2 merges overlapping/adjacent ranges and calculates the total count of IDs in all ranges.

