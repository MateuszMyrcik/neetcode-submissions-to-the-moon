/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  rightSideView(root) {
    if (!root) {
      return [];
    }

    const queue = new ArrayFooQueue()
    const result = [];
    let curCounter = 1;
    let nextCounter = 0;
    queue.enqueue(root)

    while (!queue.isEmpty()) {

      if (curCounter === 0) {
        curCounter = nextCounter;
        nextCounter = 0;
      }
      const current = queue.dequeue();
      curCounter--;
      if (curCounter === 0) {
        result.push(current?.val ?? 0)

      }

      if (current?.left) {
        queue.enqueue(current.left)
        nextCounter++
      }
      if (current?.right) {
        queue.enqueue(current.right)
        nextCounter++;
      }



    }
    return result

  }
}
class ArrayFooQueue {
  constructor() {
    this.items = []
  }
  clear() {
    this.items = []
  }
  enqueue(item) {
    
    this.items.push(item)
  }
  isEmpty() {
    return !this.items.length
  }
  size() {
    return this.items.length
  }
  peek() {
    return this.items[this.items.length - 1] ?? null
  }
  dequeue() {
    return this.items.shift() ?? null;
  }
}