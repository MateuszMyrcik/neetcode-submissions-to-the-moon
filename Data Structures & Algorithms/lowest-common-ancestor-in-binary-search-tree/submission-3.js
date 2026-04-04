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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */

    
    lowestCommonAncestor(root, p, q) {
        this.solution  = null;
        this.findLCA(root, p, q);
        return this.solution;
    }

    findLCA(root, p, q) {
        if(!root) return 0
        if(this.solution) return 0;

        const leftTotal = this.findLCA(root.left, p, q)
        const rightTotal = this.findLCA(root.right, p, q)
        const currentTotal = (p.val === root.val || q.val === root.val) ? 1 : 0;
        // console.log(root.val)

        const total = leftTotal + rightTotal + currentTotal;

        if(total === 2 && !this.solution) {
            this.solution = root;
        }

        return total;
    }

    // findLCA(root, p, q) {
    //     if(!root) return 0;
    //     if(this.solutionVal) return 0;

    //     const leftCount = this.findLCA(root.left, p, q);
    //     const rightCount = this.findLCA(root.right, p, q);
        
    //     const currentCount = (root.val === p.val || root.val === q.val) ? 1 : 0;

    //     const totalCount = leftCount + rightCount + currentCount;

    //     if(totalCount === 2 && !this.solution) {
    //         this.solution = root;
    //     }

    //     return totalCount
    // }  
}

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
  
//   constructor() {
//     this.solutionVal = null;
//   }
//     /**
//      * @param {TreeNode} root
//      * @param {TreeNode} p
//      * @param {TreeNode} q
//      * @return {TreeNode}
//      */
//     lowestCommonAncestor(root, p, q) {
//         this.solutionVal  = null;
//         this.findLCA(root, p, q);
//         return this.solutionVal;
//     }

//     findLCA(root, p, q) {
//         if(!root) return 0;
//         if(this.solutionVal) return 0;

//         const leftCount = this.findLCA(root.left, p, q);
//         const rightCount = this.findLCA(root.right, p, q);
        
//         const currentCount = (root.val === p.val || root.val === q.val) ? 1 : 0;

//         const totalCount = leftCount + rightCount + currentCount;

//         if(totalCount === 2 && !this.solutionVal) {
//             this.solution = root;
//         }

//         return totalCount
//     }  
// }


