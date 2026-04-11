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
     * @return {void}
     */
    reorderList(head) {
        let length = 0;
        let tail = head;

        while(tail) {
            tail = tail.next;
            length++;
        }

        let mid = Math.floor((length + 1) / 2);
        let midHead = head;
        let prevMid = null;

        
        while(mid) {
            prevMid = midHead;
            midHead = midHead.next;
            mid--;
        }

        if (prevMid) prevMid.next = null;

        let reversed = null;

        while(midHead) {
            const next = midHead.next;
            midHead.next = reversed;
            reversed = midHead
            midHead = next
        };

        let result = new ListNode(0);
        let resultTail = result;

        while(reversed) {
            const nextHead = head.next;
            head.next = null
            const nextReversed = reversed.next;
            reversed.next = null

            resultTail.next = head;
            resultTail.next.next = reversed;
            resultTail = resultTail.next.next;

            head = nextHead;
            reversed = nextReversed;
        }

        if (head) resultTail.next = head;

        return result.next
    }
}
