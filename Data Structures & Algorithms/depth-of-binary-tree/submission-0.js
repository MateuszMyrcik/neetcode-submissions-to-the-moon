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
    constructor() {
        this.max = 0;
        this.temp = 0;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
    if (!root) {
        return this.max;
    }

    this.temp++;

    if (this.temp > this.max) {
        this.max = this.temp;
    }

    this.maxDepth(root.left)
    this.maxDepth(root.right)

    this.temp--;
    return this.max

    }
}
