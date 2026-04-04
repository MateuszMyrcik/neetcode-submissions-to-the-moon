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

  isValidBST(root) {
    const isValid = (root, left, right) => {
      if (!root) return true;

      if (root.val >= right || root.val <= left) return false;

      return isValid(root.left, left, root.val) && isValid(root.right, root.val, right)

    }
    return isValid(root, -1001, 1001);

  }
}


