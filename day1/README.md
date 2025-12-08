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

Due to newer security protocols, you need to use password method 0x434C49434B. This means you're actually supposed to count the number of times any click causes the dial to point at 0, regardless of whether it happens during a rotation or at the end of one.

### Example
Following the same rotations as Part 1:
- The dial starts by pointing at 50.
- The dial is rotated L68 to point at 82; during this rotation, it points at 0 once.
- The dial is rotated L30 to point at 52.
- The dial is rotated R48 to point at 0.
- The dial is rotated L5 to point at 95.
- The dial is rotated R60 to point at 55; during this rotation, it points at 0 once.
- The dial is rotated L55 to point at 0.
- The dial is rotated L1 to point at 99.
- The dial is rotated L99 to point at 0.
- The dial is rotated R14 to point at 14.
- The dial is rotated L82 to point at 32; during this rotation, it points at 0 once.

In this example, the dial points at 0 three times at the end of a rotation, plus three more times during a rotation. So the new password would be 6.

**Important**: If the dial were pointing at 50, a single rotation like R1000 would cause the dial to point at 0 ten times before returning back to 50!

## Solution

- **File**: `1-1.ts` (Part 1), `1-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

The solution tracks the current position on the dial and processes each instruction, counting occurrences of position 0.

