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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        const map = new Map();

        while(headA) {
            map.set(headA, headA.val);
            headA = headA.next;
        }

        while(headB) {
            if(map.has(headB)) {
                return headB;
            }

            headB = headB.next
        }

        
        return null
    }
}
