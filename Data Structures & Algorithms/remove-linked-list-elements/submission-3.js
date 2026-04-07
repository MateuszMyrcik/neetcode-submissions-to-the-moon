
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let dummy = new ListNode(-1, head)
        head = dummy;
        while(dummy && dummy.next) {
            if(dummy.next.val === val) {
                dummy.next = dummy.next.next
            } else {

            dummy = dummy.next 
            }
            
        }
        
        return head.next;
    }
}

