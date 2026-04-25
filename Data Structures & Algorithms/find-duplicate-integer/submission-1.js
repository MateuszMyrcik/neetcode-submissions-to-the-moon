class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // 1. Naive solution with hash set
    // findDuplicate(nums) {
    //     const numApperance = new Set(); 

    //     return nums.find(num => {
    //         if(numApperance.has(num)) {
    //             return true;
    //         }

    //         numApperance.add(num);
    //         return false
    //     })
    // }

    // 2. Slow and fast pointer
    findDuplicate(nums) {
        let slow = 0;
        let fast = 1;
        for(slow; slow <= nums.length; slow++) {
            if(nums[slow] === nums[fast]) {
                return nums[slow];
            }

            fast = (fast + 2) % nums.length;
        }

    }
}
