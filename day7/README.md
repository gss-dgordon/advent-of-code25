# Day 7: Laboratories

## Problem Description

You find yourself in a teleporter lab with a broken tachyon manifold. The diagnostic tool shows error code 0H-N0, indicating an issue with one of the tachyon manifolds. You need to analyze the tachyon beam splitting behavior to repair the teleporter.

## Part 1

A tachyon beam enters the manifold at the location marked `S` and always moves downward. The beam passes freely through empty space (`.`). However, when a tachyon beam encounters a splitter (`^`), the beam is stopped, and instead, two new tachyon beams continue from the immediate left and right of the splitter.

### Rules
- Tachyon beams always move downward
- Beams pass freely through empty space (`.`)
- When a beam hits a splitter (`^`), it stops and creates two new beams (left and right)
- Multiple beams can occupy the same cell
- Beams continue until they hit a splitter or exit the manifold

### Example
```
.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............
```

The beam extends downward from `S` until it reaches the first splitter, then splits into two beams. Those beams continue and split further when they encounter more splitters.

**Goal**: Count how many times the beam is split in total.

In the example above, the beam is split **21 times**.

## Part 2

The teleporter actually uses a **quantum tachyon manifold**. With quantum tachyons, only a single particle is sent through, and it takes both the left and right path at each splitter simultaneously.

Using the many-worlds interpretation: each time a particle reaches a splitter, time itself splits. In one timeline, the particle went left; in another, it went right.

**Goal**: Count the total number of different timelines that would exist after a single particle completes all possible journeys through the manifold.

In the example above, there are **40 different timelines**.

### Example Timelines
- Timeline where particle always went left
- Timeline where particle alternated left/right
- Timeline where particle took a different path but ended at the same point
- And many more...

## Solution

- **File**: `7-1.ts` (Part 1), `7-2.ts` (Part 2)
- **Input**: `1.txt`
- **Test Input**: `test.txt`

Part 1 uses recursive traversal to track beam splitting, marking visited cells and counting each splitter encounter.

Part 2 requires tracking all possible paths through the manifold to count unique end positions or timelines.

