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
     * @return {boolean}
     */
    hasCycle(head) {
        let dummy = head;
        while(dummy) {
            if(dummy.val === 2000){
                return true;
            }
            dummy.val = 2000;
            dummy = dummy.next;

        }

        return false
    }
}
