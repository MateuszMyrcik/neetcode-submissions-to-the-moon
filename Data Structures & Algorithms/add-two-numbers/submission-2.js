/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const l1Nums = []
        const l2Nums = []

        let cur = l1;
        while(cur) {
            l1Nums.push(cur.val)
            cur = cur.next;
        }

        cur = l2;
        while(cur) {
            l2Nums.push(cur.val)
            cur = cur.next;
        }

        l1Nums.reverse();
        l2Nums.reverse();

        const sumOfTwoNumbers = String(Number(l1Nums.join('')) + Number(l2Nums.join(''))).split('').map(Number)
        
        const head = new ListNode(0);
        let tail = head;

        sumOfTwoNumbers.reverse().forEach(num => {
            tail.next = new ListNode(num);
            tail = tail.next;
        })

        

        


        

        return head.next;

    }
}
