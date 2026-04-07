
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        const items = []

        while(head) {
          if(head.val !== val) {
            items.push(head.val)
          }
          
          head = head.next;
        }

        if(!items.length) {
            return null
        }

        console.log(items)

        let newHead = new ListNode(-1)
        let newTail = newHead;
        
        items.forEach(val => {
            
            newTail.next = new ListNode(val);
            newTail = newTail.next;
        })

        console.log(newHead)

        newHead = newHead.next
        
        return newHead;
    }
}

