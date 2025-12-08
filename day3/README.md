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

The escalator doesn't move. The Elf explains that it probably needs more joltage to overcome the static friction of the system and hits the big red "joltage limit safety override" button.

Now, you need to make the largest joltage by turning on exactly twelve batteries within each bank.

The joltage output for the bank is still the number formed by the digits of the batteries you've turned on; the only difference is that now there will be 12 digits in each bank's joltage output instead of two.

### Example
Consider again the example from before:
```
987654321111111
811111111111119
234234234234278
818181911112111
```

Now, the joltages are much larger:
- In `987654321111111`, the largest joltage can be found by turning on everything except some 1s at the end to produce `987654321111`.
- In the digit sequence `811111111111119`, the largest joltage can be found by turning on everything except some 1s, producing `811111111119`.
- In `234234234234278`, the largest joltage can be found by turning on everything except a 2 battery, a 3 battery, and another 2 battery near the start to produce `434234234278`.
- In `818181911112111`, the joltage `888911112111` is produced by turning on everything except some 1s near the front.

The total output joltage is now much larger: `987654321111 + 811111111119 + 434234234278 + 888911112111 = 3121910778619`.

## Solution

- **File**: `3-1.ts` (Part 1), `3-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

Part 1 iterates through all pairs of consecutive digits and finds the maximum.
Part 2 uses a greedy approach to select the highest possible digits while maintaining order to form a 12-digit number.

