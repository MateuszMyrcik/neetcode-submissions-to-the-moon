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
        let prev1 = null;
        let prev2= null;
        let cur = l1;
        while(cur) {
            const next = cur.next;
            cur.next = prev1;
            prev1 = cur;
            cur = next;
        }

        cur = l2

        while(cur) {
            const next = cur.next;
            cur.next = prev2;
            prev2 = cur;
            cur = next;
        }

        let head = new ListNode(0);
        let tail = head;

        

        while(prev1 && prev2) {
            const combinedVal = prev1.val + prev2.val;
            if(combinedVal > 9) {
                const [x, y] = String(combinedVal);
                tail.next = new ListNode(Number(x));
                tail = tail.next;
                tail.next = new ListNode(Number(y))
                tail = tail.next;
            } else {
                tail.next = new ListNode(combinedVal)
                tail = tail.next;
            }
            prev1 = prev1.next;
            prev2 = prev2.next;
        }

        let prev3 = null;
        cur = head.next;

        while(cur) {
            const next = cur.next;
            cur.next = prev3;
            prev3 = cur;
            cur = next;
        }

        console.log(prev3)

        return prev3

        // reverse l1,l2
        // combined iteration
        //  x < 10 create one node
        //  x > 10 create two nodes
        // return combinedResult

    }
}
