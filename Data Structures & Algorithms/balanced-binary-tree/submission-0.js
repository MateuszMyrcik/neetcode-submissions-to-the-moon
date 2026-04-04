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
     * @return {boolean}
     */
    isBalanced(root) {
           if(!root) {
        return true
    }

    

    function dfs(root) {
        if(!root) {
            return 0;
        }

        const leftNode = dfs(root.left);
        const rightNode = dfs(root.right);

        if(leftNode === -1 || rightNode === -1) {
            return -1
        }
        

        if (leftNode - rightNode  > 1 || rightNode - leftNode > 1) {
            return -1;
        }


        return 1 + Math.max(leftNode, rightNode)

    }


    const height = dfs(root)
    

    return height !== -1
    
    }
}
