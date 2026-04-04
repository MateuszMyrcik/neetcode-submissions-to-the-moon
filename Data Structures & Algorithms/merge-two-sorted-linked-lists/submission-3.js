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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
		const dummy = {val: 0, next: null}
		let node = dummy;


		while (list1 && list2) {
			if(list1.val < list2.val) {
				node.next = list1;
				list1 = list1.next
			} else {
				node.next = list2;
				list2 = list2.next
			}

			node = node.next
		}

		if(list1) {
			node.next = list1
		} else {
			node.next = list2
		}

		return dummy.next;
		


		// 	let temp = null;
			
		// 	const l1Number = l1?.val ?? -101;
		// 	const l2Number = l2?.val ?? -101;

		// 	if (l1?.val) {
		// 	// if (l2Number === -101 || (l2Number >= l1Number && l1Number !== -101)) {
		// 		temp = l1
		// 		l1 = l1.next;
		// 		temp.next = null
		// 	}

		// 	else if (l1Number === -101 || l1Number >= l2Number) {
		// 		temp = l2
		// 		l2 = l2.next;
		// 		temp.next = null
		// 	}


		// 	if (!ol) {
		// 		ol = temp;
		// 		continue;
		// 	}

		// 	let last = ol;

		// 	while (last.next !== null) {
		// 		last = last.next
		// 	}

		// 	last.next = temp
		// }

		// return ol
	}
}
