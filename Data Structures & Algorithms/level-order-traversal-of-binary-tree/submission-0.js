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
     * @return {number[][]}
     */
    levelOrder(root) {
          if (!root) {
        return [];
    }

    const result = [[]]

    const que = new QueueNode();
    que.enqueue(root);
    let curLvls = 1;
    let nextLvls = 0;


    while (!que.isEmpty()) {
        if(curLvls === 0) {
            curLvls = nextLvls;
            nextLvls = 0;
            result.push([])
        }

        const cur = que.peek();
        if (cur.left) {
            que.enqueue(cur.left)
            nextLvls++;
        }
        if (cur.right) {
            que.enqueue(cur.right)
            nextLvls++;
        }

        curLvls--;
        result[result.length - 1].push(cur.val)
        que.dequeue()
    }



    return result;
    }
}

class QueueNode {
    
    
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(val) {
        if (this.head === null || this.tail === null) {
            this.head = {
                val,
                next: null,
            };

            this.tail = this.head;
            return;
        }

        this.tail.next = {
            next: null,
            val,
        };

        this.tail = this.tail.next;
    }

    dequeue() {
        if (this.head) {
            this.head = this.head.next;

            if (this.isEmpty()) {
                this.tail = null;
            }
        }
    }

    peek() {
        return this.head?.val;
    }

    isEmpty() {
        return !this.head;
    }
}
