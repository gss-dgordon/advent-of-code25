# Day 1: The Circular Dial

## Problem Description

You have a circular dial with 100 positions (0-99). You start at position 50. You receive a series of instructions, each consisting of a direction (L for left, R for right) followed by a number indicating how many positions to move.

The dial wraps around: moving right from 99 goes to 0, and moving left from 0 goes to 99.

## Part 1

Count how many times you end up exactly at position 0 after following all the instructions.

### Example
```
L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
```

Starting at position 50, follow each instruction and count how many times you land on position 0.

## Part 2

Count how many times you pass through position 0 (including both landing on it and passing through it during a move).

## Solution

- **File**: `1-1.ts` (Part 1), `1-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

The solution tracks the current position on the dial and processes each instruction, counting occurrences of position 0.

