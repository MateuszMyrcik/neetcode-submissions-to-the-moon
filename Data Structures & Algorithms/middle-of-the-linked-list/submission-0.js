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
     * @return {ListNode}
     */
    middleNode(head) {
        let counter = 0;
        let tempHead = head

        while(head) {
            counter++;
            head = head.next;
        }

        let midNode = Math.floor(counter / 2);

        while(midNode) {
            midNode--;
            tempHead = tempHead.next;
        }

        

        return tempHead
    }
}
