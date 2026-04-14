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

        let cur = head;
        let prev = null;
    
        // Reverse the linked list
        while(cur) {            
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        let counter = 0;
        let prevTail = new ListNode(0);
        prevTail.next = prev;
            
        // Drop nth element
        while (prevTail) {
            if(counter + 1 === n) {
                
                    
                
                    prevTail.next = prevTail.next.next;                
                
            }
            prevTail = prevTail.next
            counter++;
            
        }



        let result = null
    
    
        while(prev) {
            const next = prev.next;
            prev.next = result
            result = prev
            prev = next

        }

        return result;
    }
}
