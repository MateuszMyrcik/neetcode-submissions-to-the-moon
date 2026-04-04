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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
          const pT = []
    const qT = []

    function dfs(root, agg) {
        if (!root) {
            agg.push(null)
            return;
        }

        
        agg.push(root.val)
        dfs(root.left, agg)
        dfs(root.right, agg)
        return;
    }

    dfs(p, pT);
    dfs(q, qT);

    

    const isSame = pT.length === qT.length && pT.every((val, index) => val === qT[index])
    
    return isSame
    }
}
