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
        const l1Nums = []
        const l2Nums = []

        let cur = l1;
        while(cur) {
            l1Nums.push(cur.val)
            cur = cur.next;
        }

        cur = l2;
        while(cur) {
            l2Nums.push(cur.val)
            cur = cur.next;
        }

           const diff = l1Nums.length - l2Nums.length;

        if(diff > 0) {
            l2Nums.push(...Array.from({ length: diff }, () => 0))
        } else if (diff < 0) {
            l1Nums.push(...Array.from({ length: -diff }, () => 0))
        }

        // l1Nums.reverse();
        // l2Nums.reverse();

        const head = new ListNode(0);
        let tail = head;
        let counter = 0;

        l1Nums.forEach((num1, i) => {
            const num2 = l2Nums[i]    
            const sum = Number(num1) + Number(num2) + counter;
            
            if(sum > 9) {
                const [firstVal, secondVal] = String(sum)
                tail.next = new ListNode(Number(secondVal));
                tail = tail.next
                counter = Number(firstVal) 
            } else {
                 tail.next = new ListNode(sum);
                 tail = tail.next
                 counter  = 0
            }
        })

        if(counter) {
            tail.next = new ListNode(Number(counter));
            tail = tail.next
        }
        

        return head.next
        // cur = head.next;

        // let prev = null;

        // while(cur) {
        //     const next = cur.next;
        //     cur.next = prev;
        //     prev = cur;
        //     cur = next;
        // }
        
        // return prev;
    }
}
