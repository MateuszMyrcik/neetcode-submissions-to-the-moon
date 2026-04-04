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

// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @return {number}
//      */
//     goodNodes(root) {}
// }

class Solution {
  constructor() {
    this.counter = 0;
  }

  goodNodes(root) {
    this.dfs(root, root.val)

    return this.counter;
  }

  dfs(root, localMax) {
    if (!root) return;

    if (!localMax || root.val >= localMax) {
      localMax = root.val
      this.counter++;
    };
    
    this.dfs(root.left, localMax)
    this.dfs(root.right, localMax)
  }
}

