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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // console.log("isSubtree",root?.val, subRoot?.val)
        if(!root && subRoot) {
            return false;
        }
        if(root && !subRoot) {
            return true;
        }

        if(this.isSameTree(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
        
    }

    isSameTree(root, subRoot) {
        if(root && !subRoot) {
            return false
        }

        if(!root && subRoot) {
            return false;
        }

        
        
        if(!root && !subRoot) {
            return true
        }

        if(root.val !== subRoot.val) 
        {
            return false
        }

        return (
            this.isSameTree(root.left, subRoot.left) 
        && this.isSameTree(root.right, subRoot.right)
        ); 
    }
    // isSubtree(root, subRoot) {
    //     if(!root)
    //     let isNotSame = null;

      
    //     const dfs = (root) => {
    //         if(!root) {
    //             return;
    //         }
            


    //         if(root.val === subRoot.val) {
    //              isSameTree(root, subRoot);
    //         } else {
    //             dfs(root.left)
    //             dfs(root.right)  
    //         }

    //         if(isNotSame === null) {
    //             isNotSame = true;
    //         }

        
            
    //     }

    //     const isSameTree = (root, subRoot) => {
    //         console.log("isSameTree", root, subRoot)
    //         if(!root && !subRoot) {
    //             return;
    //         }
    //         if(root?.val !== subRoot?.val) {
    //             console.log("not equal")
    //             isNotSame = true;
    //             return false;
    //         }
    //         isSameTree(root.left, subRoot.left);
    //         isSameTree(root.right, subRoot.right);
    //         if(isNotSame === null) {
    //             isNotSame = false
    //         }
    //         return true
    //     }

        
    //       dfs(root)
          
    //       return !isNotSame

    // }
}
