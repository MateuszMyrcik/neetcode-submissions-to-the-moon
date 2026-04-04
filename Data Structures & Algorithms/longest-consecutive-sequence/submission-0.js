class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         if(!nums.length) {
        return 0
    }
    const numSet = new Set();
    const numMap = new Map();

    nums.forEach(num => numSet.add(num))

    for (const num of numSet) {
        if (typeof num === 'number') {
            const prev = num - 1;
            const hasPrev = numSet.has(prev);

            if (!hasPrev) {
                numMap.set(num, 1)
            }
        }
    }

    for (const [num, counter] of numMap) {
        let n = num;


        while (numSet.has(n + 1)) {
            let newCounter = numMap.get(num) + 1
            numMap.set(num, newCounter)
            n++;
        }
    }

    return Math.max(...numMap.values())
    }
}
