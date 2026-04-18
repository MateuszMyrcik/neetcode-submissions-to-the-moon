// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let copyHead = head;
        let newHead = new Node(0);
        let newTail = newHead;
        
        const map = new Map();
        const indexBasedMap = new Map()

        let order = 0;

        while(head) {
            map.set(head, order)
            head = head.next;
            order++;
        }
        
        order = 0;
        while(copyHead) {
            const { val, random } = copyHead        
            const randomIndex =  map.get(random)
            const node = new Node(val, null, randomIndex)
            newTail.next = node;
            newTail = newTail.next;
            copyHead = copyHead.next;
            
            indexBasedMap.set(order, node)
            order++;
        }

        newTail = newHead;
        
        while(newTail) {
            const randomIdex = newTail.random;
            newTail.random = indexBasedMap.get(randomIdex)
            newTail = newTail.next
        }

        return newHead.next;
    }
}
