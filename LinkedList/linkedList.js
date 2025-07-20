// Linked List

// A linked list is a linear data structure where elements, called nodes, are not stored contiguously in memory.

// Each node contains:
// - `data`: the value being stored
// - `next`: a reference (or pointer) to the next node in the sequence

// Advantages:
// - Dynamic size
// - Easy insertion/deletion

// Disadvantages:
// - No random access (O(n) lookup)
// - Extra memory for references

// Types:
// 1. Singly Linked List (each node points to the next)
// 2. Doubly Linked List (each node points to next and previous)
// 3. Circular Linked List (last node links to the first)

//Head --> [10 | o-] --> [20 | o-] --> [30 | null]

// Each box represents a node:

// Left side is the data (e.g., 10, 20, 30)

// Right side is the next pointer

// null means it's the end of the list


// Singly Linked List
//Head
//  ↓
// [1] → [2] → [3] → [4] → [5] → null
                       //   ↑
                      //  Tail
