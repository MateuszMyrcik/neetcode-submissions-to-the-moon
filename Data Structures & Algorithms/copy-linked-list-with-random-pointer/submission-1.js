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

        const oldToCopy = new Map();
        oldToCopy.set(null, null);

        let old = head;
        while(old) {
            const copy = new Node(old.val)
            oldToCopy.set(old, copy);
            old  = old.next;
        }

        old = head;

        while(old) {
           const copy = oldToCopy.get(old);
           copy.next = oldToCopy.get(old.next);
           copy.random = oldToCopy.get(old.random) 
           old = old.next
        }

        return oldToCopy.get(head)
    }
}
