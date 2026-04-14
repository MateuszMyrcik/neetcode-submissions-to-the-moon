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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(!head.next) {
            return null
        }

        let counter = 0;
        let cur = head;
        while(cur) {
            counter++;
            cur = cur.next
        }

        let result = head;
        let elToDrop = counter - n;
        while(elToDrop) {
            if(elToDrop === 1) {
                result.next = result.next.next
            }
            elToDrop--;
            result = result.next
        }

        return head
    }
}
