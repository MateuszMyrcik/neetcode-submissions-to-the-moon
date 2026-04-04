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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
      return;
    }

    const rootValue = preorder[0];
    const midIndex = inorder.indexOf(rootValue)


    const leftRoot = this.buildTree(preorder.slice(1, midIndex + 1), inorder.slice(0, midIndex))
    const rightRoot = this.buildTree(preorder.slice(midIndex + 1, preorder.length), inorder.slice(midIndex + 1, inorder.length))

    return new TreeNode(rootValue, leftRoot, rightRoot)
  }

}
