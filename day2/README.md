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

The clerk quickly discovers that there are still invalid IDs in the ranges. Maybe the young Elf was doing other silly patterns as well?

Now, an ID is invalid if it is made only of some sequence of digits repeated at least twice. So:
- `12341234` (1234 two times) → Invalid
- `123123123` (123 three times) → Invalid
- `1212121212` (12 five times) → Invalid
- `1111111` (1 seven times) → Invalid

### Example
From the same example as before:
- `11-22` still has two invalid IDs: 11 and 22
- `95-115` now has two invalid IDs: 99 and 111
- `998-1012` now has two invalid IDs: 999 and 1010
- `1188511880-1188511890` still has one invalid ID: 1188511885
- `222220-222224` still has one invalid ID: 222222
- `1698522-1698528` still contains no invalid IDs
- `446443-446449` still has one invalid ID: 446446
- `38593856-38593862` still has one invalid ID: 38593859
- `565653-565659` now has one invalid ID: 565656
- `824824821-824824827` now has one invalid ID: 824824824
- `2121212118-2121212124` now has one invalid ID: 2121212121

Adding up all the invalid IDs in this example produces 4174379265.

## Solution

- **File**: `2-1.ts` (Part 1), `2-2.ts` (Part 2)
- **Input**: `2.txt`
- **Test Input**: `test.txt`

The solution parses each range, iterates through all numbers in the range, checks for invalid sequences (palindromes with even length), and sums their values.

