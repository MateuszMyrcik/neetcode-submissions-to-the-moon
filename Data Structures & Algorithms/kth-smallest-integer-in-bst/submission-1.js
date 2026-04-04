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
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
   constructor() {
    this.orderedArr = [];
   }

  kthSmallest(root, k) {
    this.getSortedBSTValues(root, k);


    return this.orderedArr[k - 1];

  }

  getSortedBSTValues(root, k) {
    if (!root || this.orderedArr.length >= k) {
      return;
    }

    this.getSortedBSTValues(root.left, k);
    this.orderedArr.push(root.val);
    this.getSortedBSTValues(root.right, k);

    return;

  }
}
