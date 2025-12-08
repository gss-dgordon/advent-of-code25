# Day 2: Product ID Validation

## Problem Description

You have a list of product ID ranges in the format `start-end`. For each range, you need to check all numbers in that range for invalid sequences.

## Part 1

An invalid sequence is a number where:
- The number has an even number of digits
- The number does not start with 0
- The first half of the digits equals the second half (e.g., "1212", "3333")

For each range, find all invalid sequences and sum their numeric values.

### Example
```
11-22,95-115,998-1012
```

Check each number in each range. For example, in the range 11-22:
- 11: "11" - first half "1" equals second half "1" → Invalid
- 12: "12" - first half "1" does not equal second half "2" → Valid
- 22: "22" - first half "2" equals second half "2" → Invalid

Sum all invalid sequence values.

## Part 2

An invalid sequence is now defined as a number where:
- It matches the Part 1 criteria (even length, first half equals second half), OR
- The number has a repeating pattern that repeats throughout the entire string (e.g., "121212" repeats "12" three times, "333" repeats "3" three times, "123123" repeats "123" twice)

For each range, find all invalid sequences and sum their numeric values.

### Example
```
11-22,95-115
```

In addition to Part 1 invalid sequences, numbers like:
- 111: "111" - repeats "1" three times → Invalid
- 1212: "1212" - repeats "12" twice → Invalid (also matches Part 1)
- 123123: "123123" - repeats "123" twice → Invalid

## Solution

- **File**: `2-1.ts` (Part 1), `2-2.ts` (Part 2)
- **Input**: `2.txt`
- **Test Input**: `test.txt`

The solution parses each range, iterates through all numbers in the range, checks for invalid sequences (palindromes with even length), and sums their values.

