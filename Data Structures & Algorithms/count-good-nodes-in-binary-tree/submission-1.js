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
  

  goodNodes(root) {
    return this.dfs(root, root.val)

    
  }

  dfs(root, localMax) {
     let goodNodes = 0;
    if (!root) return goodNodes;

    if (!localMax || root.val >= localMax) {
      localMax = root.val
      goodNodes++;
    };
    const leftGoodNodes = this.dfs(root.left, localMax)
    const rightGoodNodes = this.dfs(root.right, localMax)
    return goodNodes + leftGoodNodes + rightGoodNodes;

  }
}

