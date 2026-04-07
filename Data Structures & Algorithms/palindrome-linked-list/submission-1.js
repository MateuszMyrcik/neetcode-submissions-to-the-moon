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
    isPalindrome(head) {
        const items = [];
        

        while(head?.val) {
            items.push(head.val)
            head = head.next
        }

        let left = 0;
        let right = items.length - 1;

        
        while(left < right) {
            if(items[left] !== items[right]) {
              return false;
            }
            
            left++;
            right--;
        }


        return true
    }
}
